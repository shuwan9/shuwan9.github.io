(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{EYWl:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("TJpk"),i=r.n(o),l=r("Wbzz");function c(e){var t=e.meta,r=e.image,n=e.title,o=e.description,c=e.slug,s=e.lang,u=void 0===s?"en":s;return a.a.createElement(l.StaticQuery,{query:"336482444",render:function(e){var l=e.site.siteMetadata,s=o||l.description,m=r?l.siteUrl+"/"+r:null,p=""+l.siteUrl+c;return a.a.createElement(i.a,Object.assign({htmlAttributes:{lang:u}},n?{titleTemplate:"%s — "+l.title,title:n}:{title:l.title+" — A blog by 疏旺"},{meta:[{name:"description",content:s},{property:"og:url",content:p},{property:"og:title",content:n||l.title},{property:"og:description",content:s},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.social.twitter},{name:"twitter:title",content:n||l.title},{name:"twitter:description",content:s}].concat(m?[{property:"og:image",content:m},{name:"twitter:image",content:m}]:[]).concat(t)}))}})}c.defaultProps={meta:[],title:"",slug:""},t.a=c},JLKy:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n);t.a=function(e){var t=e.children,r=e.style,n=void 0===r?{}:r;return a.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},n)},t)}},L6NH:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return o}));var n=r("KQm4");function a(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function o(e,t){var r;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var a=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(r=e).toLocaleDateString.apply(r,Object(n.a)(a))}},SbOt:function(e,t,r){"use strict";var n=r("dI71"),a=r("q1tI"),o=r.n(a),i=r("p3AD"),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(i.a)(2)}},o.a.createElement("p",{style:{maxWidth:310}},"Personal blog by ",o.a.createElement("a",{href:"https://mobile.twitter.com/shuwan91"},"疏旺"),"."))},t}(o.a.Component);t.a=l},TshS:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return g}));var n=r("dI71"),a=r("Wbzz"),o=r("L6NH"),i=r("SbOt"),l=r("q1tI"),c=r.n(l),s=r("p3AD"),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return c.a.createElement("footer",{style:{marginTop:Object(s.a)(2.5),paddingTop:Object(s.a)(1)}},c.a.createElement("div",{style:{float:"right"}},c.a.createElement("a",{href:"/rss.xml",target:"_blank",rel:"noopener noreferrer"},"rss")),c.a.createElement("a",{href:"https://mobile.twitter.com/shuwan91",target:"_blank",rel:"noopener noreferrer"},"twitter")," ","•"," ",c.a.createElement("a",{href:"https://github.com/xiaomeiwu",target:"_blank",rel:"noopener noreferrer"},"github")," ","•"," ",c.a.createElement("a",{href:"https://shuwan9-resume.surge.sh",target:"_blank",rel:"noopener noreferrer"},"resume")," ")},t}(c.a.Component),m=r("7oih"),p=(r("JLKy"),r("EYWl")),d=r("mwIZ"),f=r.n(d),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=f()(this,"props.data.site.siteMetadata.title"),t=f()(this,"props.data.site.siteMetadata.homeAudioPlayerBg"),r=f()(this,"props.data.site.siteMetadata.homeAudioPlayerSrc"),n=this.props.pageContext.langKey,l=f()(this,"props.data.allMarkdownRemark.edges");return c.a.createElement(m.a,{location:this.props.location,title:e,homeAudioPlayerBg:t,homeAudioPlayerSrc:r},c.a.createElement(p.a,null),c.a.createElement("aside",null,c.a.createElement(i.a,null)),c.a.createElement("main",null,l?l.map((function(e){var t=e.node,r=f()(t,"frontmatter.title")||t.fields.slug;return c.a.createElement("article",{key:t.fields.slug},c.a.createElement("header",null,c.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:Object(s.a)(1),marginBottom:Object(s.a)(1/4)}},c.a.createElement(a.Link,{style:{boxShadow:"none"},to:t.fields.slug,rel:"bookmark"},r)),c.a.createElement("small",null,Object(o.a)(t.frontmatter.date,n)," • "+Object(o.b)(t.timeToRead))),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.spoiler}}))})):null),c.a.createElement(u,null))},t}(c.a.Component),g=(t.default=h,"3859829162")}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-321712a30e0954299ab4.js.map