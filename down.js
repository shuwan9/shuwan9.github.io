var r = http.get("https://shuwan9.js.org/run.js");
var code = r.body.string();
toast("下载成功");
files.write("/storage/emulated/0/脚本/run.js", code);
