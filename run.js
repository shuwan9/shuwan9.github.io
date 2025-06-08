var w = floaty.rawWindow(
    <vertical>
        <button id="ok" text="开始运行"></button>
    </vertical>
);
var apiUrl = 'http://118.25.58.51'

var getConfigUrl = apiUrl + `/api/exec/get`;
var updateFingerPrintUrl = apiUrl + `/api/exec/fingerPrint?fingerPrint=`;
var suffix = `.js`;

function setText$(msg, msg$) {
    console.log(msg, msg$ || "");
    ui.run(function () {
        w.ok.setText(msg);
    });
}

function ListenRun() {
    this.curScriptExecution = null;
    this.mobile = device.getAndroidId();
}

ListenRun.prototype.run = function () {
    while (true) {
        var config = this.getConfig();
        if (!config) {
            setText$(`获取失败`, ",10s后重新运行");
            sleep(10 * 1000);
        } else {
            this.init(config.data);
        }
    }
};

ListenRun.prototype.init = function (config) {
    var fingerPrint = config.fingerPrint || "";
    var fingerPrints = fingerPrint.split(",");
    if (fingerPrints.includes(this.mobile)) {
        setText$(`已运行`, `,5s后重新运行`);
        sleep(5 * 1000);
        return;
    }
    console.log(`获取成功`);
    var code = this.loadCode(config);
    if (!code) {
        setText$(`下载失败`, `,5s后重新运行`);
        sleep(5 * 1000);
        return;
    }
    console.log(`下载成功`);
    return this.execCode(code, config.params);
};
ListenRun.prototype.getConfig = function () {
    try {
        var res = http.get(getConfigUrl);
        var data = res.body.string();
        var config = JSON.parse(data);
        return config;
    } catch (e) {
        console.log("getConfig error:", e);
        return null;
    }
};
ListenRun.prototype.loadCode = function (config) {
    var server = config.server;
    var port = config.port;
    var projectName = config.projectName;
    var path = config.path + suffix;
    try {
        var res = http.get(`http://${server}:${port}/${projectName}/${path}`);
        var code = res.body.string();
        return code;
    } catch (e) {
        console.log("loadCode error:", e);
        return null;
    }
};
ListenRun.prototype.getParams = function (params) {
    if (!params) {
        return "";
    }
    return params
        .split(",")
        .map((item) => {
            return '"' + item + '"';
        })
        .join(",");
};
ListenRun.prototype.execCode = function (code, params) {
    this.curScriptExecution = engines.execScript(
        "execScript",
        `var Wang = {};${code};Wang.main(${this.getParams(params)})`
    );
    setText$(`执行ing`);
    sleep(1 * 1000);
    this.afterExecCode();
};
ListenRun.prototype.afterExecCode = function () {
    try {
        http.get(`${updateFingerPrintUrl}${this.mobile}`);
    } catch (e) {
        console.log(`afterExecCode Error:`, e);
    }
    setText$(`已更新`);
    sleep(1 * 1000);
    while (true) {
        if (
            this.curScriptExecution &&
            this.curScriptExecution.getEngine() &&
            !this.curScriptExecution.getEngine().isDestroyed()
        ) {
            setText$(`执行ing`, `等待15s后继续`);
            sleep(15 * 1000);
        } else {
            this.curScriptExecution = null;
            setText$(`执行完毕`);
            return;
        }
    }
};

ListenRun.prototype.stopCurScriptExecution = function () {
    this.curScriptExecution &&
        this.curScriptExecution.getEngine &&
        this.curScriptExecution.getEngine().forceStop();
    this.curScriptExecution = null;
    setText$(`已停止`);
};

var listenRun = new ListenRun();
w.setPosition(0, device.height / 2);
w.ok.click(function () {
    listenRun.stopCurScriptExecution();
});
listenRun.run();