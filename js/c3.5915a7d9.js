(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["c3"],{1276:function(t,e,n){"use strict";var r=n("d784"),a=n("44e7"),i=n("825a"),s=n("1d80"),u=n("4840"),o=n("8aa5"),c=n("50c4"),l=n("14c3"),h=n("9263"),p=n("d039"),f=[].push,d=Math.min,x=4294967295,v=!p((function(){return!RegExp(x,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(s(this)),i=void 0===n?x:n>>>0;if(0===i)return[];if(void 0===t)return[r];if(!a(t))return e.call(r,t,i);var u,o,c,l=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,v=new RegExp(t.source,p+"g");while(u=h.call(v,r)){if(o=v.lastIndex,o>d&&(l.push(r.slice(d,u.index)),u.length>1&&u.index<r.length&&f.apply(l,u.slice(1)),c=u[0].length,d=o,l.length>=i))break;v.lastIndex===u.index&&v.lastIndex++}return d===r.length?!c&&v.test("")||l.push(""):l.push(r.slice(d)),l.length>i?l.slice(0,i):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var a=s(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,a,n):r.call(String(a),e,n)},function(t,a){var s=n(r,t,this,a,r!==e);if(s.done)return s.value;var h=i(t),p=String(this),f=u(h,RegExp),g=h.unicode,m=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(v?"y":"g"),b=new f(v?h:"^(?:"+h.source+")",m),y=void 0===a?x:a>>>0;if(0===y)return[];if(0===p.length)return null===l(b,p)?[p]:[];var _=0,C=0,E=[];while(C<p.length){b.lastIndex=v?C:0;var T,w=l(b,v?p:p.slice(C));if(null===w||(T=d(c(b.lastIndex+(v?0:C)),p.length))===_)C=o(p,C,g);else{if(E.push(p.slice(_,C)),E.length===y)return E;for(var I=1;I<=w.length-1;I++)if(E.push(w[I]),E.length===y)return E;C=_=T}}return E.push(p.slice(_)),E}]}),!v)},"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"44e7":function(t,e,n){var r=n("861d"),a=n("c6b6"),i=n("b622"),s=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==a(t))}},"498a":function(t,e,n){"use strict";var r=n("23e7"),a=n("58a8").trim,i=n("c8d2");r({target:"String",proto:!0,forced:i("trim")},{trim:function(){return a(this)}})},"4fe3":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"text-2xl font-semibold text-center md:text-left"},[t._v("Chương 3")]),n("p",{staticClass:"text-gray-700 text-center md:text-left"},[t._v("Bài toán vận tải")]),n("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6"},[n("div",{staticClass:"bg-white shadow-md p-5"},[n("div",{staticClass:"flex mb-4"},[n("label",{staticClass:"text-gray-700 font-bold my-auto mr-2",attrs:{for:"phat"}},[t._v(" Phát: ")]),n("div",{staticClass:"flex-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.phat,expression:"input.phat"}],staticClass:"appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow",attrs:{id:"phat",type:"text",placeholder:"Thu ...",title:"Tập thu"},domProps:{value:t.input.phat},on:{input:function(e){e.target.composing||t.$set(t.input,"phat",e.target.value)}}})])]),n("div",{staticClass:"flex mb-4"},[n("label",{staticClass:"text-gray-700 font-bold my-auto mr-3",attrs:{for:"thu"}},[t._v(" Thu: ")]),n("div",{staticClass:"flex-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.thu,expression:"input.thu"}],staticClass:"appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow",attrs:{id:"thu",type:"text",placeholder:"Phát ...",title:"Tập phát"},domProps:{value:t.input.thu},on:{input:function(e){e.target.composing||t.$set(t.input,"thu",e.target.value)}}})])]),n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block text-gray-700 font-bold mb-2",attrs:{for:"matrix"}},[t._v(" Ma trận chi phí: ")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.input.matrix,expression:"input.matrix"}],staticClass:"block appearance-none border border-gray-400 rounded w-full text-gray-700 py-2 px-3 focus:outline-none focus:border-blue-500 focus:shadow",attrs:{id:"matrix",placeholder:"Ma trận ...",title:"Ma trận",rows:"4"},domProps:{value:t.input.matrix},on:{input:function(e){e.target.composing||t.$set(t.input,"matrix",e.target.value)}}})]),n("div",{staticClass:"text-center md:text-left"},[n("button",{staticClass:"bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:shadow-outline rounded px-5 py-2 mr-2",attrs:{id:"btnTb"},on:{click:t.tayBac}},[t._v(" Tây bắc ")]),n("button",{staticClass:"bg-green-500 text-white hover:bg-blue-700 focus:outline-none focus:shadow-outline rounded px-5 py-2 mr-2",attrs:{id:"btnCt"},on:{click:t.cucTieu}},[t._v(" Cực tiểu ")]),n("button",{staticClass:"bg-gray-500 text-white hover:bg-gray-600 focus:outline-none rounded px-4 py-2",attrs:{id:"btnDel"},on:{click:t.reset}},[t._v(" Xóa ")])])]),t.hasSubmit?n("div",{staticClass:"bg-white lg:col-span-2 shadow-md p-5"},[t.output?[n("h1",{staticClass:"text-lg font-semibold mb-4"},[t._v("Bài toán có lời giải")]),n("div",{staticClass:"overflow-auto"},[n("table",{staticClass:"table-auto text-center w-full"},[n("tbody",[n("tr",[t._m(0),t._l(t.output.thu,(function(e,r){return[n("td",{key:"tr_thu_"+r,staticClass:"border px-4 py-2"},[t._v(t._s(e))])]}))],2),t._l(t.output.phat,(function(e,r){return[n("tr",{key:"tr_phat_"+r},[n("td",{staticClass:"border px-4 py-2"},[t._v(t._s(e))]),t._l(t.output.cp[r],(function(a,i){return[n("td",{key:"td_"+e+"_"+i,staticClass:"border"},[n("table",{staticClass:"table-fixed w-full"},[n("tbody",[n("tr",[n("td",{staticClass:"w-50"},[t._v(t._s(a))]),n("td",{staticClass:"w-50"})]),n("tr",[n("td",{staticClass:"w-50"}),n("td",{staticClass:"border-t border-l w-50"},[t._v(t._s(t.output.pp[r][i]))])])])])])]}))],2)]}))],2)])])]:[n("h1",{staticClass:"text-lg font-semibold mb-4"},[t._v("Bài toán không có lời giải")])]],2):t._e()]),n("div",{staticClass:"text-center md:text-left"},[n("router-link",{staticClass:"align-baseline font-bold text-sm text-gray-500 hover:text-gray-700 mr-5",attrs:{to:{name:"c2"}}},[t._v(" ← Chương trước ")]),n("router-link",{staticClass:"align-baseline font-bold text-sm text-blue-500 hover:text-blue-700",attrs:{to:{name:"home"}}},[t._v(" Trang chủ → ")])],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"border p-1"},[n("table",{staticClass:"w-full",staticStyle:{background:"linear-gradient(to top right,white 49%,#e2e8f0,white 51%)"}},[n("tbody",[n("tr",[n("td"),n("td",[t._v("Thu")])]),n("tr",[n("td",[t._v("Phát")]),n("td")])])])])}],i=(n("498a"),n("a9e3"),n("aff5"),n("ac1f"),n("1276"),n("d4ec")),s=function t(){Object(i["a"])(this,t),this.nPhat=0,this.mThu=0,this.thu=[],this.phat=[],this.cp=[],this.xx=[],this.yy=[],this.pp=[],this.kt=[],this.sumThu=0,this.sumPhat=0},u=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(i["a"])(this,t),this.x=e,this.y=n};function o(t,e,n){var r=new s,a=t.trim(),i=a.split(" "),u=e.trim(),o=u.split(" ");r.nPhat=i.length,r.mThu=o.length;for(var c=0;c<r.nPhat;c++)r.phat.push(parseInt(i[c])),r.sumPhat+=parseInt(i[c]);for(var l=0;l<r.mThu;l++)r.thu.push(parseInt(o[l])),r.sumThu+=parseInt(o[l]);for(var h=-999999999,p=n.trim(),f=p.split("\n"),d=0;d<f.length;d++){var x=f[d].trim().split(" ");r.cp[d]=[];for(var v=0;v<x.length;v++)r.cp[d][v]=parseInt(x[v]),h=Math.max(h,r.cp[d][v])}if(r.sumThu>r.sumPhat){r.phat.push(r.sumThu-r.sumPhat),r.cp[r.nPhat]=[];for(var g=0;g<r.mThu;g++)r.cp[r.nPhat][g]=h+1;r.nPhat+=1}else if(r.sumPhat>r.sumThu){r.thu.push(r.sumPhat-r.sumThu);for(var m=0;m<r.nPhat;m++)r.cp[m][origin.mThu]=h+1;r.mThu+=1}for(var b=0;b<r.nPhat;b++)r.xx[b]=r.phat[b];for(var y=0;y<r.mThu;y++)r.yy[y]=r.thu[y];for(var _=0;_<r.nPhat;_++){r.pp[_]=[];for(var C=0;C<r.mThu;C++)r.pp[_][C]=0}for(var E=0;E<r.nPhat;E++){r.kt[E]=[];for(var T=0;T<r.mThu;T++)r.kt[E][T]=1}return r}function c(t,e,n){return t.xx[e]>t.yy[n]?(t.pp[e][n]=t.yy[n],t.xx[e]-=t.yy[n],t.yy[n]=0,n+1<t.mThu&&c(t,e,n+1)):(t.pp[e][n]=t.xx[e],t.yy[n]-=t.xx[e],t.xx[e]=0,e+1<t.nPhat&&c(t,e+1,n)),t}function l(t){for(var e=Number.MAX_SAFE_INTEGER,n=new u(-1,-1),r=0;r<t.nPhat;r++)for(var a=0;a<t.mThu;a++)1===t.kt[r][a]&&t.cp[r][a]<e&&(e=t.cp[r][a],n.x=r,n.y=a);return n}function h(t,e){var n=e.x,r=e.y;if(t.xx[n]>t.yy[r]){t.pp[n][r]=t.yy[r],t.xx[n]-=t.yy[r],t.yy[r]=0;for(var a=0;a<t.nPhat;a++)t.kt[a][r]=0}else{t.pp[n][r]=t.xx[n],t.yy[r]-=t.xx[n],t.xx[n]=0;for(var i=0;i<t.mThu;i++)t.kt[n][i]=0}if(e=l(t),-1!==e.x||-1!==e.y)return h(t,e),t}function p(t){if(t.sumThu>t.sumPhat)for(var e=0;e<t.mThu;e++)t.cp[t.nPhat-1][e]=0;else if(t.sumThu<t.sumPhat)for(var n=0;n<t.nPhat;n++)t.cp[n][t.mThu-1]=0;return t}var f={tayBac:function(t,e,n){var r=o(t,e,n);return r=c(r,0,0),r=p(r),r},cucTieu:function(t,e,n){var r=o(t,e,n);return r=h(r,l(r)),r=p(r),r}},d={name:"C3Index",data:function(){return{input:{phat:"",thu:"",matrix:""},hasSubmit:!1,isHidden:!0,output:null}},methods:{tayBac:function(){this.validate()?(this.hasSubmit=!0,this.output=f.tayBac(this.input.phat,this.input.thu,this.input.matrix)):this.$toasted.show("Không đủ dữ kiện đầu vào!")},cucTieu:function(){this.validate()?(this.hasSubmit=!0,this.output=f.cucTieu(this.input.phat,this.input.thu,this.input.matrix)):this.$toasted.show("Không đủ dữ kiện đầu vào!")},validate:function(){return""!==this.input.phat.trim()&&""!==this.input.thu.trim()&&""!==this.input.matrix.trim()},reset:function(){this.input.phat=this.input.thu=this.input.matrix=""}}},x=d,v=n("2877"),g=Object(v["a"])(x,r,a,!1,null,null,null);e["default"]=g.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("5899"),i="["+a+"]",s=RegExp("^"+i+i+"*"),u=RegExp(i+i+"*$"),o=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(u,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},6547:function(t,e,n){var r=n("a691"),a=n("1d80"),i=function(t){return function(e,n){var i,s,u=String(a(e)),o=r(n),c=u.length;return o<0||o>=c?t?"":void 0:(i=u.charCodeAt(o),i<55296||i>56319||o+1===c||(s=u.charCodeAt(o+1))<56320||s>57343?t?u.charAt(o):i:t?u.slice(o,o+2):s-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},7156:function(t,e,n){var r=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var i,s;return a&&"function"==typeof(i=e.constructor)&&i!==n&&r(s=i.prototype)&&s!==n.prototype&&a(t,s),t}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),i=RegExp.prototype.exec,s=String.prototype.replace,u=i,o=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=a.UNSUPPORTED_Y||a.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],h=o||l||c;h&&(u=function(t){var e,n,a,u,h=this,p=c&&h.sticky,f=r.call(h),d=h.source,x=0,v=t;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),v=String(t).slice(h.lastIndex),h.lastIndex>0&&(!h.multiline||h.multiline&&"\n"!==t[h.lastIndex-1])&&(d="(?: "+d+")",v=" "+v,x++),n=new RegExp("^(?:"+d+")",f)),l&&(n=new RegExp("^"+d+"$(?!\\s)",f)),o&&(e=h.lastIndex),a=i.call(p?n:h,v),p?a?(a.input=a.input.slice(x),a[0]=a[0].slice(x),a.index=h.lastIndex,h.lastIndex+=a[0].length):h.lastIndex=0:o&&a&&(h.lastIndex=h.global?a.index+a[0].length:e),l&&a&&a.length>1&&s.call(a[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(a[u]=void 0)})),a}),t.exports=u},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a9e3:function(t,e,n){"use strict";var r=n("83ab"),a=n("da84"),i=n("94ca"),s=n("6eeb"),u=n("5135"),o=n("c6b6"),c=n("7156"),l=n("c04e"),h=n("d039"),p=n("7c73"),f=n("241c").f,d=n("06cf").f,x=n("9bf2").f,v=n("58a8").trim,g="Number",m=a[g],b=m.prototype,y=o(p(b))==g,_=function(t){var e,n,r,a,i,s,u,o,c=l(t,!1);if("string"==typeof c&&c.length>2)if(c=v(c),e=c.charCodeAt(0),43===e||45===e){if(n=c.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+c}for(i=c.slice(2),s=i.length,u=0;u<s;u++)if(o=i.charCodeAt(u),o<48||o>a)return NaN;return parseInt(i,r)}return+c};if(i(g,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var C,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(y?h((function(){b.valueOf.call(n)})):o(n)!=g)?c(new m(_(e)),n,E):_(e)},T=r?f(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;T.length>w;w++)u(m,C=T[w])&&!u(E,C)&&x(E,C,d(m,C));E.prototype=b,b.constructor=E,s(a,g,E)}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},aff5:function(t,e,n){var r=n("23e7");r({target:"Number",stat:!0},{MAX_SAFE_INTEGER:9007199254740991})},c8d2:function(t,e,n){var r=n("d039"),a=n("5899"),i="​᠎";t.exports=function(t){return r((function(){return!!a[t]()||i[t]()!=i||a[t].name!==t}))}},d4ec:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),i=n("b622"),s=n("9263"),u=n("9112"),o=i("species"),c=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),h=i("replace"),p=function(){return!!/./[h]&&""===/./[h]("a","$0")}(),f=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,h){var d=i(t),x=!a((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),v=x&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!x||!v||"replace"===t&&(!c||!l||p)||"split"===t&&!f){var g=/./[d],m=n(d,""[t],(function(t,e,n,r,a){return e.exec===s?x&&!a?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=m[0],y=m[1];r(String.prototype,t,b),r(RegExp.prototype,d,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}h&&u(RegExp.prototype[d],"sham",!0)}}}]);