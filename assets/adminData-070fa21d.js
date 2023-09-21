import{B as BaseTransition,l as Comment,E as EffectScope,F as Fragment,K as KeepAlive,R as ReactiveEffect,S as Static,n as Suspense,T as Teleport,p as Text,q as Transition,s as TransitionGroup,V as VueElement,v as assertNumber,x as callWithAsyncErrorHandling,y as callWithErrorHandling,z as camelize,D as capitalize,G as cloneVNode,H as compatUtils,I as computed,J as createApp,g as createBlock,h as createCommentVNode,d as createElementBlock,e as createBaseVNode,L as createHydrationRenderer,M as createPropsRestProxy,N as createRenderer,O as createSSRApp,P as createSlots,Q as createStaticVNode,j as createTextVNode,c as createVNode,U as customRef,W as defineAsyncComponent,X as defineComponent,Y as defineCustomElement,Z as defineEmits,$ as defineExpose,a0 as defineProps,a1 as defineSSRCustomElement,a2 as devtools,a3 as effect,a4 as effectScope,a5 as getCurrentInstance,a6 as getCurrentScope,a7 as getTransitionRawChildren,a8 as guardReactiveProps,a9 as h,aa as handleError,ab as hydrate,ac as initCustomFormatter,ad as initDirectivesForSSR,i as inject,ae as isMemoSame,af as isProxy,ag as isReactive,ah as isReadonly,ai as isRef,aj as isRuntimeOnly,ak as isShallow,al as isVNode,am as markRaw,an as mergeDefaults,ao as mergeProps,ap as nextTick,aq as normalizeClass,ar as normalizeProps,as as normalizeStyle,at as onActivated,au as onBeforeMount,av as onBeforeUnmount,aw as onBeforeUpdate,ax as onDeactivated,ay as onErrorCaptured,o as onMounted,az as onRenderTracked,aA as onRenderTriggered,aB as onScopeDispose,aC as onServerPrefetch,aD as onUnmounted,aE as onUpdated,b as openBlock,aF as popScopeId,aG as provide,aH as proxyRefs,aI as pushScopeId,aJ as queuePostFlushCb,aK as reactive,aL as readonly,r as ref,aM as registerRuntimeCompiler,aN as render,aO as renderList,aP as renderSlot,a as resolveComponent,aQ as resolveDirective,aR as resolveDynamicComponent,aS as resolveFilter,aT as resolveTransitionHooks,aU as setBlockTracking,aV as setDevtoolsHook,aW as setTransitionHooks,aX as shallowReactive,aY as shallowReadonly,aZ as shallowRef,a_ as ssrContextKey,a$ as ssrUtils,b0 as stop,t as toDisplayString,b1 as toHandlerKey,b2 as toHandlers,b3 as toRaw,b4 as toRef,b5 as toRefs,b6 as transformVNodeArgs,b7 as triggerRef,f as unref,b8 as useAttrs,b9 as useCssModule,ba as useCssVars,bb as useSSRContext,bc as useSlots,bd as useTransitionState,be as vModelCheckbox,bf as vModelDynamic,bg as vModelRadio,bh as vModelSelect,bi as vModelText,bj as vShow,bk as version,bl as warn,bm as watch,bn as watchEffect,bo as watchPostEffect,bp as watchSyncEffect,bq as withAsyncContext,w as withCtx,br as withDefaults,bs as withDirectives,bt as withKeys,bu as withMemo,bv as withModifiers,bw as withScopeId,bx as getAugmentedNamespace}from"./index-1f0bf087.js";import{S as ShowImg}from"./ShowImg-19be15b3.js";import{f as getAdminNav,e as getUserImgList,h as getMdData}from"./http-8693272f.js";const compile=()=>{},vue_runtime_esmBundler=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition,Comment,EffectScope,Fragment,KeepAlive,ReactiveEffect,Static,Suspense,Teleport,Text,Transition,TransitionGroup,VueElement,assertNumber,callWithAsyncErrorHandling,callWithErrorHandling,camelize,capitalize,cloneVNode,compatUtils,compile,computed,createApp,createBlock,createCommentVNode,createElementBlock,createElementVNode:createBaseVNode,createHydrationRenderer,createPropsRestProxy,createRenderer,createSSRApp,createSlots,createStaticVNode,createTextVNode,createVNode,customRef,defineAsyncComponent,defineComponent,defineCustomElement,defineEmits,defineExpose,defineProps,defineSSRCustomElement,get devtools(){return devtools},effect,effectScope,getCurrentInstance,getCurrentScope,getTransitionRawChildren,guardReactiveProps,h,handleError,hydrate,initCustomFormatter,initDirectivesForSSR,inject,isMemoSame,isProxy,isReactive,isReadonly,isRef,isRuntimeOnly,isShallow,isVNode,markRaw,mergeDefaults,mergeProps,nextTick,normalizeClass,normalizeProps,normalizeStyle,onActivated,onBeforeMount,onBeforeUnmount,onBeforeUpdate,onDeactivated,onErrorCaptured,onMounted,onRenderTracked,onRenderTriggered,onScopeDispose,onServerPrefetch,onUnmounted,onUpdated,openBlock,popScopeId,provide,proxyRefs,pushScopeId,queuePostFlushCb,reactive,readonly,ref,registerRuntimeCompiler,render,renderList,renderSlot,resolveComponent,resolveDirective,resolveDynamicComponent,resolveFilter,resolveTransitionHooks,setBlockTracking,setDevtoolsHook,setTransitionHooks,shallowReactive,shallowReadonly,shallowRef,ssrContextKey,ssrUtils,stop,toDisplayString,toHandlerKey,toHandlers,toRaw,toRef,toRefs,transformVNodeArgs,triggerRef,unref,useAttrs,useCssModule,useCssVars,useSSRContext,useSlots,useTransitionState,vModelCheckbox,vModelDynamic,vModelRadio,vModelSelect,vModelText,vShow,version,warn,watch,watchEffect,watchPostEffect,watchSyncEffect,withAsyncContext,withCtx,withDefaults,withDirectives,withKeys,withMemo,withModifiers,withScopeId},Symbol.toStringTag,{value:"Module"}));var mavonEditorExports={},mavonEditor={get exports(){return mavonEditorExports},set exports(d){mavonEditorExports=d}};const require$$0=getAugmentedNamespace(vue_runtime_esmBundler);(function(module,exports){(function(d,_){module.exports=_(require$$0)})(window,function(__WEBPACK_EXTERNAL_MODULE__0__){return function(d){var _={};function i(e){if(_[e])return _[e].exports;var t=_[e]={i:e,l:!1,exports:{}};return d[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=d,i.c=_,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t||4&t&&typeof e=="object"&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&typeof e!="string")for(var n in e)i.d(r,n,function(l){return e[l]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=79)}([function(d,_){d.exports=__WEBPACK_EXTERNAL_MODULE__0__},function(d,_,i){var e=Object.prototype.hasOwnProperty;function t(b,y){return e.call(b,y)}function r(b){return!(b>=55296&&b<=57343)&&!(b>=64976&&b<=65007)&&(65535&b)!=65535&&(65535&b)!=65534&&!(b>=0&&b<=8)&&b!==11&&!(b>=14&&b<=31)&&!(b>=127&&b<=159)&&!(b>1114111)}function n(b){if(b>65535){var y=55296+((b-=65536)>>10),k=56320+(1023&b);return String.fromCharCode(y,k)}return String.fromCharCode(b)}var l=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,s=new RegExp(l.source+"|"+/&([a-z#][a-z0-9]{1,31});/gi.source,"gi"),a=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,c=i(62),o=/[&<>"]/,u=/[&<>"]/g,f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function p(b){return f[b]}var m=/[.?*+^$[\]\\(){}|-]/g,g=i(40);_.lib={},_.lib.mdurl=i(63),_.lib.ucmicro=i(145),_.assign=function(b){var y=Array.prototype.slice.call(arguments,1);return y.forEach(function(k){if(k){if(typeof k!="object")throw new TypeError(k+"must be object");Object.keys(k).forEach(function(w){b[w]=k[w]})}}),b},_.isString=function(b){return function(y){return Object.prototype.toString.call(y)}(b)==="[object String]"},_.has=t,_.unescapeMd=function(b){return b.indexOf("\\")<0?b:b.replace(l,"$1")},_.unescapeAll=function(b){return b.indexOf("\\")<0&&b.indexOf("&")<0?b:b.replace(s,function(y,k,w){return k||function(v,x){var T=0;return t(c,x)?c[x]:x.charCodeAt(0)===35&&a.test(x)&&r(T=x[1].toLowerCase()==="x"?parseInt(x.slice(2),16):parseInt(x.slice(1),10))?n(T):v}(y,w)})},_.isValidEntityCode=r,_.fromCodePoint=n,_.escapeHtml=function(b){return o.test(b)?b.replace(u,p):b},_.arrayReplaceAt=function(b,y,k){return[].concat(b.slice(0,y),k,b.slice(y+1))},_.isSpace=function(b){switch(b){case 9:case 32:return!0}return!1},_.isWhiteSpace=function(b){if(b>=8192&&b<=8202)return!0;switch(b){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1},_.isMdAsciiPunct=function(b){switch(b){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}},_.isPunctChar=function(b){return g.test(b)},_.escapeRE=function(b){return b.replace(m,"\\$&")},_.normalizeReference=function(b){return b=b.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(b=b.replace(/ẞ/g,"ß")),b.toLowerCase().toUpperCase()}},function(d,_){var i=d.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=i)},function(d,_,i){Object.defineProperty(_,"__esModule",{value:!0}),_.default=(e,t)=>{const r=e.__vccOpts||e;for(const[n,l]of t)r[n]=l;return r}},function(d,_){var i={}.hasOwnProperty;d.exports=function(e,t){return i.call(e,t)}},function(d,_,i){var e=i(6),t=i(16);d.exports=i(7)?function(r,n,l){return e.f(r,n,t(1,l))}:function(r,n,l){return r[n]=l,r}},function(d,_,i){var e=i(14),t=i(47),r=i(28),n=Object.defineProperty;_.f=i(7)?Object.defineProperty:function(l,s,a){if(e(l),s=r(s,!0),e(a),t)try{return n(l,s,a)}catch{}if("get"in a||"set"in a)throw TypeError("Accessors not supported!");return"value"in a&&(l[s]=a.value),l}},function(d,_,i){d.exports=!i(15)(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},function(d,_,i){var e=i(89),t=i(27);d.exports=function(r){return e(t(r))}},function(d,_,i){var e=i(32)("wks"),t=i(17),r=i(2).Symbol,n=typeof r=="function";(d.exports=function(l){return e[l]||(e[l]=n&&r[l]||(n?r:t)("Symbol."+l))}).store=e},function(d,_){d.exports=function(i){return typeof i=="object"?i!==null:typeof i=="function"}},function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0});var _typeof2=__webpack_require__(25),_typeof3=_interopRequireDefault(_typeof2),_keydownListen=__webpack_require__(110),_langHljsCss=__webpack_require__(111),_langHljsCss2=_interopRequireDefault(_langHljsCss),_langHljs=__webpack_require__(56);_interopRequireDefault(_langHljs);var _extraFunction=__webpack_require__(57),_util=__webpack_require__(112),_toolbar_left_click2=__webpack_require__(113),_toolbar_right_click2=__webpack_require__(114),_config=__webpack_require__(115),_markdown=__webpack_require__(132),_markdown2=_interopRequireDefault(_markdown),_mdToolbarLeft=__webpack_require__(70),_mdToolbarLeft2=_interopRequireDefault(_mdToolbarLeft),_mdToolbarRight=__webpack_require__(72),_mdToolbarRight2=_interopRequireDefault(_mdToolbarRight),_autoTextarea=__webpack_require__(216),_autoTextarea2=_interopRequireDefault(_autoTextarea);function _interopRequireDefault(d){return d&&d.__esModule?d:{default:d}}__webpack_require__(222),__webpack_require__(231),exports.default={emits:["imgDel","change","fullScreen","readModel","previewToggle","subfieldToggle","htmlCode","helpToggle","save","navigationToggle","update:modelValue"],mixins:[_markdown2.default],props:{scrollStyle:{type:Boolean,default:!0},boxShadow:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},autofocus:{type:Boolean,default:!0},fontSize:{type:String,default:"14px"},toolbarsBackground:{type:String,default:"#ffffff"},editorBackground:{type:String,default:"#ffffff"},previewBackground:{type:String,default:"#fbfbfb"},boxShadowStyle:{type:String,default:"0 2px 12px 0 rgba(0, 0, 0, 0.1)"},help:{type:String,default:null},modelValue:{type:String,default:""},language:{type:String,default:"zh-CN"},subfield:{type:Boolean,default:!0},navigation:{type:Boolean,default:!1},defaultOpen:{type:String,default:null},editable:{type:Boolean,default:!0},toolbarsFlag:{type:Boolean,default:!0},toolbars:{type:Object,default:function(){return _config.CONFIG.toolbars}},html:{type:Boolean,default:!0},xssOptions:{type:[Object,Boolean],default:function(){return{}}},codeStyle:{type:String,default:function(){return"github"}},placeholder:{type:String,default:null},ishljs:{type:Boolean,default:!0},externalLink:{type:[Object,Boolean],default:!0},imageFilter:{type:Function,default:null},imageClick:{type:Function,default:null},tabSize:{type:Number,default:0},shortCut:{type:Boolean,default:!0}},data:function(){var d,_,i=this;return{s_right_click_menu_show:!1,right_click_menu_top:0,right_click_menu_left:0,s_subfield:i.subfield,s_autofocus:!0,s_navigation:i.navigation,s_scrollStyle:i.scrollStyle,d_value:"",d_render:"",s_preview_switch:(_=i.defaultOpen,_||(_=i.subfield?"preview":"edit"),_==="preview"),s_fullScreen:!1,s_help:!1,s_html_code:!1,d_help:null,d_words:null,edit_scroll_height:-1,s_readmodel:!1,s_table_enter:!1,d_history:(d=[],d.push(i.modelValue),d),d_history_index:0,currentTimeout:"",d_image_file:[],d_preview_imgsrc:null,s_external_link:{markdown_css:function(){return"https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.9.0/github-markdown.min.css"},hljs_js:function(){return"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js"},hljs_lang:function(e){return"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/languages/"+e+".min.js"},hljs_css:function(e){return _langHljsCss2.default[e]?"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/"+e+".min.css":""},katex_js:function(){return"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.js"},katex_css:function(){return"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.css"}},p_external_link:{},textarea_selectionEnd:0,textarea_selectionEnds:[0],_xssHandler:null}},created:function(){var d=this;this.initLanguage(),this.initExternalFuc(),this.$nextTick(function(){d.editableTextarea()})},mounted:function(){var d=this;this.$el.addEventListener("paste",function(_){d.$paste(_)}),this.$el.addEventListener("drop",function(_){d.$drag(_)}),(0,_keydownListen.keydownListen)(this),(0,_extraFunction.ImagePreviewListener)(this),this.autofocus&&this.getTextareaDom().focus(),(0,_extraFunction.fullscreenchange)(this),this.d_value=this.modelValue||"",document.body.appendChild(this.$refs.help),this.loadExternalLink("markdown_css","css"),this.loadExternalLink("katex_css","css"),this.loadExternalLink("katex_js","js",function(){d.iRender(!0)}),this.loadExternalLink("hljs_js","js",function(){d.iRender(!0)}),(0,_typeof3.default)(d.externalLink)==="object"&&typeof d.externalLink.markdown_css=="function"||d.codeStyleChange(d.codeStyle,!0)},beforeUnmount:function(){document.body.removeChild(this.$refs.help)},getMarkdownIt:function(){var d=this.mixins[0].data().markdownIt;return d||(d=(0,_markdown.initMarkdown)()),d},methods:{loadExternalLink:function(d,_,i){if(typeof this.p_external_link[d]=="function"){var e={css:_extraFunction.loadLink,js:_extraFunction.loadScript};e.hasOwnProperty(_)&&e[_](this.p_external_link[d](),i)}else this.p_external_link[d]!==!1&&console.error("external_link."+d,"is not a function, if you want to disabled this error log, set external_link."+d,"to function or false")},initExternalFuc:function(){for(var d=["markdown_css","hljs_js","hljs_css","hljs_lang","katex_js","katex_css"],_=(0,_typeof3.default)(this.externalLink),i=_==="object",e=_==="boolean",t=0;t<d.length;t++)e&&!this.externalLink||i&&this.externalLink[d[t]]===!1?this.p_external_link[d[t]]=!1:i&&typeof this.externalLink[d[t]]=="function"?this.p_external_link[d[t]]=this.externalLink[d[t]]:this.p_external_link[d[t]]=this.s_external_link[d[t]]},textAreaFocus:function(){this.$refs.vNoteTextarea.$refs.vTextarea.focus()},$drag:function(d){var _=d.dataTransfer;if(_){var i=_.files;i.length>0&&(d.preventDefault(),this.$refs.toolbar_left.$imgFilesAdd(i))}},$paste:function(d){var _=d.clipboardData;if(_){var i=_.items;if(!i)return;for(var e=_.types||[],t=null,r=0;r<e.length;r++)if(e[r]==="Files"){t=i[r];break}if(t&&t.kind==="file"){(0,_util.stopEvent)(d);var n=t.getAsFile();this.$refs.toolbar_left.$imgFilesAdd([n])}}},$imgTouch:function(d){},$imgDel:function(d){this.markdownIt.image_del(d[1]);var _=d[0],i=new RegExp("\\!\\["+d[1]._name+"\\]\\("+_+"\\)","g");this.d_value=this.d_value.replace(i,""),this.iRender(),this.$emit("imgDel",d)},$imgAdd:function(d,_,i){i===void 0&&(i=!0);var e=this;if(this.__rFilter==null&&(this.__rFilter=/^image\//i),this.__oFReader=new FileReader,this.__oFReader.onload=function(r){e.markdownIt.image_add(d,r.target.result),_.miniurl=r.target.result,i===!0&&(_._name=_.name.replace(/[\[\]\(\)\+\{\}&\|\\\*^%$#@\-]/g,""),e.insertText(e.getTextareaDom(),{prefix:"!["+_._name+"]("+d+")",subfix:"",str:""}),e.$nextTick(function(){e.$emit("imgAdd",d,_)}))},_){var t=_;this.__rFilter.test(t.type)&&this.__oFReader.readAsDataURL(t)}},$imgUpdateByUrl:function(d,_){var i=this;this.markdownIt.image_add(d,_),this.$nextTick(function(){i.d_render=this.markdownIt.render(this.d_value)})},$imgAddByUrl:function(d,_){return!!this.$refs.toolbar_left.$imgAddByUrl(d,_)&&(this.$imgUpdateByUrl(d,_),!0)},$img2Url:function $img2Url(fileIndex,url){var reg_str="/(!\\[[^\\[]*?\\](?=\\())\\(\\s*("+fileIndex+")\\s*\\)/g",reg=eval(reg_str);this.d_value=this.d_value.replace(reg,"$1("+url+")"),this.$refs.toolbar_left.$changeUrl(fileIndex,url),this.iRender()},$imglst2Url:function(d){if(d instanceof Array)for(var _=0;_<d.length;_++)this.$img2Url(d[_][0],d[_][1])},toolbar_left_click:function(d){(0,_toolbar_left_click2.toolbar_left_click)(d,this)},toolbar_left_addlink:function(d,_,i){(0,_toolbar_left_click2.toolbar_left_addlink)(d,_,i,this)},toolbar_right_click:function(d){(0,_toolbar_right_click2.toolbar_right_click)(d,this)},getNavigation:function(d,_){return(0,_extraFunction.getNavigation)(d,_)},change:function(d,_){this.$emit("change",d,_)},fullscreen:function(d,_){this.$emit("fullScreen",d,_)},readmodel:function(d,_){this.$emit("readModel",d,_)},previewtoggle:function(d,_){this.$emit("previewToggle",d,_)},subfieldtoggle:function(d,_){this.$emit("subfieldToggle",d,_)},htmlcode:function(d,_){this.$emit("htmlCode",d,_)},helptoggle:function(d,_){this.$emit("helpToggle",d,_)},save:function(d,_){this.$emit("save",d,_)},navigationtoggle:function(d,_){this.$emit("navigationToggle",d,_)},$toolbar_right_read_change_status:function(){this.s_readmodel=!this.s_readmodel,this.readmodel&&this.readmodel(this.s_readmodel,this.d_value),this.s_readmodel&&this.toolbars.navigation&&this.getNavigation(this,!0)},$v_edit_scroll:function(d){(0,_extraFunction.scrollLink)(d,this)},getTextareaDom:function(){return this.$refs.vNoteTextarea.$refs.vTextarea},insertText:function(d,_){var i=_.prefix,e=_.subfix,t=_.str,r=_.type;(0,_extraFunction.insertTextAtCaret)(d,{prefix:i,subfix:e,str:t,type:r},this)},insertTab:function(){(0,_extraFunction.insertTab)(this,this.tabSize)},insertOl:function(){(0,_extraFunction.insertOl)(this)},removeLine:function(){(0,_extraFunction.removeLine)(this)},insertUl:function(){(0,_extraFunction.insertUl)(this)},unInsertTab:function(){(0,_extraFunction.unInsertTab)(this,this.tabSize)},insertCodeBlock:function(){(0,_extraFunction.insertCodeBlock)(this)},insertEnter:function(d){(0,_extraFunction.insertEnter)(this,d)},saveHistory:function(){this.d_history.splice(this.d_history_index+1,this.d_history.length),this.d_history.push(this.d_value),this.textarea_selectionEnds.splice(this.d_history_index+1,this.textarea_selectionEnds.length),this.textarea_selectionEnds.push(this.textarea_selectionEnd),this.d_history_index=this.d_history.length-1},saveSelectionEndsHistory:function(){var d=this.$refs.vNoteTextarea&&this.$refs.vNoteTextarea.$el.querySelector("textarea");this.textarea_selectionEnd=d?d.selectionEnd:this.textarea_selectionEnd},initLanguage:function(){var d=_config.CONFIG.langList.indexOf(this.language)>=0?this.language:"zh-CN",_=this;_.$render(_config.CONFIG["help_"+d],function(i){_.d_help=i}),this.d_words=_config.CONFIG["words_"+d]},editableTextarea:function(){var d=this.$refs.vNoteTextarea.$refs.vTextarea;this.editable?d.removeAttribute("disabled"):d.setAttribute("disabled","disabled")},codeStyleChange:function(d,_){if(_=_||!1,typeof this.p_external_link.hljs_css=="function"){var i=this.p_external_link.hljs_css(d);i.length===0&&_&&(console.warn("hljs color scheme",d,"do not exist, loading default github"),i=this.p_external_link.hljs_css("github")),i.length>0?(0,_extraFunction.loadLink)(i,null,"md-code-style"):console.warn("hljs color scheme",d,"do not exist, hljs color scheme will not change")}else this.p_external_link.hljs_css!==!1&&console.error("external_link.hljs_css is not a function, if you want to disabled this error log, set external_link.hljs_css to function or false")},iRender:function(d){var _=this;this.$render(_.d_value,function(i){_.d_render=i,d||_.change&&_.change(_.d_value,_.d_render),_.s_navigation&&(0,_extraFunction.getNavigation)(_,!1),_.$emit("update:modelValue",_.d_value),_.d_value!==_.d_history[_.d_history_index]&&(window.clearTimeout(_.currentTimeout),_.currentTimeout=setTimeout(function(){_.saveHistory()},500))})},$emptyHistory:function(){this.d_history=[this.d_value],this.d_history_index=0}},watch:{d_value:function(d,_){this.saveSelectionEndsHistory(),this.iRender()},modelValue:function(d,_){d!==this.d_value&&(this.d_value=d)},subfield:function(d,_){this.s_subfield=d},d_history_index:function(){this.d_history_index>20&&(this.d_history.shift(),this.d_history_index=this.d_history_index-1),this.d_value=this.d_history[this.d_history_index]},language:function(d){this.initLanguage()},editable:function(){this.editableTextarea()},defaultOpen:function(d){var _=d;return _||(_=this.subfield?"preview":"edit"),this.s_preview_switch=_==="preview",this.s_preview_switch},codeStyle:function(d){this.codeStyleChange(d)}},components:{"v-autoTextarea":_autoTextarea2.default,"v-md-toolbar-left":_mdToolbarLeft2.default,"v-md-toolbar-right":_mdToolbarRight2.default}}},function(d,_){d.exports=!0},function(d,_){var i=d.exports={version:"2.6.12"};typeof __e=="number"&&(__e=i)},function(d,_,i){var e=i(10);d.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(d,_){d.exports=function(i){try{return!!i()}catch{return!0}}},function(d,_){d.exports=function(i,e){return{enumerable:!(1&i),configurable:!(2&i),writable:!(4&i),value:e}}},function(d,_){var i=0,e=Math.random();d.exports=function(t){return"Symbol(".concat(t===void 0?"":t,")_",(++i+e).toString(36))}},function(d,_,i){Object.defineProperty(_,"__esModule",{value:!0}),_.default={emits:["toolbar_left_addlink","imgTouch","imgAdd","imgDel","imgAdd","imgAdd","toolbar_left_click","toolbar_left_click"],name:"s-md-toolbar-left",props:{editable:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},toolbars:{type:Object,required:!0},d_words:{type:Object,required:!0},image_filter:{type:Function,default:null}},data:function(){return{img_file:[[0,null]],img_timer:null,header_timer:null,s_img_dropdown_open:!1,s_header_dropdown_open:!1,s_img_link_open:!1,trigger:null,num:0,link_text:"",link_addr:"",link_type:"link"}},methods:{$imgLinkAdd:function(){this.$emit("toolbar_left_addlink",this.link_type,this.link_text,this.link_addr),this.s_img_link_open=!1},$toggle_imgLinkAdd:function(e){var t=this;this.link_type=e,this.link_text=this.link_addr="",this.s_img_link_open=!0,this.$nextTick(function(){t.$refs.linkTextInput.focus()}),this.s_img_dropdown_open=!1},$imgFileListClick:function(e){this.$emit("imgTouch",this.img_file[e])},$changeUrl:function(e,t){this.img_file[e][0]=t},$imgFileAdd:function(e){this.img_file.push([++this.num,e]),this.$emit("imgAdd",this.num,e),this.s_img_dropdown_open=!1},$imgFilesAdd:function(e){for(var t=typeof this.image_filter=="function",r=0;r<e.length;r++)(t&&this.image_filter(e[r])===!0||!t&&e[r].type.match(/^image\//i))&&this.$imgFileAdd(e[r])},$imgAdd:function(e){this.$imgFilesAdd(e.target.files),e.target.value=""},$imgDel:function(e){this.$emit("imgDel",this.img_file[e]),this.img_file.splice(e,1),this.num--,this.s_img_dropdown_open=!1},isEqualName:function(e,t){return!(!this.img_file[t][1]||this.img_file[t][1].name!==e&&this.img_file[t][1]._name!==e)},$imgDelByFilename:function(e){for(var t=0;this.img_file.length>t;){if(this.img_file[t][1]===e||this.isEqualName(e,t))return this.$imgDel(t),!0;t+=1}return!1},$imgAddByFilename:function(e,t){for(var r=0;r<this.img_file.length;r++)if(this.img_file[r][0]===e)return!1;return this.img_file[0][0]=e,this.img_file[0][1]=t,this.img_file[0][2]=e,this.img_file.unshift(["./"+this.num,null]),this.$emit("imgAdd",this.img_file[1][0],t,!1),!0},$imgAddByUrl:function(e,t){for(var r=0;r<this.img_file.length;r++)if(this.img_file[r][0]===e)return!1;return this.img_file[0][0]=e,this.img_file[0][1]=t,this.img_file.unshift(["./"+this.num,null]),!0},$imgUpdateByFilename:function(e,t){for(var r=0;r<this.img_file.length;r++)if(this.img_file[r][0]===e||this.isEqualName(e,r))return this.img_file[r][1]=t,this.$emit("imgAdd",e,t,!1),!0;return!1},$mouseenter_img_dropdown:function(){this.editable&&(clearTimeout(this.img_timer),this.s_img_dropdown_open=!0)},$mouseleave_img_dropdown:function(){var e=this;this.img_timer=setTimeout(function(){e.s_img_dropdown_open=!1},200)},$mouseenter_header_dropdown:function(){this.editable&&(clearTimeout(this.header_timer),this.s_header_dropdown_open=!0)},$mouseleave_header_dropdown:function(){var e=this;this.header_timer=setTimeout(function(){e.s_header_dropdown_open=!1},200)},$clicks:function(e){this.editable&&this.$emit("toolbar_left_click",e)},$click_header:function(e){this.$emit("toolbar_left_click",e),this.s_header_dropdown_open=!1},handleClose:function(e){this.s_img_dropdown_open=!1}},watch:{s_img_link_open:function(e){this.$parent.$el.style.zIndex=e?1501:1500}}}},function(d,_,i){Object.defineProperty(_,"__esModule",{value:!0}),_.default={emits:["toolbar_right_click"],name:"s-md-toolbar-right",props:{s_subfield:{type:Boolean,required:!0},toolbars:{type:Object,required:!0},s_preview_switch:{type:Boolean,required:!0},s_fullScreen:{type:Boolean,required:!0},s_html_code:{type:Boolean,required:!0},s_navigation:{type:Boolean,required:!0},d_words:{type:Object,required:!0}},methods:{$clicks:function(e){this.$emit("toolbar_right_click",e)}}}},function(d,_,i){Object.defineProperty(_,"__esModule",{value:!0}),_.default={emits:["update:modelValue"],data:function(){var e=this;return{temp_value:e.modelValue,s_autofocus:function(){if(e.autofocus)return"autofocus"}()}},created:function(){},props:{fullHeight:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},modelValue:{type:String,default:""},placeholder:{type:String,default:""},border:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},onchange:{type:Function,default:null},fontSize:{type:String,default:"14px"},lineHeight:{type:String,default:"18px"}},methods:{change:function(e){this.onchange&&this.onchange(this.temp_value,e)}},watch:{modelValue:function(e,t){this.temp_value=e},temp_value:function(e,t){this.$emit("update:modelValue",e)}}}},function(d,_,i){i.r(_);var e=i(11),t=i.n(e);for(var r in i.d(_,"default",function(){return t.a}),e)["default"].indexOf(r)<0&&function(n){i.d(_,n,function(){return e[n]})}(r)},function(d,_,i){i.r(_);var e=i(18),t=i.n(e);for(var r in i.d(_,"default",function(){return t.a}),e)["default"].indexOf(r)<0&&function(n){i.d(_,n,function(){return e[n]})}(r)},function(d,_,i){i.r(_);var e=i(19),t=i.n(e);for(var r in i.d(_,"default",function(){return t.a}),e)["default"].indexOf(r)<0&&function(n){i.d(_,n,function(){return e[n]})}(r)},function(d,_,i){i.r(_);var e=i(20),t=i.n(e);for(var r in i.d(_,"default",function(){return t.a}),e)["default"].indexOf(r)<0&&function(n){i.d(_,n,function(){return e[n]})}(r)},function(d,_,i){_.__esModule=!0;var e=n(i(81)),t=n(i(99)),r=typeof t.default=="function"&&typeof e.default=="symbol"?function(l){return typeof l}:function(l){return l&&typeof t.default=="function"&&l.constructor===t.default&&l!==t.default.prototype?"symbol":typeof l};function n(l){return l&&l.__esModule?l:{default:l}}_.default=typeof t.default=="function"&&r(e.default)==="symbol"?function(l){return l===void 0?"undefined":r(l)}:function(l){return l&&typeof t.default=="function"&&l.constructor===t.default&&l!==t.default.prototype?"symbol":l===void 0?"undefined":r(l)}},function(d,_){var i=Math.ceil,e=Math.floor;d.exports=function(t){return isNaN(t=+t)?0:(t>0?e:i)(t)}},function(d,_){d.exports=function(i){if(i==null)throw TypeError("Can't call method on  "+i);return i}},function(d,_,i){var e=i(10);d.exports=function(t,r){if(!e(t))return t;var n,l;if(r&&typeof(n=t.toString)=="function"&&!e(l=n.call(t))||typeof(n=t.valueOf)=="function"&&!e(l=n.call(t))||!r&&typeof(n=t.toString)=="function"&&!e(l=n.call(t)))return l;throw TypeError("Can't convert object to primitive value")}},function(d,_){d.exports={}},function(d,_,i){var e=i(51),t=i(33);d.exports=Object.keys||function(r){return e(r,t)}},function(d,_,i){var e=i(32)("keys"),t=i(17);d.exports=function(r){return e[r]||(e[r]=t(r))}},function(d,_,i){var e=i(13),t=i(2),r=t["__core-js_shared__"]||(t["__core-js_shared__"]={});(d.exports=function(n,l){return r[n]||(r[n]=l!==void 0?l:{})})("versions",[]).push({version:e.version,mode:i(12)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(d,_){d.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(d,_,i){var e=i(6).f,t=i(4),r=i(9)("toStringTag");d.exports=function(n,l,s){n&&!t(n=s?n:n.prototype,r)&&e(n,r,{configurable:!0,value:l})}},function(d,_,i){_.f=i(9)},function(d,_,i){var e=i(2),t=i(13),r=i(12),n=i(35),l=i(6).f;d.exports=function(s){var a=t.Symbol||(t.Symbol=r?{}:e.Symbol||{});s.charAt(0)=="_"||s in a||l(a,s,{value:n.f(s)})}},function(d,_){_.f={}.propertyIsEnumerable},function(d,_,i){var e=i(59),t=i(135);for(var r in(_=d.exports=function(n,l){return new t(l).process(n)}).FilterCSS=t,e)_[r]=e[r];typeof window<"u"&&(window.filterCSS=d.exports)},function(d,_){d.exports={indexOf:function(i,e){var t,r;if(Array.prototype.indexOf)return i.indexOf(e);for(t=0,r=i.length;t<r;t++)if(i[t]===e)return t;return-1},forEach:function(i,e,t){var r,n;if(Array.prototype.forEach)return i.forEach(e,t);for(r=0,n=i.length;r<n;r++)e.call(t,i[r],r,i)},trim:function(i){return String.prototype.trim?i.trim():i.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(i){var e=/\s|\n|\t/.exec(i);return e?e.index:-1}}},function(d,_){d.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/},function(d,_,i){function e(){this.__rules__=[],this.__cache__=null}e.prototype.__find__=function(t){for(var r=0;r<this.__rules__.length;r++)if(this.__rules__[r].name===t)return r;return-1},e.prototype.__compile__=function(){var t=this,r=[""];t.__rules__.forEach(function(n){n.enabled&&n.alt.forEach(function(l){r.indexOf(l)<0&&r.push(l)})}),t.__cache__={},r.forEach(function(n){t.__cache__[n]=[],t.__rules__.forEach(function(l){l.enabled&&(n&&l.alt.indexOf(n)<0||t.__cache__[n].push(l.fn))})})},e.prototype.at=function(t,r,n){var l=this.__find__(t),s=n||{};if(l===-1)throw new Error("Parser rule not found: "+t);this.__rules__[l].fn=r,this.__rules__[l].alt=s.alt||[],this.__cache__=null},e.prototype.before=function(t,r,n,l){var s=this.__find__(t),a=l||{};if(s===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(s,0,{name:r,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},e.prototype.after=function(t,r,n,l){var s=this.__find__(t),a=l||{};if(s===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(s+1,0,{name:r,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},e.prototype.push=function(t,r,n){var l=n||{};this.__rules__.push({name:t,enabled:!0,fn:r,alt:l.alt||[]}),this.__cache__=null},e.prototype.enable=function(t,r){Array.isArray(t)||(t=[t]);var n=[];return t.forEach(function(l){var s=this.__find__(l);if(s<0){if(r)return;throw new Error("Rules manager: invalid rule name "+l)}this.__rules__[s].enabled=!0,n.push(l)},this),this.__cache__=null,n},e.prototype.enableOnly=function(t,r){Array.isArray(t)||(t=[t]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(t,r)},e.prototype.disable=function(t,r){Array.isArray(t)||(t=[t]);var n=[];return t.forEach(function(l){var s=this.__find__(l);if(s<0){if(r)return;throw new Error("Rules manager: invalid rule name "+l)}this.__rules__[s].enabled=!1,n.push(l)},this),this.__cache__=null,n},e.prototype.getRules=function(t){return this.__cache__===null&&this.__compile__(),this.__cache__[t]||[]},d.exports=e},function(d,_,i){function e(t,r,n){this.type=t,this.tag=r,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}e.prototype.attrIndex=function(t){var r,n,l;if(!this.attrs)return-1;for(n=0,l=(r=this.attrs).length;n<l;n++)if(r[n][0]===t)return n;return-1},e.prototype.attrPush=function(t){this.attrs?this.attrs.push(t):this.attrs=[t]},e.prototype.attrSet=function(t,r){var n=this.attrIndex(t),l=[t,r];n<0?this.attrPush(l):this.attrs[n]=l},e.prototype.attrGet=function(t){var r=this.attrIndex(t),n=null;return r>=0&&(n=this.attrs[r][1]),n},e.prototype.attrJoin=function(t,r){var n=this.attrIndex(t);n<0?this.attrPush([t,r]):this.attrs[n][1]=this.attrs[n][1]+" "+r},d.exports=e},function(d,_,i){d.exports=function(e){var t=[];return t.toString=function(){return this.map(function(r){var n=function(l,s){var a=l[1]||"",c=l[3];if(!c)return a;if(s&&typeof btoa=="function"){var o=(f=c,p=btoa(unescape(encodeURIComponent(JSON.stringify(f)))),m="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(p),"/*# ".concat(m," */")),u=c.sources.map(function(g){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(g," */")});return[a].concat(u).concat([o]).join(`
`)}var f,p,m;return[a].join(`
`)}(r,e);return r[2]?"@media ".concat(r[2]," {").concat(n,"}"):n}).join("")},t.i=function(r,n,l){typeof r=="string"&&(r=[[null,r,""]]);var s={};if(l)for(var a=0;a<this.length;a++){var c=this[a][0];c!=null&&(s[c]=!0)}for(var o=0;o<r.length;o++){var u=[].concat(r[o]);l&&s[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(d,_,i){function e(v,x){for(var T=[],S={},E=0;E<x.length;E++){var C=x[E],O=C[0],j={id:v+":"+E,css:C[1],media:C[2],sourceMap:C[3]};S[O]?S[O].parts.push(j):T.push(S[O]={id:O,parts:[j]})}return T}i.r(_),i.d(_,"default",function(){return f});var t=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!t)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},n=t&&(document.head||document.getElementsByTagName("head")[0]),l=null,s=0,a=!1,c=function(){},o=null,u=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(v,x,T,S){a=T,o=S||{};var E=e(v,x);return p(E),function(C){for(var O=[],j=0;j<E.length;j++){var D=E[j];(L=r[D.id]).refs--,O.push(L)}for(C?p(E=e(v,C)):E=[],j=0;j<O.length;j++){var L;if((L=O[j]).refs===0){for(var $=0;$<L.parts.length;$++)L.parts[$]();delete r[L.id]}}}}function p(v){for(var x=0;x<v.length;x++){var T=v[x],S=r[T.id];if(S){S.refs++;for(var E=0;E<S.parts.length;E++)S.parts[E](T.parts[E]);for(;E<T.parts.length;E++)S.parts.push(g(T.parts[E]));S.parts.length>T.parts.length&&(S.parts.length=T.parts.length)}else{var C=[];for(E=0;E<T.parts.length;E++)C.push(g(T.parts[E]));r[T.id]={id:T.id,refs:1,parts:C}}}}function m(){var v=document.createElement("style");return v.type="text/css",n.appendChild(v),v}function g(v){var x,T,S=document.querySelector('style[data-vue-ssr-id~="'+v.id+'"]');if(S){if(a)return c;S.parentNode.removeChild(S)}if(u){var E=s++;S=l||(l=m()),x=k.bind(null,S,E,!1),T=k.bind(null,S,E,!0)}else S=m(),x=w.bind(null,S),T=function(){S.parentNode.removeChild(S)};return x(v),function(C){if(C){if(C.css===v.css&&C.media===v.media&&C.sourceMap===v.sourceMap)return;x(v=C)}else T()}}var b,y=(b=[],function(v,x){return b[v]=x,b.filter(Boolean).join(`
`)});function k(v,x,T,S){var E=T?"":S.css;if(v.styleSheet)v.styleSheet.cssText=y(x,E);else{var C=document.createTextNode(E),O=v.childNodes;O[x]&&v.removeChild(O[x]),O.length?v.insertBefore(C,O[x]):v.appendChild(C)}}function w(v,x){var T=x.css,S=x.media,E=x.sourceMap;if(S&&v.setAttribute("media",S),o.ssrId&&v.setAttribute("data-vue-ssr-id",x.id),E&&(T+=`
/*# sourceURL=`+E.sources[0]+" */",T+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(E))))+" */"),v.styleSheet)v.styleSheet.cssText=T;else{for(;v.firstChild;)v.removeChild(v.firstChild);v.appendChild(document.createTextNode(T))}}},function(d,_,i){var e=i(12),t=i(46),r=i(49),n=i(5),l=i(29),s=i(87),a=i(34),c=i(94),o=i(9)("iterator"),u=!([].keys&&"next"in[].keys()),f=function(){return this};d.exports=function(p,m,g,b,y,k,w){s(g,m,b);var v,x,T,S=function(M){if(!u&&M in j)return j[M];switch(M){case"keys":case"values":return function(){return new g(this,M)}}return function(){return new g(this,M)}},E=m+" Iterator",C=y=="values",O=!1,j=p.prototype,D=j[o]||j["@@iterator"]||y&&j[y],L=D||S(y),$=y?C?S("entries"):L:void 0,B=m=="Array"&&j.entries||D;if(B&&(T=c(B.call(new p)))!==Object.prototype&&T.next&&(a(T,E,!0),e||typeof T[o]=="function"||n(T,o,f)),C&&D&&D.name!=="values"&&(O=!0,L=function(){return D.call(this)}),e&&!w||!u&&!O&&j[o]||n(j,o,L),l[m]=L,l[E]=f,y)if(v={values:C?L:S("values"),keys:k?L:S("keys"),entries:$},w)for(x in v)x in j||r(j,x,v[x]);else t(t.P+t.F*(u||O),m,v);return v}},function(d,_,i){var e=i(2),t=i(13),r=i(85),n=i(5),l=i(4),s=function(a,c,o){var u,f,p,m=a&s.F,g=a&s.G,b=a&s.S,y=a&s.P,k=a&s.B,w=a&s.W,v=g?t:t[c]||(t[c]={}),x=v.prototype,T=g?e:b?e[c]:(e[c]||{}).prototype;for(u in g&&(o=c),o)(f=!m&&T&&T[u]!==void 0)&&l(v,u)||(p=f?T[u]:o[u],v[u]=g&&typeof T[u]!="function"?o[u]:k&&f?r(p,e):w&&T[u]==p?function(S){var E=function(C,O,j){if(this instanceof S){switch(arguments.length){case 0:return new S;case 1:return new S(C);case 2:return new S(C,O)}return new S(C,O,j)}return S.apply(this,arguments)};return E.prototype=S.prototype,E}(p):y&&typeof p=="function"?r(Function.call,p):p,y&&((v.virtual||(v.virtual={}))[u]=p,a&s.R&&x&&!x[u]&&n(x,u,p)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,d.exports=s},function(d,_,i){d.exports=!i(7)&&!i(15)(function(){return Object.defineProperty(i(48)("div"),"a",{get:function(){return 7}}).a!=7})},function(d,_,i){var e=i(10),t=i(2).document,r=e(t)&&e(t.createElement);d.exports=function(n){return r?t.createElement(n):{}}},function(d,_,i){d.exports=i(5)},function(d,_,i){var e=i(14),t=i(88),r=i(33),n=i(31)("IE_PROTO"),l=function(){},s=function(){var a,c=i(48)("iframe"),o=r.length;for(c.style.display="none",i(93).appendChild(c),c.src="javascript:",(a=c.contentWindow.document).open(),a.write("<script>document.F=Object<\/script>"),a.close(),s=a.F;o--;)delete s.prototype[r[o]];return s()};d.exports=Object.create||function(a,c){var o;return a!==null?(l.prototype=e(a),o=new l,l.prototype=null,o[n]=a):o=s(),c===void 0?o:t(o,c)}},function(d,_,i){var e=i(4),t=i(8),r=i(90)(!1),n=i(31)("IE_PROTO");d.exports=function(l,s){var a,c=t(l),o=0,u=[];for(a in c)a!=n&&e(c,a)&&u.push(a);for(;s.length>o;)e(c,a=s[o++])&&(~r(u,a)||u.push(a));return u}},function(d,_){var i={}.toString;d.exports=function(e){return i.call(e).slice(8,-1)}},function(d,_,i){var e=i(27);d.exports=function(t){return Object(e(t))}},function(d,_){_.f=Object.getOwnPropertySymbols},function(d,_,i){var e=i(51),t=i(33).concat("length","prototype");_.f=Object.getOwnPropertyNames||function(r){return e(r,t)}},function(d,_,i){Object.defineProperty(_,"__esModule",{value:!0}),_.default={"1c":"1c",abnf:"abnf",accesslog:"accesslog",actionscript:"actionscript",as:"actionscript",ada:"ada",apache:"apache",apacheconf:"apache",applescript:"applescript",osascript:"applescript",arduino:"arduino",armasm:"armasm",arm:"armasm",asciidoc:"asciidoc",adoc:"asciidoc",aspectj:"aspectj",autohotkey:"autohotkey",ahk:"autohotkey",autoit:"autoit",avrasm:"avrasm",awk:"awk",axapta:"axapta",bash:"bash",sh:"bash",zsh:"bash",basic:"basic",bnf:"bnf",brainfuck:"brainfuck",bf:"brainfuck",cal:"cal",capnproto:"capnproto",capnp:"capnproto",ceylon:"ceylon",clean:"clean",icl:"clean",dcl:"clean","clojure-repl":"clojure-repl",clojure:"clojure",clj:"clojure",cmake:"cmake","cmake.in":"cmake",coffeescript:"coffeescript",coffee:"coffeescript",cson:"coffeescript",iced:"coffeescript",coq:"coq",cos:"cos",cls:"cos",cpp:"cpp",c:"cpp",cc:"cpp",h:"cpp","c++":"cpp","h++":"cpp",hpp:"cpp",crmsh:"crmsh",crm:"crmsh",pcmk:"crmsh",crystal:"crystal",cr:"crystal",cs:"cs",csharp:"cs",csp:"csp",css:"css",d:"d",dart:"dart",delphi:"delphi",dpr:"delphi",dfm:"delphi",pas:"delphi",pascal:"delphi",freepascal:"delphi",lazarus:"delphi",lpr:"delphi",lfm:"delphi",diff:"diff",patch:"diff",django:"django",jinja:"django",dns:"dns",bind:"dns",zone:"dns",dockerfile:"dockerfile",docker:"dockerfile",dos:"dos",bat:"dos",cmd:"dos",dsconfig:"dsconfig",dts:"dts",dust:"dust",dst:"dust",ebnf:"ebnf",elixir:"elixir",elm:"elm",erb:"erb","erlang-repl":"erlang-repl",erlang:"erlang",erl:"erlang",excel:"excel",xlsx:"excel",xls:"excel",fix:"fix",flix:"flix",fortran:"fortran",f90:"fortran",f95:"fortran",fsharp:"fsharp",fs:"fsharp",gams:"gams",gms:"gams",gauss:"gauss",gss:"gauss",gcode:"gcode",nc:"gcode",gherkin:"gherkin",feature:"gherkin",glsl:"glsl",go:"go",golang:"go",golo:"golo",gradle:"gradle",groovy:"groovy",haml:"haml",handlebars:"handlebars",hbs:"handlebars","html.hbs":"handlebars","html.handlebars":"handlebars",haskell:"haskell",hs:"haskell",haxe:"haxe",hx:"haxe",hsp:"hsp",htmlbars:"htmlbars",http:"http",https:"http",hy:"hy",hylang:"hy",inform7:"inform7",i7:"inform7",ini:"ini",toml:"ini",irpf90:"irpf90",java:"java",jsp:"java",javascript:"javascript",js:"javascript",jsx:"javascript","jboss-cli":"jboss-cli","wildfly-cli":"jboss-cli",json:"json","julia-repl":"julia-repl",julia:"julia",kotlin:"kotlin",lasso:"lasso",ls:"livescript",lassoscript:"lasso",ldif:"ldif",leaf:"leaf",less:"less",lisp:"lisp",livecodeserver:"livecodeserver",livescript:"livescript",llvm:"llvm",lsl:"lsl",lua:"lua",makefile:"makefile",mk:"makefile",mak:"makefile",markdown:"markdown",md:"markdown",mkdown:"markdown",mkd:"markdown",mathematica:"mathematica",mma:"mathematica",matlab:"matlab",maxima:"maxima",mel:"mel",mercury:"mercury",m:"mercury",moo:"mercury",mipsasm:"mipsasm",mips:"mipsasm",mizar:"mizar",mojolicious:"mojolicious",monkey:"monkey",moonscript:"moonscript",moon:"moonscript",n1ql:"n1ql",nginx:"nginx",nginxconf:"nginx",nimrod:"nimrod",nim:"nimrod",nix:"nix",nixos:"nix",nsis:"nsis",objectivec:"objectivec",mm:"objectivec",objc:"objectivec","obj-c":"objectivec",ocaml:"ocaml",ml:"sml",openscad:"openscad",scad:"openscad",oxygene:"oxygene",parser3:"parser3",perl:"perl",pl:"perl",pm:"perl",pf:"pf","pf.conf":"pf",php:"php",php3:"php",php4:"php",php5:"php",php6:"php",pony:"pony",powershell:"powershell",ps:"powershell",processing:"processing",profile:"profile",prolog:"prolog",protobuf:"protobuf",puppet:"puppet",pp:"puppet",purebasic:"purebasic",pb:"purebasic",pbi:"purebasic",python:"python",py:"python",gyp:"python",q:"q",k:"q",kdb:"q",qml:"qml",qt:"qml",r:"r",rib:"rib",roboconf:"roboconf",graph:"roboconf",instances:"roboconf",routeros:"routeros",mikrotik:"routeros",rsl:"rsl",ruby:"ruby",rb:"ruby",gemspec:"ruby",podspec:"ruby",thor:"ruby",irb:"ruby",ruleslanguage:"ruleslanguage",rust:"rust",rs:"rust",scala:"scala",scheme:"scheme",scilab:"scilab",sci:"scilab",scss:"scss",shell:"shell",console:"shell",smali:"smali",smalltalk:"smalltalk",st:"smalltalk",sml:"sml",sqf:"sqf",sql:"sql",stan:"stan",stata:"stata",do:"stata",ado:"stata",step21:"step21",p21:"step21",step:"step21",stp:"step21",stylus:"stylus",styl:"stylus",subunit:"subunit",swift:"swift",taggerscript:"taggerscript",tap:"tap",tcl:"tcl",tk:"tcl",tex:"tex",thrift:"thrift",tp:"tp",twig:"twig",craftcms:"twig",typescript:"typescript",ts:"typescript",vala:"vala",vbnet:"vbnet",vb:"vbnet","vbscript-html":"vbscript-html",vbscript:"vbscript",vbs:"vbscript",verilog:"verilog",v:"verilog",sv:"verilog",svh:"verilog",vhdl:"vhdl",vim:"vim",x86asm:"x86asm",xl:"xl",tao:"xl",xml:"xml",html:"xml",xhtml:"xml",rss:"xml",atom:"xml",xjb:"xml",xsd:"xml",xsl:"xml",plist:"xml",xquery:"xquery",xpath:"xquery",xq:"xquery",yaml:"yaml",yml:"yaml",YAML:"yaml",zephir:"zephir",zep:"zephir"}},function(d,_,i){Object.defineProperty(_,"__esModule",{value:!0}),_.loadScript=function(s,a){typeof a!="function"&&(a=function(){});var c=document.querySelectorAll("script[src='"+s+"']");if(c.length>0)return c[0].addEventListener("load",function(){a()}),void a();var o=document.createElement("script"),u=document.getElementsByTagName("head")[0];o.type="text/javascript",o.charset="UTF-8",o.src=s,o.addEventListener?o.addEventListener("load",function(){a()},!1):o.attachEvent&&o.attachEvent("onreadystatechange",function(){window.event.srcElement.readyState==="loaded"&&a()}),u.appendChild(o)},_.loadLink=function(s,a,c){if(typeof a!="function"&&(a=function(){}),document.querySelectorAll("link[href='"+s+"']").length>0)return void a();if(c){var o=document.querySelectorAll("link#"+c);if(o.length)return void(o[0].href=s)}var u=document.createElement("link"),f=document.getElementsByTagName("head")[0];u.rel="stylesheet",u.href=s,c&&(u.id=c),u.addEventListener?u.addEventListener("load",function(){a()},!1):u.attachEvent&&u.attachEvent("onreadystatechange",function(){window.event.srcElement.readyState==="loaded"&&a()}),f.appendChild(u)},_.insertTextAtCaret=function(s,a,c){var o=a.prefix,u=a.subfix,f=a.str;if(a.type,s.focus(),l(s)){var p=s.selectionStart,m=s.selectionEnd,g=s.value;p===m?(s.value=g.substring(0,p)+o+f+u+g.substring(m,g.length),s.selectionStart=p+o.length,s.selectionEnd=p+(f.length+o.length)):g.substring(p-o.length,p)===o&&g.substring(m,m+u.length)===u&&function(b,y,k,w,v){return!(b==="*"&&y==="*"&&k.substring(w-2,w-1)==="*"&&k.substring(v+1,v+2)==="*")}(o,u,g,p,m)?(s.value=g.substring(0,p-o.length)+g.substring(p,m)+g.substring(m+u.length,g.length),s.selectionStart=p-o.length,s.selectionEnd=m-o.length):(s.value=g.substring(0,p)+o+g.substring(p,m)+u+g.substring(m,g.length),s.selectionStart=p+o.length,s.selectionEnd=p+(m-p+o.length))}else alert("Error: Browser version is too low");c.d_value=s.value,s.focus()};var e="```",t="\n```\n",r="language";_.insertCodeBlock=function(s){var a=s.getTextareaDom();if(l(a)){var c=r,o=a.selectionStart,u=a.selectionEnd,f=a.value;o===u?n(c,"",a):function(p){var m=p.selectionStart,g=p.selectionEnd,b=p.value,y=e,k=t;return b.substring(m-1,m)===`
`?y+=`
`:k=`
`+k,b.substring(m-y.length,m)===y&&b.substring(g,g+k.length)===k}(a)?function(p){var m=e,g=t,b=r,y=p.selectionStart,k=p.selectionEnd,w=p.value,v=w.substring(y,k);if(w.substring(y-1,y)===`
`)m+=`
`;else if(m+b+(g=`
`+g)===w.substring(y-m.length,k+g.length)){var x=w.substring(0,y-m.length);return x+=w.substring(k+g.length,w.length),p.value=x,p.selectionStart=y-m.length,void(p.selectionEnd=p.selectionStart)}var T=w.substring(0,y-m.length);T+=v,T+=w.substring(k+g.length,w.length),p.value=T,p.selectionStart=y-m.length,p.selectionEnd=p.selectionStart+v.length}(a):n("",f.substring(o,u),a),s.d_value=a.value,a.focus()}else alert("Error: Browser version is too low")};function n(s,a,c){var o=e,u=t,f=c.selectionStart,p=c.selectionEnd,m=c.value,g=m.substring(0,f);g+=o+s+`
`,g+=a,g+=u,g+=m.substring(p,m.length),c.value=g,c.selectionStart=f+o.length+(s?0:1),c.selectionEnd=c.selectionStart+s.length+a.length}function l(s){return typeof s.selectionStart=="number"&&typeof s.selectionEnd=="number"}_.insertOl=function(s){var a=s.getTextareaDom();if(l(a)){var c=a.selectionStart,o=a.selectionEnd,u=a.value;if(c===o)a.value=u.substring(0,c)+"1. "+u.substring(o,u.length),a.selectionEnd=a.selectionStart=c+3;else{for(var f=c;f>0&&u.substring(f-1,f)!==`
`;)f--;for(var p=u.substring(f,o),m=p.split(`
`),g=0;g<m.length;g++)m[g]=g+1+". "+m[g];var b=m.join(`
`);a.value=u.substring(0,f)+b+u.substring(o,u.length),a.selectionStart=f,a.selectionEnd=o+b.length-p.length}}else alert("Error: Browser version is too low");s.d_value=a.value,a.focus()},_.removeLine=function(s){var a=s.getTextareaDom();if(l(a)){for(var c=a.selectionStart,o=a.selectionEnd,u=a.value,f=c;f>0&&u.substring(f-1,f)!==`
`;)f--;for(var p=o;p<u.length&&u.substring(p,p+1)!==`
`;)p++;p<u.length&&p++,a.value=u.substring(0,f)+u.substring(p,u.length),a.selectionEnd=a.selectionStart=f===0?0:f-1}else alert("Error: Browser version is too low");s.d_value=a.value,a.focus()},_.insertUl=function(s){var a=s.getTextareaDom();if(l(a)){var c=a.selectionStart,o=a.selectionEnd,u=a.value;if(c===o)a.value=u.substring(0,c)+"- "+u.substring(o,u.length),a.selectionEnd=a.selectionStart=c+2;else{for(var f=c;f>0&&u.substring(f-1,f)!==`
`;)f--;var p=u.substring(f,o),m=p.replace(/\n/g,`
- `);m="- "+m,a.value=u.substring(0,f)+m+u.substring(o,u.length),a.selectionStart=f,a.selectionEnd=o+m.length-p.length}}else alert("Error: Browser version is too low");s.d_value=a.value,a.focus()},_.insertTab=function(s,a){a=a?new Array(a).fill(" ").join(""):"	";var c=s.getTextareaDom();if(l(c)){var o=c.selectionStart,u=c.selectionEnd,f=c.value,p=f.substring(0,o).split(`
`).pop();if(p.match(/^\s*[0-9]+\.\s+\S*/)){var m=p.replace(/(\d+)/,1);c.value=f.substring(0,o-m.length)+a+m+f.substring(u,f.length)}else p.match(/^\s*-\s+\S*/)?c.value=f.substring(0,o-p.length)+a+p+f.substring(u,f.length):c.value=f.substring(0,o)+a+f.substring(u,f.length);c.selectionStart=c.selectionEnd=o+a.length}else alert("Error: Browser version is too low");s.d_value=c.value,c.focus()},_.unInsertTab=function(s,a){var c=new RegExp(a?"\\s{"+a+"}":"	");console.log("regTab:",c);var o=s.getTextareaDom();if(l(o)){var u=o.selectionStart,f=o.selectionEnd,p=o.value,m=p.substring(0,u).split(`
`).pop();m.search(c)>=0&&(o.value=p.substring(0,u-m.length)+m.replace(c,"")+p.substring(f,p.length),o.selectionStart=o.selectionEnd=u-(a||1))}else alert("Error: Browser version is too low");s.d_value=o.value,o.focus()},_.insertEnter=function(s,a){var c=s.getTextareaDom();if(l(c)){var o=c.selectionStart,u=c.selectionEnd,f=c.value,p=f.substring(0,o).split(`
`).pop(),m=p.match(/^\s*(?:[0-9]+\.|-)\s+\S+/);if(m){a.preventDefault();var g=m.shift().match(/^\s*(?:[0-9]+\.|-)\s/).shift();if(g.search(/-/)>=0)c.value=f.substring(0,o)+`
`+g+f.substring(u,f.length),c.selectionStart=c.selectionEnd=o+g.length+1;else{var b=g.replace(/(\d+)/,parseInt(g)+1);c.value=f.substring(0,o)+`
`+b+f.substring(u,f.length),c.selectionStart=c.selectionEnd=o+b.length+1}}else{var y=p.match(/^\s*(?:[0-9]+\.|-)\s+$/);if(y){a.preventDefault();var k=y.shift().length;c.value=f.substring(0,o-k)+`
`+f.substring(u,f.length),c.selectionStart=c.selectionEnd=o-k}}}else alert("Error: Browser version is too low");s.d_value=c.value,c.focus()},_.getNavigation=function(s,a){var c=void 0;(c=s.$refs.navigationContent).innerHTML=s.d_render;var o=c.children;if(o.length)for(var u=0;u<o.length;u++)f(o[u],u);function f(p,m,g){/^H[1-6]{1}$/.exec(p.tagName)?p.onclick=function(){var b=s.$refs.vShowContent,y=s.$refs.vNoteEdit;s.s_subfield?s.s_preview_switch&&(y.scrollTop=b.children[m].offsetTop*(y.scrollHeight-y.offsetHeight)/(b.scrollHeight-b.offsetHeight)):s.s_preview_switch&&(b.scrollTop=b.children[m].offsetTop)}:p.style.display="none"}},_.scrollLink=function(s,a){var c=s.srcElement?s.srcElement:s.target,o=c.scrollTop/(c.scrollHeight-c.offsetHeight);a.edit_scroll_height>=0&&c.scrollHeight!==a.edit_scroll_height&&c.scrollHeight-c.offsetHeight-c.scrollTop<=30&&(a.$refs.vNoteEdit.scrollTop=c.scrollHeight-c.offsetHeight,o=1),a.edit_scroll_height=c.scrollHeight,a.$refs.vShowContent.scrollHeight>a.$refs.vShowContent.offsetHeight&&(a.$refs.vShowContent.scrollTop=(a.$refs.vShowContent.scrollHeight-a.$refs.vShowContent.offsetHeight)*o)},_.fullscreenchange=function(s){s.$el.addEventListener("fullscreenchange",function(a){s.$toolbar_right_read_change_status()},!1),s.$el.addEventListener("mozfullscreenchange",function(a){s.$toolbar_right_read_change_status()},!1),s.$el.addEventListener("webkitfullscreenchange",function(a){s.$toolbar_right_read_change_status()},!1),s.$el.addEventListener("msfullscreenchange",function(a){s.$toolbar_right_read_change_status()},!1)},_.windowResize=function(s){function a(){s.$el.clientWidth>768?s.s_subfield=s.subfield:s.s_subfield=!1}a(),window.addEventListener("resize",a)},_.ImagePreviewListener=function(s){s.$refs.vShowContent.addEventListener("click",function(a){var c=(a=a||window.event).srcElement?a.srcElement:a.target;c.tagName==="IMG"&&(s.imageClick!=null?s.imageClick(c):s.d_preview_imgsrc=c.src)})}},function(d,_,i){var e=i(38).FilterCSS,t=i(38).getDefaultWhiteList,r=i(39);function n(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]}}var l=new e;function s(C){return C.replace(a,"&lt;").replace(c,"&gt;")}var a=/</g,c=/>/g,o=/"/g,u=/&quot;/g,f=/&#([a-zA-Z0-9]*);?/gim,p=/&colon;?/gim,m=/&newline;?/gim,g=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,b=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,y=/u\s*r\s*l\s*\(.*/gi;function k(C){return C.replace(o,"&quot;")}function w(C){return C.replace(u,'"')}function v(C){return C.replace(f,function(O,j){return j[0]==="x"||j[0]==="X"?String.fromCharCode(parseInt(j.substr(1),16)):String.fromCharCode(parseInt(j,10))})}function x(C){return C.replace(p,":").replace(m," ")}function T(C){for(var O="",j=0,D=C.length;j<D;j++)O+=C.charCodeAt(j)<32?" ":C.charAt(j);return r.trim(O)}function S(C){return C=T(C=x(C=v(C=w(C))))}function E(C){return C=s(C=k(C))}_.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]},_.getDefaultWhiteList=n,_.onTag=function(C,O,j){},_.onIgnoreTag=function(C,O,j){},_.onTagAttr=function(C,O,j){},_.onIgnoreTagAttr=function(C,O,j){},_.safeAttrValue=function(C,O,j,D){if(j=S(j),O==="href"||O==="src"){if((j=r.trim(j))==="#")return"#";if(j.substr(0,7)!=="http://"&&j.substr(0,8)!=="https://"&&j.substr(0,7)!=="mailto:"&&j.substr(0,4)!=="tel:"&&j.substr(0,11)!=="data:image/"&&j.substr(0,6)!=="ftp://"&&j.substr(0,2)!=="./"&&j.substr(0,3)!=="../"&&j[0]!=="#"&&j[0]!=="/")return""}else if(O==="background"){if(g.lastIndex=0,g.test(j))return""}else if(O==="style"){if(b.lastIndex=0,b.test(j)||(y.lastIndex=0,y.test(j)&&(g.lastIndex=0,g.test(j))))return"";D!==!1&&(j=(D=D||l).process(j))}return j=E(j)},_.escapeHtml=s,_.escapeQuote=k,_.unescapeQuote=w,_.escapeHtmlEntities=v,_.escapeDangerHtml5Entities=x,_.clearNonPrintableCharacter=T,_.friendlyAttrValue=S,_.escapeAttrValue=E,_.onIgnoreTagStripAll=function(){return""},_.StripTagBody=function(C,O){typeof O!="function"&&(O=function(){});var j=!Array.isArray(C),D=[],L=!1;return{onIgnoreTag:function($,B,M){if(function(V){return!!j||r.indexOf(C,V)!==-1}($)){if(M.isClosing){var P="[/removed]",U=M.position+P.length;return D.push([L!==!1?L:M.position,U]),L=!1,P}return L||(L=M.position),"[removed]"}return O($,B,M)},remove:function($){var B="",M=0;return r.forEach(D,function(P){B+=$.slice(M,P[0]),M=P[1]}),B+=$.slice(M)}}},_.stripCommentTag=function(C){for(var O="",j=0;j<C.length;){var D=C.indexOf("<!--",j);if(D===-1){O+=C.slice(j);break}O+=C.slice(j,D);var L=C.indexOf("-->",D);if(L===-1)break;j=L+3}return O},_.stripBlankChar=function(C){var O=C.split("");return(O=O.filter(function(j){var D=j.charCodeAt(0);return D!==127&&(!(D<=31)||D===10||D===13)})).join("")},_.cssFilter=l,_.getDefaultCSSWhiteList=t},function(d,_){function i(){var t={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1};return t}var e=/javascript\s*\:/gim;_.whiteList=i(),_.getDefaultWhiteList=i,_.onAttr=function(t,r,n){},_.onIgnoreAttr=function(t,r,n){},_.safeAttrValue=function(t,r){return e.test(r)?"":r}},function(d,_){d.exports={indexOf:function(i,e){var t,r;if(Array.prototype.indexOf)return i.indexOf(e);for(t=0,r=i.length;t<r;t++)if(i[t]===e)return t;return-1},forEach:function(i,e,t){var r,n;if(Array.prototype.forEach)return i.forEach(e,t);for(r=0,n=i.length;r<n;r++)e.call(t,i[r],r,i)},trim:function(i){return String.prototype.trim?i.trim():i.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(i){return String.prototype.trimRight?i.trimRight():i.replace(/(\s*$)/g,"")}}},function(d,_,i){var e=i(39);function t(o){var u,f=e.spaceIndex(o);return u=f===-1?o.slice(1,-1):o.slice(1,f+1),(u=e.trim(u).toLowerCase()).slice(0,1)==="/"&&(u=u.slice(1)),u.slice(-1)==="/"&&(u=u.slice(0,-1)),u}function r(o){return o.slice(0,2)==="</"}var n=/[^a-zA-Z0-9\\_:.-]/gim;function l(o,u){for(;u<o.length;u++){var f=o[u];if(f!==" ")return f==="="?u:-1}}function s(o,u){for(;u<o.length;u++){var f=o[u];if(f!==" ")return f==="'"||f==='"'?u:-1}}function a(o,u){for(;u>0;u--){var f=o[u];if(f!==" ")return f==="="?u:-1}}function c(o){return function(u){return u[0]==='"'&&u[u.length-1]==='"'||u[0]==="'"&&u[u.length-1]==="'"}(o)?o.substr(1,o.length-2):o}_.parseTag=function(o,u,f){var p="",m=0,g=!1,b=!1,y=0,k=o.length,w="",v="";e:for(y=0;y<k;y++){var x=o.charAt(y);if(g===!1){if(x==="<"){g=y;continue}}else if(b===!1){if(x==="<"){p+=f(o.slice(m,y)),g=y,m=y;continue}if(x===">"||y===k-1){p+=f(o.slice(m,g)),w=t(v=o.slice(g,y+1)),p+=u(g,p.length,w,v,r(v)),m=y+1,g=!1;continue}if(x==='"'||x==="'")for(var T=1,S=o.charAt(y-T);S.trim()===""||S==="=";){if(S==="="){b=x;continue e}S=o.charAt(y-++T)}}else if(x===b){b=!1;continue}}return m<k&&(p+=f(o.substr(m))),p},_.parseAttr=function(o,u){var f=0,p=0,m=[],g=!1,b=o.length;function y(x,T){if(!((x=(x=e.trim(x)).replace(n,"").toLowerCase()).length<1)){var S=u(x,T||"");S&&m.push(S)}}for(var k=0;k<b;k++){var w,v=o.charAt(k);if(g!==!1||v!=="=")if(g===!1||k!==p){if(/\s|\n|\t/.test(v)){if(o=o.replace(/\s|\n|\t/g," "),g===!1){if((w=l(o,k))===-1){y(e.trim(o.slice(f,k))),g=!1,f=k+1;continue}k=w-1;continue}if((w=a(o,k-1))===-1){y(g,c(e.trim(o.slice(f,k)))),g=!1,f=k+1;continue}}}else{if((w=o.indexOf(v,k+1))===-1)break;y(g,e.trim(o.slice(p+1,w))),g=!1,f=(k=w)+1}else g=o.slice(f,k),f=k+1,p=o.charAt(f)==='"'||o.charAt(f)==="'"?f:s(o,k+1)}return f<o.length&&(g===!1?y(o.slice(f)):y(g,c(e.trim(o.slice(f))))),e.trim(m.join(" "))}},function(d,_,i){d.exports=i(140)},function(d,_,i){d.exports.encode=i(141),d.exports.decode=i(142),d.exports.format=i(143),d.exports.parse=i(144)},function(d,_){d.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/},function(d,_){d.exports=/[\0-\x1F\x7F-\x9F]/},function(d,_){d.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/},function(d,_,i){var e=`<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>`,t="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",r=new RegExp("^(?:"+e+"|"+t+"|<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->|<[?].*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"),n=new RegExp("^(?:"+e+"|"+t+")");d.exports.HTML_TAG_RE=r,d.exports.HTML_OPEN_CLOSE_TAG_RE=n},function(d,_,i){function e(t,r){var n,l,s,a,c,o=[],u=r.length;for(n=0;n<u;n++)(s=r[n]).marker===126&&s.end!==-1&&(a=r[s.end],(c=t.tokens[s.token]).type="s_open",c.tag="s",c.nesting=1,c.markup="~~",c.content="",(c=t.tokens[a.token]).type="s_close",c.tag="s",c.nesting=-1,c.markup="~~",c.content="",t.tokens[a.token-1].type==="text"&&t.tokens[a.token-1].content==="~"&&o.push(a.token-1));for(;o.length;){for(l=(n=o.pop())+1;l<t.tokens.length&&t.tokens[l].type==="s_close";)l++;n!==--l&&(c=t.tokens[l],t.tokens[l]=t.tokens[n],t.tokens[n]=c)}}d.exports.tokenize=function(t,r){var n,l,s,a,c=t.pos,o=t.src.charCodeAt(c);if(r||o!==126||(s=(l=t.scanDelims(t.pos,!0)).length,a=String.fromCharCode(o),s<2))return!1;for(s%2&&(t.push("text","",0).content=a,s--),n=0;n<s;n+=2)t.push("text","",0).content=a+a,t.delimiters.push({marker:o,length:0,jump:n,token:t.tokens.length-1,end:-1,open:l.can_open,close:l.can_close});return t.pos+=l.length,!0},d.exports.postProcess=function(t){var r,n=t.tokens_meta,l=t.tokens_meta.length;for(e(t,t.delimiters),r=0;r<l;r++)n[r]&&n[r].delimiters&&e(t,n[r].delimiters)}},function(d,_,i){function e(t,r){var n,l,s,a,c,o;for(n=r.length-1;n>=0;n--)(l=r[n]).marker!==95&&l.marker!==42||l.end!==-1&&(s=r[l.end],o=n>0&&r[n-1].end===l.end+1&&r[n-1].token===l.token-1&&r[l.end+1].token===s.token+1&&r[n-1].marker===l.marker,c=String.fromCharCode(l.marker),(a=t.tokens[l.token]).type=o?"strong_open":"em_open",a.tag=o?"strong":"em",a.nesting=1,a.markup=o?c+c:c,a.content="",(a=t.tokens[s.token]).type=o?"strong_close":"em_close",a.tag=o?"strong":"em",a.nesting=-1,a.markup=o?c+c:c,a.content="",o&&(t.tokens[r[n-1].token].content="",t.tokens[r[l.end+1].token].content="",n--))}d.exports.tokenize=function(t,r){var n,l,s=t.pos,a=t.src.charCodeAt(s);if(r||a!==95&&a!==42)return!1;for(l=t.scanDelims(t.pos,a===42),n=0;n<l.length;n++)t.push("text","",0).content=String.fromCharCode(a),t.delimiters.push({marker:a,length:l.length,jump:n,token:t.tokens.length-1,end:-1,open:l.can_open,close:l.can_close});return t.pos+=l.length,!0},d.exports.postProcess=function(t){var r,n=t.tokens_meta,l=t.tokens_meta.length;for(e(t,t.delimiters),r=0;r<l;r++)n[r]&&n[r].delimiters&&e(t,n[r].delimiters)}},function(d,_,i){i.r(_);var e=i(76),t=i(22);for(var r in t)["default"].indexOf(r)<0&&function(s){i.d(_,s,function(){return t[s]})}(r);i(214);var n=i(3);const l=i.n(n)()(t.default,[["render",e.a],["__scopeId","data-v-218640b4"]]);_.default=l},function(d,_,i){var e=i(215);e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[d.i,e,""]]),e.locals&&(d.exports=e.locals),(0,i(44).default)("74ee9320",e,!1,{})},function(d,_,i){i.r(_);var e=i(77),t=i(23);for(var r in t)["default"].indexOf(r)<0&&function(s){i.d(_,s,function(){return t[s]})}(r);var n=i(3);const l=i.n(n)()(t.default,[["render",e.a]]);_.default=l},function(d,_,i){var e=i(218);e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[d.i,e,""]]),e.locals&&(d.exports=e.locals),(0,i(44).default)("4958985a",e,!1,{})},function(d,_,i){var e=i(220);e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[d.i,e,""]]),e.locals&&(d.exports=e.locals),(0,i(44).default)("200b97d3",e,!1,{})},function(d,_,i){i.d(_,"a",function(){return o});var e=i(0);const t={class:"v-note-panel"},r=["innerHTML"],n={class:"v-note-navigation-title"},l={ref:"help"},s=["innerHTML"],a=["src"],c=["innerHTML"];function o(u,f,p,m,g,b){const y=Object(e.resolveComponent)("v-md-toolbar-left"),k=Object(e.resolveComponent)("v-md-toolbar-right"),w=Object(e.resolveComponent)("v-autoTextarea");return Object(e.openBlock)(),Object(e.createElementBlock)("div",{class:Object(e.normalizeClass)([[{fullscreen:g.s_fullScreen,shadow:p.boxShadow}],"v-note-wrapper markdown-body"]),style:Object(e.normalizeStyle)({"box-shadow":p.boxShadow?p.boxShadowStyle:""})},[Object(e.createCommentVNode)("工具栏"),Object(e.withDirectives)(Object(e.createElementVNode)("div",{class:"v-note-op",style:Object(e.normalizeStyle)({background:p.toolbarsBackground})},[Object(e.createVNode)(y,{ref:"toolbar_left",editable:p.editable,transition:p.transition,d_words:g.d_words,onToolbar_left_click:b.toolbar_left_click,onToolbar_left_addlink:b.toolbar_left_addlink,toolbars:p.toolbars,onImgAdd:b.$imgAdd,onImgDel:b.$imgDel,onImgTouch:b.$imgTouch,image_filter:p.imageFilter,class:Object(e.normalizeClass)({transition:p.transition})},{"left-toolbar-before":Object(e.withCtx)(()=>[Object(e.renderSlot)(u.$slots,"left-toolbar-before",{},void 0,!0)]),"left-toolbar-after":Object(e.withCtx)(()=>[Object(e.renderSlot)(u.$slots,"left-toolbar-after",{},void 0,!0)]),_:3},8,["editable","transition","d_words","onToolbar_left_click","onToolbar_left_addlink","toolbars","onImgAdd","onImgDel","onImgTouch","image_filter","class"]),Object(e.createVNode)(k,{ref:"toolbar_right",d_words:g.d_words,onToolbar_right_click:b.toolbar_right_click,toolbars:p.toolbars,s_subfield:g.s_subfield,s_preview_switch:g.s_preview_switch,s_fullScreen:g.s_fullScreen,s_html_code:g.s_html_code,s_navigation:g.s_navigation,class:Object(e.normalizeClass)({transition:p.transition})},{"right-toolbar-before":Object(e.withCtx)(()=>[Object(e.renderSlot)(u.$slots,"right-toolbar-before",{},void 0,!0)]),"right-toolbar-after":Object(e.withCtx)(()=>[Object(e.renderSlot)(u.$slots,"right-toolbar-after",{},void 0,!0)]),_:3},8,["d_words","onToolbar_right_click","toolbars","s_subfield","s_preview_switch","s_fullScreen","s_html_code","s_navigation","class"])],4),[[e.vShow,p.toolbarsFlag]]),Object(e.createCommentVNode)("编辑展示区域"),Object(e.createElementVNode)("div",t,[Object(e.createCommentVNode)("编辑区"),Object(e.createElementVNode)("div",{ref:"vNoteEdit",onScroll:f[1]||(f[1]=(...v)=>b.$v_edit_scroll&&b.$v_edit_scroll(...v)),class:Object(e.normalizeClass)(["v-note-edit divarea-wrapper",{"scroll-style":g.s_scrollStyle,"scroll-style-border-radius":g.s_scrollStyle&&!g.s_preview_switch&&!g.s_html_code,"single-edit":!g.s_preview_switch&&!g.s_html_code,"single-show":!g.s_subfield&&g.s_preview_switch||!g.s_subfield&&g.s_html_code,transition:p.transition}]),onClick:f[2]||(f[2]=(...v)=>b.textAreaFocus&&b.textAreaFocus(...v))},[Object(e.createElementVNode)("div",{class:"content-input-wrapper",style:Object(e.normalizeStyle)({"background-color":p.editorBackground})},[Object(e.createCommentVNode)(" 双栏 "),Object(e.createVNode)(w,{ref:"vNoteTextarea",placeholder:p.placeholder?p.placeholder:g.d_words.start_editor,class:"content-input",fontSize:p.fontSize,lineHeight:"1.5",modelValue:g.d_value,"onUpdate:modelValue":f[0]||(f[0]=v=>g.d_value=v),fullHeight:"",style:Object(e.normalizeStyle)({"background-color":p.editorBackground})},null,8,["placeholder","fontSize","modelValue","style"])],4)],34),Object(e.createCommentVNode)("展示区"),Object(e.withDirectives)(Object(e.createElementVNode)("div",{class:Object(e.normalizeClass)([{"single-show":!g.s_subfield&&g.s_preview_switch||!g.s_subfield&&g.s_html_code},"v-note-show"])},[Object(e.withDirectives)(Object(e.createElementVNode)("div",{ref:"vShowContent",innerHTML:g.d_render,class:Object(e.normalizeClass)([{"scroll-style":g.s_scrollStyle,"scroll-style-border-radius":g.s_scrollStyle},"v-show-content"]),style:Object(e.normalizeStyle)({"background-color":p.previewBackground})},null,14,r),[[e.vShow,!g.s_html_code]]),Object(e.withDirectives)(Object(e.createElementVNode)("div",{class:Object(e.normalizeClass)([{"scroll-style":g.s_scrollStyle,"scroll-style-border-radius":g.s_scrollStyle},"v-show-content-html"]),style:Object(e.normalizeStyle)({"background-color":p.previewBackground})},Object(e.toDisplayString)(g.d_render),7),[[e.vShow,g.s_html_code]])],2),[[e.vShow,g.s_preview_switch||g.s_html_code]]),Object(e.createCommentVNode)("标题导航"),Object(e.createVNode)(e.Transition,{name:"slideTop",persisted:""},{default:Object(e.withCtx)(()=>[Object(e.withDirectives)(Object(e.createElementVNode)("div",{class:Object(e.normalizeClass)(["v-note-navigation-wrapper",{transition:p.transition}])},[Object(e.createElementVNode)("div",n,[Object(e.createTextVNode)(Object(e.toDisplayString)(g.d_words.navigation_title),1),Object(e.createElementVNode)("i",{onClick:f[3]||(f[3]=v=>b.toolbar_right_click("navigation")),class:"fa fa-mavon-times v-note-navigation-close","aria-hidden":"true"})]),Object(e.createElementVNode)("div",{ref:"navigationContent",class:Object(e.normalizeClass)(["v-note-navigation-content",{"scroll-style":g.s_scrollStyle}])},null,2)],2),[[e.vShow,g.s_navigation]])]),_:1})]),Object(e.createCommentVNode)("帮助文档"),Object(e.createVNode)(e.Transition,{name:"fade"},{default:Object(e.withCtx)(()=>[Object(e.createElementVNode)("div",l,[g.s_help?(Object(e.openBlock)(),Object(e.createElementBlock)("div",{key:0,onClick:f[5]||(f[5]=Object(e.withModifiers)(v=>b.toolbar_right_click("help"),["self"])),class:"v-note-help-wrapper"},[Object(e.createElementVNode)("div",{class:Object(e.normalizeClass)(["v-note-help-content markdown-body",{shadow:p.boxShadow}])},[Object(e.createElementVNode)("i",{onClick:f[4]||(f[4]=Object(e.withModifiers)(v=>b.toolbar_right_click("help"),["stop","prevent"])),class:"fa fa-mavon-times","aria-hidden":"true"}),Object(e.createElementVNode)("div",{class:"scroll-style v-note-help-show",innerHTML:g.d_help},null,8,s)],2)])):Object(e.createCommentVNode)("v-if",!0)],512)]),_:1}),Object(e.createCommentVNode)(" 预览图片 "),Object(e.createVNode)(e.Transition,{name:"fade"},{default:Object(e.withCtx)(()=>[g.d_preview_imgsrc?(Object(e.openBlock)(),Object(e.createElementBlock)("div",{key:0,onClick:f[6]||(f[6]=v=>g.d_preview_imgsrc=null),class:"v-note-img-wrapper"},[Object(e.createElementVNode)("img",{src:g.d_preview_imgsrc,alt:"none"},null,8,a)])):Object(e.createCommentVNode)("v-if",!0)]),_:1}),Object(e.createCommentVNode)("阅读模式"),Object(e.createElementVNode)("div",{class:Object(e.normalizeClass)([{show:g.s_readmodel},"v-note-read-model scroll-style"]),ref:"vReadModel"},[Object(e.createElementVNode)("div",{ref:"vNoteReadContent",class:"v-note-read-content",innerHTML:g.d_render},null,8,c)],2)],6)}},function(d,_,i){i.d(_,"a",function(){return Z});var e=i(0);const t={class:"v-left-item"},r=["disabled","title"],n=["disabled","title"],l=["disabled","title"],s={key:3,class:"op-icon-divider"},a=["disabled","title"],c=["disabled","title"],o=["disabled","title"],u=["disabled","title"],f=["disabled","title"],p=["disabled","title"],m=["disabled","title"],g=["disabled","title"],b={key:12,class:"op-icon-divider"},y=["disabled","title"],k=["disabled","title"],w=["disabled","title"],v={key:16,class:"op-icon-divider"},x=["disabled","title"],T=["disabled"],S={class:"dropdown-item",style:{overflow:"hidden"}},E=["title","onClick"],C=["onClick","title"],O=["src"],j=["disabled","title"],D=["disabled","title"],L={key:21,class:"op-icon-divider"},$=["title"],B=["title"],M=["title"],P=["title"],U={key:0,class:"add-image-link-wrapper"},V={class:"add-image-link"},W={class:"title"},N={class:"link-text input-wrapper"},q=["placeholder"],G={class:"link-addr input-wrapper"},X=["placeholder"];function Z(Y,z,A,re,J,H){return Object(e.openBlock)(),Object(e.createElementBlock)("div",t,[Object(e.renderSlot)(Y.$slots,"left-toolbar-before",{},void 0,!0),A.toolbars.bold?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:0,disabled:!A.editable,type:"button",onClick:z[0]||(z[0]=I=>H.$clicks("bold")),class:"op-icon fa fa-mavon-bold","aria-hidden":"true",title:A.d_words.tl_bold+" (ctrl+b)"},null,8,r)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.italic?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:1,disabled:!A.editable,type:"button",onClick:z[1]||(z[1]=I=>H.$clicks("italic")),class:"op-icon fa fa-mavon-italic","aria-hidden":"true",title:A.d_words.tl_italic+" (ctrl+i)"},null,8,n)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.header?(Object(e.openBlock)(),Object(e.createElementBlock)("div",{key:2,class:Object(e.normalizeClass)([{selected:J.s_header_dropdown_open},"op-icon fa fa-mavon-header dropdown dropdown-wrapper"]),disabled:!A.editable,type:"button",onMouseleave:z[10]||(z[10]=(...I)=>H.$mouseleave_header_dropdown&&H.$mouseleave_header_dropdown(...I)),onMouseenter:z[11]||(z[11]=(...I)=>H.$mouseenter_header_dropdown&&H.$mouseenter_header_dropdown(...I)),"aria-hidden":"true",title:A.d_words.tl_header+" (ctrl+h)"},[Object(e.createVNode)(e.Transition,{name:"fade",persisted:""},{default:Object(e.withCtx)(()=>[Object(e.withDirectives)(Object(e.createElementVNode)("div",{class:Object(e.normalizeClass)(["op-header popup-dropdown",{transition:A.transition}]),onMouseenter:z[8]||(z[8]=(...I)=>H.$mouseenter_header_dropdown&&H.$mouseenter_header_dropdown(...I)),onMouseleave:z[9]||(z[9]=(...I)=>H.$mouseleave_header_dropdown&&H.$mouseleave_header_dropdown(...I))},[Object(e.createElementVNode)("div",{title:"#",class:"dropdown-item",onClick:z[2]||(z[2]=Object(e.withModifiers)(I=>H.$click_header("header1"),["stop"]))},[Object(e.createElementVNode)("span",null,Object(e.toDisplayString)(A.d_words.tl_header_one),1)]),Object(e.createElementVNode)("div",{title:"## ",class:"dropdown-item",onClick:z[3]||(z[3]=Object(e.withModifiers)(I=>H.$click_header("header2"),["stop"]))},[Object(e.createElementVNode)("span",null,Object(e.toDisplayString)(A.d_words.tl_header_two),1)]),Object(e.createElementVNode)("div",{title:"### ",class:"dropdown-item",onClick:z[4]||(z[4]=Object(e.withModifiers)(I=>H.$click_header("header3"),["stop"]))},[Object(e.createElementVNode)("span",null,Object(e.toDisplayString)(A.d_words.tl_header_three),1)]),Object(e.createElementVNode)("div",{title:"#### ",class:"dropdown-item",onClick:z[5]||(z[5]=Object(e.withModifiers)(I=>H.$click_header("header4"),["stop"]))},[Object(e.createElementVNode)("span",null,Object(e.toDisplayString)(A.d_words.tl_header_four),1)]),Object(e.createElementVNode)("div",{title:"##### ",class:"dropdown-item",onClick:z[6]||(z[6]=Object(e.withModifiers)(I=>H.$click_header("header5"),["stop"]))},[Object(e.createElementVNode)("span",null,Object(e.toDisplayString)(A.d_words.tl_header_five),1)]),Object(e.createElementVNode)("div",{title:"###### ",class:"dropdown-item",onClick:z[7]||(z[7]=Object(e.withModifiers)(I=>H.$click_header("header6"),["stop"]))},[Object(e.createElementVNode)("span",null,Object(e.toDisplayString)(A.d_words.tl_header_six),1)])],34),[[e.vShow,J.s_header_dropdown_open]])]),_:1})],42,l)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.header||A.toolbars.italic||A.toolbars.bold?(Object(e.openBlock)(),Object(e.createElementBlock)("span",s)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.underline?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:4,disabled:!A.editable,type:"button",onClick:z[12]||(z[12]=I=>H.$clicks("underline")),class:"op-icon fa fa-mavon-underline",title:A.d_words.tl_underline+" (ctrl+u)","aria-hidden":"true"},null,8,a)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.strikethrough?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:5,disabled:!A.editable,type:"button",onClick:z[13]||(z[13]=I=>H.$clicks("strikethrough")),class:"op-icon fa fa-mavon-strikethrough",title:A.d_words.tl_strikethrough+" (ctrl+shift+d)","aria-hidden":"true"},null,8,c)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.mark?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:6,disabled:!A.editable,type:"button",onClick:z[14]||(z[14]=I=>H.$clicks("mark")),class:"op-icon fa fa-mavon-thumb-tack",title:A.d_words.tl_mark+" (ctrl+m)","aria-hidden":"true"},null,8,o)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.superscript?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:7,disabled:!A.editable,type:"button",onClick:z[15]||(z[15]=I=>H.$clicks("superscript")),class:"op-icon fa fa-mavon-superscript","aria-hidden":"true",title:A.d_words.tl_superscript+" (ctrl+alt+s)"},null,8,u)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.subscript?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:8,disabled:!A.editable,type:"button",onClick:z[16]||(z[16]=I=>H.$clicks("subscript")),class:"op-icon fa fa-mavon-subscript","aria-hidden":"true",title:A.d_words.tl_subscript+" (ctrl+shift+s)"},null,8,f)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.alignleft?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:9,disabled:!A.editable,type:"button",onClick:z[17]||(z[17]=I=>H.$clicks("alignleft")),class:"op-icon fa fa-mavon-align-left","aria-hidden":"true",title:A.d_words.tl_alignleft+" (ctrl+l)"},null,8,p)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.aligncenter?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:10,disabled:!A.editable,type:"button",onClick:z[18]||(z[18]=I=>H.$clicks("aligncenter")),class:"op-icon fa fa-mavon-align-center","aria-hidden":"true",title:A.d_words.tl_aligncenter+" (ctrl+e)"},null,8,m)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.alignright?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:11,disabled:!A.editable,type:"button",onClick:z[19]||(z[19]=I=>H.$clicks("alignright")),class:"op-icon fa fa-mavon-align-right","aria-hidden":"true",title:A.d_words.tl_alignright+" (ctrl+r)"},null,8,g)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.superscript||A.toolbars.subscript||A.toolbars.underline||A.toolbars.strikethrough||A.toolbars.mark?(Object(e.openBlock)(),Object(e.createElementBlock)("span",b)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.quote?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:13,disabled:!A.editable,type:"button",onClick:z[20]||(z[20]=I=>H.$clicks("quote")),class:"op-icon fa fa-mavon-quote-left","aria-hidden":"true",title:A.d_words.tl_quote+" (ctrl+q)"},null,8,y)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.ol?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:14,disabled:!A.editable,type:"button",onClick:z[21]||(z[21]=I=>H.$clicks("ol")),class:"op-icon fa fa-mavon-list-ol","aria-hidden":"true",title:A.d_words.tl_ol+" (ctrl+o)"},null,8,k)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.ul?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:15,disabled:!A.editable,type:"button",onClick:z[22]||(z[22]=I=>H.$clicks("ul")),class:"op-icon fa fa-mavon-list-ul","aria-hidden":"true",title:A.d_words.tl_ul+" (ctrl+alt+u)"},null,8,w)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.ul||A.toolbars.ol||A.toolbars.quote?(Object(e.openBlock)(),Object(e.createElementBlock)("span",v)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.link?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:17,disabled:!A.editable,type:"button",onClick:z[23]||(z[23]=Object(e.withModifiers)(I=>H.$toggle_imgLinkAdd("link"),["stop"])),class:"op-icon fa fa-mavon-link","aria-hidden":"true",title:A.d_words.tl_link+" (ctrl+l)"},null,8,x)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.imagelink?(Object(e.openBlock)(),Object(e.createElementBlock)("div",{key:18,disabled:!A.editable,class:Object(e.normalizeClass)([{selected:J.s_img_dropdown_open},"op-icon fa fa-mavon-picture-o dropdown dropdown-wrapper"]),type:"button",onMouseleave:z[28]||(z[28]=(...I)=>H.$mouseleave_img_dropdown&&H.$mouseleave_img_dropdown(...I)),onMouseenter:z[29]||(z[29]=(...I)=>H.$mouseenter_img_dropdown&&H.$mouseenter_img_dropdown(...I)),"aria-hidden":"true"},[Object(e.createVNode)(e.Transition,{name:"fade",persisted:""},{default:Object(e.withCtx)(()=>[Object(e.withDirectives)(Object(e.createElementVNode)("div",{class:Object(e.normalizeClass)(["op-image popup-dropdown",{transition:A.transition}]),onMouseleave:z[26]||(z[26]=(...I)=>H.$mouseleave_img_dropdown&&H.$mouseleave_img_dropdown(...I)),onMouseenter:z[27]||(z[27]=(...I)=>H.$mouseenter_img_dropdown&&H.$mouseenter_img_dropdown(...I))},[Object(e.createElementVNode)("div",{class:"dropdown-item",onClick:z[24]||(z[24]=Object(e.withModifiers)(I=>H.$toggle_imgLinkAdd("imagelink"),["stop"]))},[Object(e.createElementVNode)("span",null,Object(e.toDisplayString)(A.d_words.tl_image),1)]),Object(e.createElementVNode)("div",S,[Object(e.createElementVNode)("input",{type:"file",accept:"image/gif,image/jpeg,image/jpg,image/png,image/svg",onChange:z[25]||(z[25]=I=>H.$imgAdd(I)),multiple:"multiple"},null,32),Object(e.createTextVNode)(Object(e.toDisplayString)(A.d_words.tl_upload),1)]),(Object(e.openBlock)(!0),Object(e.createElementBlock)(e.Fragment,null,Object(e.renderList)(J.img_file,(I,te)=>(Object(e.openBlock)(),Object(e.createElementBlock)(e.Fragment,{key:te},[I&&I[1]?(Object(e.openBlock)(),Object(e.createElementBlock)("div",{key:0,class:"dropdown-item dropdown-images",title:I[1].name,onClick:Object(e.withModifiers)(oe=>H.$imgFileListClick(te),["stop"])},[Object(e.createElementVNode)("span",null,Object(e.toDisplayString)(I[1].name),1),Object(e.createElementVNode)("button",{type:"button",onClick:Object(e.withModifiers)(oe=>H.$imgDel(te),["stop"]),class:"op-icon fa fa-mavon-times","aria-hidden":"true",title:A.d_words.tl_upload_remove},null,8,C),Object(e.createCommentVNode)(" 缩略图展示 "),Object(e.createElementVNode)("img",{class:Object(e.normalizeClass)(["image-show",{transition:A.transition}]),src:I[1].miniurl,alt:"none"},null,10,O)],8,E)):Object(e.createCommentVNode)("v-if",!0)],64))),128))],34),[[e.vShow,J.s_img_dropdown_open]])]),_:1})],42,T)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.code?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:19,disabled:!A.editable,type:"button",onClick:z[30]||(z[30]=I=>H.$clicks("code")),class:"op-icon fa fa-mavon-code","aria-hidden":"true",title:A.d_words.tl_code+" (ctrl+alt+c)"},null,8,j)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.table?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:20,disabled:!A.editable,type:"button",onClick:z[31]||(z[31]=I=>H.$clicks("table")),class:"op-icon fa fa-mavon-table","aria-hidden":"true",title:A.d_words.tl_table+" (ctrl+alt+t)"},null,8,D)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.link||A.toolbars.imagelink||A.toolbars.code||A.toolbars.table?(Object(e.openBlock)(),Object(e.createElementBlock)("span",L)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.undo?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:22,type:"button",onClick:z[32]||(z[32]=I=>H.$clicks("undo")),class:"op-icon fa fa-mavon-undo","aria-hidden":"true",title:A.d_words.tl_undo+" (ctrl+z)"},null,8,$)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.redo?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:23,type:"button",onClick:z[33]||(z[33]=I=>H.$clicks("redo")),class:"op-icon fa fa-mavon-repeat","aria-hidden":"true",title:A.d_words.tl_redo+" (ctrl+y)"},null,8,B)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.trash?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:24,type:"button",onClick:z[34]||(z[34]=I=>H.$clicks("trash")),class:"op-icon fa fa-mavon-trash-o","aria-hidden":"true",title:A.d_words.tl_trash+" (ctrl+breakspace)"},null,8,M)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.save?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:25,type:"button",onClick:z[35]||(z[35]=I=>H.$clicks("save")),class:"op-icon fa fa-mavon-floppy-o","aria-hidden":"true",title:A.d_words.tl_save+" (ctrl+s)"},null,8,P)):Object(e.createCommentVNode)("v-if",!0),Object(e.renderSlot)(Y.$slots,"left-toolbar-after",{},void 0,!0),Object(e.createCommentVNode)(" 添加image链接 "),Object(e.createVNode)(e.Transition,{name:"fade"},{default:Object(e.withCtx)(()=>[J.s_img_link_open?(Object(e.openBlock)(),Object(e.createElementBlock)("div",U,[Object(e.createElementVNode)("div",V,[Object(e.createElementVNode)("i",{onClick:z[36]||(z[36]=Object(e.withModifiers)(I=>J.s_img_link_open=!1,["stop","prevent"])),class:"fa fa-mavon-times","aria-hidden":"true"}),Object(e.createElementVNode)("h3",W,Object(e.toDisplayString)(J.link_type=="link"?A.d_words.tl_popup_link_title:A.d_words.tl_popup_img_link_title),1),Object(e.createElementVNode)("div",N,[Object(e.withDirectives)(Object(e.createElementVNode)("input",{ref:"linkTextInput",type:"text","onUpdate:modelValue":z[37]||(z[37]=I=>J.link_text=I),placeholder:J.link_type=="link"?A.d_words.tl_popup_link_text:A.d_words.tl_popup_img_link_text},null,8,q),[[e.vModelText,J.link_text]])]),Object(e.createElementVNode)("div",G,[Object(e.withDirectives)(Object(e.createElementVNode)("input",{type:"text","onUpdate:modelValue":z[38]||(z[38]=I=>J.link_addr=I),placeholder:J.link_type=="link"?A.d_words.tl_popup_link_addr:A.d_words.tl_popup_img_link_addr},null,8,X),[[e.vModelText,J.link_addr]])]),Object(e.createElementVNode)("div",{class:"op-btn cancel",onClick:z[39]||(z[39]=Object(e.withModifiers)(I=>J.s_img_link_open=!1,["stop"]))},Object(e.toDisplayString)(A.d_words.tl_popup_link_cancel),1),Object(e.createElementVNode)("div",{class:"op-btn sure",onClick:z[40]||(z[40]=Object(e.withModifiers)(I=>H.$imgLinkAdd(),["stop"]))},Object(e.toDisplayString)(A.d_words.tl_popup_link_sure),1)])])):Object(e.createCommentVNode)("v-if",!0)]),_:1})])}},function(d,_,i){i.d(_,"a",function(){return b});var e=i(0);const t={class:"v-right-item"},r=["title"],n=["title"],l=["title"],s=["title"],a=["title"],c=["title"],o=["title"],u=["title"],f={key:8,class:"op-icon-divider"},p=["title"],m=["title"],g=["title"];function b(y,k,w,v,x,T){return Object(e.openBlock)(),Object(e.createElementBlock)("div",t,[Object(e.renderSlot)(y.$slots,"right-toolbar-before"),w.toolbars.navigation?Object(e.withDirectives)((Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:0,type:"button",onClick:k[0]||(k[0]=S=>T.$clicks("navigation")),class:"op-icon fa fa-mavon-bars","aria-hidden":"true",title:w.d_words.tl_navigation_on+" (F8)"},null,8,r)),[[e.vShow,!w.s_navigation]]):Object(e.createCommentVNode)("v-if",!0),w.toolbars.navigation?Object(e.withDirectives)((Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:1,type:"button",onClick:k[1]||(k[1]=S=>T.$clicks("navigation")),class:"op-icon fa fa-mavon-bars selected","aria-hidden":"true",title:w.d_words.tl_navigation_off+" (F8)"},null,8,n)),[[e.vShow,w.s_navigation]]):Object(e.createCommentVNode)("v-if",!0),w.toolbars.preview?Object(e.withDirectives)((Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:2,type:"button",onClick:k[2]||(k[2]=S=>T.$clicks("preview")),class:"op-icon fa fa-mavon-eye-slash selected","aria-hidden":"true",title:w.d_words.tl_edit+" (F9)"},null,8,l)),[[e.vShow,w.s_preview_switch]]):Object(e.createCommentVNode)("v-if",!0),w.toolbars.preview?Object(e.withDirectives)((Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:3,type:"button",onClick:k[3]||(k[3]=S=>T.$clicks("preview")),class:"op-icon fa fa-mavon-eye","aria-hidden":"true",title:w.d_words.tl_preview+" (F9)"},null,8,s)),[[e.vShow,!w.s_preview_switch]]):Object(e.createCommentVNode)("v-if",!0),w.toolbars.fullscreen?Object(e.withDirectives)((Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:4,type:"button",onClick:k[4]||(k[4]=S=>T.$clicks("fullscreen")),class:"op-icon fa fa-mavon-arrows-alt",title:w.d_words.tl_fullscreen_on+" (F10)","aria-hidden":"true"},null,8,a)),[[e.vShow,!w.s_fullScreen]]):Object(e.createCommentVNode)("v-if",!0),w.toolbars.fullscreen?Object(e.withDirectives)((Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:5,type:"button",onClick:k[5]||(k[5]=S=>T.$clicks("fullscreen")),class:"op-icon fa fa-mavon-compress selected",title:w.d_words.tl_fullscreen_off+" (F10)","aria-hidden":"true"},null,8,c)),[[e.vShow,w.s_fullScreen]]):Object(e.createCommentVNode)("v-if",!0),w.toolbars.readmodel?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:6,type:"button",onClick:k[6]||(k[6]=S=>T.$clicks("read")),class:"op-icon fa fa-mavon-window-maximize","aria-hidden":"true",title:w.d_words.tl_read+" (F11)"},null,8,o)):Object(e.createCommentVNode)("v-if",!0),w.toolbars.subfield?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:7,type:"button",onClick:k[7]||(k[7]=S=>T.$clicks("subfield")),class:Object(e.normalizeClass)(["op-icon fa fa-mavon-columns",{selected:w.s_subfield}]),"aria-hidden":"true",title:(w.s_subfield?w.d_words.tl_single_column:w.d_words.tl_double_column)+" (F12)"},null,10,u)):Object(e.createCommentVNode)("v-if",!0),w.toolbars.help&&w.toolbars.htmlcode&&w.toolbars.readmodel&&w.toolbars.fullscreen&&w.toolbars.subfield&&w.toolbars.navigation?(Object(e.openBlock)(),Object(e.createElementBlock)("span",f)):Object(e.createCommentVNode)("v-if",!0),w.toolbars.htmlcode?Object(e.withDirectives)((Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:9,type:"button",onClick:k[8]||(k[8]=S=>T.$clicks("html")),class:"op-icon fa fa-mavon-code",title:w.d_words.tl_html_on,"aria-hidden":"true"},null,8,p)),[[e.vShow,!w.s_html_code]]):Object(e.createCommentVNode)("v-if",!0),w.toolbars.htmlcode?Object(e.withDirectives)((Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:10,type:"button",onClick:k[9]||(k[9]=S=>T.$clicks("html")),class:"op-icon fa fa-mavon-code selected",title:w.d_words.tl_html_off,"aria-hidden":"true"},null,8,m)),[[e.vShow,w.s_html_code]]):Object(e.createCommentVNode)("v-if",!0),w.toolbars.help?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:11,type:"button",onClick:k[10]||(k[10]=S=>T.$clicks("help")),class:"op-icon fa fa-mavon-question-circle",style:{"font-size":"17px",padding:"5px 6px 5px 3px"},title:w.d_words.tl_help,"aria-hidden":"true"},null,8,g)):Object(e.createCommentVNode)("v-if",!0),Object(e.renderSlot)(y.$slots,"right-toolbar-after")])}},function(d,_,i){i.d(_,"a",function(){return n});var e=i(0);const t=Object(e.createElementVNode)("br",null,null,-1),r=["autofocus","placeholder"];function n(l,s,a,c,o,u){return Object(e.openBlock)(),Object(e.createElementBlock)("div",{style:Object(e.normalizeStyle)({fontSize:a.fontSize,lineHeight:a.lineHeight,height:a.fullHeight?"100%":"auto"}),class:"auto-textarea-wrapper"},[Object(e.createElementVNode)("pre",{style:Object(e.normalizeStyle)({fontSize:a.fontSize,lineHeight:a.lineHeight,minHeight:a.fullHeight?"100%":"auto"}),class:"auto-textarea-block"},[t,Object(e.createTextVNode)(Object(e.toDisplayString)(o.temp_value)+" ",1)],4),Object(e.withDirectives)(Object(e.createElementVNode)("textarea",{ref:"vTextarea",autofocus:o.s_autofocus,onKeyup:s[0]||(s[0]=(...f)=>u.change&&u.change(...f)),spellcheck:"false",placeholder:a.placeholder,"onUpdate:modelValue":s[1]||(s[1]=f=>o.temp_value=f),style:Object(e.normalizeStyle)({fontSize:a.fontSize,lineHeight:a.lineHeight}),class:Object(e.normalizeClass)([{"no-border":!a.border,"no-resize":!a.resize},"auto-textarea-input"])},`\r
      `,46,r),[[e.vModelText,o.temp_value]])],4)}},function(d,_,i){var e=i(80).default,t={markdownIt:e.mixins[0].data().markdownIt,mavonEditor:e,LeftToolbar:i(70).default,RightToolbar:i(72).default,install:function(r){r.component("mavon-editor",e)}};d.exports=t},function(d,_,i){i.r(_);var e=i(75),t=i(21);for(var r in t)["default"].indexOf(r)<0&&function(s){i.d(_,s,function(){return t[s]})}(r);i(219),i(221);var n=i(3);const l=i.n(n)()(t.default,[["render",e.a],["__scopeId","data-v-33c11741"]]);_.default=l},function(d,_,i){d.exports={default:i(82),__esModule:!0}},function(d,_,i){i(83),i(95),d.exports=i(35).f("iterator")},function(d,_,i){var e=i(84)(!0);i(45)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,r=this._t,n=this._i;return n>=r.length?{value:void 0,done:!0}:(t=e(r,n),this._i+=t.length,{value:t,done:!1})})},function(d,_,i){var e=i(26),t=i(27);d.exports=function(r){return function(n,l){var s,a,c=String(t(n)),o=e(l),u=c.length;return o<0||o>=u?r?"":void 0:(s=c.charCodeAt(o))<55296||s>56319||o+1===u||(a=c.charCodeAt(o+1))<56320||a>57343?r?c.charAt(o):s:r?c.slice(o,o+2):a-56320+(s-55296<<10)+65536}}},function(d,_,i){var e=i(86);d.exports=function(t,r,n){if(e(t),r===void 0)return t;switch(n){case 1:return function(l){return t.call(r,l)};case 2:return function(l,s){return t.call(r,l,s)};case 3:return function(l,s,a){return t.call(r,l,s,a)}}return function(){return t.apply(r,arguments)}}},function(d,_){d.exports=function(i){if(typeof i!="function")throw TypeError(i+" is not a function!");return i}},function(d,_,i){var e=i(50),t=i(16),r=i(34),n={};i(5)(n,i(9)("iterator"),function(){return this}),d.exports=function(l,s,a){l.prototype=e(n,{next:t(1,a)}),r(l,s+" Iterator")}},function(d,_,i){var e=i(6),t=i(14),r=i(30);d.exports=i(7)?Object.defineProperties:function(n,l){t(n);for(var s,a=r(l),c=a.length,o=0;c>o;)e.f(n,s=a[o++],l[s]);return n}},function(d,_,i){var e=i(52);d.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return e(t)=="String"?t.split(""):Object(t)}},function(d,_,i){var e=i(8),t=i(91),r=i(92);d.exports=function(n){return function(l,s,a){var c,o=e(l),u=t(o.length),f=r(a,u);if(n&&s!=s){for(;u>f;)if((c=o[f++])!=c)return!0}else for(;u>f;f++)if((n||f in o)&&o[f]===s)return n||f||0;return!n&&-1}}},function(d,_,i){var e=i(26),t=Math.min;d.exports=function(r){return r>0?t(e(r),9007199254740991):0}},function(d,_,i){var e=i(26),t=Math.max,r=Math.min;d.exports=function(n,l){return(n=e(n))<0?t(n+l,0):r(n,l)}},function(d,_,i){var e=i(2).document;d.exports=e&&e.documentElement},function(d,_,i){var e=i(4),t=i(53),r=i(31)("IE_PROTO"),n=Object.prototype;d.exports=Object.getPrototypeOf||function(l){return l=t(l),e(l,r)?l[r]:typeof l.constructor=="function"&&l instanceof l.constructor?l.constructor.prototype:l instanceof Object?n:null}},function(d,_,i){i(96);for(var e=i(2),t=i(5),r=i(29),n=i(9)("toStringTag"),l="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<l.length;s++){var a=l[s],c=e[a],o=c&&c.prototype;o&&!o[n]&&t(o,n,a),r[a]=r.Array}},function(d,_,i){var e=i(97),t=i(98),r=i(29),n=i(8);d.exports=i(45)(Array,"Array",function(l,s){this._t=n(l),this._i=0,this._k=s},function(){var l=this._t,s=this._k,a=this._i++;return!l||a>=l.length?(this._t=void 0,t(1)):t(0,s=="keys"?a:s=="values"?l[a]:[a,l[a]])},"values"),r.Arguments=r.Array,e("keys"),e("values"),e("entries")},function(d,_){d.exports=function(){}},function(d,_){d.exports=function(i,e){return{value:e,done:!!i}}},function(d,_,i){d.exports={default:i(100),__esModule:!0}},function(d,_,i){i(101),i(107),i(108),i(109),d.exports=i(13).Symbol},function(d,_,i){var e=i(2),t=i(4),r=i(7),n=i(46),l=i(49),s=i(102).KEY,a=i(15),c=i(32),o=i(34),u=i(17),f=i(9),p=i(35),m=i(36),g=i(103),b=i(104),y=i(14),k=i(10),w=i(53),v=i(8),x=i(28),T=i(16),S=i(50),E=i(105),C=i(106),O=i(54),j=i(6),D=i(30),L=C.f,$=j.f,B=E.f,M=e.Symbol,P=e.JSON,U=P&&P.stringify,V=f("_hidden"),W=f("toPrimitive"),N={}.propertyIsEnumerable,q=c("symbol-registry"),G=c("symbols"),X=c("op-symbols"),Z=Object.prototype,Y=typeof M=="function"&&!!O.f,z=e.QObject,A=!z||!z.prototype||!z.prototype.findChild,re=r&&a(function(){return S($({},"a",{get:function(){return $(this,"a",{value:7}).a}})).a!=7})?function(F,R,K){var Q=L(Z,R);Q&&delete Z[R],$(F,R,K),Q&&F!==Z&&$(Z,R,Q)}:$,J=function(F){var R=G[F]=S(M.prototype);return R._k=F,R},H=Y&&typeof M.iterator=="symbol"?function(F){return typeof F=="symbol"}:function(F){return F instanceof M},I=function(F,R,K){return F===Z&&I(X,R,K),y(F),R=x(R,!0),y(K),t(G,R)?(K.enumerable?(t(F,V)&&F[V][R]&&(F[V][R]=!1),K=S(K,{enumerable:T(0,!1)})):(t(F,V)||$(F,V,T(1,{})),F[V][R]=!0),re(F,R,K)):$(F,R,K)},te=function(F,R){y(F);for(var K,Q=g(R=v(R)),ee=0,ne=Q.length;ne>ee;)I(F,K=Q[ee++],R[K]);return F},oe=function(F){var R=N.call(this,F=x(F,!0));return!(this===Z&&t(G,F)&&!t(X,F))&&(!(R||!t(this,F)||!t(G,F)||t(this,V)&&this[V][F])||R)},ae=function(F,R){if(F=v(F),R=x(R,!0),F!==Z||!t(G,R)||t(X,R)){var K=L(F,R);return!K||!t(G,R)||t(F,V)&&F[V][R]||(K.enumerable=!0),K}},se=function(F){for(var R,K=B(v(F)),Q=[],ee=0;K.length>ee;)t(G,R=K[ee++])||R==V||R==s||Q.push(R);return Q},le=function(F){for(var R,K=F===Z,Q=B(K?X:v(F)),ee=[],ne=0;Q.length>ne;)!t(G,R=Q[ne++])||K&&!t(Z,R)||ee.push(G[R]);return ee};Y||(l((M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var F=u(arguments.length>0?arguments[0]:void 0),R=function(K){this===Z&&R.call(X,K),t(this,V)&&t(this[V],F)&&(this[V][F]=!1),re(this,F,T(1,K))};return r&&A&&re(Z,F,{configurable:!0,set:R}),J(F)}).prototype,"toString",function(){return this._k}),C.f=ae,j.f=I,i(55).f=E.f=se,i(37).f=oe,O.f=le,r&&!i(12)&&l(Z,"propertyIsEnumerable",oe,!0),p.f=function(F){return J(f(F))}),n(n.G+n.W+n.F*!Y,{Symbol:M});for(var ce="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ue=0;ce.length>ue;)f(ce[ue++]);for(var pe=D(f.store),de=0;pe.length>de;)m(pe[de++]);n(n.S+n.F*!Y,"Symbol",{for:function(F){return t(q,F+="")?q[F]:q[F]=M(F)},keyFor:function(F){if(!H(F))throw TypeError(F+" is not a symbol!");for(var R in q)if(q[R]===F)return R},useSetter:function(){A=!0},useSimple:function(){A=!1}}),n(n.S+n.F*!Y,"Object",{create:function(F,R){return R===void 0?S(F):te(S(F),R)},defineProperty:I,defineProperties:te,getOwnPropertyDescriptor:ae,getOwnPropertyNames:se,getOwnPropertySymbols:le});var he=a(function(){O.f(1)});n(n.S+n.F*he,"Object",{getOwnPropertySymbols:function(F){return O.f(w(F))}}),P&&n(n.S+n.F*(!Y||a(function(){var F=M();return U([F])!="[null]"||U({a:F})!="{}"||U(Object(F))!="{}"})),"JSON",{stringify:function(F){for(var R,K,Q=[F],ee=1;arguments.length>ee;)Q.push(arguments[ee++]);if(K=R=Q[1],(k(R)||F!==void 0)&&!H(F))return b(R)||(R=function(ne,ie){if(typeof K=="function"&&(ie=K.call(this,ne,ie)),!H(ie))return ie}),Q[1]=R,U.apply(P,Q)}}),M.prototype[W]||i(5)(M.prototype,W,M.prototype.valueOf),o(M,"Symbol"),o(Math,"Math",!0),o(e.JSON,"JSON",!0)},function(d,_,i){var e=i(17)("meta"),t=i(10),r=i(4),n=i(6).f,l=0,s=Object.isExtensible||function(){return!0},a=!i(15)(function(){return s(Object.preventExtensions({}))}),c=function(u){n(u,e,{value:{i:"O"+ ++l,w:{}}})},o=d.exports={KEY:e,NEED:!1,fastKey:function(u,f){if(!t(u))return typeof u=="symbol"?u:(typeof u=="string"?"S":"P")+u;if(!r(u,e)){if(!s(u))return"F";if(!f)return"E";c(u)}return u[e].i},getWeak:function(u,f){if(!r(u,e)){if(!s(u))return!0;if(!f)return!1;c(u)}return u[e].w},onFreeze:function(u){return a&&o.NEED&&s(u)&&!r(u,e)&&c(u),u}}},function(d,_,i){var e=i(30),t=i(54),r=i(37);d.exports=function(n){var l=e(n),s=t.f;if(s)for(var a,c=s(n),o=r.f,u=0;c.length>u;)o.call(n,a=c[u++])&&l.push(a);return l}},function(d,_,i){var e=i(52);d.exports=Array.isArray||function(t){return e(t)=="Array"}},function(d,_,i){var e=i(8),t=i(55).f,r={}.toString,n=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];d.exports.f=function(l){return n&&r.call(l)=="[object Window]"?function(s){try{return t(s)}catch{return n.slice()}}(l):t(e(l))}},function(d,_,i){var e=i(37),t=i(16),r=i(8),n=i(28),l=i(4),s=i(47),a=Object.getOwnPropertyDescriptor;_.f=i(7)?a:function(c,o){if(c=r(c),o=n(o,!0),s)try{return a(c,o)}catch{}if(l(c,o))return t(!e.f.call(c,o),c[o])}},function(d,_){},function(d,_,i){i(36)("asyncIterator")},function(d,_,i){i(36)("observable")},function(d,_,i){Object.defineProperty(_,"__esModule",{value:!0});var e=119,t=120,r=121,n=122,l=123,s=66,a=73,c=72,o=85,u=68,f=77,p=81,m=79,g=76,b=83,y=90,k=89,w=67,v=84,x=82,T=8,S=9,E=13,C=97,O=98,j=99,D=100,L=101,$=102,B=49,M=50,P=51,U=52,V=53,W=54;_.keydownListen=function(N){N.shortCut&&N.$el.addEventListener("keydown",function(q){if(q.ctrlKey||q.metaKey||q.altKey||q.shiftKey)if(!q.ctrlKey&&!q.metaKey||q.altKey||q.shiftKey){if((q.ctrlKey||q.metaKey)&&q.altKey&&!q.shiftKey)switch(q.keyCode){case b:q.preventDefault(),N.toolbar_left_click("superscript");break;case o:q.preventDefault(),N.toolbar_left_click("ul");break;case g:q.preventDefault(),N.toolbar_left_click("imagelink");break;case w:q.preventDefault(),N.toolbar_left_click("code");break;case v:q.preventDefault(),N.toolbar_left_click("table")}else if((q.ctrlKey||q.metaKey)&&q.shiftKey&&!q.altKey)switch(q.keyCode){case b:q.preventDefault(),N.toolbar_left_click("subscript");break;case u:q.preventDefault(),N.toolbar_left_click("strikethrough");break;case g:q.preventDefault(),N.toolbar_left_click("alignleft");break;case x:q.preventDefault(),N.toolbar_left_click("alignright");break;case w:q.preventDefault(),N.toolbar_left_click("aligncenter")}else if(!q.ctrlKey&&!q.metaKey&&q.shiftKey&&!q.altKey)switch(q.keyCode){case S:N.$refs.toolbar_left.s_img_link_open||(q.preventDefault(),N.unInsertTab())}}else switch(q.keyCode){case s:q.preventDefault(),N.toolbar_left_click("bold");break;case a:q.preventDefault(),N.toolbar_left_click("italic");break;case c:q.preventDefault(),N.toolbar_left_click("header");break;case o:q.preventDefault(),N.toolbar_left_click("underline");break;case u:q.preventDefault(),N.toolbar_left_click("removeLine");break;case f:q.preventDefault(),N.toolbar_left_click("mark");break;case p:q.preventDefault(),N.toolbar_left_click("quote");break;case m:q.preventDefault(),N.toolbar_left_click("ol");break;case g:q.preventDefault(),N.toolbar_left_click("link");break;case b:q.preventDefault(),N.toolbar_left_click("save");break;case y:q.preventDefault(),N.toolbar_left_click("undo");break;case k:q.preventDefault(),N.toolbar_left_click("redo");break;case T:q.preventDefault(),N.toolbar_left_click("trash");break;case C:q.preventDefault(),N.toolbar_left_click("header1");break;case O:q.preventDefault(),N.toolbar_left_click("header2");break;case j:q.preventDefault(),N.toolbar_left_click("header3");break;case D:q.preventDefault(),N.toolbar_left_click("header4");break;case L:q.preventDefault(),N.toolbar_left_click("header5");break;case $:q.preventDefault(),N.toolbar_left_click("header6");break;case B:q.preventDefault(),N.toolbar_left_click("header1");break;case M:q.preventDefault(),N.toolbar_left_click("header2");break;case P:q.preventDefault(),N.toolbar_left_click("header3");break;case U:q.preventDefault(),N.toolbar_left_click("header4");break;case V:q.preventDefault(),N.toolbar_left_click("header5");break;case W:q.preventDefault(),N.toolbar_left_click("header6")}else switch(q.keyCode){case e:N.toolbars.navigation&&(q.preventDefault(),N.toolbar_right_click("navigation"));break;case t:N.toolbars.preview&&(q.preventDefault(),N.toolbar_right_click("preview"));break;case r:N.toolbars.fullscreen&&(q.preventDefault(),N.toolbar_right_click("fullscreen"));break;case n:N.toolbars.readmodel&&(q.preventDefault(),N.toolbar_right_click("read"));break;case l:N.toolbars.subfield&&(q.preventDefault(),N.toolbar_right_click("subfield"));break;case S:N.$refs.toolbar_left.s_img_link_open||(q.preventDefault(),N.insertTab());break;case E:N.$refs.toolbar_left.s_img_link_open?(q.preventDefault(),N.$refs.toolbar_left.$imgLinkAdd()):N.insertEnter(q)}})}},function(d,_,i){Object.defineProperty(_,"__esModule",{value:!0}),_.default={agate:1,androidstudio:1,"arduino-light":1,arta:1,ascetic:1,"atom-one-dark":1,"atom-one-light":1,"brown-paper":1,"codepen-embed":1,"color-brewer":1,dark:1,default:1,docco:1,far:1,foundation:1,github:1,googlecode:1,grayscale:1,hybrid:1,idea:1,"ir-black":1,magula:1,"mono-blue":1,"monokai-sublime":1,monokai:1,obsidian:1,"paraiso-dark":1,"paraiso-light":1,pojoaque:1,purebasic:1,rainbow:1,routeros:1,"school-book":1,sunburst:1,"tomorrow-night-blue":1,"tomorrow-night-bright":1,vs:1,vs2015:1,xcode:1,xt256:1,"a11y-dark":1,"a11y-light":1,"an-old-hope":1,"atom-one-dark-reasonable":1,"brown-pap":1,devibeans:1,"github-dark":1,"github-dark-dimmed":1,gml:1,"gradient-dark":1,"gradient-light":1,"isbl-editor-dark":1,"isbl-editor-light":1,"kimbie-dark":1,"kimbie-light":1,lightfair:1,lioshi:1,"night-owl":1,"nnfx-dark":1,"nnfx-light":1,nord:1,pojo:1,"qtcreator-dark":1,"qtcreator-light":1,"shades-of-purple":1,srcery:1,"stackoverflow-dark":1,"stackoverflow-light":1}},function(d,_,i){Object.defineProperty(_,"__esModule",{value:!0});var e,t=i(25),r=(e=t)&&e.__esModule?e:{default:e};_.p_ObjectCopy_DEEP=function n(l,s){for(var a in s){var c=(0,r.default)(s[a]);!l[a]||c!=="Object"&&c!=="object"?l[a]=s[a]:l[a]=n(l[a],s[a])}return l},_.p_urlParse=function(){var n=window.location.search,l={},s=n.match(/[?&][^?&]+=[^?&]+/g);return s&&s.forEach(function(a){var c=a.substring(1).split("="),o=decodeURIComponent(c[0]),u=decodeURIComponent(c[1]);l[o]=u}),l},_.stopEvent=function(n){n&&(n.preventDefault&&n.preventDefault(),n.stopPropagation&&n.stopPropagation())}},function(d,_,i){function e(o){o.d_history_index>0&&o.d_history_index--,o.$nextTick(function(){var u=o.textarea_selectionEnds[o.d_history_index];o.getTextareaDom().selectionStart=u,o.getTextareaDom().selectionEnd=u}),o.getTextareaDom().focus()}function t(o){o.d_history_index<o.d_history.length-1&&o.d_history_index++,o.$nextTick(function(){var u=o.textarea_selectionEnds[o.d_history_index];o.getTextareaDom().selectionStart=u,o.getTextareaDom().selectionEnd=u}),o.getTextareaDom().focus()}function r(o){o.d_value="",o.getTextareaDom().focus()}function n(o){o.save(o.d_value,o.d_render)}function l(o){o.insertOl()}function s(o){o.insertUl()}function a(o){o.removeLine()}function c(o){o.insertCodeBlock()}Object.defineProperty(_,"__esModule",{value:!0}),_.toolbar_left_addlink=function(o,u,f,p){var m={prefix:o==="link"?"["+u+"](":"!["+u+"](",subfix:")",str:f};p.insertText(p.getTextareaDom(),m)},_.toolbar_left_click=function(o,u){var f={bold:{prefix:"**",subfix:"**",str:u.d_words.tl_bold},italic:{prefix:"*",subfix:"*",str:u.d_words.tl_italic},header:{prefix:"# ",subfix:"",str:u.d_words.tl_header},header1:{prefix:"# ",subfix:"",str:u.d_words.tl_header_one},header2:{prefix:"## ",subfix:"",str:u.d_words.tl_header_two},header3:{prefix:"### ",subfix:"",str:u.d_words.tl_header_three},header4:{prefix:"#### ",subfix:"",str:u.d_words.tl_header_four},header5:{prefix:"##### ",subfix:"",str:u.d_words.tl_header_five},header6:{prefix:"###### ",subfix:"",str:u.d_words.tl_header_six},underline:{prefix:"++",subfix:"++",str:u.d_words.tl_underline},strikethrough:{prefix:"~~",subfix:"~~",str:u.d_words.tl_strikethrough},mark:{prefix:"==",subfix:"==",str:u.d_words.tl_mark},superscript:{prefix:"^",subfix:"^",str:u.d_words.tl_superscript},subscript:{prefix:"~",subfix:"~",str:u.d_words.tl_subscript},quote:{prefix:"> ",subfix:"",str:u.d_words.tl_quote},link:{prefix:"[](",subfix:")",str:u.d_words.tl_link},imagelink:{prefix:"![](",subfix:")",str:u.d_words.tl_image},table:{prefix:"",subfix:"",str:`|column1|column2|column3|
|-|-|-|
|content1|content2|content3|
`},aligncenter:{prefix:`::: hljs-center

`,subfix:`

:::
`,str:u.d_words.tl_aligncenter},alignright:{prefix:`::: hljs-right

`,subfix:`

:::
`,str:u.d_words.tl_alignright},alignleft:{prefix:`::: hljs-left

`,subfix:`

:::
`,str:u.d_words.tl_alignleft}};f.hasOwnProperty(o)&&u.insertText(u.getTextareaDom(),f[o]);var p={undo:e,redo:t,trash:r,save:n,ol:l,ul:s,removeLine:a,code:c};p.hasOwnProperty(o)&&p[o](u)}},function(d,_,i){function e(c){c.s_html_code=!c.s_html_code,c.htmlcode&&c.htmlcode(c.s_html_code,c.d_value)}function t(c){c.s_help=!c.s_help,c.helptoggle&&c.helptoggle(c.s_help,c.d_value)}function r(c){var o=c.$refs.vReadModel;o.requestFullscreen?o.requestFullscreen():o.mozRequestFullScreen?o.mozRequestFullScreen():o.webkitRequestFullscreen?o.webkitRequestFullscreen():o.msRequestFullscreen&&o.msRequestFullscreen()}function n(c){c.s_preview_switch=!c.s_preview_switch,c.previewtoggle&&c.previewtoggle(c.s_preview_switch,c.d_value)}function l(c){c.s_fullScreen=!c.s_fullScreen,c.fullscreen&&c.fullscreen(c.s_fullScreen,c.d_value)}function s(c){c.s_subfield=!c.s_subfield,c.s_preview_switch=c.s_subfield,c.previewtoggle&&c.previewtoggle(c.s_preview_switch,c.d_value),c.subfieldtoggle&&c.subfieldtoggle(c.s_subfield,c.d_value)}function a(c){c.s_navigation=!c.s_navigation,c.s_navigation&&(c.s_preview_switch=!0),c.navigationtoggle&&c.navigationtoggle(c.s_navigation,c.d_value),c.s_navigation&&c.getNavigation(c,!1)}Object.defineProperty(_,"__esModule",{value:!0}),_.toolbar_right_click=function(c,o){var u={help:t,html:e,read:r,preview:n,fullscreen:l,navigation:a,subfield:s};u.hasOwnProperty(c)&&u[c](o)}},function(d,_,i){Object.defineProperty(_,"__esModule",{value:!0}),_.CONFIG=void 0;var e=k(i(116)),t=k(i(117)),r=k(i(118)),n=k(i(119)),l=k(i(120)),s=k(i(121)),a=k(i(122)),c=k(i(123)),o=k(i(124)),u=k(i(125)),f=k(i(126)),p=k(i(127)),m=k(i(128)),g=k(i(129)),b=k(i(130)),y=k(i(131));function k(w){return w&&w.__esModule?w:{default:w}}_.CONFIG={"help_zh-CN":e.default,"help_zh-TW":t.default,"help_pt-BR":l.default,help_en:r.default,help_fr:n.default,help_ru:s.default,help_de:a.default,help_ja:c.default,"words_zh-CN":o.default,"words_zh-TW":u.default,"words_pt-BR":m.default,words_en:f.default,words_fr:p.default,words_ru:g.default,words_de:b.default,words_ja:y.default,langList:["en","zh-CN","zh-TW","fr","pt-BR","ru","de","ja"],toolbars:{bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,link:!0,imagelink:!0,code:!0,table:!0,undo:!0,redo:!0,trash:!0,save:!0,alignleft:!0,aligncenter:!0,alignright:!0,navigation:!0,subfield:!0,fullscreen:!0,readmodel:!0,htmlcode:!0,help:!0,preview:!0}}},function(d,_){d.exports=`@[toc](目录)\r
\r
Markdown 语法简介\r
=============\r
> [语法详解](http://commonmark.org/help/)\r
\r
## **目录**\r
\`\`\`\r
@[toc](目录)\r
\`\`\`\r
\r
## **粗体**\r
\`\`\`\r
**粗体**\r
__粗体__\r
\`\`\`\r
## *斜体*\r
\`\`\`\r
*斜体*\r
_斜体_\r
\`\`\`\r
## 标题\r
\`\`\`\r
# 一级标题 #\r
一级标题\r
====\r
## 二级标题 ##\r
二级标题\r
----\r
### 三级标题 ###\r
#### 四级标题 ####\r
##### 五级标题 #####\r
###### 六级标题 ######\r
\`\`\`\r
## 分割线\r
\`\`\`\r
***\r
---\r
\`\`\`\r
****\r
## ^上^角~下~标\r
\`\`\`\r
上角标 x^2^\r
下角标 H~2~0\r
\`\`\`\r
## ++下划线++ ~~中划线~~\r
\`\`\`\r
++下划线++\r
~~中划线~~\r
\`\`\`\r
## ==标记==\r
\`\`\`\r
==标记==\r
\`\`\`\r
## 段落引用\r
\`\`\`\r
> 一级\r
>> 二级\r
>>> 三级\r
...\r
\`\`\`\r
\r
## 列表\r
\`\`\`\r
有序列表\r
1.\r
2.\r
3.\r
...\r
无序列表\r
-\r
-\r
...\r
\`\`\`\r
\r
## 任务列表\r
\r
- [x] 已完成任务\r
- [ ] 未完成任务\r
\r
\`\`\`\r
- [x] 已完成任务\r
- [ ] 未完成任务\r
\`\`\`\r
\r
## 链接\r
\`\`\`\r
[链接](www.baidu.com)\r
![图片描述](http://www.image.com)\r
\`\`\`\r
## 代码段落\r
\\\`\`\` type\r
\r
代码段落\r
\r
\\\`\`\`\r
\r
\\\` 代码块 \\\`\r
\r
\`\`\`c++\r
int main()\r
{\r
    printf("hello world!");\r
}\r
\`\`\`\r
\`code\`\r
## 表格(table)\r
\`\`\`\r
| 标题1 | 标题2 | 标题3 |\r
| :--  | :--: | ----: |\r
| 左对齐 | 居中 | 右对齐 |\r
| ---------------------- | ------------- | ----------------- |\r
\`\`\`\r
| 标题1 | 标题2 | 标题3 |\r
| :--  | :--: | ----: |\r
| 左对齐 | 居中 | 右对齐 |\r
| ---------------------- | ------------- | ----------------- |\r
## 脚注(footnote)\r
\`\`\`\r
hello[^hello]\r
\`\`\`\r
\r
见底部脚注[^hello]\r
\r
[^hello]: 一个注脚\r
\r
## 表情(emoji)\r
[参考网站: https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)\r
\`\`\`\r
:laughing:\r
:blush:\r
:smiley:\r
:)\r
...\r
\`\`\`\r
:laughing::blush::smiley::)\r
\r
## $\\KaTeX$公式\r
\r
我们可以渲染公式例如：$x_i + y_i = z_i$和$\\sum_{i=1}^n a_i=0$\r
我们也可以单行渲染\r
$$\\sum_{i=1}^n a_i=0$$\r
具体可参照[katex文档](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex支持的函数](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex文档](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)\r
\r
## 布局\r
\r
::: hljs-left\r
\`::: hljs-left\`\r
\`居左\`\r
\`:::\`\r
:::\r
\r
::: hljs-center\r
\`::: hljs-center\`\r
\`居中\`\r
\`:::\`\r
:::\r
\r
::: hljs-right\r
\`::: hljs-right\`\r
\`居右\`\r
\`:::\`\r
:::\r
\r
## 定义\r
\r
术语一\r
\r
:   定义一\r
\r
包含有*行内标记*的术语二\r
\r
:   定义二\r
\r
        {一些定义二的文字或代码}\r
\r
    定义二的第三段\r
\r
\`\`\`\r
术语一\r
\r
:   定义一\r
\r
包含有*行内标记*的术语二\r
\r
:   定义二\r
\r
        {一些定义二的文字或代码}\r
\r
    定义二的第三段\r
\r
\`\`\`\r
\r
## abbr\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
HTML 规范由 W3C 维护\r
\`\`\`\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
HTML 规范由 W3C 维护\r
\`\`\`\r
\r
`},function(d,_){d.exports=`@[toc](目錄)\r
\r
Markdown 語法簡介\r
=============\r
> [語法詳解](http://commonmark.org/help/)\r
\r
## **粗體**\r
\`\`\`\r
**粗體**\r
__粗體__\r
\`\`\`\r
## *斜體*\r
\`\`\`\r
*斜體*\r
_斜體_\r
\`\`\`\r
## 標題\r
\`\`\`\r
# 一級標題 #\r
一級標題\r
====\r
## 二級標題 ##\r
二級標題\r
----\r
### 三級標題 ###\r
#### 四級標題 ####\r
##### 五級標題 #####\r
###### 六級標題 ######\r
\`\`\`\r
## 分割線\r
\`\`\`\r
***\r
---\r
\`\`\`\r
****\r
## ^上^角~下~標\r
\`\`\`\r
上角標 x^2^\r
下角標 H~2~0\r
\`\`\`\r
## ++下劃線++ ~~中劃線~~\r
\`\`\`\r
++下劃線++\r
~~中劃線~~\r
\`\`\`\r
## ==標記==\r
\`\`\`\r
==標記==\r
\`\`\`\r
## 段落引用\r
\`\`\`\r
> 一級\r
>> 二級\r
>>> 三級\r
...\r
\`\`\`\r
\r
## 列表\r
\`\`\`\r
有序列表\r
1.\r
2.\r
3.\r
...\r
無序列表\r
-\r
-\r
...\r
\`\`\`\r
\r
## 任務列表\r
\r
- [x] 已完成任務\r
- [ ] 未完成任務\r
\r
\`\`\`\r
- [x] 已完成任務\r
- [ ] 未完成任務\r
\`\`\`\r
\r
## 鏈接\r
\`\`\`\r
[鏈接](www.baidu.com)\r
![圖片描述](http://www.image.com)\r
\`\`\`\r
## 代碼段落\r
\\\`\`\` type\r
\r
代碼段落\r
\r
\\\`\`\`\r
\r
\\\` 代碼塊 \\\`\r
\r
\`\`\`c++\r
int main()\r
{\r
    printf("hello world!");\r
}\r
\`\`\`\r
\`code\`\r
## 表格(table)\r
\`\`\`\r
| 標題1 | 標題2 | 標題3 |\r
| :--  | :--: | ----: |\r
| 左對齊 | 居中 | 右對齊 |\r
| ---------------------- | ------------- | ----------------- |\r
\`\`\`\r
| 標題1 | 標題2 | 標題3 |\r
| :--  | :--: | ----: |\r
| 左對齊 | 居中 | 右對齊 |\r
| ---------------------- | ------------- | ----------------- |\r
## 腳註(footnote)\r
\`\`\`\r
hello[^hello]\r
\`\`\`\r
\r
見底部腳註[^hello]\r
\r
[^hello]: 一個註腳\r
\r
## 表情(emoji)\r
[參考網站: https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)\r
\`\`\`\r
:laughing:\r
:blush:\r
:smiley:\r
:)\r
...\r
\`\`\`\r
:laughing::blush::smiley::)\r
\r
## $\\KaTeX$公式\r
\r
我們可以渲染公式例如：$x_i + y_i = z_i$和$\\sum_{i=1}^n a_i=0$\r
我們也可以單行渲染\r
$$\\sum_{i=1}^n a_i=0$$\r
具體可參照[katex文檔](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex支持的函數](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex文檔](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)\r
\r
## 布局\r
\r
::: hljs-left\r
\`::: hljs-left\`\r
\`居左\`\r
\`:::\`\r
:::\r
\r
::: hljs-center\r
\`::: hljs-center\`\r
\`居中\`\r
\`:::\`\r
:::\r
\r
::: hljs-right\r
\`::: hljs-right\`\r
\`居右\`\r
\`:::\`\r
:::\r
\r
## 定義\r
\r
術語一\r
\r
:   定義一\r
\r
包含有*行內標記*的術語二\r
\r
:   定義二\r
\r
        {一些定義二的文字或代碼}\r
\r
    定義二的第三段\r
\r
\`\`\`\r
術語一\r
\r
:   定義一\r
\r
包含有*行內標記*的術語二\r
\r
:   定義二\r
\r
        {一些定義二的文字或代碼}\r
\r
    定義二的第三段\r
\r
\`\`\`\r
\r
## abbr\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
HTML 規範由 W3C 維護\r
\`\`\`\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
HTML 規範由 W3C 維護\r
\`\`\`\r
\r
`},function(d,_){d.exports=`@[toc](Catalog)\r
\r
Markdown Guide\r
===\r
> Detailed: [http://commonmark.org/help/](http://commonmark.org/help/)\r
\r
## **Bold**\r
\`\`\`\r
**bold**\r
__bold__\r
\`\`\`\r
## *Italic*\r
\`\`\`\r
*italic*\r
_italic_\r
\`\`\`\r
## Header\r
\`\`\`\r
# h1 #\r
h1\r
====\r
## h2 ##\r
h2\r
----\r
### h3 ###\r
#### h4 ####\r
##### h5 #####\r
###### h6 ######\r
\`\`\`\r
## Dividing line\r
\`\`\`\r
***\r
---\r
\`\`\`\r
****\r
## ^Super^script & ~Sub~script\r
\`\`\`\r
super x^2^\r
sub H~2~0\r
\`\`\`\r
## ++Underline++ & ~~Strikethrough~~\r
\`\`\`\r
++underline++\r
~~strikethrough~~\r
\`\`\`\r
## ==Mark==\r
\`\`\`\r
==mark==\r
\`\`\`\r
## Quote\r
\r
\`\`\`\r
> quote 1\r
>> quote 2\r
>>> quote 3\r
...\r
\`\`\`\r
\r
## List\r
\`\`\`\r
ol\r
1.\r
2.\r
3.\r
...\r
\r
ul\r
-\r
-\r
...\r
\`\`\`\r
\r
## Todo List\r
\r
- [x] task 1\r
- [ ] task 2\r
\r
\`\`\`\r
- [x] task 1\r
- [ ] task 2\r
\`\`\`\r
\r
## Link\r
\`\`\`\r
Text Link\r
[Text](www.baidu.com)\r
\r
Image Link\r
![Text](http://www.image.com)\r
\`\`\`\r
## Code\r
\\\`\`\` type\r
\r
code block\r
\r
\\\`\`\`\r
\r
\\\` code \\\`\r
\r
\`\`\`c++\r
int main()\r
{\r
    printf("hello world!");\r
}\r
\`\`\`\r
\`code\`\r
\r
## Table\r
\`\`\`\r
| th1 | th2 | th3 |\r
| :--  | :--: | ----: |\r
| left | center | right |\r
\`\`\`\r
| th1 | th2 | th3 |\r
| :--  | :--: | ----: |\r
| left | center | right |\r
| ---------------------- | ------------- | ----------------- |\r
## Footnote\r
\`\`\`\r
hello[^hello]\r
\`\`\`\r
\r
Look at the bottom[^hello]\r
\r
[^hello]: footnote\r
\r
## Emojis\r
Detailed: [https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)\r
\`\`\`\r
:laughing:\r
:blush:\r
:smiley:\r
:)\r
...\r
\`\`\`\r
:laughing::blush::smiley::)\r
\r
## $\\KaTeX$ Mathematics\r
\r
We can render formulas for example：$x_i + y_i = z_i$ and $\\sum_{i=1}^n a_i=0$\r
We can also single-line rendering\r
$$\\sum_{i=1}^n a_i=0$$\r
Detailed: [katex](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex function](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)\r
\r
## Layout\r
\r
::: hljs-left\r
\`::: hljs-left\`\r
\`left\`\r
\`:::\`\r
:::\r
\r
::: hljs-center\r
\`::: hljs-center\`\r
\`center\`\r
\`:::\`\r
:::\r
\r
::: hljs-right\r
\`::: hljs-right\`\r
\`right\`\r
\`:::\`\r
:::\r
\r
## deflist\r
\r
Term 1\r
\r
:   Definition 1\r
\r
Term 2 with *inline markup*\r
\r
:   Definition 2\r
\r
        { some code, part of Definition 2 }\r
\r
    Third paragraph of definition 2.\r
\r
\`\`\`\r
Term 1\r
\r
:   Definition 1\r
\r
Term 2 with *inline markup*\r
\r
:   Definition 2\r
\r
        { some code, part of Definition 2 }\r
\r
    Third paragraph of definition 2.\r
\r
\`\`\`\r
\r
## abbr\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
The HTML specification\r
is maintained by the W3C.\r
\`\`\`\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
The HTML specification\r
is maintained by the W3C.\r
\`\`\`\r
`},function(d,_){d.exports=`@[toc](Catalogue)\r
\r
Guide Markdown\r
==============\r
> Détail : [http://commonmark.org/help/](http://commonmark.org/help/)\r
\r
## **Bold**\r
\`\`\`\r
**bold**\r
__bold__\r
\`\`\`\r
## *Italic*\r
\`\`\`\r
*italic*\r
_italic_\r
\`\`\`\r
## Header\r
\`\`\`\r
# h1 #\r
h1\r
====\r
## h2 ##\r
h2\r
----\r
### h3 ###\r
#### h4 ####\r
##### h5 #####\r
###### h6 ######\r
\`\`\`\r
## Dividing line\r
\`\`\`\r
***\r
---\r
\`\`\`\r
****\r
## ^Super^script & ~Sub~script\r
\`\`\`\r
super x^2^\r
sub H~2~0\r
\`\`\`\r
## ++Underline++ & ~~Strikethrough~~\r
\`\`\`\r
++underline++\r
~~strikethrough~~\r
\`\`\`\r
## ==Mark==\r
\`\`\`\r
==mark==\r
\`\`\`\r
## Quote\r
\r
\`\`\`\r
> quote 1\r
>> quote 2\r
>>> quote 3\r
...\r
\`\`\`\r
\r
## List\r
\`\`\`\r
ol\r
1.\r
2.\r
3.\r
...\r
\r
ul\r
-\r
-\r
...\r
\`\`\`\r
## Link\r
\r
## Todo List\r
\r
- [x] Équipe 1\r
- [ ] Équipe 2\r
\r
\`\`\`\r
- [x] Équipe 1\r
- [ ] Équipe 2\r
\`\`\`\r
\r
\`\`\`\r
Text Link\r
[Text](www.baidu.com)\r
\r
Image Link\r
![Text](http://www.image.com)\r
\`\`\`\r
## Code\r
\\\`\`\` type\r
\r
code block\r
\r
\\\`\`\`\r
\r
\\\` code \\\`\r
\r
\`\`\`c++\r
int main()\r
{\r
    printf("hello world!");\r
}\r
\`\`\`\r
\`code\`\r
\r
## Table\r
\`\`\`\r
| th1 | th2 | th3 |\r
| :--  | :--: | ----: |\r
| left | center | right |\r
\`\`\`\r
| th1 | th2 | th3 |\r
| :--  | :--: | ----: |\r
| left | center | right |\r
| ---------------------- | ------------- | ----------------- |\r
## Footnote\r
\`\`\`\r
hello[^hello]\r
\`\`\`\r
\r
Look at the bottom[^hello]\r
\r
[^hello]: footnote\r
\r
## Emojis\r
Detailed: [https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)\r
\`\`\`\r
:laughing:\r
:blush:\r
:smiley:\r
:)\r
...\r
\`\`\`\r
:laughing::blush::smiley::)\r
\r
## $\\KaTeX$ Mathematics\r
\r
We can render formulas for example：$x_i + y_i = z_i$ and $\\sum_{i=1}^n a_i=0$\r
We can also single-line rendering\r
$$\\sum_{i=1}^n a_i=0$$\r
Detailed: [katex](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex function](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)\r
\r
## Layout\r
\r
::: hljs-left\r
\`::: hljs-left\`\r
\`left\`\r
\`:::\`\r
:::\r
\r
::: hljs-center\r
\`::: hljs-center\`\r
\`center\`\r
\`:::\`\r
:::\r
\r
::: hljs-right\r
\`::: hljs-right\`\r
\`right\`\r
\`:::\`\r
:::\r
\r
## deflist\r
\r
Term 1\r
\r
:   Definition 1\r
\r
Term 2 with *inline markup*\r
\r
:   Definition 2\r
\r
        { some code, part of Definition 2 }\r
\r
    Third paragraph of definition 2.\r
\r
\`\`\`\r
Term 1\r
\r
:   Definition 1\r
\r
Term 2 with *inline markup*\r
\r
:   Definition 2\r
\r
        { some code, part of Definition 2 }\r
\r
    Third paragraph of definition 2.\r
\r
\`\`\`\r
\r
## abbr\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
The HTML specification\r
is maintained by the W3C.\r
\`\`\`\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
The HTML specification\r
is maintained by the W3C.\r
\`\`\`\r
`},function(d,_){d.exports=`@[toc](Directory)\r
\r
Guia Markdown\r
===\r
> Detalhes: [http://commonmark.org/help/](http://commonmark.org/help/)\r
\r
## **Negrito**\r
\`\`\`\r
**negrito**\r
__negrito__\r
\`\`\`\r
## *Itálico*\r
\`\`\`\r
*itálico*\r
_itálico_\r
\`\`\`\r
## Cabeçalho\r
\`\`\`\r
# h1 #\r
h1\r
====\r
## h2 ##\r
h2\r
----\r
### h3 ###\r
#### h4 ####\r
##### h5 #####\r
###### h6 ######\r
\`\`\`\r
## Linha Divisora\r
\`\`\`\r
***\r
---\r
\`\`\`\r
****\r
## ^Sobre^scrito & ~Sub~scrito\r
\`\`\`\r
sobre x^2^\r
sub H~2~0\r
\`\`\`\r
## ++Sublinhar++ & ~~Tachar~~\r
\`\`\`\r
++sublinhar++\r
~~tachar~~\r
\`\`\`\r
## ==Marcador==\r
\`\`\`\r
==marcador==\r
\`\`\`\r
## Citação\r
\r
\`\`\`\r
> citação 1\r
>> citação 2\r
>>> citação 3\r
...\r
\`\`\`\r
\r
## Listas\r
\`\`\`\r
lista Numerada\r
1.\r
2.\r
3.\r
...\r
\r
lista com marcadores\r
-\r
-\r
...\r
\`\`\`\r
\r
## Todo Listas\r
\r
- [x] Tarefa 1\r
- [ ] Tarefa 2\r
\r
\`\`\`\r
- [x] Tarefa 1\r
- [ ] Tarefa 2\r
\`\`\`\r
\r
## Link\r
\`\`\`\r
Link Texto\r
[Text](www.baidu.com)\r
\r
Link Imagem\r
![Text](http://www.image.com)\r
\`\`\`\r
## Código\r
\\\`\`\` tipo\r
\r
bloco de código\r
\r
\\\`\`\`\r
\r
\\\` código \\\`\r
\r
\`\`\`c++\r
int main()\r
{\r
    printf("hello world!");\r
}\r
\`\`\`\r
\`code\`\r
\r
## Tabela\r
\`\`\`\r
| th1 | th2 | th3 |\r
| :--  | :--: | ----: |\r
| esquerda | centro | direita |\r
\`\`\`\r
| th1 | th2 | th3 |\r
| :--  | :--: | ----: |\r
| esquerda | centro | direita |\r
| ---------------------- | ------------- | ----------------- |\r
## Rodapé\r
\`\`\`\r
olá[^olá]\r
\`\`\`\r
\r
Olhe para baixo[^olá]\r
\r
[^olá]: rodapé\r
\r
## Emojis\r
Detalhes: [https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)\r
\`\`\`\r
:laughing:\r
:blush:\r
:smiley:\r
:)\r
...\r
\`\`\`\r
:laughing::blush::smiley::)\r
\r
## $\\KaTeX$ Mathematics\r
\r
Podemos mostrar fórmulas por exemplo：$x_i + y_i = z_i$ and $\\sum_{i=1}^n a_i=0$\r
Podemos também mostrar em uma única linha:\r
$$\\sum_{i=1}^n a_i=0$$\r
Detalhes: [katex](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex function](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)\r
\r
## Layout\r
\r
::: hljs-left\r
\`::: hljs-left\`\r
\`esquerda\`\r
\`:::\`\r
:::\r
\r
::: hljs-center\r
\`::: hljs-center\`\r
\`centro\`\r
\`:::\`\r
:::\r
\r
::: hljs-right\r
\`::: hljs-right\`\r
\`direita\`\r
\`:::\`\r
:::\r
\r
## Definições\r
\r
Termo 1\r
\r
:   Definição 1\r
\r
Termo 2 com *markup inline*\r
\r
:   Definição 2\r
\r
        { um pouco de código, parte da Definição 2 }\r
\r
    Terceiro parágrafo da definição 2.\r
\r
\`\`\`\r
Termo 1\r
\r
:   Definição 1\r
\r
Termo 2 com *markup inline*\r
\r
:   Definição 2\r
\r
        { um pouco de código, parte da Definição 2 }\r
\r
    Terceiro parágrafo da definição 2.\r
\r
\`\`\`\r
\r
## Abreviações\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
A especificação HTML\r
é mantida pela W3C.\r
\`\`\`\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
The HTML specification\r
é mantida pela W3C.\r
\`\`\`\r
`},function(d,_){d.exports=`@[toc](Catalog)  \r
  \r
Markdown помощь  \r
===  \r
> Подробнее: [http://commonmark.org/help/](http://commonmark.org/help/)  \r
  \r
## **Полужирный**  \r
\`\`\`  \r
**Полужирный**  \r
__Полужирный__  \r
\`\`\`  \r
## *Курсив*  \r
\`\`\`  \r
*Курсив*  \r
_Курсив_  \r
\`\`\`  \r
## Заголовок  \r
\`\`\`  \r
# h1 #  \r
h1  \r
====  \r
## h2 ##  \r
h2  \r
----  \r
### h3 ###  \r
#### h4 ####  \r
##### h5 #####  \r
###### h6 ######  \r
\`\`\`  \r
## Разделительная линия  \r
\`\`\`  \r
***  \r
---  \r
\`\`\`  \r
****  \r
## ^Верхний^индекс & ~Нижний~индекс  \r
\`\`\`  \r
верхний x^2^  \r
нижний H~2~0  \r
\`\`\`  \r
## ++Подчеркнутый++ & ~~Зачеркнутый~~  \r
\`\`\`  \r
++Подчеркнутый++  \r
~~Зачеркнутый~~  \r
\`\`\`  \r
## ==Отметка==  \r
\`\`\`  \r
==Отметка==  \r
\`\`\`  \r
## Цитата  \r
  \r
\`\`\`  \r
> Цитата  \r
>> Цитата 2  \r
>>> Цитата 3  \r
...  \r
\`\`\`  \r
  \r
## Список  \r
\`\`\`  \r
ol  \r
1.  \r
2.  \r
3.  \r
...  \r
  \r
ul  \r
-  \r
-  \r
...  \r
\`\`\`  \r
  \r
## Список задач  \r
  \r
- [x] Задача 1  \r
- [ ] Задача 2  \r
  \r
\`\`\`  \r
- [x] Задача 1  \r
- [ ] Задача 2  \r
\`\`\`  \r
  \r
## Ссылка  \r
\`\`\`  \r
Ссылка  \r
[Текст](www.baidu.com)  \r
  \r
Ссылка изображения  \r
![Текст](http://www.image.com)  \r
\`\`\`  \r
## Код  \r
\\\`\`\` type  \r
  \r
code block  \r
  \r
\\\`\`\`  \r
  \r
\\\` code \\\`  \r
  \r
\`\`\`c++  \r
int main()  \r
{  \r
 printf("hello world!");}  \r
\`\`\`  \r
\`code\`  \r
  \r
## Таблица  \r
\`\`\`  \r
| th1 | th2 | th3 |  \r
| :--  | :--: | ----: |  \r
| left | center | right |  \r
\`\`\`  \r
| th1 | th2 | th3 |  \r
| :--  | :--: | ----: |  \r
| left | center | right |  \r
| ---------------------- | ------------- | ----------------- |  \r
## Сноска  \r
\`\`\`  \r
Привет[^Привет]  \r
\`\`\`  \r
  \r
Тут что-то непонятное[^Привет]  \r
  \r
[^Привет]: А тут объяснение  \r
  \r
## Emojis  \r
Подробнее: [https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)  \r
\`\`\`  \r
:laughing:  \r
:blush:  \r
:smiley:  \r
:)  \r
...  \r
\`\`\`  \r
:laughing::blush::smiley::)  \r
  \r
## $\\KaTeX$ Mathematics  \r
  \r
Можно выводить такие формулы：$x_i + y_i = z_i$ and $\\sum_{i=1}^n a_i=0$  \r
А также в одну строку:\r
$$\\sum_{i=1}^n a_i=0$$  \r
Подробнее: \r
- [katex](http://www.intmath.com/cg5/katex-mathjax-comparison.php)\r
- [katex function](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)\r
- [latex](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)  \r
  \r
## Разметка\r
  \r
::: hljs-left  \r
\`::: hljs-left\`  \r
\`left\`  \r
\`:::\`  \r
:::  \r
  \r
::: hljs-center  \r
\`::: hljs-center\`  \r
\`center\`  \r
\`:::\`  \r
:::  \r
  \r
::: hljs-right  \r
\`::: hljs-right\`  \r
\`right\`  \r
\`:::\`  \r
:::  \r
  \r
## Список определений\r
  \r
Термин 1  \r
  \r
:   Определение 1  \r
  \r
Термин  2 с использованием *разметки*\r
  \r
:   Определение 2  \r
  \r
 { Какой-нибудь код, часть определения 2 }  \r
 Третий параграф определения 2.  \r
\`\`\`  \r
Термин 1  \r
  \r
:   Определение 1  \r
  \r
Термин  2 с использованием *разметки*\r
  \r
:   Определение 2  \r
  \r
 { Какой-нибудь код, часть определения 2 }  \r
 Третий параграф определения 2.  \r
\`\`\`  \r
  \r
## Сокращения\r
*[HTML]: Hyper Text Markup Language  \r
*[W3C]:  World Wide Web Consortium  \r
The HTML specification  \r
is maintained by the W3C.  \r
\`\`\`  \r
*[HTML]: Hyper Text Markup Language  \r
*[W3C]:  World Wide Web Consortium  \r
The HTML specification  \r
is maintained by the W3C.  \r
\`\`\`\r
`},function(d,_){d.exports=`@[toc](Catalog)\r
\r
Markdown Handbuch\r
===\r
> Details: [http://commonmark.org/help/](http://commonmark.org/help/)\r
\r
## **Fett**\r
\`\`\`\r
**fett**\r
__fett__\r
\`\`\`\r
## *Kursiv*\r
\`\`\`\r
*kursiv*\r
_kursiv_\r
\`\`\`\r
## Überschriften\r
\`\`\`\r
# h1 #\r
h1\r
====\r
## h2 ##\r
h2\r
----\r
### h3 ###\r
#### h4 ####\r
##### h5 #####\r
###### h6 ######\r
\`\`\`\r
## Trennlinien\r
\`\`\`\r
***\r
---\r
\`\`\`\r
****\r
## ^Hoch^gestellt & ~Tief~gestellt\r
\`\`\`\r
hochgestellt x^2^\r
tiefgestellt H~2~0\r
\`\`\`\r
## ++Unterstrichen++ & ~~Durchgestrichen~~\r
\`\`\`\r
++unterstrichen++\r
~~durchgestrichen~~\r
\`\`\`\r
## ==Markiert==\r
\`\`\`\r
==markiert==\r
\`\`\`\r
## Zitat\r
\r
\`\`\`\r
> zitat 1\r
>> zitat 2\r
>>> zitat 3\r
...\r
\`\`\`\r
\r
## Liste\r
\`\`\`\r
ol\r
1.\r
2.\r
3.\r
...\r
\r
ul\r
-\r
-\r
...\r
\`\`\`\r
\r
## Todo Liste\r
\r
- [x] aufgabe 1\r
- [ ] aufgabe 2\r
\r
\`\`\`\r
- [x] aufgabe 1\r
- [ ] aufgabe 2\r
\`\`\`\r
\r
## Link\r
\`\`\`\r
Text Link\r
[Text](www.baidu.com)\r
\r
Link mit Bild\r
![Text](http://www.image.com)\r
\`\`\`\r
## Code\r
\\\`\`\` Typ\r
\r
Codeblock\r
\r
\\\`\`\`\r
\r
\\\` code \\\`\r
\r
\`\`\`c++\r
int main()\r
{\r
    printf("hello world!");\r
}\r
\`\`\`\r
\`code\`\r
\r
## Tabelle\r
\`\`\`\r
| th1 | th2 | th3 |\r
| :--  | :--: | ----: |\r
| links | mitte | rechts |\r
\`\`\`\r
| th1 | th2 | th3 |\r
| :--  | :--: | ----: |\r
| links | mitte | rechts |\r
| ---------------------- | ------------- | ----------------- |\r
## Fußnote\r
\`\`\`\r
hallo[^hallo]\r
\`\`\`\r
\r
Schau zum unteren Rand[^hallo]\r
\r
[^hallo]: fussnote\r
\r
## Emojis\r
Details: [https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)\r
\`\`\`\r
:laughing:\r
:blush:\r
:smiley:\r
:)\r
...\r
\`\`\`\r
:laughing::blush::smiley::)\r
\r
## $\\KaTeX$ Mathematik\r
\r
Formeln lassen sich darstellen z.b. ：$x_i + y_i = z_i$ und $\\sum_{i=1}^n a_i=0$\r
Formeln können auf einer eigenen Zeile gerendert werden\r
$$\\sum_{i=1}^n a_i=0$$\r
Details: [katex](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex function](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)\r
\r
## Layout\r
\r
::: hljs-left\r
\`::: hljs-left\`\r
\`links\`\r
\`:::\`\r
:::\r
\r
::: hljs-center\r
\`::: hljs-center\`\r
\`mitte\`\r
\`:::\`\r
:::\r
\r
::: hljs-right\r
\`::: hljs-right\`\r
\`rechts\`\r
\`:::\`\r
:::\r
\r
## Liste von Definitionen\r
\r
Term 1\r
\r
:   Definition 1\r
\r
Term 2 mit *inline markup*\r
\r
:   Definition 2\r
\r
        { ein wenig code, teil von Definition 2 }\r
\r
    Dritter Absatz von Definition 2.\r
\r
\`\`\`\r
Term 1\r
\r
:   Definition 1\r
\r
Term 2 mit *inline markup*\r
\r
:   Definition 2\r
\r
        { ein wenig code, teil von Definition 2 }\r
\r
    Dritter Absatz von Definition 2.\r
\r
\`\`\`\r
\r
## Abkürzungen\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
Die HTML Spezifikation\r
wird gepflegt vom W3C.\r
\`\`\`\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
Die HTML Spezifikation\r
wird gepflegt vom W3C.\r
\`\`\`\r
`},function(d,_){d.exports=`@[toc](目次)\r
\r
Markdown 文法ガイド\r
===\r
> Detailed: [http://commonmark.org/help/](http://commonmark.org/help/)\r
\r
## **太字**\r
\`\`\`\r
**太字**\r
__太字__\r
\`\`\`\r
## *斜体*\r
\`\`\`\r
*斜体*\r
_斜体_\r
\`\`\`\r
## 見出し\r
\`\`\`\r
# h1 #\r
h1\r
====\r
## h2 ##\r
h2\r
----\r
### h3 ###\r
#### h4 ####\r
##### h5 #####\r
###### h6 ######\r
\`\`\`\r
## 横線\r
\`\`\`\r
***\r
---\r
\`\`\`\r
****\r
## ^上付き^文字 & ~下付き~文字\r
\`\`\`\r
super x^2^\r
sub H~2~0\r
\`\`\`\r
## ++下線++ & ~~取り消し線~~\r
\`\`\`\r
++underline++\r
~~strikethrough~~\r
\`\`\`\r
## ==蛍光ペン==\r
\`\`\`\r
==mark==\r
\`\`\`\r
## 引用\r
\r
\`\`\`\r
> quote 1\r
>> quote 2\r
>>> quote 3\r
...\r
\`\`\`\r
\r
## リスト\r
\`\`\`\r
番号付きリスト\r
1.\r
2.\r
3.\r
...\r
\r
箇条書きリスト\r
-\r
-\r
...\r
\`\`\`\r
\r
## Todoリスト\r
\r
- [x] task 1\r
- [ ] task 2\r
\r
\`\`\`\r
- [x] task 1\r
- [ ] task 2\r
\`\`\`\r
\r
## リンク\r
\`\`\`\r
Text Link\r
[Text](www.baidu.com)\r
\r
Image Link\r
![Text](http://www.image.com)\r
\`\`\`\r
## コード\r
\\\`\`\` type\r
\r
code block\r
\r
\\\`\`\`\r
\r
\\\` code \\\`\r
\r
\`\`\`c++\r
int main()\r
{\r
    printf("hello world!");\r
}\r
\`\`\`\r
\`code\`\r
\r
## 表\r
\`\`\`\r
| th1 | th2 | th3 |\r
| :--  | :--: | ----: |\r
| left | center | right |\r
\`\`\`\r
| th1 | th2 | th3 |\r
| :--  | :--: | ----: |\r
| left | center | right |\r
| ---------------------- | ------------- | ----------------- |\r
\r
## 脚注\r
\`\`\`\r
hello[^hello]\r
\`\`\`\r
\r
Look at the bottom[^hello]\r
\r
[^hello]: footnote\r
\r
## 絵文字\r
> Detailed: [https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)\r
\`\`\`\r
:laughing:\r
:blush:\r
:smiley:\r
:)\r
...\r
\`\`\`\r
:laughing::blush::smiley::)\r
\r
## $\\KaTeX$ 数式\r
> Detailed: [KaTeXマニュアル](http://www.intmath.com/cg5/katex-mathjax-comparison.php)、[KaTeX function](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)、[LaTeXマニュアル](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)\r
\r
We can render formulas for example：$x_i + y_i = z_i$ and $\\sum_{i=1}^n a_i=0$  \r
We can also single-line rendering\r
$$\\sum_{i=1}^n a_i=0$$\r
\r
## レイアウト\r
\r
::: hljs-left\r
\`::: hljs-left\`\r
\`left\`\r
\`:::\`\r
:::\r
\r
::: hljs-center\r
\`::: hljs-center\`\r
\`center\`\r
\`:::\`\r
:::\r
\r
::: hljs-right\r
\`::: hljs-right\`\r
\`right\`\r
\`:::\`\r
:::\r
\r
## 定義リスト\r
\r
Term 1\r
\r
:   Definition 1\r
\r
Term 2 with *inline markup*\r
\r
:   Definition 2\r
\r
        { some code, part of Definition 2 }\r
\r
    Third paragraph of definition 2.\r
\r
\`\`\`\r
Term 1\r
\r
:   Definition 1\r
\r
Term 2 with *inline markup*\r
\r
:   Definition 2\r
\r
        { some code, part of Definition 2 }\r
\r
    Third paragraph of definition 2.\r
\r
\`\`\`\r
\r
## abbr\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
The HTML specification\r
is maintained by the W3C.\r
\`\`\`\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
The HTML specification\r
is maintained by the W3C.\r
\`\`\`\r
`},function(d){d.exports=JSON.parse('{"start_editor":"开始编辑...","navigation_title":"导航目录","tl_bold":"粗体","tl_italic":"斜体","tl_header":"标题","tl_header_one":"一级标题","tl_header_two":"二级标题","tl_header_three":"三级标题","tl_header_four":"四级标题","tl_header_five":"五级标题","tl_header_six":"六级标题","tl_underline":"下划线","tl_strikethrough":"中划线","tl_mark":"标记","tl_superscript":"上角标","tl_subscript":"下角标","tl_quote":"段落引用","tl_ol":"有序列表","tl_ul":"无序列表","tl_link":"链接","tl_image":"添加图片链接","tl_code":"代码块","tl_table":"表格","tl_undo":"上一步","tl_redo":"下一步","tl_trash":"清空","tl_save":"保存","tl_navigation_on":"开启标题导航","tl_navigation_off":"关闭标题导航","tl_preview":"预览","tl_aligncenter":"居中","tl_alignleft":"居左","tl_alignright":"居右","tl_edit":"编辑","tl_single_column":"单栏","tl_double_column":"双栏","tl_fullscreen_on":"全屏编辑","tl_fullscreen_off":"退出全屏","tl_read":"沉浸式阅读","tl_html_on":"查看html文本","tl_html_off":"返回markdown文本","tl_help":"markdown语法帮助","tl_upload":"上传图片","tl_upload_remove":"删除","tl_popup_link_title":"添加链接","tl_popup_link_text":"链接描述","tl_popup_link_addr":"链接地址","tl_popup_img_link_title":"添加图片","tl_popup_img_link_text":"图片描述","tl_popup_img_link_addr":"图片链接","tl_popup_link_sure":"确定","tl_popup_link_cancel":"取消"}')},function(d){d.exports=JSON.parse('{"start_editor":"開始編輯...","navigation_title":"導航目錄","tl_bold":"粗體","tl_italic":"斜體","tl_header":"標題","tl_header_one":"一級標題","tl_header_two":"二級標題","tl_header_three":"三級標題","tl_header_four":"四級標題","tl_header_five":"五級標題","tl_header_six":"六級標題","tl_underline":"下劃線","tl_strikethrough":"中劃線","tl_mark":"標記","tl_superscript":"上角標","tl_subscript":"下角標","tl_quote":"段落引用","tl_ol":"有序列表","tl_ul":"無序列表","tl_link":"鏈接","tl_image":"添加圖片鏈接","tl_code":"代碼塊","tl_table":"表格","tl_undo":"上一步","tl_redo":"下一步","tl_trash":"清空","tl_save":"保存","tl_navigation_on":"開啟標題導航","tl_navigation_off":"關閉標題導航","tl_preview":"預覽","tl_aligncenter":"居中","tl_alignleft":"居左","tl_alignright":"居右","tl_edit":"編輯","tl_single_column":"單欄","tl_double_column":"雙欄","tl_fullscreen_on":"全屏編輯","tl_fullscreen_off":"退出全屏","tl_read":"沈浸式閱讀","tl_html_on":"查看html文本","tl_html_off":"返回markdown文本","tl_help":"markdown語法幫助","tl_upload":"上傳圖片","tl_upload_remove":"刪除","tl_popup_link_title":"添加鏈接","tl_popup_link_text":"鏈接描述","tl_popup_link_addr":"鏈接地址","tl_popup_img_link_title":"添加圖片","tl_popup_img_link_text":"圖片描述","tl_popup_img_link_addr":"圖片鏈接","tl_popup_link_sure":"確定","tl_popup_link_cancel":"取消"}')},function(d){d.exports=JSON.parse('{"start_editor":"Begin editing...","navigation_title":"Navigation","tl_bold":"Bold","tl_italic":"Italic","tl_header":"Header","tl_header_one":"Header 1","tl_header_two":"Header 2","tl_header_three":"Header 3","tl_header_four":"Header 4","tl_header_five":"Header 5","tl_header_six":"Header 6","tl_underline":"Underline","tl_strikethrough":"Strikethrough","tl_mark":"Mark","tl_superscript":"Superscript","tl_subscript":"Subscript","tl_quote":"Quote","tl_ol":"Ol","tl_ul":"Ul","tl_link":"Link","tl_image":"Image Link","tl_code":"Code","tl_table":"Table","tl_undo":"Undo","tl_redo":"Redo","tl_trash":"Trash","tl_save":"Save","tl_navigation_on":"Navigation ON","tl_navigation_off":"Navigation OFF","tl_preview":"Preview","tl_aligncenter":"Center text","tl_alignleft":"Clamp text to the left","tl_alignright":"Clamp text to the right","tl_edit":"Edit","tl_single_column":"Single Column","tl_double_column":"Double Columns","tl_fullscreen_on":"FullScreen ON","tl_fullscreen_off":"FullScreen OFF","tl_read":"Read Model","tl_html_on":"HTML ON","tl_html_off":"HTML OFF","tl_help":"Markdown Guide","tl_upload":"Upload Images","tl_upload_remove":"Remove","tl_popup_link_title":"Add Link","tl_popup_link_text":"Link text","tl_popup_link_addr":"Link address","tl_popup_img_link_title":"Add Image","tl_popup_img_link_text":"Image Text","tl_popup_img_link_addr":"Image Link","tl_popup_link_sure":"Sure","tl_popup_link_cancel":"Cancel"}')},function(d){d.exports=JSON.parse(`{"start_editor":"Début d'édition...","navigation_title":"Navigation","tl_bold":"Gras","tl_italic":"Italique","tl_header":"Entête","tl_header_one":"Entête 1","tl_header_two":"Entête 2","tl_header_three":"Entête 3","tl_header_four":"Entête 4","tl_header_five":"Entête 5","tl_header_six":"Entête 6","tl_underline":"Souligné","tl_strikethrough":"Barré","tl_mark":"Mark","tl_superscript":"Exposant","tl_subscript":"Sous-exposant","tl_quote":"Quote","tl_ol":"Liste ","tl_ul":"Puce","tl_link":"Lien","tl_image":"Image Lien","tl_code":"Code","tl_table":"Table","tl_undo":"Annuler","tl_redo":"Refaire","tl_trash":"Supprimer","tl_save":"Sauver","tl_navigation_on":"Activer la navigation","tl_navigation_off":"Désactiver le navigation","tl_preview":"Previsualisé","tl_aligncenter":"Center le texte","tl_alignleft":"Férer le texte à gauche","tl_alignright":"Férer le texte à droite","tl_edit":"Editer","tl_single_column":"Seule Colonne","tl_double_column":"Colonnes Doubles","tl_fullscreen_on":"Activer le mode plein écran","tl_fullscreen_off":"Désactiver le mode plein écran","tl_read":"Lire le modèle","tl_html_on":"Activer le mode HTML","tl_html_off":"Désactiver le mode HTML","tl_help":"Guide Markdown","tl_upload":"Télécharger les images","tl_upload_remove":"Supprimer","tl_popup_link_title":"Ajouter un lien","tl_popup_link_text":"Description","tl_popup_link_addr":"Link","tl_popup_img_link_title":"Ajouter une image","tl_popup_img_link_text":"Description","tl_popup_img_link_addr":"Link","tl_popup_link_sure":"sûr","tl_popup_link_cancel":"Annuler"}`)},function(d){d.exports=JSON.parse('{"start_editor":"Começar edição...","navigation_title":"Navegação","tl_bold":"Negrito","tl_italic":"Itálico","tl_header":"Cabeçalho","tl_header_one":"Cabeçalho 1","tl_header_two":"Cabeçalho 2","tl_header_three":"Cabeçalho 3","tl_header_four":"Cabeçalho 4","tl_header_five":"Cabeçalho 5","tl_header_six":"Cabeçalho 6","tl_underline":"Sublinhar","tl_strikethrough":"Tachar","tl_mark":"Marcação","tl_superscript":"Sobrescrito","tl_subscript":"Subscrito","tl_quote":"Citação","tl_ol":"Lista Numerada","tl_ul":"Lista com marcadores","tl_link":"Link","tl_image":"Link de imagem","tl_code":"Código","tl_table":"Tabela","tl_undo":"Desfazer","tl_redo":"Refazer","tl_trash":"Lixo","tl_save":"Salvar","tl_navigation_on":"Mostrar Navegação","tl_navigation_off":"Esconder Navegação","tl_preview":"Preview","tl_aligncenter":"Alinhar no centro","tl_alignleft":"Alinhar à esquerda","tl_alignright":"Alinhar à direita","tl_edit":"Editar","tl_single_column":"Coluna Única","tl_double_column":"Duas Colunas","tl_fullscreen_on":"Ligar Tela Cheia","tl_fullscreen_off":"Desligar Tela Cheia","tl_read":"Modo de Leitura","tl_html_on":"Ligar HTML","tl_html_off":"Desligar HTML","tl_help":"Guia Markdown","tl_upload":"Upload de Imagens","tl_upload_remove":"Remover","tl_popup_link_title":"Adicionar Link","tl_popup_link_text":"Descrição","tl_popup_link_addr":"Link","tl_popup_img_link_title":"Adicionar fotos","tl_popup_img_link_text":"Descrição","tl_popup_img_link_addr":"Link","tl_popup_link_sure":"Confirmar","tl_popup_link_cancel":"Cancelar"}')},function(d){d.exports=JSON.parse('{"start_editor":"Начните редактирование...","navigation_title":"Навигация","tl_bold":"Полужирный","tl_italic":"Курсив","tl_header":"Заголовки","tl_header_one":"Заголовок 1","tl_header_two":"Заголовок 2","tl_header_three":"Заголовок 3","tl_header_four":"Заголовок 4","tl_header_five":"Заголовок 5","tl_header_six":"Заголовок 6","tl_underline":"Подчеркнутый","tl_strikethrough":"Зачеркнутый","tl_mark":"Отметка","tl_superscript":"Верхний индекс","tl_subscript":"Нижний индекс","tl_quote":"Цитата","tl_ol":"Нумерованный список","tl_ul":"Список","tl_link":"Ссылка","tl_image":"Ссылка изображения","tl_code":"Код","tl_table":"Таблица","tl_undo":"Отменить","tl_redo":"Вернуть","tl_trash":"Удалить","tl_save":"Сохранить","tl_navigation_on":"Показать навигацию","tl_navigation_off":"Скрыть навигацию","tl_preview":"Предпросмотр","tl_aligncenter":"Выровнять по центру","tl_alignleft":"Выровнять по левому краю","tl_alignright":"Выровнять по правому краю","tl_edit":"Редактор","tl_single_column":"Одно поле","tl_double_column":"Два поля","tl_fullscreen_on":"Полноэкранный режим","tl_fullscreen_off":"Выключить полноэкранный режим","tl_read":"Режим чтения","tl_html_on":"Показать HTML","tl_html_off":"Убрать HTML","tl_help":"Markdown помощь","tl_upload":"Загрузить изображение","tl_upload_remove":"Удалить","tl_popup_link_title":"Добавить ссылку","tl_popup_link_text":"Текст ссылки","tl_popup_link_addr":"Адрес ссылки","tl_popup_img_link_title":"Локальное изображение","tl_popup_img_link_text":"Текст изображения","tl_popup_img_link_addr":"Ссылка изображения","tl_popup_link_sure":"Добавить","tl_popup_link_cancel":"Отменить"}')},function(d){d.exports=JSON.parse('{"start_editor":"Bearbeitung beginnen...","navigation_title":"Navigation","tl_bold":"Fett","tl_italic":"Kursiv","tl_header":"Überschrift","tl_header_one":"Überschrift 1","tl_header_two":"Überschrift 2","tl_header_three":"Überschrift 3","tl_header_four":"Überschrift 4","tl_header_five":"Überschrift 5","tl_header_six":"Überschrift 6","tl_underline":"Unterstrichen","tl_strikethrough":"Durchgestrichen","tl_mark":"Markiert","tl_superscript":"Hochgestellt","tl_subscript":"Tiefgestellt","tl_quote":"Zitat","tl_ol":"Ol","tl_ul":"Ul","tl_link":"Link","tl_image":"Link mit Bild","tl_code":"Code","tl_table":"Tabelle","tl_undo":"Rückgängig","tl_redo":"Wiederherstellen","tl_trash":"Mülleimer","tl_save":"Speichern","tl_navigation_on":"Navigation AN","tl_navigation_off":"Navigation AUS","tl_preview":"Vorschau","tl_aligncenter":"Text zentrieren","tl_alignleft":"Nach links ausrichten","tl_alignright":"Nach rechts ausrichten","tl_edit":"Bearbeiten","tl_single_column":"Einspaltig","tl_double_column":"Zweispaltig","tl_fullscreen_on":"Vollbild AN","tl_fullscreen_off":"Vollbild AUS","tl_read":"Lesemodus","tl_html_on":"HTML AN","tl_html_off":"HTML AUS","tl_help":"Markdown Handbuch","tl_upload":"Bilder-Upload","tl_upload_remove":"Entfernen","tl_popup_link_title":"Link hinzufügen","tl_popup_link_text":"Text des Links","tl_popup_link_addr":"Linkziel","tl_popup_img_link_title":"Bild hinzufügen","tl_popup_img_link_text":"Text des Bildes","tl_popup_img_link_addr":"Link auf Bild","tl_popup_link_sure":"Ja","tl_popup_link_cancel":"Abbruch"}')},function(d){d.exports=JSON.parse('{"start_editor":"編集を始めてね！","navigation_title":"ナビゲーション","tl_bold":"太字","tl_italic":"斜体","tl_header":"見出し","tl_header_one":"見出し1","tl_header_two":"見出し2","tl_header_three":"見出し3","tl_header_four":"見出し4","tl_header_five":"見出し5","tl_header_six":"見出し6","tl_underline":"下線","tl_strikethrough":"取り消し線","tl_mark":"蛍光ペン","tl_superscript":"上付き文字","tl_subscript":"下付き文字","tl_quote":"引用","tl_ol":"番号付きリスト","tl_ul":"箇条書きリスト","tl_link":"ハイパーリンク","tl_image":"画像のリンク","tl_code":"コードの挿入","tl_table":"表の挿入","tl_undo":"戻る","tl_redo":"進む","tl_trash":"削除","tl_save":"保存","tl_navigation_on":"ナビゲーションを表示","tl_navigation_off":"ナビゲーションを非表示","tl_preview":"プレビュー","tl_aligncenter":"中央揃え","tl_alignleft":"左揃え","tl_alignright":"右揃え","tl_edit":"編集","tl_single_column":"一列","tl_double_column":"二列","tl_fullscreen_on":"全画面表示","tl_fullscreen_off":"全画面表示の終了","tl_read":"モデルの読み込み","tl_html_on":"HTMLで表示","tl_html_off":"HTML表示の終了","tl_help":"ヘルプ","tl_upload":"画像をアップロード","tl_upload_remove":"画像の削除","tl_popup_link_title":"リンクの追加","tl_popup_link_text":"リンクテキスト","tl_popup_link_addr":"リンク先のURL","tl_popup_img_link_title":"画像の追加","tl_popup_img_link_text":"画像タイトル","tl_popup_img_link_addr":"画像URL","tl_popup_link_sure":"OK","tl_popup_link_cancel":"戻る"}')},function(d,_,i){Object.defineProperty(_,"__esModule",{value:!0});var e=l(i(25));_.initMarkdown=O;var t=l(i(56)),r=i(57),n=l(i(133));function l(j){return j&&j.__esModule?j:{default:j}}var s={html:!0,xhtmlOut:!0,breaks:!0,langPrefix:"lang-",linkify:!1,typographer:!0,quotes:"“”‘’"},a=i(138),c=i(195),o=i(201),u=i(202),f=i(203),p=i(204),m=i(205),g=i(206),b=i(207),y=i(208),k=i(209),w=i(210),v=i(211),x=i(212),T=i(213),S={},E=[],C={hljs:"auto",highlighted:!0,langCheck:function(j){j&&t.default[j]&&!S[j]&&(S[j]=1,E.push(t.default[j]))}};function O(){var j=new a(s),D=j.renderer.rules.link_open||function(L,$,B,M,P){return P.renderToken(L,$,B)};return j.renderer.rules.link_open=function(L,$,B,M,P){var U=L[$].attrIndex("href");if(L[$].attrs[U][1].startsWith("#"))return D(L,$,B,M,P);var V=L[$].attrIndex("target");return V<0?L[$].attrPush(["target","_blank"]):L[$].attrs[V][1]="_blank",D(L,$,B,M,P)},j.use(v,C).use(c).use(u).use(o).use(k).use(k,"hljs-left").use(k,"hljs-center").use(k,"hljs-right").use(f).use(p).use(m).use(g).use(b).use(k).use(T).use(x).use(y).use(w),j}_.default={data:function(){return{markdownIt:null}},created:function(){this.markdownIt=O(),this.html?(0,e.default)(this.xssOptions)==="object"&&this.markdownIt.use(n.default,this.xssOptions):(this.markdownIt.set({html:!1}),this.xssOptions=!1)},mounted:function(){C.highlighted=this.ishljs},methods:{$render:function(j,D){S={},E=[];var L=this.markdownIt.render(j);this.ishljs&&E.length>0&&this.$_render(j,D,L),D(L)},$_render:function(j,D,L){for(var $=0,B=0;B<E.length;B++){var M=this.p_external_link.hljs_lang(E[B]);(0,r.loadScript)(M,function(){($+=1)===E.length&&(L=this.markdownIt.render(j),D(L))})}}},watch:{ishljs:function(j){C.highlighted=j}}}},function(d,_,i){Object.defineProperty(_,"__esModule",{value:!0}),_.default=function(n,l){n.options.html&&(t=new e.FilterXSS(l),n.core.ruler.push("mavoneditor_sanitizer",r))};var e=i(134),t=void 0;function r(n){t&&function l(s,a){for(var c=void 0,o=void 0,u=0;u<s.length;u++)a.indexOf(s[u].type)!==-1&&(c=s[u].content,o=s[u].children,s[u].content=t.process(c),o&&o.length&&c!==s[u].content&&l(o,["html_inline"]))}(n.tokens,["inline","html_block"])}},function(d,_,i){var e=i(58),t=i(61),r=i(137);function n(l,s){return new r(s).process(l)}(_=d.exports=n).filterXSS=n,_.FilterXSS=r,function(){for(var l in e)_[l]=e[l];for(var s in t)_[s]=t[s]}(),typeof window<"u"&&(window.filterXSS=d.exports),typeof self<"u"&&typeof DedicatedWorkerGlobalScope<"u"&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=d.exports)},function(d,_,i){var e=i(59),t=i(136);i(60);function r(l){return l==null}function n(l){(l=function(s){var a={};for(var c in s)a[c]=s[c];return a}(l||{})).whiteList=l.whiteList||e.whiteList,l.onAttr=l.onAttr||e.onAttr,l.onIgnoreAttr=l.onIgnoreAttr||e.onIgnoreAttr,l.safeAttrValue=l.safeAttrValue||e.safeAttrValue,this.options=l}n.prototype.process=function(l){if(!(l=(l=l||"").toString()))return"";var s=this.options,a=s.whiteList,c=s.onAttr,o=s.onIgnoreAttr,u=s.safeAttrValue;return t(l,function(f,p,m,g,b){var y=a[m],k=!1;if(y===!0?k=y:typeof y=="function"?k=y(g):y instanceof RegExp&&(k=y.test(g)),k!==!0&&(k=!1),g=u(m,g)){var w,v={position:p,sourcePosition:f,source:b,isWhite:k};return k?r(w=c(m,g,v))?m+":"+g:w:r(w=o(m,g,v))?void 0:w}})},d.exports=n},function(d,_,i){var e=i(60);d.exports=function(t,r){(t=e.trimRight(t))[t.length-1]!==";"&&(t+=";");var n=t.length,l=!1,s=0,a=0,c="";function o(){if(!l){var p=e.trim(t.slice(s,a)),m=p.indexOf(":");if(m!==-1){var g=e.trim(p.slice(0,m)),b=e.trim(p.slice(m+1));if(g){var y=r(s,c.length,g,b,p);y&&(c+=y+"; ")}}}s=a+1}for(;a<n;a++){var u=t[a];if(u==="/"&&t[a+1]==="*"){var f=t.indexOf("*/",a+2);if(f===-1)break;s=(a=f+1)+1,l=!1}else u==="("?l=!0:u===")"?l=!1:u===";"?l||o():u===`
`&&o()}return e.trim(c)}},function(d,_,i){var e=i(38).FilterCSS,t=i(58),r=i(61),n=r.parseTag,l=r.parseAttr,s=i(39);function a(o){return o==null}function c(o){(o=function(u){var f={};for(var p in u)f[p]=u[p];return f}(o||{})).stripIgnoreTag&&(o.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),o.onIgnoreTag=t.onIgnoreTagStripAll),o.whiteList||o.allowList?o.whiteList=function(u){var f={};for(var p in u)Array.isArray(u[p])?f[p.toLowerCase()]=u[p].map(function(m){return m.toLowerCase()}):f[p.toLowerCase()]=u[p];return f}(o.whiteList||o.allowList):o.whiteList=t.whiteList,o.onTag=o.onTag||t.onTag,o.onTagAttr=o.onTagAttr||t.onTagAttr,o.onIgnoreTag=o.onIgnoreTag||t.onIgnoreTag,o.onIgnoreTagAttr=o.onIgnoreTagAttr||t.onIgnoreTagAttr,o.safeAttrValue=o.safeAttrValue||t.safeAttrValue,o.escapeHtml=o.escapeHtml||t.escapeHtml,this.options=o,o.css===!1?this.cssFilter=!1:(o.css=o.css||{},this.cssFilter=new e(o.css))}c.prototype.process=function(o){if(!(o=(o=o||"").toString()))return"";var u=this.options,f=u.whiteList,p=u.onTag,m=u.onIgnoreTag,g=u.onTagAttr,b=u.onIgnoreTagAttr,y=u.safeAttrValue,k=u.escapeHtml,w=this.cssFilter;u.stripBlankChar&&(o=t.stripBlankChar(o)),u.allowCommentTag||(o=t.stripCommentTag(o));var v=!1;u.stripIgnoreTagBody&&(v=t.StripTagBody(u.stripIgnoreTagBody,m),m=v.onIgnoreTag);var x=n(o,function(T,S,E,C,O){var j={sourcePosition:T,position:S,isClosing:O,isWhite:Object.prototype.hasOwnProperty.call(f,E)},D=p(E,C,j);if(!a(D))return D;if(j.isWhite){if(j.isClosing)return"</"+E+">";var L=function(M){var P=s.spaceIndex(M);if(P===-1)return{html:"",closing:M[M.length-2]==="/"};var U=(M=s.trim(M.slice(P+1,-1)))[M.length-1]==="/";return U&&(M=s.trim(M.slice(0,-1))),{html:M,closing:U}}(C),$=f[E],B=l(L.html,function(M,P){var U=s.indexOf($,M)!==-1,V=g(E,M,P,U);return a(V)?U?(P=y(E,M,P,w))?M+'="'+P+'"':M:a(V=b(E,M,P,U))?void 0:V:V});return C="<"+E,B&&(C+=" "+B),L.closing&&(C+=" /"),C+=">"}return a(D=m(E,C,j))?k(C):D},k);return v&&(x=v.remove(x)),x},d.exports=c},function(d,_,i){d.exports=i(139)},function(d,_,i){var e=i(1),t=i(147),r=i(151),n=i(152),l=i(160),s=i(174),a=i(187),c=i(63),o=i(189),u={default:i(192),zero:i(193),commonmark:i(194)},f=/^(vbscript|javascript|file|data):/,p=/^data:image\/(gif|png|jpeg|webp);/;function m(w){var v=w.trim().toLowerCase();return!f.test(v)||!!p.test(v)}var g=["http:","https:","mailto:"];function b(w){var v=c.parse(w,!0);if(v.hostname&&(!v.protocol||g.indexOf(v.protocol)>=0))try{v.hostname=o.toASCII(v.hostname)}catch{}return c.encode(c.format(v))}function y(w){var v=c.parse(w,!0);if(v.hostname&&(!v.protocol||g.indexOf(v.protocol)>=0))try{v.hostname=o.toUnicode(v.hostname)}catch{}return c.decode(c.format(v))}function k(w,v){if(!(this instanceof k))return new k(w,v);v||e.isString(w)||(v=w||{},w="default"),this.inline=new s,this.block=new l,this.core=new n,this.renderer=new r,this.linkify=new a,this.validateLink=m,this.normalizeLink=b,this.normalizeLinkText=y,this.utils=e,this.helpers=e.assign({},t),this.options={},this.configure(w),v&&this.set(v)}k.prototype.set=function(w){return e.assign(this.options,w),this},k.prototype.configure=function(w){var v,x=this;if(e.isString(w)&&!(w=u[v=w]))throw new Error('Wrong `markdown-it` preset "'+v+'", check name');if(!w)throw new Error("Wrong `markdown-it` preset, can't be empty");return w.options&&x.set(w.options),w.components&&Object.keys(w.components).forEach(function(T){w.components[T].rules&&x[T].ruler.enableOnly(w.components[T].rules),w.components[T].rules2&&x[T].ruler2.enableOnly(w.components[T].rules2)}),this},k.prototype.enable=function(w,v){var x=[];Array.isArray(w)||(w=[w]),["core","block","inline"].forEach(function(S){x=x.concat(this[S].ruler.enable(w,!0))},this),x=x.concat(this.inline.ruler2.enable(w,!0));var T=w.filter(function(S){return x.indexOf(S)<0});if(T.length&&!v)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+T);return this},k.prototype.disable=function(w,v){var x=[];Array.isArray(w)||(w=[w]),["core","block","inline"].forEach(function(S){x=x.concat(this[S].ruler.disable(w,!0))},this),x=x.concat(this.inline.ruler2.disable(w,!0));var T=w.filter(function(S){return x.indexOf(S)<0});if(T.length&&!v)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+T);return this},k.prototype.use=function(w){var v=[this].concat(Array.prototype.slice.call(arguments,1));return w.apply(w,v),this},k.prototype.parse=function(w,v){if(typeof w!="string")throw new Error("Input data should be a String");var x=new this.core.State(w,this,v);return this.core.process(x),x.tokens},k.prototype.render=function(w,v){return v=v||{},this.renderer.render(this.parse(w,v),this.options,v)},k.prototype.parseInline=function(w,v){var x=new this.core.State(w,this,v);return x.inlineMode=!0,this.core.process(x),x.tokens},k.prototype.renderInline=function(w,v){return v=v||{},this.renderer.render(this.parseInline(w,v),this.options,v)},d.exports=k},function(d){d.exports=JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}')},function(d,_,i){var e={};function t(r,n,l){var s,a,c,o,u,f="";for(typeof n!="string"&&(l=n,n=t.defaultChars),l===void 0&&(l=!0),u=function(p){var m,g,b=e[p];if(b)return b;for(b=e[p]=[],m=0;m<128;m++)g=String.fromCharCode(m),/^[0-9a-z]$/i.test(g)?b.push(g):b.push("%"+("0"+m.toString(16).toUpperCase()).slice(-2));for(m=0;m<p.length;m++)b[p.charCodeAt(m)]=p[m];return b}(n),s=0,a=r.length;s<a;s++)if(c=r.charCodeAt(s),l&&c===37&&s+2<a&&/^[0-9a-f]{2}$/i.test(r.slice(s+1,s+3)))f+=r.slice(s,s+3),s+=2;else if(c<128)f+=u[c];else if(c>=55296&&c<=57343){if(c>=55296&&c<=56319&&s+1<a&&(o=r.charCodeAt(s+1))>=56320&&o<=57343){f+=encodeURIComponent(r[s]+r[s+1]),s++;continue}f+="%EF%BF%BD"}else f+=encodeURIComponent(r[s]);return f}t.defaultChars=";/?:@&=+$,-_.!~*'()#",t.componentChars="-_.!~*'()",d.exports=t},function(d,_,i){var e={};function t(r,n){var l;return typeof n!="string"&&(n=t.defaultChars),l=function(s){var a,c,o=e[s];if(o)return o;for(o=e[s]=[],a=0;a<128;a++)c=String.fromCharCode(a),o.push(c);for(a=0;a<s.length;a++)o[c=s.charCodeAt(a)]="%"+("0"+c.toString(16).toUpperCase()).slice(-2);return o}(n),r.replace(/(%[a-f0-9]{2})+/gi,function(s){var a,c,o,u,f,p,m,g="";for(a=0,c=s.length;a<c;a+=3)(o=parseInt(s.slice(a+1,a+3),16))<128?g+=l[o]:(224&o)==192&&a+3<c&&(192&(u=parseInt(s.slice(a+4,a+6),16)))==128?(g+=(m=o<<6&1984|63&u)<128?"��":String.fromCharCode(m),a+=3):(240&o)==224&&a+6<c&&(u=parseInt(s.slice(a+4,a+6),16),f=parseInt(s.slice(a+7,a+9),16),(192&u)==128&&(192&f)==128)?(g+=(m=o<<12&61440|u<<6&4032|63&f)<2048||m>=55296&&m<=57343?"���":String.fromCharCode(m),a+=6):(248&o)==240&&a+9<c&&(u=parseInt(s.slice(a+4,a+6),16),f=parseInt(s.slice(a+7,a+9),16),p=parseInt(s.slice(a+10,a+12),16),(192&u)==128&&(192&f)==128&&(192&p)==128)?((m=o<<18&1835008|u<<12&258048|f<<6&4032|63&p)<65536||m>1114111?g+="����":(m-=65536,g+=String.fromCharCode(55296+(m>>10),56320+(1023&m))),a+=9):g+="�";return g})}t.defaultChars=";/?:@&=+$,#",t.componentChars="",d.exports=t},function(d,_,i){d.exports=function(e){var t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||""}},function(d,_,i){function e(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var t=/^([a-z0-9.+-]+:)/i,r=/:[0-9]*$/,n=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,l=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r",`
`,"	"]),s=["'"].concat(l),a=["%","/","?",";","#"].concat(s),c=["/","?","#"],o=/^[+a-z0-9A-Z_-]{0,63}$/,u=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,f={javascript:!0,"javascript:":!0},p={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};e.prototype.parse=function(m,g){var b,y,k,w,v,x=m;if(x=x.trim(),!g&&m.split("#").length===1){var T=n.exec(x);if(T)return this.pathname=T[1],T[2]&&(this.search=T[2]),this}var S=t.exec(x);if(S&&(k=(S=S[0]).toLowerCase(),this.protocol=S,x=x.substr(S.length)),(g||S||x.match(/^\/\/[^@\/]+@[^@\/]+/))&&(!(v=x.substr(0,2)==="//")||S&&f[S]||(x=x.substr(2),this.slashes=!0)),!f[S]&&(v||S&&!p[S])){var E,C,O=-1;for(b=0;b<c.length;b++)(w=x.indexOf(c[b]))!==-1&&(O===-1||w<O)&&(O=w);for((C=O===-1?x.lastIndexOf("@"):x.lastIndexOf("@",O))!==-1&&(E=x.slice(0,C),x=x.slice(C+1),this.auth=E),O=-1,b=0;b<a.length;b++)(w=x.indexOf(a[b]))!==-1&&(O===-1||w<O)&&(O=w);O===-1&&(O=x.length),x[O-1]===":"&&O--;var j=x.slice(0,O);x=x.slice(O),this.parseHost(j),this.hostname=this.hostname||"";var D=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!D){var L=this.hostname.split(/\./);for(b=0,y=L.length;b<y;b++){var $=L[b];if($&&!$.match(o)){for(var B="",M=0,P=$.length;M<P;M++)$.charCodeAt(M)>127?B+="x":B+=$[M];if(!B.match(o)){var U=L.slice(0,b),V=L.slice(b+1),W=$.match(u);W&&(U.push(W[1]),V.unshift(W[2])),V.length&&(x=V.join(".")+x),this.hostname=U.join(".");break}}}}this.hostname.length>255&&(this.hostname=""),D&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var N=x.indexOf("#");N!==-1&&(this.hash=x.substr(N),x=x.slice(0,N));var q=x.indexOf("?");return q!==-1&&(this.search=x.substr(q),x=x.slice(0,q)),x&&(this.pathname=x),p[k]&&this.hostname&&!this.pathname&&(this.pathname=""),this},e.prototype.parseHost=function(m){var g=r.exec(m);g&&((g=g[0])!==":"&&(this.port=g.substr(1)),m=m.substr(0,m.length-g.length)),m&&(this.hostname=m)},d.exports=function(m,g){if(m&&m instanceof e)return m;var b=new e;return b.parse(m,g),b}},function(d,_,i){_.Any=i(64),_.Cc=i(65),_.Cf=i(146),_.P=i(40),_.Z=i(66)},function(d,_){d.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/},function(d,_,i){_.parseLinkLabel=i(148),_.parseLinkDestination=i(149),_.parseLinkTitle=i(150)},function(d,_,i){d.exports=function(e,t,r){var n,l,s,a,c=-1,o=e.posMax,u=e.pos;for(e.pos=t+1,n=1;e.pos<o;){if((s=e.src.charCodeAt(e.pos))===93&&--n===0){l=!0;break}if(a=e.pos,e.md.inline.skipToken(e),s===91){if(a===e.pos-1)n++;else if(r)return e.pos=u,-1}}return l&&(c=e.pos),e.pos=u,c}},function(d,_,i){var e=i(1).unescapeAll;d.exports=function(t,r,n){var l,s,a=r,c={ok:!1,pos:0,lines:0,str:""};if(t.charCodeAt(r)===60){for(r++;r<n;){if((l=t.charCodeAt(r))===10)return c;if(l===62)return c.pos=r+1,c.str=e(t.slice(a+1,r)),c.ok=!0,c;l===92&&r+1<n?r+=2:r++}return c}for(s=0;r<n&&(l=t.charCodeAt(r))!==32&&!(l<32||l===127);)if(l===92&&r+1<n)r+=2;else{if(l===40&&s++,l===41){if(s===0)break;s--}r++}return a===r||s!==0||(c.str=e(t.slice(a,r)),c.lines=0,c.pos=r,c.ok=!0),c}},function(d,_,i){var e=i(1).unescapeAll;d.exports=function(t,r,n){var l,s,a=0,c=r,o={ok:!1,pos:0,lines:0,str:""};if(r>=n||(s=t.charCodeAt(r))!==34&&s!==39&&s!==40)return o;for(r++,s===40&&(s=41);r<n;){if((l=t.charCodeAt(r))===s)return o.pos=r+1,o.lines=a,o.str=e(t.slice(c+1,r)),o.ok=!0,o;l===10?a++:l===92&&r+1<n&&(r++,t.charCodeAt(r)===10&&a++),r++}return o}},function(d,_,i){var e=i(1).assign,t=i(1).unescapeAll,r=i(1).escapeHtml,n={};function l(){this.rules=e({},n)}n.code_inline=function(s,a,c,o,u){var f=s[a];return"<code"+u.renderAttrs(f)+">"+r(s[a].content)+"</code>"},n.code_block=function(s,a,c,o,u){var f=s[a];return"<pre"+u.renderAttrs(f)+"><code>"+r(s[a].content)+`</code></pre>
`},n.fence=function(s,a,c,o,u){var f,p,m,g,b=s[a],y=b.info?t(b.info).trim():"",k="";return y&&(k=y.split(/\s+/g)[0]),(f=c.highlight&&c.highlight(b.content,k)||r(b.content)).indexOf("<pre")===0?f+`
`:y?(p=b.attrIndex("class"),m=b.attrs?b.attrs.slice():[],p<0?m.push(["class",c.langPrefix+k]):m[p][1]+=" "+c.langPrefix+k,g={attrs:m},"<pre><code"+u.renderAttrs(g)+">"+f+`</code></pre>
`):"<pre><code"+u.renderAttrs(b)+">"+f+`</code></pre>
`},n.image=function(s,a,c,o,u){var f=s[a];return f.attrs[f.attrIndex("alt")][1]=u.renderInlineAsText(f.children,c,o),u.renderToken(s,a,c)},n.hardbreak=function(s,a,c){return c.xhtmlOut?`<br />
`:`<br>
`},n.softbreak=function(s,a,c){return c.breaks?c.xhtmlOut?`<br />
`:`<br>
`:`
`},n.text=function(s,a){return r(s[a].content)},n.html_block=function(s,a){return s[a].content},n.html_inline=function(s,a){return s[a].content},l.prototype.renderAttrs=function(s){var a,c,o;if(!s.attrs)return"";for(o="",a=0,c=s.attrs.length;a<c;a++)o+=" "+r(s.attrs[a][0])+'="'+r(s.attrs[a][1])+'"';return o},l.prototype.renderToken=function(s,a,c){var o,u="",f=!1,p=s[a];return p.hidden?"":(p.block&&p.nesting!==-1&&a&&s[a-1].hidden&&(u+=`
`),u+=(p.nesting===-1?"</":"<")+p.tag,u+=this.renderAttrs(p),p.nesting===0&&c.xhtmlOut&&(u+=" /"),p.block&&(f=!0,p.nesting===1&&a+1<s.length&&((o=s[a+1]).type==="inline"||o.hidden||o.nesting===-1&&o.tag===p.tag)&&(f=!1)),u+=f?`>
`:">")},l.prototype.renderInline=function(s,a,c){for(var o,u="",f=this.rules,p=0,m=s.length;p<m;p++)f[o=s[p].type]!==void 0?u+=f[o](s,p,a,c,this):u+=this.renderToken(s,p,a);return u},l.prototype.renderInlineAsText=function(s,a,c){for(var o="",u=0,f=s.length;u<f;u++)s[u].type==="text"?o+=s[u].content:s[u].type==="image"&&(o+=this.renderInlineAsText(s[u].children,a,c));return o},l.prototype.render=function(s,a,c){var o,u,f,p="",m=this.rules;for(o=0,u=s.length;o<u;o++)(f=s[o].type)==="inline"?p+=this.renderInline(s[o].children,a,c):m[f]!==void 0?p+=m[s[o].type](s,o,a,c,this):p+=this.renderToken(s,o,a,c);return p},d.exports=l},function(d,_,i){var e=i(41),t=[["normalize",i(153)],["block",i(154)],["inline",i(155)],["linkify",i(156)],["replacements",i(157)],["smartquotes",i(158)]];function r(){this.ruler=new e;for(var n=0;n<t.length;n++)this.ruler.push(t[n][0],t[n][1])}r.prototype.process=function(n){var l,s,a;for(l=0,s=(a=this.ruler.getRules("")).length;l<s;l++)a[l](n)},r.prototype.State=i(159),d.exports=r},function(d,_,i){var e=/\r\n?|\n/g,t=/\0/g;d.exports=function(r){var n;n=(n=r.src.replace(e,`
`)).replace(t,"�"),r.src=n}},function(d,_,i){d.exports=function(e){var t;e.inlineMode?((t=new e.Token("inline","",0)).content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}},function(d,_,i){d.exports=function(e){var t,r,n,l=e.tokens;for(r=0,n=l.length;r<n;r++)(t=l[r]).type==="inline"&&e.md.inline.parse(t.content,e.md,e.env,t.children)}},function(d,_,i){var e=i(1).arrayReplaceAt;function t(r){return/^<\/a\s*>/i.test(r)}d.exports=function(r){var n,l,s,a,c,o,u,f,p,m,g,b,y,k,w,v,x,T,S=r.tokens;if(r.md.options.linkify){for(l=0,s=S.length;l<s;l++)if(S[l].type==="inline"&&r.md.linkify.pretest(S[l].content))for(y=0,n=(a=S[l].children).length-1;n>=0;n--)if((o=a[n]).type!=="link_close"){if(o.type==="html_inline"&&(T=o.content,/^<a[>\s]/i.test(T)&&y>0&&y--,t(o.content)&&y++),!(y>0)&&o.type==="text"&&r.md.linkify.test(o.content)){for(p=o.content,x=r.md.linkify.match(p),u=[],b=o.level,g=0,f=0;f<x.length;f++)k=x[f].url,w=r.md.normalizeLink(k),r.md.validateLink(w)&&(v=x[f].text,v=x[f].schema?x[f].schema!=="mailto:"||/^mailto:/i.test(v)?r.md.normalizeLinkText(v):r.md.normalizeLinkText("mailto:"+v).replace(/^mailto:/,""):r.md.normalizeLinkText("http://"+v).replace(/^http:\/\//,""),(m=x[f].index)>g&&((c=new r.Token("text","",0)).content=p.slice(g,m),c.level=b,u.push(c)),(c=new r.Token("link_open","a",1)).attrs=[["href",w]],c.level=b++,c.markup="linkify",c.info="auto",u.push(c),(c=new r.Token("text","",0)).content=v,c.level=b,u.push(c),(c=new r.Token("link_close","a",-1)).level=--b,c.markup="linkify",c.info="auto",u.push(c),g=x[f].lastIndex);g<p.length&&((c=new r.Token("text","",0)).content=p.slice(g),c.level=b,u.push(c)),S[l].children=a=e(a,n,u)}}else for(n--;a[n].level!==o.level&&a[n].type!=="link_open";)n--}}},function(d,_,i){var e=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,t=/\((c|tm|r|p)\)/i,r=/\((c|tm|r|p)\)/gi,n={c:"©",r:"®",p:"§",tm:"™"};function l(c,o){return n[o.toLowerCase()]}function s(c){var o,u,f=0;for(o=c.length-1;o>=0;o--)(u=c[o]).type!=="text"||f||(u.content=u.content.replace(r,l)),u.type==="link_open"&&u.info==="auto"&&f--,u.type==="link_close"&&u.info==="auto"&&f++}function a(c){var o,u,f=0;for(o=c.length-1;o>=0;o--)(u=c[o]).type!=="text"||f||e.test(u.content)&&(u.content=u.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---([^-]|$)/gm,"$1—$2").replace(/(^|\s)--(\s|$)/gm,"$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm,"$1–$2")),u.type==="link_open"&&u.info==="auto"&&f--,u.type==="link_close"&&u.info==="auto"&&f++}d.exports=function(c){var o;if(c.md.options.typographer)for(o=c.tokens.length-1;o>=0;o--)c.tokens[o].type==="inline"&&(t.test(c.tokens[o].content)&&s(c.tokens[o].children),e.test(c.tokens[o].content)&&a(c.tokens[o].children))}},function(d,_,i){var e=i(1).isWhiteSpace,t=i(1).isPunctChar,r=i(1).isMdAsciiPunct,n=/['"]/,l=/['"]/g;function s(c,o,u){return c.substr(0,o)+u+c.substr(o+1)}function a(c,o){var u,f,p,m,g,b,y,k,w,v,x,T,S,E,C,O,j,D,L,$,B;for(L=[],u=0;u<c.length;u++){for(f=c[u],y=c[u].level,j=L.length-1;j>=0&&!(L[j].level<=y);j--);if(L.length=j+1,f.type==="text"){g=0,b=(p=f.content).length;e:for(;g<b&&(l.lastIndex=g,m=l.exec(p));){if(C=O=!0,g=m.index+1,D=m[0]==="'",w=32,m.index-1>=0)w=p.charCodeAt(m.index-1);else for(j=u-1;j>=0&&c[j].type!=="softbreak"&&c[j].type!=="hardbreak";j--)if(c[j].type==="text"){w=c[j].content.charCodeAt(c[j].content.length-1);break}if(v=32,g<b)v=p.charCodeAt(g);else for(j=u+1;j<c.length&&c[j].type!=="softbreak"&&c[j].type!=="hardbreak";j++)if(c[j].type==="text"){v=c[j].content.charCodeAt(0);break}if(x=r(w)||t(String.fromCharCode(w)),T=r(v)||t(String.fromCharCode(v)),S=e(w),(E=e(v))?C=!1:T&&(S||x||(C=!1)),S?O=!1:x&&(E||T||(O=!1)),v===34&&m[0]==='"'&&w>=48&&w<=57&&(O=C=!1),C&&O&&(C=!1,O=T),C||O){if(O){for(j=L.length-1;j>=0&&(k=L[j],!(L[j].level<y));j--)if(k.single===D&&L[j].level===y){k=L[j],D?($=o.md.options.quotes[2],B=o.md.options.quotes[3]):($=o.md.options.quotes[0],B=o.md.options.quotes[1]),f.content=s(f.content,m.index,B),c[k.token].content=s(c[k.token].content,k.pos,$),g+=B.length-1,k.token===u&&(g+=$.length-1),b=(p=f.content).length,L.length=j;continue e}}C?L.push({token:u,pos:m.index,single:D,level:y}):O&&D&&(f.content=s(f.content,m.index,"’"))}else D&&(f.content=s(f.content,m.index,"’"))}}}}d.exports=function(c){var o;if(c.md.options.typographer)for(o=c.tokens.length-1;o>=0;o--)c.tokens[o].type==="inline"&&n.test(c.tokens[o].content)&&a(c.tokens[o].children,c)}},function(d,_,i){var e=i(42);function t(r,n,l){this.src=r,this.env=l,this.tokens=[],this.inlineMode=!1,this.md=n}t.prototype.Token=e,d.exports=t},function(d,_,i){var e=i(41),t=[["table",i(161),["paragraph","reference"]],["code",i(162)],["fence",i(163),["paragraph","reference","blockquote","list"]],["blockquote",i(164),["paragraph","reference","blockquote","list"]],["hr",i(165),["paragraph","reference","blockquote","list"]],["list",i(166),["paragraph","reference","blockquote"]],["reference",i(167)],["heading",i(168),["paragraph","reference","blockquote"]],["lheading",i(169)],["html_block",i(170),["paragraph","reference","blockquote"]],["paragraph",i(172)]];function r(){this.ruler=new e;for(var n=0;n<t.length;n++)this.ruler.push(t[n][0],t[n][1],{alt:(t[n][2]||[]).slice()})}r.prototype.tokenize=function(n,l,s){for(var a,c=this.ruler.getRules(""),o=c.length,u=l,f=!1,p=n.md.options.maxNesting;u<s&&(n.line=u=n.skipEmptyLines(u),!(u>=s))&&!(n.sCount[u]<n.blkIndent);){if(n.level>=p){n.line=s;break}for(a=0;a<o&&!c[a](n,u,s,!1);a++);n.tight=!f,n.isEmpty(n.line-1)&&(f=!0),(u=n.line)<s&&n.isEmpty(u)&&(f=!0,u++,n.line=u)}},r.prototype.parse=function(n,l,s,a){var c;n&&(c=new this.State(n,l,s,a),this.tokenize(c,c.line,c.lineMax))},r.prototype.State=i(173),d.exports=r},function(d,_,i){var e=i(1).isSpace;function t(n,l){var s=n.bMarks[l]+n.blkIndent,a=n.eMarks[l];return n.src.substr(s,a-s)}function r(n){var l,s=[],a=0,c=n.length,o=0,u=0,f=!1,p=0;for(l=n.charCodeAt(a);a<c;)l===96?f?(f=!1,p=a):o%2==0&&(f=!0,p=a):l!==124||o%2!=0||f||(s.push(n.substring(u,a)),u=a+1),l===92?o++:o=0,++a===c&&f&&(f=!1,a=p+1),l=n.charCodeAt(a);return s.push(n.substring(u)),s}d.exports=function(n,l,s,a){var c,o,u,f,p,m,g,b,y,k,w,v;if(l+2>s||(p=l+1,n.sCount[p]<n.blkIndent)||n.sCount[p]-n.blkIndent>=4||(u=n.bMarks[p]+n.tShift[p])>=n.eMarks[p]||(c=n.src.charCodeAt(u++))!==124&&c!==45&&c!==58)return!1;for(;u<n.eMarks[p];){if((c=n.src.charCodeAt(u))!==124&&c!==45&&c!==58&&!e(c))return!1;u++}for(m=(o=t(n,l+1)).split("|"),y=[],f=0;f<m.length;f++){if(!(k=m[f].trim())){if(f===0||f===m.length-1)continue;return!1}if(!/^:?-+:?$/.test(k))return!1;k.charCodeAt(k.length-1)===58?y.push(k.charCodeAt(0)===58?"center":"right"):k.charCodeAt(0)===58?y.push("left"):y.push("")}if((o=t(n,l).trim()).indexOf("|")===-1||n.sCount[l]-n.blkIndent>=4||(g=(m=r(o.replace(/^\||\|$/g,""))).length)>y.length)return!1;if(a)return!0;for((b=n.push("table_open","table",1)).map=w=[l,0],(b=n.push("thead_open","thead",1)).map=[l,l+1],(b=n.push("tr_open","tr",1)).map=[l,l+1],f=0;f<m.length;f++)(b=n.push("th_open","th",1)).map=[l,l+1],y[f]&&(b.attrs=[["style","text-align:"+y[f]]]),(b=n.push("inline","",0)).content=m[f].trim(),b.map=[l,l+1],b.children=[],b=n.push("th_close","th",-1);for(b=n.push("tr_close","tr",-1),b=n.push("thead_close","thead",-1),(b=n.push("tbody_open","tbody",1)).map=v=[l+2,0],p=l+2;p<s&&!(n.sCount[p]<n.blkIndent)&&(o=t(n,p).trim()).indexOf("|")!==-1&&!(n.sCount[p]-n.blkIndent>=4);p++){for(m=r(o.replace(/^\||\|$/g,"")),b=n.push("tr_open","tr",1),f=0;f<g;f++)b=n.push("td_open","td",1),y[f]&&(b.attrs=[["style","text-align:"+y[f]]]),(b=n.push("inline","",0)).content=m[f]?m[f].trim():"",b.children=[],b=n.push("td_close","td",-1);b=n.push("tr_close","tr",-1)}return b=n.push("tbody_close","tbody",-1),b=n.push("table_close","table",-1),w[1]=v[1]=p,n.line=p,!0}},function(d,_,i){d.exports=function(e,t,r){var n,l,s;if(e.sCount[t]-e.blkIndent<4)return!1;for(l=n=t+1;n<r;)if(e.isEmpty(n))n++;else{if(!(e.sCount[n]-e.blkIndent>=4))break;l=++n}return e.line=l,(s=e.push("code_block","code",0)).content=e.getLines(t,l,4+e.blkIndent,!0),s.map=[t,e.line],!0}},function(d,_,i){d.exports=function(e,t,r,n){var l,s,a,c,o,u,f,p=!1,m=e.bMarks[t]+e.tShift[t],g=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||m+3>g||(l=e.src.charCodeAt(m))!==126&&l!==96||(o=m,(s=(m=e.skipChars(m,l))-o)<3)||(f=e.src.slice(o,m),a=e.src.slice(m,g),l===96&&a.indexOf(String.fromCharCode(l))>=0))return!1;if(n)return!0;for(c=t;!(++c>=r)&&!((m=o=e.bMarks[c]+e.tShift[c])<(g=e.eMarks[c])&&e.sCount[c]<e.blkIndent);)if(e.src.charCodeAt(m)===l&&!(e.sCount[c]-e.blkIndent>=4||(m=e.skipChars(m,l))-o<s||(m=e.skipSpaces(m))<g)){p=!0;break}return s=e.sCount[t],e.line=c+(p?1:0),(u=e.push("fence","code",0)).info=a,u.content=e.getLines(t+1,c,s,!0),u.markup=f,u.map=[t,e.line],!0}},function(d,_,i){var e=i(1).isSpace;d.exports=function(t,r,n,l){var s,a,c,o,u,f,p,m,g,b,y,k,w,v,x,T,S,E,C,O,j=t.lineMax,D=t.bMarks[r]+t.tShift[r],L=t.eMarks[r];if(t.sCount[r]-t.blkIndent>=4||t.src.charCodeAt(D++)!==62)return!1;if(l)return!0;for(o=g=t.sCount[r]+D-(t.bMarks[r]+t.tShift[r]),t.src.charCodeAt(D)===32?(D++,o++,g++,s=!1,T=!0):t.src.charCodeAt(D)===9?(T=!0,(t.bsCount[r]+g)%4==3?(D++,o++,g++,s=!1):s=!0):T=!1,b=[t.bMarks[r]],t.bMarks[r]=D;D<L&&(a=t.src.charCodeAt(D),e(a));)a===9?g+=4-(g+t.bsCount[r]+(s?1:0))%4:g++,D++;for(y=[t.bsCount[r]],t.bsCount[r]=t.sCount[r]+1+(T?1:0),f=D>=L,v=[t.sCount[r]],t.sCount[r]=g-o,x=[t.tShift[r]],t.tShift[r]=D-t.bMarks[r],E=t.md.block.ruler.getRules("blockquote"),w=t.parentType,t.parentType="blockquote",O=!1,m=r+1;m<n&&(t.sCount[m]<t.blkIndent&&(O=!0),!((D=t.bMarks[m]+t.tShift[m])>=(L=t.eMarks[m])));m++)if(t.src.charCodeAt(D++)!==62||O){if(f)break;for(S=!1,c=0,u=E.length;c<u;c++)if(E[c](t,m,n,!0)){S=!0;break}if(S){t.lineMax=m,t.blkIndent!==0&&(b.push(t.bMarks[m]),y.push(t.bsCount[m]),x.push(t.tShift[m]),v.push(t.sCount[m]),t.sCount[m]-=t.blkIndent);break}b.push(t.bMarks[m]),y.push(t.bsCount[m]),x.push(t.tShift[m]),v.push(t.sCount[m]),t.sCount[m]=-1}else{for(o=g=t.sCount[m]+D-(t.bMarks[m]+t.tShift[m]),t.src.charCodeAt(D)===32?(D++,o++,g++,s=!1,T=!0):t.src.charCodeAt(D)===9?(T=!0,(t.bsCount[m]+g)%4==3?(D++,o++,g++,s=!1):s=!0):T=!1,b.push(t.bMarks[m]),t.bMarks[m]=D;D<L&&(a=t.src.charCodeAt(D),e(a));)a===9?g+=4-(g+t.bsCount[m]+(s?1:0))%4:g++,D++;f=D>=L,y.push(t.bsCount[m]),t.bsCount[m]=t.sCount[m]+1+(T?1:0),v.push(t.sCount[m]),t.sCount[m]=g-o,x.push(t.tShift[m]),t.tShift[m]=D-t.bMarks[m]}for(k=t.blkIndent,t.blkIndent=0,(C=t.push("blockquote_open","blockquote",1)).markup=">",C.map=p=[r,0],t.md.block.tokenize(t,r,m),(C=t.push("blockquote_close","blockquote",-1)).markup=">",t.lineMax=j,t.parentType=w,p[1]=t.line,c=0;c<x.length;c++)t.bMarks[c+r]=b[c],t.tShift[c+r]=x[c],t.sCount[c+r]=v[c],t.bsCount[c+r]=y[c];return t.blkIndent=k,!0}},function(d,_,i){var e=i(1).isSpace;d.exports=function(t,r,n,l){var s,a,c,o,u=t.bMarks[r]+t.tShift[r],f=t.eMarks[r];if(t.sCount[r]-t.blkIndent>=4||(s=t.src.charCodeAt(u++))!==42&&s!==45&&s!==95)return!1;for(a=1;u<f;){if((c=t.src.charCodeAt(u++))!==s&&!e(c))return!1;c===s&&a++}return!(a<3)&&(l||(t.line=r+1,(o=t.push("hr","hr",0)).map=[r,t.line],o.markup=Array(a+1).join(String.fromCharCode(s))),!0)}},function(d,_,i){var e=i(1).isSpace;function t(n,l){var s,a,c,o;return a=n.bMarks[l]+n.tShift[l],c=n.eMarks[l],(s=n.src.charCodeAt(a++))!==42&&s!==45&&s!==43||a<c&&(o=n.src.charCodeAt(a),!e(o))?-1:a}function r(n,l){var s,a=n.bMarks[l]+n.tShift[l],c=a,o=n.eMarks[l];if(c+1>=o||(s=n.src.charCodeAt(c++))<48||s>57)return-1;for(;;){if(c>=o)return-1;if(!((s=n.src.charCodeAt(c++))>=48&&s<=57)){if(s===41||s===46)break;return-1}if(c-a>=10)return-1}return c<o&&(s=n.src.charCodeAt(c),!e(s))?-1:c}d.exports=function(n,l,s,a){var c,o,u,f,p,m,g,b,y,k,w,v,x,T,S,E,C,O,j,D,L,$,B,M,P,U,V,W,N=!1,q=!0;if(n.sCount[l]-n.blkIndent>=4||n.listIndent>=0&&n.sCount[l]-n.listIndent>=4&&n.sCount[l]<n.blkIndent)return!1;if(a&&n.parentType==="paragraph"&&n.tShift[l]>=n.blkIndent&&(N=!0),(B=r(n,l))>=0){if(g=!0,P=n.bMarks[l]+n.tShift[l],x=Number(n.src.substr(P,B-P-1)),N&&x!==1)return!1}else{if(!((B=t(n,l))>=0))return!1;g=!1}if(N&&n.skipSpaces(B)>=n.eMarks[l])return!1;if(v=n.src.charCodeAt(B-1),a)return!0;for(w=n.tokens.length,g?(W=n.push("ordered_list_open","ol",1),x!==1&&(W.attrs=[["start",x]])):W=n.push("bullet_list_open","ul",1),W.map=k=[l,0],W.markup=String.fromCharCode(v),S=l,M=!1,V=n.md.block.ruler.getRules("list"),O=n.parentType,n.parentType="list";S<s;){for($=B,T=n.eMarks[S],m=E=n.sCount[S]+B-(n.bMarks[l]+n.tShift[l]);$<T;){if((c=n.src.charCodeAt($))===9)E+=4-(E+n.bsCount[S])%4;else{if(c!==32)break;E++}$++}if((p=(o=$)>=T?1:E-m)>4&&(p=1),f=m+p,(W=n.push("list_item_open","li",1)).markup=String.fromCharCode(v),W.map=b=[l,0],L=n.tight,D=n.tShift[l],j=n.sCount[l],C=n.listIndent,n.listIndent=n.blkIndent,n.blkIndent=f,n.tight=!0,n.tShift[l]=o-n.bMarks[l],n.sCount[l]=E,o>=T&&n.isEmpty(l+1)?n.line=Math.min(n.line+2,s):n.md.block.tokenize(n,l,s,!0),n.tight&&!M||(q=!1),M=n.line-l>1&&n.isEmpty(n.line-1),n.blkIndent=n.listIndent,n.listIndent=C,n.tShift[l]=D,n.sCount[l]=j,n.tight=L,(W=n.push("list_item_close","li",-1)).markup=String.fromCharCode(v),S=l=n.line,b[1]=S,o=n.bMarks[l],S>=s||n.sCount[S]<n.blkIndent||n.sCount[l]-n.blkIndent>=4)break;for(U=!1,u=0,y=V.length;u<y;u++)if(V[u](n,S,s,!0)){U=!0;break}if(U)break;if(g){if((B=r(n,S))<0)break}else if((B=t(n,S))<0)break;if(v!==n.src.charCodeAt(B-1))break}return(W=g?n.push("ordered_list_close","ol",-1):n.push("bullet_list_close","ul",-1)).markup=String.fromCharCode(v),k[1]=S,n.line=S,n.parentType=O,q&&function(G,X){var Z,Y,z=G.level+2;for(Z=X+2,Y=G.tokens.length-2;Z<Y;Z++)G.tokens[Z].level===z&&G.tokens[Z].type==="paragraph_open"&&(G.tokens[Z+2].hidden=!0,G.tokens[Z].hidden=!0,Z+=2)}(n,w),!0}},function(d,_,i){var e=i(1).normalizeReference,t=i(1).isSpace;d.exports=function(r,n,l,s){var a,c,o,u,f,p,m,g,b,y,k,w,v,x,T,S,E=0,C=r.bMarks[n]+r.tShift[n],O=r.eMarks[n],j=n+1;if(r.sCount[n]-r.blkIndent>=4||r.src.charCodeAt(C)!==91)return!1;for(;++C<O;)if(r.src.charCodeAt(C)===93&&r.src.charCodeAt(C-1)!==92){if(C+1===O||r.src.charCodeAt(C+1)!==58)return!1;break}for(u=r.lineMax,T=r.md.block.ruler.getRules("reference"),y=r.parentType,r.parentType="reference";j<u&&!r.isEmpty(j);j++)if(!(r.sCount[j]-r.blkIndent>3||r.sCount[j]<0)){for(x=!1,p=0,m=T.length;p<m;p++)if(T[p](r,j,u,!0)){x=!0;break}if(x)break}for(O=(v=r.getLines(n,j,r.blkIndent,!1).trim()).length,C=1;C<O;C++){if((a=v.charCodeAt(C))===91)return!1;if(a===93){b=C;break}(a===10||a===92&&++C<O&&v.charCodeAt(C)===10)&&E++}if(b<0||v.charCodeAt(b+1)!==58)return!1;for(C=b+2;C<O;C++)if((a=v.charCodeAt(C))===10)E++;else if(!t(a))break;if(!(k=r.md.helpers.parseLinkDestination(v,C,O)).ok||(f=r.md.normalizeLink(k.str),!r.md.validateLink(f)))return!1;for(c=C=k.pos,o=E+=k.lines,w=C;C<O;C++)if((a=v.charCodeAt(C))===10)E++;else if(!t(a))break;for(k=r.md.helpers.parseLinkTitle(v,C,O),C<O&&w!==C&&k.ok?(S=k.str,C=k.pos,E+=k.lines):(S="",C=c,E=o);C<O&&(a=v.charCodeAt(C),t(a));)C++;if(C<O&&v.charCodeAt(C)!==10&&S)for(S="",C=c,E=o;C<O&&(a=v.charCodeAt(C),t(a));)C++;return!(C<O&&v.charCodeAt(C)!==10)&&!!(g=e(v.slice(1,b)))&&(s||(r.env.references===void 0&&(r.env.references={}),r.env.references[g]===void 0&&(r.env.references[g]={title:S,href:f}),r.parentType=y,r.line=n+E+1),!0)}},function(d,_,i){var e=i(1).isSpace;d.exports=function(t,r,n,l){var s,a,c,o,u=t.bMarks[r]+t.tShift[r],f=t.eMarks[r];if(t.sCount[r]-t.blkIndent>=4||(s=t.src.charCodeAt(u))!==35||u>=f)return!1;for(a=1,s=t.src.charCodeAt(++u);s===35&&u<f&&a<=6;)a++,s=t.src.charCodeAt(++u);return!(a>6||u<f&&!e(s))&&(l||(f=t.skipSpacesBack(f,u),(c=t.skipCharsBack(f,35,u))>u&&e(t.src.charCodeAt(c-1))&&(f=c),t.line=r+1,(o=t.push("heading_open","h"+String(a),1)).markup="########".slice(0,a),o.map=[r,t.line],(o=t.push("inline","",0)).content=t.src.slice(u,f).trim(),o.map=[r,t.line],o.children=[],(o=t.push("heading_close","h"+String(a),-1)).markup="########".slice(0,a)),!0)}},function(d,_,i){d.exports=function(e,t,r){var n,l,s,a,c,o,u,f,p,m,g=t+1,b=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;for(m=e.parentType,e.parentType="paragraph";g<r&&!e.isEmpty(g);g++)if(!(e.sCount[g]-e.blkIndent>3)){if(e.sCount[g]>=e.blkIndent&&(o=e.bMarks[g]+e.tShift[g])<(u=e.eMarks[g])&&((p=e.src.charCodeAt(o))===45||p===61)&&(o=e.skipChars(o,p),(o=e.skipSpaces(o))>=u)){f=p===61?1:2;break}if(!(e.sCount[g]<0)){for(l=!1,s=0,a=b.length;s<a;s++)if(b[s](e,g,r,!0)){l=!0;break}if(l)break}}return!!f&&(n=e.getLines(t,g,e.blkIndent,!1).trim(),e.line=g+1,(c=e.push("heading_open","h"+String(f),1)).markup=String.fromCharCode(p),c.map=[t,e.line],(c=e.push("inline","",0)).content=n,c.map=[t,e.line-1],c.children=[],(c=e.push("heading_close","h"+String(f),-1)).markup=String.fromCharCode(p),e.parentType=m,!0)}},function(d,_,i){var e=i(171),t=i(67).HTML_OPEN_CLOSE_TAG_RE,r=[[/^<(script|pre|style)(?=(\s|>|$))/i,/<\/(script|pre|style)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+e.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(t.source+"\\s*$"),/^$/,!1]];d.exports=function(n,l,s,a){var c,o,u,f,p=n.bMarks[l]+n.tShift[l],m=n.eMarks[l];if(n.sCount[l]-n.blkIndent>=4||!n.md.options.html||n.src.charCodeAt(p)!==60)return!1;for(f=n.src.slice(p,m),c=0;c<r.length&&!r[c][0].test(f);c++);if(c===r.length)return!1;if(a)return r[c][2];if(o=l+1,!r[c][1].test(f)){for(;o<s&&!(n.sCount[o]<n.blkIndent);o++)if(p=n.bMarks[o]+n.tShift[o],m=n.eMarks[o],f=n.src.slice(p,m),r[c][1].test(f)){f.length!==0&&o++;break}}return n.line=o,(u=n.push("html_block","",0)).map=[l,o],u.content=n.getLines(l,o,n.blkIndent,!0),!0}},function(d,_,i){d.exports=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]},function(d,_,i){d.exports=function(e,t){var r,n,l,s,a,c,o=t+1,u=e.md.block.ruler.getRules("paragraph"),f=e.lineMax;for(c=e.parentType,e.parentType="paragraph";o<f&&!e.isEmpty(o);o++)if(!(e.sCount[o]-e.blkIndent>3||e.sCount[o]<0)){for(n=!1,l=0,s=u.length;l<s;l++)if(u[l](e,o,f,!0)){n=!0;break}if(n)break}return r=e.getLines(t,o,e.blkIndent,!1).trim(),e.line=o,(a=e.push("paragraph_open","p",1)).map=[t,e.line],(a=e.push("inline","",0)).content=r,a.map=[t,e.line],a.children=[],a=e.push("paragraph_close","p",-1),e.parentType=c,!0}},function(d,_,i){var e=i(42),t=i(1).isSpace;function r(n,l,s,a){var c,o,u,f,p,m,g,b;for(this.src=n,this.md=l,this.env=s,this.tokens=a,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0,this.result="",b=!1,u=f=m=g=0,p=(o=this.src).length;f<p;f++){if(c=o.charCodeAt(f),!b){if(t(c)){m++,c===9?g+=4-g%4:g++;continue}b=!0}c!==10&&f!==p-1||(c!==10&&f++,this.bMarks.push(u),this.eMarks.push(f),this.tShift.push(m),this.sCount.push(g),this.bsCount.push(0),b=!1,m=0,g=0,u=f+1)}this.bMarks.push(o.length),this.eMarks.push(o.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}r.prototype.push=function(n,l,s){var a=new e(n,l,s);return a.block=!0,s<0&&this.level--,a.level=this.level,s>0&&this.level++,this.tokens.push(a),a},r.prototype.isEmpty=function(n){return this.bMarks[n]+this.tShift[n]>=this.eMarks[n]},r.prototype.skipEmptyLines=function(n){for(var l=this.lineMax;n<l&&!(this.bMarks[n]+this.tShift[n]<this.eMarks[n]);n++);return n},r.prototype.skipSpaces=function(n){for(var l,s=this.src.length;n<s&&(l=this.src.charCodeAt(n),t(l));n++);return n},r.prototype.skipSpacesBack=function(n,l){if(n<=l)return n;for(;n>l;)if(!t(this.src.charCodeAt(--n)))return n+1;return n},r.prototype.skipChars=function(n,l){for(var s=this.src.length;n<s&&this.src.charCodeAt(n)===l;n++);return n},r.prototype.skipCharsBack=function(n,l,s){if(n<=s)return n;for(;n>s;)if(l!==this.src.charCodeAt(--n))return n+1;return n},r.prototype.getLines=function(n,l,s,a){var c,o,u,f,p,m,g,b=n;if(n>=l)return"";for(m=new Array(l-n),c=0;b<l;b++,c++){for(o=0,g=f=this.bMarks[b],p=b+1<l||a?this.eMarks[b]+1:this.eMarks[b];f<p&&o<s;){if(u=this.src.charCodeAt(f),t(u))u===9?o+=4-(o+this.bsCount[b])%4:o++;else{if(!(f-g<this.tShift[b]))break;o++}f++}m[c]=o>s?new Array(o-s+1).join(" ")+this.src.slice(f,p):this.src.slice(f,p)}return m.join("")},r.prototype.Token=e,d.exports=r},function(d,_,i){var e=i(41),t=[["text",i(175)],["newline",i(176)],["escape",i(177)],["backticks",i(178)],["strikethrough",i(68).tokenize],["emphasis",i(69).tokenize],["link",i(179)],["image",i(180)],["autolink",i(181)],["html_inline",i(182)],["entity",i(183)]],r=[["balance_pairs",i(184)],["strikethrough",i(68).postProcess],["emphasis",i(69).postProcess],["text_collapse",i(185)]];function n(){var l;for(this.ruler=new e,l=0;l<t.length;l++)this.ruler.push(t[l][0],t[l][1]);for(this.ruler2=new e,l=0;l<r.length;l++)this.ruler2.push(r[l][0],r[l][1])}n.prototype.skipToken=function(l){var s,a,c=l.pos,o=this.ruler.getRules(""),u=o.length,f=l.md.options.maxNesting,p=l.cache;if(p[c]===void 0){if(l.level<f)for(a=0;a<u&&(l.level++,s=o[a](l,!0),l.level--,!s);a++);else l.pos=l.posMax;s||l.pos++,p[c]=l.pos}else l.pos=p[c]},n.prototype.tokenize=function(l){for(var s,a,c=this.ruler.getRules(""),o=c.length,u=l.posMax,f=l.md.options.maxNesting;l.pos<u;){if(l.level<f)for(a=0;a<o&&!(s=c[a](l,!1));a++);if(s){if(l.pos>=u)break}else l.pending+=l.src[l.pos++]}l.pending&&l.pushPending()},n.prototype.parse=function(l,s,a,c){var o,u,f,p=new this.State(l,s,a,c);for(this.tokenize(p),f=(u=this.ruler2.getRules("")).length,o=0;o<f;o++)u[o](p)},n.prototype.State=i(186),d.exports=n},function(d,_,i){function e(t){switch(t){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}d.exports=function(t,r){for(var n=t.pos;n<t.posMax&&!e(t.src.charCodeAt(n));)n++;return n!==t.pos&&(r||(t.pending+=t.src.slice(t.pos,n)),t.pos=n,!0)}},function(d,_,i){var e=i(1).isSpace;d.exports=function(t,r){var n,l,s=t.pos;if(t.src.charCodeAt(s)!==10)return!1;for(n=t.pending.length-1,l=t.posMax,r||(n>=0&&t.pending.charCodeAt(n)===32?n>=1&&t.pending.charCodeAt(n-1)===32?(t.pending=t.pending.replace(/ +$/,""),t.push("hardbreak","br",0)):(t.pending=t.pending.slice(0,-1),t.push("softbreak","br",0)):t.push("softbreak","br",0)),s++;s<l&&e(t.src.charCodeAt(s));)s++;return t.pos=s,!0}},function(d,_,i){for(var e=i(1).isSpace,t=[],r=0;r<256;r++)t.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(n){t[n.charCodeAt(0)]=1}),d.exports=function(n,l){var s,a=n.pos,c=n.posMax;if(n.src.charCodeAt(a)!==92)return!1;if(++a<c){if((s=n.src.charCodeAt(a))<256&&t[s]!==0)return l||(n.pending+=n.src[a]),n.pos+=2,!0;if(s===10){for(l||n.push("hardbreak","br",0),a++;a<c&&(s=n.src.charCodeAt(a),e(s));)a++;return n.pos=a,!0}}return l||(n.pending+="\\"),n.pos++,!0}},function(d,_,i){d.exports=function(e,t){var r,n,l,s,a,c,o=e.pos;if(e.src.charCodeAt(o)!==96)return!1;for(r=o,o++,n=e.posMax;o<n&&e.src.charCodeAt(o)===96;)o++;for(l=e.src.slice(r,o),s=a=o;(s=e.src.indexOf("`",a))!==-1;){for(a=s+1;a<n&&e.src.charCodeAt(a)===96;)a++;if(a-s===l.length)return t||((c=e.push("code_inline","code",0)).markup=l,c.content=e.src.slice(o,s).replace(/\n/g," ").replace(/^ (.+) $/,"$1")),e.pos=a,!0}return t||(e.pending+=l),e.pos+=l.length,!0}},function(d,_,i){var e=i(1).normalizeReference,t=i(1).isSpace;d.exports=function(r,n){var l,s,a,c,o,u,f,p,m,g="",b=r.pos,y=r.posMax,k=r.pos,w=!0;if(r.src.charCodeAt(r.pos)!==91||(o=r.pos+1,(c=r.md.helpers.parseLinkLabel(r,r.pos,!0))<0))return!1;if((u=c+1)<y&&r.src.charCodeAt(u)===40){for(w=!1,u++;u<y&&(s=r.src.charCodeAt(u),t(s)||s===10);u++);if(u>=y)return!1;for(k=u,(f=r.md.helpers.parseLinkDestination(r.src,u,r.posMax)).ok&&(g=r.md.normalizeLink(f.str),r.md.validateLink(g)?u=f.pos:g=""),k=u;u<y&&(s=r.src.charCodeAt(u),t(s)||s===10);u++);if(f=r.md.helpers.parseLinkTitle(r.src,u,r.posMax),u<y&&k!==u&&f.ok)for(m=f.str,u=f.pos;u<y&&(s=r.src.charCodeAt(u),t(s)||s===10);u++);else m="";(u>=y||r.src.charCodeAt(u)!==41)&&(w=!0),u++}if(w){if(r.env.references===void 0)return!1;if(u<y&&r.src.charCodeAt(u)===91?(k=u+1,(u=r.md.helpers.parseLinkLabel(r,u))>=0?a=r.src.slice(k,u++):u=c+1):u=c+1,a||(a=r.src.slice(o,c)),!(p=r.env.references[e(a)]))return r.pos=b,!1;g=p.href,m=p.title}return n||(r.pos=o,r.posMax=c,r.push("link_open","a",1).attrs=l=[["href",g]],m&&l.push(["title",m]),r.md.inline.tokenize(r),r.push("link_close","a",-1)),r.pos=u,r.posMax=y,!0}},function(d,_,i){var e=i(1).normalizeReference,t=i(1).isSpace;d.exports=function(r,n){var l,s,a,c,o,u,f,p,m,g,b,y,k,w="",v=r.pos,x=r.posMax;if(r.src.charCodeAt(r.pos)!==33||r.src.charCodeAt(r.pos+1)!==91||(u=r.pos+2,(o=r.md.helpers.parseLinkLabel(r,r.pos+1,!1))<0))return!1;if((f=o+1)<x&&r.src.charCodeAt(f)===40){for(f++;f<x&&(s=r.src.charCodeAt(f),t(s)||s===10);f++);if(f>=x)return!1;for(k=f,(m=r.md.helpers.parseLinkDestination(r.src,f,r.posMax)).ok&&(w=r.md.normalizeLink(m.str),r.md.validateLink(w)?f=m.pos:w=""),k=f;f<x&&(s=r.src.charCodeAt(f),t(s)||s===10);f++);if(m=r.md.helpers.parseLinkTitle(r.src,f,r.posMax),f<x&&k!==f&&m.ok)for(g=m.str,f=m.pos;f<x&&(s=r.src.charCodeAt(f),t(s)||s===10);f++);else g="";if(f>=x||r.src.charCodeAt(f)!==41)return r.pos=v,!1;f++}else{if(r.env.references===void 0)return!1;if(f<x&&r.src.charCodeAt(f)===91?(k=f+1,(f=r.md.helpers.parseLinkLabel(r,f))>=0?c=r.src.slice(k,f++):f=o+1):f=o+1,c||(c=r.src.slice(u,o)),!(p=r.env.references[e(c)]))return r.pos=v,!1;w=p.href,g=p.title}return n||(a=r.src.slice(u,o),r.md.inline.parse(a,r.md,r.env,y=[]),(b=r.push("image","img",0)).attrs=l=[["src",w],["alt",""]],b.children=y,b.content=a,g&&l.push(["title",g])),r.pos=f,r.posMax=x,!0}},function(d,_,i){var e=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,t=/^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;d.exports=function(r,n){var l,s,a,c,o,u,f=r.pos;return r.src.charCodeAt(f)===60&&!((l=r.src.slice(f)).indexOf(">")<0)&&(t.test(l)?(c=(s=l.match(t))[0].slice(1,-1),o=r.md.normalizeLink(c),!!r.md.validateLink(o)&&(n||((u=r.push("link_open","a",1)).attrs=[["href",o]],u.markup="autolink",u.info="auto",(u=r.push("text","",0)).content=r.md.normalizeLinkText(c),(u=r.push("link_close","a",-1)).markup="autolink",u.info="auto"),r.pos+=s[0].length,!0)):!!e.test(l)&&(c=(a=l.match(e))[0].slice(1,-1),o=r.md.normalizeLink("mailto:"+c),!!r.md.validateLink(o)&&(n||((u=r.push("link_open","a",1)).attrs=[["href",o]],u.markup="autolink",u.info="auto",(u=r.push("text","",0)).content=r.md.normalizeLinkText(c),(u=r.push("link_close","a",-1)).markup="autolink",u.info="auto"),r.pos+=a[0].length,!0)))}},function(d,_,i){var e=i(67).HTML_TAG_RE;d.exports=function(t,r){var n,l,s,a=t.pos;return!!t.md.options.html&&(s=t.posMax,!(t.src.charCodeAt(a)!==60||a+2>=s)&&!((n=t.src.charCodeAt(a+1))!==33&&n!==63&&n!==47&&!function(c){var o=32|c;return o>=97&&o<=122}(n))&&!!(l=t.src.slice(a).match(e))&&(r||(t.push("html_inline","",0).content=t.src.slice(a,a+l[0].length)),t.pos+=l[0].length,!0))}},function(d,_,i){var e=i(62),t=i(1).has,r=i(1).isValidEntityCode,n=i(1).fromCodePoint,l=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,s=/^&([a-z][a-z0-9]{1,31});/i;d.exports=function(a,c){var o,u,f=a.pos,p=a.posMax;if(a.src.charCodeAt(f)!==38)return!1;if(f+1<p){if(a.src.charCodeAt(f+1)===35){if(u=a.src.slice(f).match(l))return c||(o=u[1][0].toLowerCase()==="x"?parseInt(u[1].slice(1),16):parseInt(u[1],10),a.pending+=r(o)?n(o):n(65533)),a.pos+=u[0].length,!0}else if((u=a.src.slice(f).match(s))&&t(e,u[1]))return c||(a.pending+=e[u[1]]),a.pos+=u[0].length,!0}return c||(a.pending+="&"),a.pos++,!0}},function(d,_,i){function e(t,r){var n,l,s,a,c,o,u,f,p={},m=r.length;for(n=0;n<m;n++)if((s=r[n]).length=s.length||0,s.close){for(p.hasOwnProperty(s.marker)||(p[s.marker]=[-1,-1,-1]),c=p[s.marker][s.length%3],o=-1,l=n-s.jump-1;l>c;l-=a.jump+1)if((a=r[l]).marker===s.marker&&(o===-1&&(o=l),a.open&&a.end<0&&a.level===s.level&&(u=!1,(a.close||s.open)&&(a.length+s.length)%3==0&&(a.length%3==0&&s.length%3==0||(u=!0)),!u))){f=l>0&&!r[l-1].open?r[l-1].jump+1:0,s.jump=n-l+f,s.open=!1,a.end=n,a.jump=f,a.close=!1,o=-1;break}o!==-1&&(p[s.marker][(s.length||0)%3]=o)}}d.exports=function(t){var r,n=t.tokens_meta,l=t.tokens_meta.length;for(e(0,t.delimiters),r=0;r<l;r++)n[r]&&n[r].delimiters&&e(0,n[r].delimiters)}},function(d,_,i){d.exports=function(e){var t,r,n=0,l=e.tokens,s=e.tokens.length;for(t=r=0;t<s;t++)l[t].nesting<0&&n--,l[t].level=n,l[t].nesting>0&&n++,l[t].type==="text"&&t+1<s&&l[t+1].type==="text"?l[t+1].content=l[t].content+l[t+1].content:(t!==r&&(l[r]=l[t]),r++);t!==r&&(l.length=r)}},function(d,_,i){var e=i(42),t=i(1).isWhiteSpace,r=i(1).isPunctChar,n=i(1).isMdAsciiPunct;function l(s,a,c,o){this.src=s,this.env=c,this.md=a,this.tokens=o,this.tokens_meta=Array(o.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[]}l.prototype.pushPending=function(){var s=new e("text","",0);return s.content=this.pending,s.level=this.pendingLevel,this.tokens.push(s),this.pending="",s},l.prototype.push=function(s,a,c){this.pending&&this.pushPending();var o=new e(s,a,c),u=null;return c<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),o.level=this.level,c>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],u={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(o),this.tokens_meta.push(u),o},l.prototype.scanDelims=function(s,a){var c,o,u,f,p,m,g,b,y,k=s,w=!0,v=!0,x=this.posMax,T=this.src.charCodeAt(s);for(c=s>0?this.src.charCodeAt(s-1):32;k<x&&this.src.charCodeAt(k)===T;)k++;return u=k-s,o=k<x?this.src.charCodeAt(k):32,g=n(c)||r(String.fromCharCode(c)),y=n(o)||r(String.fromCharCode(o)),m=t(c),(b=t(o))?w=!1:y&&(m||g||(w=!1)),m?v=!1:g&&(b||y||(v=!1)),a?(f=w,p=v):(f=w&&(!v||g),p=v&&(!w||y)),{can_open:f,can_close:p,length:u}},l.prototype.Token=e,d.exports=l},function(d,_,i){function e(p){var m=Array.prototype.slice.call(arguments,1);return m.forEach(function(g){g&&Object.keys(g).forEach(function(b){p[b]=g[b]})}),p}function t(p){return Object.prototype.toString.call(p)}function r(p){return t(p)==="[object Function]"}function n(p){return p.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var l={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1},s={"http:":{validate:function(p,m,g){var b=p.slice(m);return g.re.http||(g.re.http=new RegExp("^\\/\\/"+g.re.src_auth+g.re.src_host_port_strict+g.re.src_path,"i")),g.re.http.test(b)?b.match(g.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(p,m,g){var b=p.slice(m);return g.re.no_http||(g.re.no_http=new RegExp("^"+g.re.src_auth+"(?:localhost|(?:(?:"+g.re.src_domain+")\\.)+"+g.re.src_domain_root+")"+g.re.src_port+g.re.src_host_terminator+g.re.src_path,"i")),g.re.no_http.test(b)?m>=3&&p[m-3]===":"||m>=3&&p[m-3]==="/"?0:b.match(g.re.no_http)[0].length:0}},"mailto:":{validate:function(p,m,g){var b=p.slice(m);return g.re.mailto||(g.re.mailto=new RegExp("^"+g.re.src_email_name+"@"+g.re.src_host_strict,"i")),g.re.mailto.test(b)?b.match(g.re.mailto)[0].length:0}}},a="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function c(p){var m=p.re=i(188)(p.__opts__),g=p.__tlds__.slice();function b(v){return v.replace("%TLDS%",m.src_tlds)}p.onCompile(),p.__tlds_replaced__||g.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"),g.push(m.src_xn),m.src_tlds=g.join("|"),m.email_fuzzy=RegExp(b(m.tpl_email_fuzzy),"i"),m.link_fuzzy=RegExp(b(m.tpl_link_fuzzy),"i"),m.link_no_ip_fuzzy=RegExp(b(m.tpl_link_no_ip_fuzzy),"i"),m.host_fuzzy_test=RegExp(b(m.tpl_host_fuzzy_test),"i");var y=[];function k(v,x){throw new Error('(LinkifyIt) Invalid schema "'+v+'": '+x)}p.__compiled__={},Object.keys(p.__schemas__).forEach(function(v){var x=p.__schemas__[v];if(x!==null){var T={validate:null,link:null};if(p.__compiled__[v]=T,t(x)==="[object Object]")return function(S){return t(S)==="[object RegExp]"}(x.validate)?T.validate=function(S){return function(E,C){var O=E.slice(C);return S.test(O)?O.match(S)[0].length:0}}(x.validate):r(x.validate)?T.validate=x.validate:k(v,x),void(r(x.normalize)?T.normalize=x.normalize:x.normalize?k(v,x):T.normalize=function(S,E){E.normalize(S)});(function(S){return t(S)==="[object String]"})(x)?y.push(v):k(v,x)}}),y.forEach(function(v){p.__compiled__[p.__schemas__[v]]&&(p.__compiled__[v].validate=p.__compiled__[p.__schemas__[v]].validate,p.__compiled__[v].normalize=p.__compiled__[p.__schemas__[v]].normalize)}),p.__compiled__[""]={validate:null,normalize:function(v,x){x.normalize(v)}};var w=Object.keys(p.__compiled__).filter(function(v){return v.length>0&&p.__compiled__[v]}).map(n).join("|");p.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+m.src_ZPCc+"))("+w+")","i"),p.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+m.src_ZPCc+"))("+w+")","ig"),p.re.pretest=RegExp("("+p.re.schema_test.source+")|("+p.re.host_fuzzy_test.source+")|@","i"),function(v){v.__index__=-1,v.__text_cache__=""}(p)}function o(p,m){var g=p.__index__,b=p.__last_index__,y=p.__text_cache__.slice(g,b);this.schema=p.__schema__.toLowerCase(),this.index=g+m,this.lastIndex=b+m,this.raw=y,this.text=y,this.url=y}function u(p,m){var g=new o(p,m);return p.__compiled__[g.schema].normalize(g,p),g}function f(p,m){if(!(this instanceof f))return new f(p,m);var g;m||(g=p,Object.keys(g||{}).reduce(function(b,y){return b||l.hasOwnProperty(y)},!1)&&(m=p,p={})),this.__opts__=e({},l,m),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=e({},s,p),this.__compiled__={},this.__tlds__=a,this.__tlds_replaced__=!1,this.re={},c(this)}f.prototype.add=function(p,m){return this.__schemas__[p]=m,c(this),this},f.prototype.set=function(p){return this.__opts__=e(this.__opts__,p),this},f.prototype.test=function(p){if(this.__text_cache__=p,this.__index__=-1,!p.length)return!1;var m,g,b,y,k,w,v,x;if(this.re.schema_test.test(p)){for((v=this.re.schema_search).lastIndex=0;(m=v.exec(p))!==null;)if(y=this.testSchemaAt(p,m[2],v.lastIndex)){this.__schema__=m[2],this.__index__=m.index+m[1].length,this.__last_index__=m.index+m[0].length+y;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(x=p.search(this.re.host_fuzzy_test))>=0&&(this.__index__<0||x<this.__index__)&&(g=p.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(k=g.index+g[1].length,(this.__index__<0||k<this.__index__)&&(this.__schema__="",this.__index__=k,this.__last_index__=g.index+g[0].length)),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&p.indexOf("@")>=0&&(b=p.match(this.re.email_fuzzy))!==null&&(k=b.index+b[1].length,w=b.index+b[0].length,(this.__index__<0||k<this.__index__||k===this.__index__&&w>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=k,this.__last_index__=w)),this.__index__>=0},f.prototype.pretest=function(p){return this.re.pretest.test(p)},f.prototype.testSchemaAt=function(p,m,g){return this.__compiled__[m.toLowerCase()]?this.__compiled__[m.toLowerCase()].validate(p,g,this):0},f.prototype.match=function(p){var m=0,g=[];this.__index__>=0&&this.__text_cache__===p&&(g.push(u(this,m)),m=this.__last_index__);for(var b=m?p.slice(m):p;this.test(b);)g.push(u(this,m)),b=b.slice(this.__last_index__),m+=this.__last_index__;return g.length?g:null},f.prototype.tlds=function(p,m){return p=Array.isArray(p)?p:[p],m?(this.__tlds__=this.__tlds__.concat(p).sort().filter(function(g,b,y){return g!==y[b-1]}).reverse(),c(this),this):(this.__tlds__=p.slice(),this.__tlds_replaced__=!0,c(this),this)},f.prototype.normalize=function(p){p.schema||(p.url="http://"+p.url),p.schema!=="mailto:"||/^mailto:/i.test(p.url)||(p.url="mailto:"+p.url)},f.prototype.onCompile=function(){},d.exports=f},function(d,_,i){d.exports=function(e){var t={};return t.src_Any=i(64).source,t.src_Cc=i(65).source,t.src_Z=i(66).source,t.src_P=i(40).source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|"),t.src_pseudo_letter="(?:(?![><｜]|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|[><｜]|"+t.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+`|[><｜]|[()[\\]{}.,"'?!\\-]).|\\[(?:(?!`+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-]).|\\.{2,4}[a-zA-Z0-9%/]|\\.(?!"+t.src_ZCc+"|[.]).|"+(e&&e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+"\\,(?!"+t.src_ZCc+").|\\!(?!"+t.src_ZCc+"|[!]).|\\?(?!"+t.src_ZCc+"|[?]).)+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy='(^|[><｜]|"|\\(|'+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t}},function(d,_,i){(function(e,t){var r;/*! https://mths.be/punycode v1.4.1 by @mathias */(function(n){_&&_.nodeType,e&&e.nodeType;var l=typeof t=="object"&&t;l.global!==l&&l.window!==l&&l.self;var s,a=2147483647,c=/^xn--/,o=/[^\x20-\x7E]/,u=/[\x2E\u3002\uFF0E\uFF61]/g,f={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},p=Math.floor,m=String.fromCharCode;function g(E){throw new RangeError(f[E])}function b(E,C){for(var O=E.length,j=[];O--;)j[O]=C(E[O]);return j}function y(E,C){var O=E.split("@"),j="";return O.length>1&&(j=O[0]+"@",E=O[1]),j+b((E=E.replace(u,".")).split("."),C).join(".")}function k(E){for(var C,O,j=[],D=0,L=E.length;D<L;)(C=E.charCodeAt(D++))>=55296&&C<=56319&&D<L?(64512&(O=E.charCodeAt(D++)))==56320?j.push(((1023&C)<<10)+(1023&O)+65536):(j.push(C),D--):j.push(C);return j}function w(E){return b(E,function(C){var O="";return C>65535&&(O+=m((C-=65536)>>>10&1023|55296),C=56320|1023&C),O+=m(C)}).join("")}function v(E,C){return E+22+75*(E<26)-((C!=0)<<5)}function x(E,C,O){var j=0;for(E=O?p(E/700):E>>1,E+=p(E/C);E>455;j+=36)E=p(E/35);return p(j+36*E/(E+38))}function T(E){var C,O,j,D,L,$,B,M,P,U,V,W=[],N=E.length,q=0,G=128,X=72;for((O=E.lastIndexOf("-"))<0&&(O=0),j=0;j<O;++j)E.charCodeAt(j)>=128&&g("not-basic"),W.push(E.charCodeAt(j));for(D=O>0?O+1:0;D<N;){for(L=q,$=1,B=36;D>=N&&g("invalid-input"),((M=(V=E.charCodeAt(D++))-48<10?V-22:V-65<26?V-65:V-97<26?V-97:36)>=36||M>p((a-q)/$))&&g("overflow"),q+=M*$,!(M<(P=B<=X?1:B>=X+26?26:B-X));B+=36)$>p(a/(U=36-P))&&g("overflow"),$*=U;X=x(q-L,C=W.length+1,L==0),p(q/C)>a-G&&g("overflow"),G+=p(q/C),q%=C,W.splice(q++,0,G)}return w(W)}function S(E){var C,O,j,D,L,$,B,M,P,U,V,W,N,q,G,X=[];for(W=(E=k(E)).length,C=128,O=0,L=72,$=0;$<W;++$)(V=E[$])<128&&X.push(m(V));for(j=D=X.length,D&&X.push("-");j<W;){for(B=a,$=0;$<W;++$)(V=E[$])>=C&&V<B&&(B=V);for(B-C>p((a-O)/(N=j+1))&&g("overflow"),O+=(B-C)*N,C=B,$=0;$<W;++$)if((V=E[$])<C&&++O>a&&g("overflow"),V==C){for(M=O,P=36;!(M<(U=P<=L?1:P>=L+26?26:P-L));P+=36)G=M-U,q=36-U,X.push(m(v(U+G%q,0))),M=p(G/q);X.push(m(v(M,0))),L=x(O,N,j==D),O=0,++j}++O,++C}return X.join("")}s={version:"1.4.1",ucs2:{decode:k,encode:w},decode:T,encode:S,toASCII:function(E){return y(E,function(C){return o.test(C)?"xn--"+S(C):C})},toUnicode:function(E){return y(E,function(C){return c.test(C)?T(C.slice(4).toLowerCase()):C})}},(r=function(){return s}.call(_,i,_,e))===void 0||(e.exports=r)})()}).call(this,i(190)(d),i(191))},function(d,_){d.exports=function(i){return i.webpackPolyfill||(i.deprecate=function(){},i.paths=[],i.children||(i.children=[]),Object.defineProperty(i,"loaded",{enumerable:!0,get:function(){return i.l}}),Object.defineProperty(i,"id",{enumerable:!0,get:function(){return i.i}}),i.webpackPolyfill=1),i}},function(d,_){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch{typeof window=="object"&&(i=window)}d.exports=i},function(d,_,i){d.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}}},function(d,_,i){d.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}}},function(d,_,i){d.exports={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}}},function(d,_,i){var e=i(196),t=i(197),r=i(198),n=i(199),l=i(200);d.exports=function(s,a){var c={defs:e,shortcuts:t,enabled:[]},o=l(s.utils.assign({},c,a||{}));s.renderer.rules.emoji=r,s.core.ruler.push("emoji",n(s,o.defs,o.shortcuts,o.scanRE,o.replaceRE))}},function(d){d.exports=JSON.parse('{"100":"💯","1234":"🔢","grinning":"😀","smiley":"😃","smile":"😄","grin":"😁","laughing":"😆","satisfied":"😆","sweat_smile":"😅","joy":"😂","rofl":"🤣","relaxed":"☺️","blush":"😊","innocent":"😇","slightly_smiling_face":"🙂","upside_down_face":"🙃","wink":"😉","relieved":"😌","heart_eyes":"😍","kissing_heart":"😘","kissing":"😗","kissing_smiling_eyes":"😙","kissing_closed_eyes":"😚","yum":"😋","stuck_out_tongue_winking_eye":"😜","stuck_out_tongue_closed_eyes":"😝","stuck_out_tongue":"😛","money_mouth_face":"🤑","hugs":"🤗","nerd_face":"🤓","sunglasses":"😎","clown_face":"🤡","cowboy_hat_face":"🤠","smirk":"😏","unamused":"😒","disappointed":"😞","pensive":"😔","worried":"😟","confused":"😕","slightly_frowning_face":"🙁","frowning_face":"☹️","persevere":"😣","confounded":"😖","tired_face":"😫","weary":"😩","triumph":"😤","angry":"😠","rage":"😡","pout":"😡","no_mouth":"😶","neutral_face":"😐","expressionless":"😑","hushed":"😯","frowning":"😦","anguished":"😧","open_mouth":"😮","astonished":"😲","dizzy_face":"😵","flushed":"😳","scream":"😱","fearful":"😨","cold_sweat":"😰","cry":"😢","disappointed_relieved":"😥","drooling_face":"🤤","sob":"😭","sweat":"😓","sleepy":"😪","sleeping":"😴","roll_eyes":"🙄","thinking":"🤔","lying_face":"🤥","grimacing":"😬","zipper_mouth_face":"🤐","nauseated_face":"🤢","sneezing_face":"🤧","mask":"😷","face_with_thermometer":"🤒","face_with_head_bandage":"🤕","smiling_imp":"😈","imp":"👿","japanese_ogre":"👹","japanese_goblin":"👺","hankey":"💩","poop":"💩","shit":"💩","ghost":"👻","skull":"💀","skull_and_crossbones":"☠️","alien":"👽","space_invader":"👾","robot":"🤖","jack_o_lantern":"🎃","smiley_cat":"😺","smile_cat":"😸","joy_cat":"😹","heart_eyes_cat":"😻","smirk_cat":"😼","kissing_cat":"😽","scream_cat":"🙀","crying_cat_face":"😿","pouting_cat":"😾","open_hands":"👐","raised_hands":"🙌","clap":"👏","pray":"🙏","handshake":"🤝","+1":"👍","thumbsup":"👍","-1":"👎","thumbsdown":"👎","fist_oncoming":"👊","facepunch":"👊","punch":"👊","fist_raised":"✊","fist":"✊","fist_left":"🤛","fist_right":"🤜","crossed_fingers":"🤞","v":"✌️","metal":"🤘","ok_hand":"👌","point_left":"👈","point_right":"👉","point_up_2":"👆","point_down":"👇","point_up":"☝️","hand":"✋","raised_hand":"✋","raised_back_of_hand":"🤚","raised_hand_with_fingers_splayed":"🖐","vulcan_salute":"🖖","wave":"👋","call_me_hand":"🤙","muscle":"💪","middle_finger":"🖕","fu":"🖕","writing_hand":"✍️","selfie":"🤳","nail_care":"💅","ring":"💍","lipstick":"💄","kiss":"💋","lips":"👄","tongue":"👅","ear":"👂","nose":"👃","footprints":"👣","eye":"👁","eyes":"👀","speaking_head":"🗣","bust_in_silhouette":"👤","busts_in_silhouette":"👥","baby":"👶","boy":"👦","girl":"👧","man":"👨","woman":"👩","blonde_woman":"👱‍♀","blonde_man":"👱","person_with_blond_hair":"👱","older_man":"👴","older_woman":"👵","man_with_gua_pi_mao":"👲","woman_with_turban":"👳‍♀","man_with_turban":"👳","policewoman":"👮‍♀","policeman":"👮","cop":"👮","construction_worker_woman":"👷‍♀","construction_worker_man":"👷","construction_worker":"👷","guardswoman":"💂‍♀","guardsman":"💂","female_detective":"🕵️‍♀️","male_detective":"🕵","detective":"🕵","woman_health_worker":"👩‍⚕","man_health_worker":"👨‍⚕","woman_farmer":"👩‍🌾","man_farmer":"👨‍🌾","woman_cook":"👩‍🍳","man_cook":"👨‍🍳","woman_student":"👩‍🎓","man_student":"👨‍🎓","woman_singer":"👩‍🎤","man_singer":"👨‍🎤","woman_teacher":"👩‍🏫","man_teacher":"👨‍🏫","woman_factory_worker":"👩‍🏭","man_factory_worker":"👨‍🏭","woman_technologist":"👩‍💻","man_technologist":"👨‍💻","woman_office_worker":"👩‍💼","man_office_worker":"👨‍💼","woman_mechanic":"👩‍🔧","man_mechanic":"👨‍🔧","woman_scientist":"👩‍🔬","man_scientist":"👨‍🔬","woman_artist":"👩‍🎨","man_artist":"👨‍🎨","woman_firefighter":"👩‍🚒","man_firefighter":"👨‍🚒","woman_pilot":"👩‍✈","man_pilot":"👨‍✈","woman_astronaut":"👩‍🚀","man_astronaut":"👨‍🚀","woman_judge":"👩‍⚖","man_judge":"👨‍⚖","mrs_claus":"🤶","santa":"🎅","princess":"👸","prince":"🤴","bride_with_veil":"👰","man_in_tuxedo":"🤵","angel":"👼","pregnant_woman":"🤰","bowing_woman":"🙇‍♀","bowing_man":"🙇","bow":"🙇","tipping_hand_woman":"💁","information_desk_person":"💁","sassy_woman":"💁","tipping_hand_man":"💁‍♂","sassy_man":"💁‍♂","no_good_woman":"🙅","no_good":"🙅","ng_woman":"🙅","no_good_man":"🙅‍♂","ng_man":"🙅‍♂","ok_woman":"🙆","ok_man":"🙆‍♂","raising_hand_woman":"🙋","raising_hand":"🙋","raising_hand_man":"🙋‍♂","woman_facepalming":"🤦‍♀","man_facepalming":"🤦‍♂","woman_shrugging":"🤷‍♀","man_shrugging":"🤷‍♂","pouting_woman":"🙎","person_with_pouting_face":"🙎","pouting_man":"🙎‍♂","frowning_woman":"🙍","person_frowning":"🙍","frowning_man":"🙍‍♂","haircut_woman":"💇","haircut":"💇","haircut_man":"💇‍♂","massage_woman":"💆","massage":"💆","massage_man":"💆‍♂","business_suit_levitating":"🕴","dancer":"💃","man_dancing":"🕺","dancing_women":"👯","dancers":"👯","dancing_men":"👯‍♂","walking_woman":"🚶‍♀","walking_man":"🚶","walking":"🚶","running_woman":"🏃‍♀","running_man":"🏃","runner":"🏃","running":"🏃","couple":"👫","two_women_holding_hands":"👭","two_men_holding_hands":"👬","couple_with_heart_woman_man":"💑","couple_with_heart":"💑","couple_with_heart_woman_woman":"👩‍❤️‍👩","couple_with_heart_man_man":"👨‍❤️‍👨","couplekiss_man_woman":"💏","couplekiss_woman_woman":"👩‍❤️‍💋‍👩","couplekiss_man_man":"👨‍❤️‍💋‍👨","family_man_woman_boy":"👪","family":"👪","family_man_woman_girl":"👨‍👩‍👧","family_man_woman_girl_boy":"👨‍👩‍👧‍👦","family_man_woman_boy_boy":"👨‍👩‍👦‍👦","family_man_woman_girl_girl":"👨‍👩‍👧‍👧","family_woman_woman_boy":"👩‍👩‍👦","family_woman_woman_girl":"👩‍👩‍👧","family_woman_woman_girl_boy":"👩‍👩‍👧‍👦","family_woman_woman_boy_boy":"👩‍👩‍👦‍👦","family_woman_woman_girl_girl":"👩‍👩‍👧‍👧","family_man_man_boy":"👨‍👨‍👦","family_man_man_girl":"👨‍👨‍👧","family_man_man_girl_boy":"👨‍👨‍👧‍👦","family_man_man_boy_boy":"👨‍👨‍👦‍👦","family_man_man_girl_girl":"👨‍👨‍👧‍👧","family_woman_boy":"👩‍👦","family_woman_girl":"👩‍👧","family_woman_girl_boy":"👩‍👧‍👦","family_woman_boy_boy":"👩‍👦‍👦","family_woman_girl_girl":"👩‍👧‍👧","family_man_boy":"👨‍👦","family_man_girl":"👨‍👧","family_man_girl_boy":"👨‍👧‍👦","family_man_boy_boy":"👨‍👦‍👦","family_man_girl_girl":"👨‍👧‍👧","womans_clothes":"👚","shirt":"👕","tshirt":"👕","jeans":"👖","necktie":"👔","dress":"👗","bikini":"👙","kimono":"👘","high_heel":"👠","sandal":"👡","boot":"👢","mans_shoe":"👞","shoe":"👞","athletic_shoe":"👟","womans_hat":"👒","tophat":"🎩","mortar_board":"🎓","crown":"👑","rescue_worker_helmet":"⛑","school_satchel":"🎒","pouch":"👝","purse":"👛","handbag":"👜","briefcase":"💼","eyeglasses":"👓","dark_sunglasses":"🕶","closed_umbrella":"🌂","open_umbrella":"☂️","dog":"🐶","cat":"🐱","mouse":"🐭","hamster":"🐹","rabbit":"🐰","fox_face":"🦊","bear":"🐻","panda_face":"🐼","koala":"🐨","tiger":"🐯","lion":"🦁","cow":"🐮","pig":"🐷","pig_nose":"🐽","frog":"🐸","monkey_face":"🐵","see_no_evil":"🙈","hear_no_evil":"🙉","speak_no_evil":"🙊","monkey":"🐒","chicken":"🐔","penguin":"🐧","bird":"🐦","baby_chick":"🐤","hatching_chick":"🐣","hatched_chick":"🐥","duck":"🦆","eagle":"🦅","owl":"🦉","bat":"🦇","wolf":"🐺","boar":"🐗","horse":"🐴","unicorn":"🦄","bee":"🐝","honeybee":"🐝","bug":"🐛","butterfly":"🦋","snail":"🐌","shell":"🐚","beetle":"🐞","ant":"🐜","spider":"🕷","spider_web":"🕸","turtle":"🐢","snake":"🐍","lizard":"🦎","scorpion":"🦂","crab":"🦀","squid":"🦑","octopus":"🐙","shrimp":"🦐","tropical_fish":"🐠","fish":"🐟","blowfish":"🐡","dolphin":"🐬","flipper":"🐬","shark":"🦈","whale":"🐳","whale2":"🐋","crocodile":"🐊","leopard":"🐆","tiger2":"🐅","water_buffalo":"🐃","ox":"🐂","cow2":"🐄","deer":"🦌","dromedary_camel":"🐪","camel":"🐫","elephant":"🐘","rhinoceros":"🦏","gorilla":"🦍","racehorse":"🐎","pig2":"🐖","goat":"🐐","ram":"🐏","sheep":"🐑","dog2":"🐕","poodle":"🐩","cat2":"🐈","rooster":"🐓","turkey":"🦃","dove":"🕊","rabbit2":"🐇","mouse2":"🐁","rat":"🐀","chipmunk":"🐿","feet":"🐾","paw_prints":"🐾","dragon":"🐉","dragon_face":"🐲","cactus":"🌵","christmas_tree":"🎄","evergreen_tree":"🌲","deciduous_tree":"🌳","palm_tree":"🌴","seedling":"🌱","herb":"🌿","shamrock":"☘️","four_leaf_clover":"🍀","bamboo":"🎍","tanabata_tree":"🎋","leaves":"🍃","fallen_leaf":"🍂","maple_leaf":"🍁","mushroom":"🍄","ear_of_rice":"🌾","bouquet":"💐","tulip":"🌷","rose":"🌹","wilted_flower":"🥀","sunflower":"🌻","blossom":"🌼","cherry_blossom":"🌸","hibiscus":"🌺","earth_americas":"🌎","earth_africa":"🌍","earth_asia":"🌏","full_moon":"🌕","waning_gibbous_moon":"🌖","last_quarter_moon":"🌗","waning_crescent_moon":"🌘","new_moon":"🌑","waxing_crescent_moon":"🌒","first_quarter_moon":"🌓","moon":"🌔","waxing_gibbous_moon":"🌔","new_moon_with_face":"🌚","full_moon_with_face":"🌝","sun_with_face":"🌞","first_quarter_moon_with_face":"🌛","last_quarter_moon_with_face":"🌜","crescent_moon":"🌙","dizzy":"💫","star":"⭐️","star2":"🌟","sparkles":"✨","zap":"⚡️","fire":"🔥","boom":"💥","collision":"💥","comet":"☄","sunny":"☀️","sun_behind_small_cloud":"🌤","partly_sunny":"⛅️","sun_behind_large_cloud":"🌥","sun_behind_rain_cloud":"🌦","rainbow":"🌈","cloud":"☁️","cloud_with_rain":"🌧","cloud_with_lightning_and_rain":"⛈","cloud_with_lightning":"🌩","cloud_with_snow":"🌨","snowman_with_snow":"☃️","snowman":"⛄️","snowflake":"❄️","wind_face":"🌬","dash":"💨","tornado":"🌪","fog":"🌫","ocean":"🌊","droplet":"💧","sweat_drops":"💦","umbrella":"☔️","green_apple":"🍏","apple":"🍎","pear":"🍐","tangerine":"🍊","orange":"🍊","mandarin":"🍊","lemon":"🍋","banana":"🍌","watermelon":"🍉","grapes":"🍇","strawberry":"🍓","melon":"🍈","cherries":"🍒","peach":"🍑","pineapple":"🍍","kiwi_fruit":"🥝","avocado":"🥑","tomato":"🍅","eggplant":"🍆","cucumber":"🥒","carrot":"🥕","corn":"🌽","hot_pepper":"🌶","potato":"🥔","sweet_potato":"🍠","chestnut":"🌰","peanuts":"🥜","honey_pot":"🍯","croissant":"🥐","bread":"🍞","baguette_bread":"🥖","cheese":"🧀","egg":"🥚","fried_egg":"🍳","bacon":"🥓","pancakes":"🥞","fried_shrimp":"🍤","poultry_leg":"🍗","meat_on_bone":"🍖","pizza":"🍕","hotdog":"🌭","hamburger":"🍔","fries":"🍟","stuffed_flatbread":"🥙","taco":"🌮","burrito":"🌯","green_salad":"🥗","shallow_pan_of_food":"🥘","spaghetti":"🍝","ramen":"🍜","stew":"🍲","fish_cake":"🍥","sushi":"🍣","bento":"🍱","curry":"🍛","rice":"🍚","rice_ball":"🍙","rice_cracker":"🍘","oden":"🍢","dango":"🍡","shaved_ice":"🍧","ice_cream":"🍨","icecream":"🍦","cake":"🍰","birthday":"🎂","custard":"🍮","lollipop":"🍭","candy":"🍬","chocolate_bar":"🍫","popcorn":"🍿","doughnut":"🍩","cookie":"🍪","milk_glass":"🥛","baby_bottle":"🍼","coffee":"☕️","tea":"🍵","sake":"🍶","beer":"🍺","beers":"🍻","clinking_glasses":"🥂","wine_glass":"🍷","tumbler_glass":"🥃","cocktail":"🍸","tropical_drink":"🍹","champagne":"🍾","spoon":"🥄","fork_and_knife":"🍴","plate_with_cutlery":"🍽","soccer":"⚽️","basketball":"🏀","football":"🏈","baseball":"⚾️","tennis":"🎾","volleyball":"🏐","rugby_football":"🏉","8ball":"🎱","ping_pong":"🏓","badminton":"🏸","goal_net":"🥅","ice_hockey":"🏒","field_hockey":"🏑","cricket":"🏏","golf":"⛳️","bow_and_arrow":"🏹","fishing_pole_and_fish":"🎣","boxing_glove":"🥊","martial_arts_uniform":"🥋","ice_skate":"⛸","ski":"🎿","skier":"⛷","snowboarder":"🏂","weight_lifting_woman":"🏋️‍♀️","weight_lifting_man":"🏋","person_fencing":"🤺","women_wrestling":"🤼‍♀","men_wrestling":"🤼‍♂","woman_cartwheeling":"🤸‍♀","man_cartwheeling":"🤸‍♂","basketball_woman":"⛹️‍♀️","basketball_man":"⛹","woman_playing_handball":"🤾‍♀","man_playing_handball":"🤾‍♂","golfing_woman":"🏌️‍♀️","golfing_man":"🏌","surfing_woman":"🏄‍♀","surfing_man":"🏄","surfer":"🏄","swimming_woman":"🏊‍♀","swimming_man":"🏊","swimmer":"🏊","woman_playing_water_polo":"🤽‍♀","man_playing_water_polo":"🤽‍♂","rowing_woman":"🚣‍♀","rowing_man":"🚣","rowboat":"🚣","horse_racing":"🏇","biking_woman":"🚴‍♀","biking_man":"🚴","bicyclist":"🚴","mountain_biking_woman":"🚵‍♀","mountain_biking_man":"🚵","mountain_bicyclist":"🚵","running_shirt_with_sash":"🎽","medal_sports":"🏅","medal_military":"🎖","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉","trophy":"🏆","rosette":"🏵","reminder_ribbon":"🎗","ticket":"🎫","tickets":"🎟","circus_tent":"🎪","woman_juggling":"🤹‍♀","man_juggling":"🤹‍♂","performing_arts":"🎭","art":"🎨","clapper":"🎬","microphone":"🎤","headphones":"🎧","musical_score":"🎼","musical_keyboard":"🎹","drum":"🥁","saxophone":"🎷","trumpet":"🎺","guitar":"🎸","violin":"🎻","game_die":"🎲","dart":"🎯","bowling":"🎳","video_game":"🎮","slot_machine":"🎰","car":"🚗","red_car":"🚗","taxi":"🚕","blue_car":"🚙","bus":"🚌","trolleybus":"🚎","racing_car":"🏎","police_car":"🚓","ambulance":"🚑","fire_engine":"🚒","minibus":"🚐","truck":"🚚","articulated_lorry":"🚛","tractor":"🚜","kick_scooter":"🛴","bike":"🚲","motor_scooter":"🛵","motorcycle":"🏍","rotating_light":"🚨","oncoming_police_car":"🚔","oncoming_bus":"🚍","oncoming_automobile":"🚘","oncoming_taxi":"🚖","aerial_tramway":"🚡","mountain_cableway":"🚠","suspension_railway":"🚟","railway_car":"🚃","train":"🚋","mountain_railway":"🚞","monorail":"🚝","bullettrain_side":"🚄","bullettrain_front":"🚅","light_rail":"🚈","steam_locomotive":"🚂","train2":"🚆","metro":"🚇","tram":"🚊","station":"🚉","helicopter":"🚁","small_airplane":"🛩","airplane":"✈️","flight_departure":"🛫","flight_arrival":"🛬","rocket":"🚀","artificial_satellite":"🛰","seat":"💺","canoe":"🛶","boat":"⛵️","sailboat":"⛵️","motor_boat":"🛥","speedboat":"🚤","passenger_ship":"🛳","ferry":"⛴","ship":"🚢","anchor":"⚓️","construction":"🚧","fuelpump":"⛽️","busstop":"🚏","vertical_traffic_light":"🚦","traffic_light":"🚥","world_map":"🗺","moyai":"🗿","statue_of_liberty":"🗽","fountain":"⛲️","tokyo_tower":"🗼","european_castle":"🏰","japanese_castle":"🏯","stadium":"🏟","ferris_wheel":"🎡","roller_coaster":"🎢","carousel_horse":"🎠","parasol_on_ground":"⛱","beach_umbrella":"🏖","desert_island":"🏝","mountain":"⛰","mountain_snow":"🏔","mount_fuji":"🗻","volcano":"🌋","desert":"🏜","camping":"🏕","tent":"⛺️","railway_track":"🛤","motorway":"🛣","building_construction":"🏗","factory":"🏭","house":"🏠","house_with_garden":"🏡","houses":"🏘","derelict_house":"🏚","office":"🏢","department_store":"🏬","post_office":"🏣","european_post_office":"🏤","hospital":"🏥","bank":"🏦","hotel":"🏨","convenience_store":"🏪","school":"🏫","love_hotel":"🏩","wedding":"💒","classical_building":"🏛","church":"⛪️","mosque":"🕌","synagogue":"🕍","kaaba":"🕋","shinto_shrine":"⛩","japan":"🗾","rice_scene":"🎑","national_park":"🏞","sunrise":"🌅","sunrise_over_mountains":"🌄","stars":"🌠","sparkler":"🎇","fireworks":"🎆","city_sunrise":"🌇","city_sunset":"🌆","cityscape":"🏙","night_with_stars":"🌃","milky_way":"🌌","bridge_at_night":"🌉","foggy":"🌁","watch":"⌚️","iphone":"📱","calling":"📲","computer":"💻","keyboard":"⌨️","desktop_computer":"🖥","printer":"🖨","computer_mouse":"🖱","trackball":"🖲","joystick":"🕹","clamp":"🗜","minidisc":"💽","floppy_disk":"💾","cd":"💿","dvd":"📀","vhs":"📼","camera":"📷","camera_flash":"📸","video_camera":"📹","movie_camera":"🎥","film_projector":"📽","film_strip":"🎞","telephone_receiver":"📞","phone":"☎️","telephone":"☎️","pager":"📟","fax":"📠","tv":"📺","radio":"📻","studio_microphone":"🎙","level_slider":"🎚","control_knobs":"🎛","stopwatch":"⏱","timer_clock":"⏲","alarm_clock":"⏰","mantelpiece_clock":"🕰","hourglass":"⌛️","hourglass_flowing_sand":"⏳","satellite":"📡","battery":"🔋","electric_plug":"🔌","bulb":"💡","flashlight":"🔦","candle":"🕯","wastebasket":"🗑","oil_drum":"🛢","money_with_wings":"💸","dollar":"💵","yen":"💴","euro":"💶","pound":"💷","moneybag":"💰","credit_card":"💳","gem":"💎","balance_scale":"⚖️","wrench":"🔧","hammer":"🔨","hammer_and_pick":"⚒","hammer_and_wrench":"🛠","pick":"⛏","nut_and_bolt":"🔩","gear":"⚙️","chains":"⛓","gun":"🔫","bomb":"💣","hocho":"🔪","knife":"🔪","dagger":"🗡","crossed_swords":"⚔️","shield":"🛡","smoking":"🚬","coffin":"⚰️","funeral_urn":"⚱️","amphora":"🏺","crystal_ball":"🔮","prayer_beads":"📿","barber":"💈","alembic":"⚗️","telescope":"🔭","microscope":"🔬","hole":"🕳","pill":"💊","syringe":"💉","thermometer":"🌡","toilet":"🚽","potable_water":"🚰","shower":"🚿","bathtub":"🛁","bath":"🛀","bellhop_bell":"🛎","key":"🔑","old_key":"🗝","door":"🚪","couch_and_lamp":"🛋","bed":"🛏","sleeping_bed":"🛌","framed_picture":"🖼","shopping":"🛍","shopping_cart":"🛒","gift":"🎁","balloon":"🎈","flags":"🎏","ribbon":"🎀","confetti_ball":"🎊","tada":"🎉","dolls":"🎎","izakaya_lantern":"🏮","lantern":"🏮","wind_chime":"🎐","email":"✉️","envelope":"✉️","envelope_with_arrow":"📩","incoming_envelope":"📨","e-mail":"📧","love_letter":"💌","inbox_tray":"📥","outbox_tray":"📤","package":"📦","label":"🏷","mailbox_closed":"📪","mailbox":"📫","mailbox_with_mail":"📬","mailbox_with_no_mail":"📭","postbox":"📮","postal_horn":"📯","scroll":"📜","page_with_curl":"📃","page_facing_up":"📄","bookmark_tabs":"📑","bar_chart":"📊","chart_with_upwards_trend":"📈","chart_with_downwards_trend":"📉","spiral_notepad":"🗒","spiral_calendar":"🗓","calendar":"📆","date":"📅","card_index":"📇","card_file_box":"🗃","ballot_box":"🗳","file_cabinet":"🗄","clipboard":"📋","file_folder":"📁","open_file_folder":"📂","card_index_dividers":"🗂","newspaper_roll":"🗞","newspaper":"📰","notebook":"📓","notebook_with_decorative_cover":"📔","ledger":"📒","closed_book":"📕","green_book":"📗","blue_book":"📘","orange_book":"📙","books":"📚","book":"📖","open_book":"📖","bookmark":"🔖","link":"🔗","paperclip":"📎","paperclips":"🖇","triangular_ruler":"📐","straight_ruler":"📏","pushpin":"📌","round_pushpin":"📍","scissors":"✂️","pen":"🖊","fountain_pen":"🖋","black_nib":"✒️","paintbrush":"🖌","crayon":"🖍","memo":"📝","pencil":"📝","pencil2":"✏️","mag":"🔍","mag_right":"🔎","lock_with_ink_pen":"🔏","closed_lock_with_key":"🔐","lock":"🔒","unlock":"🔓","heart":"❤️","yellow_heart":"💛","green_heart":"💚","blue_heart":"💙","purple_heart":"💜","black_heart":"🖤","broken_heart":"💔","heavy_heart_exclamation":"❣️","two_hearts":"💕","revolving_hearts":"💞","heartbeat":"💓","heartpulse":"💗","sparkling_heart":"💖","cupid":"💘","gift_heart":"💝","heart_decoration":"💟","peace_symbol":"☮️","latin_cross":"✝️","star_and_crescent":"☪️","om":"🕉","wheel_of_dharma":"☸️","star_of_david":"✡️","six_pointed_star":"🔯","menorah":"🕎","yin_yang":"☯️","orthodox_cross":"☦️","place_of_worship":"🛐","ophiuchus":"⛎","aries":"♈️","taurus":"♉️","gemini":"♊️","cancer":"♋️","leo":"♌️","virgo":"♍️","libra":"♎️","scorpius":"♏️","sagittarius":"♐️","capricorn":"♑️","aquarius":"♒️","pisces":"♓️","id":"🆔","atom_symbol":"⚛️","accept":"🉑","radioactive":"☢️","biohazard":"☣️","mobile_phone_off":"📴","vibration_mode":"📳","eight_pointed_black_star":"✴️","vs":"🆚","white_flower":"💮","ideograph_advantage":"🉐","secret":"㊙️","congratulations":"㊗️","u6e80":"🈵","a":"🅰️","b":"🅱️","ab":"🆎","cl":"🆑","o2":"🅾️","sos":"🆘","x":"❌","o":"⭕️","stop_sign":"🛑","no_entry":"⛔️","name_badge":"📛","no_entry_sign":"🚫","anger":"💢","hotsprings":"♨️","no_pedestrians":"🚷","do_not_litter":"🚯","no_bicycles":"🚳","non-potable_water":"🚱","underage":"🔞","no_mobile_phones":"📵","no_smoking":"🚭","exclamation":"❗️","heavy_exclamation_mark":"❗️","grey_exclamation":"❕","question":"❓","grey_question":"❔","bangbang":"‼️","interrobang":"⁉️","low_brightness":"🔅","high_brightness":"🔆","part_alternation_mark":"〽️","warning":"⚠️","children_crossing":"🚸","trident":"🔱","fleur_de_lis":"⚜️","beginner":"🔰","recycle":"♻️","white_check_mark":"✅","chart":"💹","sparkle":"❇️","eight_spoked_asterisk":"✳️","negative_squared_cross_mark":"❎","globe_with_meridians":"🌐","diamond_shape_with_a_dot_inside":"💠","m":"Ⓜ️","cyclone":"🌀","zzz":"💤","atm":"🏧","wc":"🚾","wheelchair":"♿️","parking":"🅿️","sa":"🈂️","passport_control":"🛂","customs":"🛃","baggage_claim":"🛄","left_luggage":"🛅","mens":"🚹","womens":"🚺","baby_symbol":"🚼","restroom":"🚻","put_litter_in_its_place":"🚮","cinema":"🎦","signal_strength":"📶","koko":"🈁","symbols":"🔣","information_source":"ℹ️","abc":"🔤","abcd":"🔡","capital_abcd":"🔠","ng":"🆖","ok":"🆗","up":"🆙","cool":"🆒","new":"🆕","free":"🆓","zero":"0️⃣","one":"1️⃣","two":"2️⃣","three":"3️⃣","four":"4️⃣","five":"5️⃣","six":"6️⃣","seven":"7️⃣","eight":"8️⃣","nine":"9️⃣","keycap_ten":"🔟","hash":"#️⃣","asterisk":"*️⃣","arrow_forward":"▶️","pause_button":"⏸","play_or_pause_button":"⏯","stop_button":"⏹","record_button":"⏺","next_track_button":"⏭","previous_track_button":"⏮","fast_forward":"⏩","rewind":"⏪","arrow_double_up":"⏫","arrow_double_down":"⏬","arrow_backward":"◀️","arrow_up_small":"🔼","arrow_down_small":"🔽","arrow_right":"➡️","arrow_left":"⬅️","arrow_up":"⬆️","arrow_down":"⬇️","arrow_upper_right":"↗️","arrow_lower_right":"↘️","arrow_lower_left":"↙️","arrow_upper_left":"↖️","arrow_up_down":"↕️","left_right_arrow":"↔️","arrow_right_hook":"↪️","leftwards_arrow_with_hook":"↩️","arrow_heading_up":"⤴️","arrow_heading_down":"⤵️","twisted_rightwards_arrows":"🔀","repeat":"🔁","repeat_one":"🔂","arrows_counterclockwise":"🔄","arrows_clockwise":"🔃","musical_note":"🎵","notes":"🎶","heavy_plus_sign":"➕","heavy_minus_sign":"➖","heavy_division_sign":"➗","heavy_multiplication_x":"✖️","heavy_dollar_sign":"💲","currency_exchange":"💱","tm":"™️","copyright":"©️","registered":"®️","wavy_dash":"〰️","curly_loop":"➰","loop":"➿","end":"🔚","back":"🔙","on":"🔛","top":"🔝","soon":"🔜","heavy_check_mark":"✔️","ballot_box_with_check":"☑️","radio_button":"🔘","white_circle":"⚪️","black_circle":"⚫️","red_circle":"🔴","large_blue_circle":"🔵","small_red_triangle":"🔺","small_red_triangle_down":"🔻","small_orange_diamond":"🔸","small_blue_diamond":"🔹","large_orange_diamond":"🔶","large_blue_diamond":"🔷","white_square_button":"🔳","black_square_button":"🔲","black_small_square":"▪️","white_small_square":"▫️","black_medium_small_square":"◾️","white_medium_small_square":"◽️","black_medium_square":"◼️","white_medium_square":"◻️","black_large_square":"⬛️","white_large_square":"⬜️","speaker":"🔈","mute":"🔇","sound":"🔉","loud_sound":"🔊","bell":"🔔","no_bell":"🔕","mega":"📣","loudspeaker":"📢","eye_speech_bubble":"👁‍🗨","speech_balloon":"💬","thought_balloon":"💭","right_anger_bubble":"🗯","spades":"♠️","clubs":"♣️","hearts":"♥️","diamonds":"♦️","black_joker":"🃏","flower_playing_cards":"🎴","mahjong":"🀄️","clock1":"🕐","clock2":"🕑","clock3":"🕒","clock4":"🕓","clock5":"🕔","clock6":"🕕","clock7":"🕖","clock8":"🕗","clock9":"🕘","clock10":"🕙","clock11":"🕚","clock12":"🕛","clock130":"🕜","clock230":"🕝","clock330":"🕞","clock430":"🕟","clock530":"🕠","clock630":"🕡","clock730":"🕢","clock830":"🕣","clock930":"🕤","clock1030":"🕥","clock1130":"🕦","clock1230":"🕧","white_flag":"🏳️","black_flag":"🏴","checkered_flag":"🏁","triangular_flag_on_post":"🚩","rainbow_flag":"🏳️‍🌈","afghanistan":"🇦🇫","aland_islands":"🇦🇽","albania":"🇦🇱","algeria":"🇩🇿","american_samoa":"🇦🇸","andorra":"🇦🇩","angola":"🇦🇴","anguilla":"🇦🇮","antarctica":"🇦🇶","antigua_barbuda":"🇦🇬","argentina":"🇦🇷","armenia":"🇦🇲","aruba":"🇦🇼","australia":"🇦🇺","austria":"🇦🇹","azerbaijan":"🇦🇿","bahamas":"🇧🇸","bahrain":"🇧🇭","bangladesh":"🇧🇩","barbados":"🇧🇧","belarus":"🇧🇾","belgium":"🇧🇪","belize":"🇧🇿","benin":"🇧🇯","bermuda":"🇧🇲","bhutan":"🇧🇹","bolivia":"🇧🇴","caribbean_netherlands":"🇧🇶","bosnia_herzegovina":"🇧🇦","botswana":"🇧🇼","brazil":"🇧🇷","british_indian_ocean_territory":"🇮🇴","british_virgin_islands":"🇻🇬","brunei":"🇧🇳","bulgaria":"🇧🇬","burkina_faso":"🇧🇫","burundi":"🇧🇮","cape_verde":"🇨🇻","cambodia":"🇰🇭","cameroon":"🇨🇲","canada":"🇨🇦","canary_islands":"🇮🇨","cayman_islands":"🇰🇾","central_african_republic":"🇨🇫","chad":"🇹🇩","chile":"🇨🇱","cn":"🇨🇳","christmas_island":"🇨🇽","cocos_islands":"🇨🇨","colombia":"🇨🇴","comoros":"🇰🇲","congo_brazzaville":"🇨🇬","congo_kinshasa":"🇨🇩","cook_islands":"🇨🇰","costa_rica":"🇨🇷","cote_divoire":"🇨🇮","croatia":"🇭🇷","cuba":"🇨🇺","curacao":"🇨🇼","cyprus":"🇨🇾","czech_republic":"🇨🇿","denmark":"🇩🇰","djibouti":"🇩🇯","dominica":"🇩🇲","dominican_republic":"🇩🇴","ecuador":"🇪🇨","egypt":"🇪🇬","el_salvador":"🇸🇻","equatorial_guinea":"🇬🇶","eritrea":"🇪🇷","estonia":"🇪🇪","ethiopia":"🇪🇹","eu":"🇪🇺","european_union":"🇪🇺","falkland_islands":"🇫🇰","faroe_islands":"🇫🇴","fiji":"🇫🇯","finland":"🇫🇮","fr":"🇫🇷","french_guiana":"🇬🇫","french_polynesia":"🇵🇫","french_southern_territories":"🇹🇫","gabon":"🇬🇦","gambia":"🇬🇲","georgia":"🇬🇪","de":"🇩🇪","ghana":"🇬🇭","gibraltar":"🇬🇮","greece":"🇬🇷","greenland":"🇬🇱","grenada":"🇬🇩","guadeloupe":"🇬🇵","guam":"🇬🇺","guatemala":"🇬🇹","guernsey":"🇬🇬","guinea":"🇬🇳","guinea_bissau":"🇬🇼","guyana":"🇬🇾","haiti":"🇭🇹","honduras":"🇭🇳","hong_kong":"🇭🇰","hungary":"🇭🇺","iceland":"🇮🇸","india":"🇮🇳","indonesia":"🇮🇩","iran":"🇮🇷","iraq":"🇮🇶","ireland":"🇮🇪","isle_of_man":"🇮🇲","israel":"🇮🇱","it":"🇮🇹","jamaica":"🇯🇲","jp":"🇯🇵","crossed_flags":"🎌","jersey":"🇯🇪","jordan":"🇯🇴","kazakhstan":"🇰🇿","kenya":"🇰🇪","kiribati":"🇰🇮","kosovo":"🇽🇰","kuwait":"🇰🇼","kyrgyzstan":"🇰🇬","laos":"🇱🇦","latvia":"🇱🇻","lebanon":"🇱🇧","lesotho":"🇱🇸","liberia":"🇱🇷","libya":"🇱🇾","liechtenstein":"🇱🇮","lithuania":"🇱🇹","luxembourg":"🇱🇺","macau":"🇲🇴","macedonia":"🇲🇰","madagascar":"🇲🇬","malawi":"🇲🇼","malaysia":"🇲🇾","maldives":"🇲🇻","mali":"🇲🇱","malta":"🇲🇹","marshall_islands":"🇲🇭","martinique":"🇲🇶","mauritania":"🇲🇷","mauritius":"🇲🇺","mayotte":"🇾🇹","mexico":"🇲🇽","micronesia":"🇫🇲","moldova":"🇲🇩","monaco":"🇲🇨","mongolia":"🇲🇳","montenegro":"🇲🇪","montserrat":"🇲🇸","morocco":"🇲🇦","mozambique":"🇲🇿","myanmar":"🇲🇲","namibia":"🇳🇦","nauru":"🇳🇷","nepal":"🇳🇵","netherlands":"🇳🇱","new_caledonia":"🇳🇨","new_zealand":"🇳🇿","nicaragua":"🇳🇮","niger":"🇳🇪","nigeria":"🇳🇬","niue":"🇳🇺","norfolk_island":"🇳🇫","northern_mariana_islands":"🇲🇵","north_korea":"🇰🇵","norway":"🇳🇴","oman":"🇴🇲","pakistan":"🇵🇰","palau":"🇵🇼","palestinian_territories":"🇵🇸","panama":"🇵🇦","papua_new_guinea":"🇵🇬","paraguay":"🇵🇾","peru":"🇵🇪","philippines":"🇵🇭","pitcairn_islands":"🇵🇳","poland":"🇵🇱","portugal":"🇵🇹","puerto_rico":"🇵🇷","qatar":"🇶🇦","reunion":"🇷🇪","romania":"🇷🇴","ru":"🇷🇺","rwanda":"🇷🇼","st_barthelemy":"🇧🇱","st_helena":"🇸🇭","st_kitts_nevis":"🇰🇳","st_lucia":"🇱🇨","st_pierre_miquelon":"🇵🇲","st_vincent_grenadines":"🇻🇨","samoa":"🇼🇸","san_marino":"🇸🇲","sao_tome_principe":"🇸🇹","saudi_arabia":"🇸🇦","senegal":"🇸🇳","serbia":"🇷🇸","seychelles":"🇸🇨","sierra_leone":"🇸🇱","singapore":"🇸🇬","sint_maarten":"🇸🇽","slovakia":"🇸🇰","slovenia":"🇸🇮","solomon_islands":"🇸🇧","somalia":"🇸🇴","south_africa":"🇿🇦","south_georgia_south_sandwich_islands":"🇬🇸","kr":"🇰🇷","south_sudan":"🇸🇸","es":"🇪🇸","sri_lanka":"🇱🇰","sudan":"🇸🇩","suriname":"🇸🇷","swaziland":"🇸🇿","sweden":"🇸🇪","switzerland":"🇨🇭","syria":"🇸🇾","taiwan":"🇹🇼","tajikistan":"🇹🇯","tanzania":"🇹🇿","thailand":"🇹🇭","timor_leste":"🇹🇱","togo":"🇹🇬","tokelau":"🇹🇰","tonga":"🇹🇴","trinidad_tobago":"🇹🇹","tunisia":"🇹🇳","tr":"🇹🇷","turkmenistan":"🇹🇲","turks_caicos_islands":"🇹🇨","tuvalu":"🇹🇻","uganda":"🇺🇬","ukraine":"🇺🇦","united_arab_emirates":"🇦🇪","gb":"🇬🇧","uk":"🇬🇧","us":"🇺🇸","us_virgin_islands":"🇻🇮","uruguay":"🇺🇾","uzbekistan":"🇺🇿","vanuatu":"🇻🇺","vatican_city":"🇻🇦","venezuela":"🇻🇪","vietnam":"🇻🇳","wallis_futuna":"🇼🇫","western_sahara":"🇪🇭","yemen":"🇾🇪","zambia":"🇿🇲","zimbabwe":"🇿🇼"}')},function(d,_,i){d.exports={angry:[">:(",">:-("],blush:[':")',':-")'],broken_heart:["</3","<\\3"],confused:[":/",":-/"],cry:[":'(",":'-(",":,(",":,-("],frowning:[":(",":-("],heart:["<3"],imp:["]:(","]:-("],innocent:["o:)","O:)","o:-)","O:-)","0:)","0:-)"],joy:[":')",":'-)",":,)",":,-)",":'D",":'-D",":,D",":,-D"],kissing:[":*",":-*"],laughing:["x-)","X-)"],neutral_face:[":|",":-|"],open_mouth:[":o",":-o",":O",":-O"],rage:[":@",":-@"],smile:[":D",":-D"],smiley:[":)",":-)"],smiling_imp:["]:)","]:-)"],sob:[":,'(",":,'-(",";(",";-("],stuck_out_tongue:[":P",":-P"],sunglasses:["8-)","B-)"],sweat:[",:(",",:-("],sweat_smile:[",:)",",:-)"],unamused:[":s",":-S",":z",":-Z",":$",":-$"],wink:[";)",";-)"]}},function(d,_,i){d.exports=function(e,t){return e[t].content}},function(d,_,i){d.exports=function(e,t,r,n,l){var s=e.utils.arrayReplaceAt,a=e.utils.lib.ucmicro,c=new RegExp([a.Z.source,a.P.source,a.Cc.source].join("|"));function o(u,f,p){var m,g=0,b=[];return u.replace(l,function(y,k,w){var v;if(r.hasOwnProperty(y)){if(v=r[y],k>0&&!c.test(w[k-1])||k+y.length<w.length&&!c.test(w[k+y.length]))return}else v=y.slice(1,-1);k>g&&((m=new p("text","",0)).content=u.slice(g,k),b.push(m)),(m=new p("emoji","",0)).markup=v,m.content=t[v],b.push(m),g=k+y.length}),g<u.length&&((m=new p("text","",0)).content=u.slice(g),b.push(m)),b}return function(u){var f,p,m,g,b,y=u.tokens,k=0;for(p=0,m=y.length;p<m;p++)if(y[p].type==="inline")for(f=(g=y[p].children).length-1;f>=0;f--)(b=g[f]).type!=="link_open"&&b.type!=="link_close"||b.info==="auto"&&(k-=b.nesting),b.type==="text"&&k===0&&n.test(b.content)&&(y[p].children=g=s(g,f,o(b.content,b.level,u.Token)))}}},function(d,_,i){d.exports=function(e){var t,r=e.defs;e.enabled.length&&(r=Object.keys(r).reduce(function(a,c){return e.enabled.indexOf(c)>=0&&(a[c]=r[c]),a},{})),t=Object.keys(e.shortcuts).reduce(function(a,c){return r[c]?Array.isArray(e.shortcuts[c])?(e.shortcuts[c].forEach(function(o){a[o]=c}),a):(a[e.shortcuts[c]]=c,a):a},{});var n=Object.keys(r).map(function(a){return":"+a+":"}).concat(Object.keys(t)).sort().reverse().map(function(a){return a.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}).join("|"),l=RegExp(n),s=RegExp(n,"g");return{defs:r,shortcuts:t,scanRE:l,replaceRE:s}}},function(d,_,i){var e=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;function t(r,n){var l,s,a=r.posMax,c=r.pos;if(r.src.charCodeAt(c)!==126||n||c+2>=a)return!1;for(r.pos=c+1;r.pos<a;){if(r.src.charCodeAt(r.pos)===126){l=!0;break}r.md.inline.skipToken(r)}return l&&c+1!==r.pos?(s=r.src.slice(c+1,r.pos)).match(/(^|[^\\])(\\\\)*\s/)?(r.pos=c,!1):(r.posMax=r.pos,r.pos=c+1,r.push("sub_open","sub",1).markup="~",r.push("text","",0).content=s.replace(e,"$1"),r.push("sub_close","sub",-1).markup="~",r.pos=r.posMax+1,r.posMax=a,!0):(r.pos=c,!1)}d.exports=function(r){r.inline.ruler.after("emphasis","sub",t)}},function(d,_,i){var e=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;function t(r,n){var l,s,a=r.posMax,c=r.pos;if(r.src.charCodeAt(c)!==94||n||c+2>=a)return!1;for(r.pos=c+1;r.pos<a;){if(r.src.charCodeAt(r.pos)===94){l=!0;break}r.md.inline.skipToken(r)}return l&&c+1!==r.pos?(s=r.src.slice(c+1,r.pos)).match(/(^|[^\\])(\\\\)*\s/)?(r.pos=c,!1):(r.posMax=r.pos,r.pos=c+1,r.push("sup_open","sup",1).markup="^",r.push("text","",0).content=s.replace(e,"$1"),r.push("sup_close","sup",-1).markup="^",r.pos=r.posMax+1,r.posMax=a,!0):(r.pos=c,!1)}d.exports=function(r){r.inline.ruler.after("emphasis","sup",t)}},function(d,_,i){d.exports=function(e){var t=e.utils.isSpace;function r(n,l){var s,a,c=n.bMarks[l]+n.tShift[l],o=n.eMarks[l];return c>=o||(a=n.src.charCodeAt(c++))!==126&&a!==58||c===(s=n.skipSpaces(c))||s>=o?-1:c}e.block.ruler.before("paragraph","deflist",function(n,l,s,a){var c,o,u,f,p,m,g,b,y,k,w,v,x,T,S,E,C,O,j,D;if(a)return!(n.ddIndent<0)&&r(n,l)>=0;if((y=l+1)>=s||n.isEmpty(y)&&++y>=s||n.sCount[y]<n.blkIndent||(o=r(n,y))<0)return!1;g=n.tokens.length,j=!0,(D=n.push("dl_open","dl",1)).map=m=[l,0],f=l,u=y;e:for(;;){for(O=!1,(D=n.push("dt_open","dt",1)).map=[f,f],(D=n.push("inline","",0)).map=[f,f],D.content=n.getLines(f,f+1,n.blkIndent,!1).trim(),D.children=[],D=n.push("dt_close","dt",-1);;){for((D=n.push("dd_open","dd",1)).map=p=[y,0],C=o,b=n.eMarks[u],k=n.sCount[u]+o-(n.bMarks[u]+n.tShift[u]);C<b&&(c=n.src.charCodeAt(C),t(c));)c===9?k+=4-k%4:k++,C++;if(o=C,E=n.tight,w=n.ddIndent,v=n.blkIndent,S=n.tShift[u],T=n.sCount[u],x=n.parentType,n.blkIndent=n.ddIndent=n.sCount[u]+2,n.tShift[u]=o-n.bMarks[u],n.sCount[u]=k,n.tight=!0,n.parentType="deflist",n.md.block.tokenize(n,u,s,!0),n.tight&&!O||(j=!1),O=n.line-u>1&&n.isEmpty(n.line-1),n.tShift[u]=S,n.sCount[u]=T,n.tight=E,n.parentType=x,n.blkIndent=v,n.ddIndent=w,D=n.push("dd_close","dd",-1),p[1]=y=n.line,y>=s||n.sCount[y]<n.blkIndent)break e;if((o=r(n,y))<0)break;u=y}if(y>=s||(f=y,n.isEmpty(f))||n.sCount[f]<n.blkIndent||(u=f+1)>=s||(n.isEmpty(u)&&u++,u>=s)||n.sCount[u]<n.blkIndent||(o=r(n,u))<0)break}return D=n.push("dl_close","dl",-1),m[1]=y,n.line=y,j&&function(L,$){var B,M,P=L.level+2;for(B=$+2,M=L.tokens.length-2;B<M;B++)L.tokens[B].level===P&&L.tokens[B].type==="paragraph_open"&&(L.tokens[B+2].hidden=!0,L.tokens[B].hidden=!0,B+=2)}(n,g),!0},{alt:["paragraph","reference","blockquote"]})}},function(d,_,i){d.exports=function(e){var t=e.utils.escapeRE,r=e.utils.arrayReplaceAt,n=e.utils.lib.ucmicro.P.source,l=e.utils.lib.ucmicro.Z.source;e.block.ruler.before("reference","abbr_def",function(s,a,c,o){var u,f,p,m,g,b=s.bMarks[a]+s.tShift[a],y=s.eMarks[a];if(b+2>=y||s.src.charCodeAt(b++)!==42||s.src.charCodeAt(b++)!==91)return!1;for(m=b;b<y;b++){if((p=s.src.charCodeAt(b))===91)return!1;if(p===93){g=b;break}p===92&&b++}return!(g<0||s.src.charCodeAt(g+1)!==58)&&(!!o||(u=s.src.slice(m,g).replace(/\\(.)/g,"$1"),f=s.src.slice(g+2,y).trim(),u.length!==0&&f.length!==0&&(s.env.abbreviations||(s.env.abbreviations={}),s.env.abbreviations[":"+u]===void 0&&(s.env.abbreviations[":"+u]=f),s.line=a+1,!0)))},{alt:["paragraph","reference"]}),e.core.ruler.after("linkify","abbr_replace",function(s){var a,c,o,u,f,p,m,g,b,y,k,w,v,x=s.tokens;if(s.env.abbreviations){for(w=new RegExp("(?:"+Object.keys(s.env.abbreviations).map(function(T){return T.substr(1)}).sort(function(T,S){return S.length-T.length}).map(t).join("|")+")"),k="(^|"+n+"|"+l+"|["+" \r\n$+<=>^`|~".split("").map(t).join("")+"])("+Object.keys(s.env.abbreviations).map(function(T){return T.substr(1)}).sort(function(T,S){return S.length-T.length}).map(t).join("|")+")($|"+n+"|"+l+"|["+" \r\n$+<=>^`|~".split("").map(t).join("")+"])",b=new RegExp(k,"g"),c=0,o=x.length;c<o;c++)if(x[c].type==="inline"){for(a=(u=x[c].children).length-1;a>=0;a--)if((v=u[a]).type==="text"&&(g=0,p=v.content,b.lastIndex=0,m=[],w.test(p))){for(;y=b.exec(p);)(y.index>0||y[1].length>0)&&((f=new s.Token("text","",0)).content=p.slice(g,y.index+y[1].length),m.push(f)),(f=new s.Token("abbr_open","abbr",1)).attrs=[["title",s.env.abbreviations[":"+y[2]]]],m.push(f),(f=new s.Token("text","",0)).content=y[2],m.push(f),f=new s.Token("abbr_close","abbr",-1),m.push(f),b.lastIndex-=y[3].length,g=b.lastIndex;m.length&&(g<p.length&&((f=new s.Token("text","",0)).content=p.slice(g),m.push(f)),x[c].children=u=r(u,a,m))}}}})}},function(d,_,i){function e(o,u,f,p){var m=Number(o[u].meta.id+1).toString(),g="";return typeof p.docId=="string"&&(g="-"+p.docId+"-"),g+m}function t(o,u){var f=Number(o[u].meta.id+1).toString();return o[u].meta.subId>0&&(f+=":"+o[u].meta.subId),"["+f+"]"}function r(o,u,f,p,m){var g=m.rules.footnote_anchor_name(o,u,f,p,m),b=m.rules.footnote_caption(o,u,f,p,m),y=g;return o[u].meta.subId>0&&(y+=":"+o[u].meta.subId),'<sup class="footnote-ref"><a href="#fn'+g+'" id="fnref'+y+'">'+b+"</a></sup>"}function n(o,u,f){return(f.xhtmlOut?`<hr class="footnotes-sep" />
`:`<hr class="footnotes-sep">
`)+`<section class="footnotes">
<ol class="footnotes-list">
`}function l(){return`</ol>
</section>
`}function s(o,u,f,p,m){var g=m.rules.footnote_anchor_name(o,u,f,p,m);return o[u].meta.subId>0&&(g+=":"+o[u].meta.subId),'<li id="fn'+g+'" class="footnote-item">'}function a(){return`</li>
`}function c(o,u,f,p,m){var g=m.rules.footnote_anchor_name(o,u,f,p,m);return o[u].meta.subId>0&&(g+=":"+o[u].meta.subId),' <a href="#fnref'+g+'" class="footnote-backref">↩︎</a>'}d.exports=function(o){var u=o.helpers.parseLinkLabel,f=o.utils.isSpace;o.renderer.rules.footnote_ref=r,o.renderer.rules.footnote_block_open=n,o.renderer.rules.footnote_block_close=l,o.renderer.rules.footnote_open=s,o.renderer.rules.footnote_close=a,o.renderer.rules.footnote_anchor=c,o.renderer.rules.footnote_caption=t,o.renderer.rules.footnote_anchor_name=e,o.block.ruler.before("reference","footnote_def",function(p,m,g,b){var y,k,w,v,x,T,S,E,C,O,j,D=p.bMarks[m]+p.tShift[m],L=p.eMarks[m];if(D+4>L||p.src.charCodeAt(D)!==91||p.src.charCodeAt(D+1)!==94)return!1;for(x=D+2;x<L;x++){if(p.src.charCodeAt(x)===32)return!1;if(p.src.charCodeAt(x)===93)break}if(x===D+2||x+1>=L||p.src.charCodeAt(++x)!==58)return!1;if(b)return!0;for(x++,p.env.footnotes||(p.env.footnotes={}),p.env.footnotes.refs||(p.env.footnotes.refs={}),T=p.src.slice(D+2,x-2),p.env.footnotes.refs[":"+T]=-1,(S=new p.Token("footnote_reference_open","",1)).meta={label:T},S.level=p.level++,p.tokens.push(S),y=p.bMarks[m],k=p.tShift[m],w=p.sCount[m],v=p.parentType,j=x,E=C=p.sCount[m]+x-(p.bMarks[m]+p.tShift[m]);x<L&&(O=p.src.charCodeAt(x),f(O));)O===9?C+=4-C%4:C++,x++;return p.tShift[m]=x-j,p.sCount[m]=C-E,p.bMarks[m]=j,p.blkIndent+=4,p.parentType="footnote",p.sCount[m]<p.blkIndent&&(p.sCount[m]+=p.blkIndent),p.md.block.tokenize(p,m,g,!0),p.parentType=v,p.blkIndent-=4,p.tShift[m]=k,p.sCount[m]=w,p.bMarks[m]=y,(S=new p.Token("footnote_reference_close","",-1)).level=--p.level,p.tokens.push(S),!0},{alt:["paragraph","reference"]}),o.inline.ruler.after("image","footnote_inline",function(p,m){var g,b,y,k,w=p.posMax,v=p.pos;return!(v+2>=w)&&p.src.charCodeAt(v)===94&&p.src.charCodeAt(v+1)===91&&(g=v+2,!((b=u(p,v+1))<0)&&(m||(p.env.footnotes||(p.env.footnotes={}),p.env.footnotes.list||(p.env.footnotes.list=[]),y=p.env.footnotes.list.length,p.md.inline.parse(p.src.slice(g,b),p.md,p.env,k=[]),p.push("footnote_ref","",0).meta={id:y},p.env.footnotes.list[y]={content:p.src.slice(g,b),tokens:k}),p.pos=b+1,p.posMax=w,!0))}),o.inline.ruler.after("footnote_inline","footnote_ref",function(p,m){var g,b,y,k,w=p.posMax,v=p.pos;if(v+3>w||!p.env.footnotes||!p.env.footnotes.refs||p.src.charCodeAt(v)!==91||p.src.charCodeAt(v+1)!==94)return!1;for(b=v+2;b<w;b++){if(p.src.charCodeAt(b)===32||p.src.charCodeAt(b)===10)return!1;if(p.src.charCodeAt(b)===93)break}return b!==v+2&&!(b>=w)&&(b++,g=p.src.slice(v+2,b-1),p.env.footnotes.refs[":"+g]!==void 0&&(m||(p.env.footnotes.list||(p.env.footnotes.list=[]),p.env.footnotes.refs[":"+g]<0?(y=p.env.footnotes.list.length,p.env.footnotes.list[y]={label:g,count:0},p.env.footnotes.refs[":"+g]=y):y=p.env.footnotes.refs[":"+g],k=p.env.footnotes.list[y].count,p.env.footnotes.list[y].count++,p.push("footnote_ref","",0).meta={id:y,subId:k,label:g}),p.pos=b,p.posMax=w,!0))}),o.core.ruler.after("inline","footnote_tail",function(p){var m,g,b,y,k,w,v,x,T,S,E=!1,C={};if(p.env.footnotes&&(p.tokens=p.tokens.filter(function(O){return O.type==="footnote_reference_open"?(E=!0,T=[],S=O.meta.label,!1):O.type==="footnote_reference_close"?(E=!1,C[":"+S]=T,!1):(E&&T.push(O),!E)}),p.env.footnotes.list)){for(w=p.env.footnotes.list,v=new p.Token("footnote_block_open","",1),p.tokens.push(v),m=0,g=w.length;m<g;m++){for((v=new p.Token("footnote_open","",1)).meta={id:m,label:w[m].label},p.tokens.push(v),w[m].tokens?(x=[],(v=new p.Token("paragraph_open","p",1)).block=!0,x.push(v),(v=new p.Token("inline","",0)).children=w[m].tokens,v.content=w[m].content,x.push(v),(v=new p.Token("paragraph_close","p",-1)).block=!0,x.push(v)):w[m].label&&(x=C[":"+w[m].label]),x&&(p.tokens=p.tokens.concat(x)),k=p.tokens[p.tokens.length-1].type==="paragraph_close"?p.tokens.pop():null,y=w[m].count>0?w[m].count:1,b=0;b<y;b++)(v=new p.Token("footnote_anchor","",0)).meta={id:m,subId:b,label:w[m].label},p.tokens.push(v);k&&p.tokens.push(k),v=new p.Token("footnote_close","",-1),p.tokens.push(v)}v=new p.Token("footnote_block_close","",-1),p.tokens.push(v)}})}},function(d,_,i){d.exports=function(e){e.inline.ruler.before("emphasis","ins",function(t,r){var n,l,s,a,c=t.pos,o=t.src.charCodeAt(c);if(r||o!==43||(s=(l=t.scanDelims(t.pos,!0)).length,a=String.fromCharCode(o),s<2))return!1;for(s%2&&(t.push("text","",0).content=a,s--),n=0;n<s;n+=2)t.push("text","",0).content=a+a,t.delimiters.push({marker:o,jump:n,token:t.tokens.length-1,level:t.level,end:-1,open:l.can_open,close:l.can_close});return t.pos+=l.length,!0}),e.inline.ruler2.before("emphasis","ins",function(t){var r,n,l,s,a,c=[],o=t.delimiters,u=t.delimiters.length;for(r=0;r<u;r++)(l=o[r]).marker===43&&l.end!==-1&&(s=o[l.end],(a=t.tokens[l.token]).type="ins_open",a.tag="ins",a.nesting=1,a.markup="++",a.content="",(a=t.tokens[s.token]).type="ins_close",a.tag="ins",a.nesting=-1,a.markup="++",a.content="",t.tokens[s.token-1].type==="text"&&t.tokens[s.token-1].content==="+"&&c.push(s.token-1));for(;c.length;){for(n=(r=c.pop())+1;n<t.tokens.length&&t.tokens[n].type==="ins_close";)n++;r!==--n&&(a=t.tokens[n],t.tokens[n]=t.tokens[r],t.tokens[r]=a)}})}},function(d,_,i){d.exports=function(e){e.inline.ruler.before("emphasis","mark",function(t,r){var n,l,s,a,c=t.pos,o=t.src.charCodeAt(c);if(r||o!==61||(s=(l=t.scanDelims(t.pos,!0)).length,a=String.fromCharCode(o),s<2))return!1;for(s%2&&(t.push("text","",0).content=a,s--),n=0;n<s;n+=2)t.push("text","",0).content=a+a,t.delimiters.push({marker:o,jump:n,token:t.tokens.length-1,level:t.level,end:-1,open:l.can_open,close:l.can_close});return t.pos+=l.length,!0}),e.inline.ruler2.before("emphasis","mark",function(t){var r,n,l,s,a,c=[],o=t.delimiters,u=t.delimiters.length;for(r=0;r<u;r++)(l=o[r]).marker===61&&l.end!==-1&&(s=o[l.end],(a=t.tokens[l.token]).type="mark_open",a.tag="mark",a.nesting=1,a.markup="==",a.content="",(a=t.tokens[s.token]).type="mark_close",a.tag="mark",a.nesting=-1,a.markup="==",a.content="",t.tokens[s.token-1].type==="text"&&t.tokens[s.token-1].content==="="&&c.push(s.token-1));for(;c.length;){for(n=(r=c.pop())+1;n<t.tokens.length&&t.tokens[n].type==="mark_close";)n++;r!==--n&&(a=t.tokens[n],t.tokens[n]=t.tokens[r],t.tokens[r]=a)}})}},function(d,_){var i=!0,e=!1,t=!1;function r(a,c,o){var u=a.attrIndex(c),f=[c,o];u<0?a.attrPush(f):a.attrs[u]=f}function n(a,c){for(var o=a[c].level-1,u=c-1;u>=0;u--)if(a[u].level===o)return u;return-1}function l(a,c){return a[c].type==="inline"&&function(o){return o.type==="paragraph_open"}(a[c-1])&&function(o){return o.type==="list_item_open"}(a[c-2])&&function(o){return o.content.indexOf("[ ] ")===0||o.content.indexOf("[x] ")===0||o.content.indexOf("[X] ")===0}(a[c])}function s(a,c){if(a.children.unshift(function(u,f){var p=new f("html_inline","",0),m=i?' disabled="" ':"";return u.content.indexOf("[ ] ")===0?p.content='<input class="task-list-item-checkbox"'+m+'type="checkbox">':u.content.indexOf("[x] ")!==0&&u.content.indexOf("[X] ")!==0||(p.content='<input class="task-list-item-checkbox" checked=""'+m+'type="checkbox">'),p}(a,c)),a.children[1].content=a.children[1].content.slice(3),a.content=a.content.slice(3),e)if(t){a.children.pop();var o="task-item-"+Math.ceil(1e7*Math.random()-1e3);a.children[0].content=a.children[0].content.slice(0,-1)+' id="'+o+'">',a.children.push(function(u,f,p){var m=new p("html_inline","",0);return m.content='<label class="task-list-item-label" for="'+f+'">'+u+"</label>",m.attrs=[{for:f}],m}(a.content,o,c))}else a.children.unshift(function(u){var f=new u("html_inline","",0);return f.content="<label>",f}(c)),a.children.push(function(u){var f=new u("html_inline","",0);return f.content="</label>",f}(c))}d.exports=function(a,c){c&&(i=!c.enabled,e=!!c.label,t=!!c.labelAfter),a.core.ruler.after("inline","github-task-lists",function(o){for(var u=o.tokens,f=2;f<u.length;f++)l(u,f)&&(s(u[f],o.Token),r(u[f-2],"class","task-list-item"+(i?"":" enabled")),r(u[n(u,f-2)],"class","contains-task-list"))})}},function(d,_,i){d.exports=function(e,t,r){var n=(r=r||{}).marker||":",l=n.charCodeAt(0),s=n.length,a=r.validate||function(o){return o.trim().split(" ",2)[0]===t},c=r.render||function(o,u,f,p,m){return o[u].nesting===1&&o[u].attrPush(["class",t]),m.renderToken(o,u,f,p,m)};e.block.ruler.before("fence","container_"+t,function(o,u,f,p){var m,g,b,y,k,w,v,x,T=!1,S=o.bMarks[u]+o.tShift[u],E=o.eMarks[u];if(l!==o.src.charCodeAt(S))return!1;for(m=S+1;m<=E&&n[(m-S)%s]===o.src[m];m++);if((b=Math.floor((m-S)/s))<3||(m-=(m-S)%s,y=o.src.slice(S,m),k=o.src.slice(m,E),!a(k)))return!1;if(p)return!0;for(g=u;!(++g>=f)&&!((S=o.bMarks[g]+o.tShift[g])<(E=o.eMarks[g])&&o.sCount[g]<o.blkIndent);)if(l===o.src.charCodeAt(S)&&!(o.sCount[g]-o.blkIndent>=4)){for(m=S+1;m<=E&&n[(m-S)%s]===o.src[m];m++);if(!(Math.floor((m-S)/s)<b||(m-=(m-S)%s,(m=o.skipSpaces(m))<E))){T=!0;break}}return v=o.parentType,x=o.lineMax,o.parentType="container",o.lineMax=g,(w=o.push("container_"+t+"_open","div",1)).markup=y,w.block=!0,w.info=k,w.map=[u,g],o.md.block.tokenize(o,u+1,g),(w=o.push("container_"+t+"_close","div",-1)).markup=o.src.slice(S,m),w.block=!0,o.parentType=v,o.lineMax=x,o.line=g+(T?1:0),!0},{alt:["paragraph","reference","blockquote","list"]}),e.renderer.rules["container_"+t+"_open"]=c,e.renderer.rules["container_"+t+"_close"]=c}},function(d,_,i){d.exports=function(e){var t,r=/^@\[toc\](?:\((?:\s+)?([^\)]+)(?:\s+)?\)?)?(?:\s+?)?$/im,n=function(l){return l.replace(/[^\w\s]/gi,"").split(" ").join("_")};e.renderer.rules.heading_open=function(l,s){var a=l[s].tag,c=l[s+1];return c.type==="inline"?"<"+a+'><a id="'+(n(c.content)+"_"+c.map[0])+'"></a>':"</h1>"},e.renderer.rules.toc_open=function(l,s){return""},e.renderer.rules.toc_close=function(l,s){return""},e.renderer.rules.toc_body=function(l,s){for(var a=[],c=t.tokens,o=c.length,u=0;u<o;u++)if(c[u].type==="heading_close"){var f=c[u],p=c[u-1];p.type==="inline"&&a.push({level:+f.tag.substr(1,1),anchor:n(p.content)+"_"+p.map[0],content:p.content})}var m=0,g=a.map(function(b){var y=[];if(b.level>m)for(var k=b.level-m,w=0;w<k;w++)y.push("<ul>"),m++;else if(b.level<m)for(k=m-b.level,w=0;w<k;w++)y.push("</ul>"),m--;return(y=y.concat(['<li><a href="#',b.anchor,'">',b.content,"</a></li>"])).join("")});return"<h3>"+l[s].content+"</h3>"+g.join("")+new Array(m+1).join("</ul>")},e.core.ruler.push("grab_state",function(l){t=l}),e.inline.ruler.after("emphasis","toc",function(l,s){for(;l.src.indexOf(`
`)>=0&&l.src.indexOf(`
`)<l.src.indexOf("@[toc]");)l.tokens.slice(-1)[0].type==="softbreak"&&(l.src=l.src.split(`
`).slice(1).join(`
`),l.pos=0);var a;if(l.src.charCodeAt(l.pos)!==64||l.src.charCodeAt(l.pos+1)!==91)return!1;var c=r.exec(l.src);if(!c||(c=c.filter(function(p){return p})).length<1||s)return!1;(a=l.push("toc_open","toc",1)).markup="@[toc]",a=l.push("toc_body","",0);var o="Table of Contents";c.length>1&&(o=c.pop()),a.content=o,a=l.push("toc_close","toc",-1);var u=0,f=l.src.indexOf(`
`);return u=f!==-1?l.pos+f:l.pos+l.posMax+1,l.pos=u,!0})}},function(d,_){d.exports=function(i,e){(e=e||{}).highlighted===void 0&&(e.highlighted=!0),e.hljs===void 0&&(e.hljs="auto"),typeof e.langCheck!="function"&&(e.langCheck=function(){}),i.options.highlight=function(t,r){var n=e.hljs;if(e.hljs==="auto"&&(n=window.hljs),e.highlighted&&r&&n){if(n.getLanguage(r))return'<pre><div class="hljs"><code class="'+i.options.langPrefix+r+'">'+n.highlight(r,t,!0).value+"</code></div></pre>";typeof e.langCheck=="function"&&e.langCheck(r)}return'<pre><code class="'+i.options.langPrefix+r+'">'+i.utils.escapeHtml(t)+"</code></pre>"}}},function(d,_,i){var e=null;function t(l,s){var a,c,o=l.posMax,u=!0,f=!0;return a=s>0?l.src.charCodeAt(s-1):-1,c=s+1<=o?l.src.charCodeAt(s+1):-1,(a===32||a===9||c>=48&&c<=57)&&(f=!1),c!==32&&c!==9||(u=!1),{can_open:u,can_close:f}}function r(l,s){if(!e&&window.katex&&(e=window.katex),!e)return!1;var a,c,o,u;if(l.src[l.pos]!=="$")return!1;if(!t(l,l.pos).can_open)return s||(l.pending+="$"),l.pos+=1,!0;for(c=a=l.pos+1;(c=l.src.indexOf("$",c))!==-1;){for(u=c-1;l.src[u]==="\\";)u-=1;if((c-u)%2==1)break;c+=1}return c===-1?(s||(l.pending+="$"),l.pos=a,!0):c-a==0?(s||(l.pending+="$$"),l.pos=a+1,!0):t(l,c).can_close?(s||((o=l.push("math_inline","math",0)).markup="$",o.content=l.src.slice(a,c)),l.pos=c+1,!0):(s||(l.pending+="$"),l.pos=a,!0)}function n(l,s,a,c){if(!e&&window.katex&&(e=window.katex),!e)return!1;var o,u,f,p,m,g=!1,b=l.bMarks[s]+l.tShift[s],y=l.eMarks[s];if(b+2>y||l.src.slice(b,b+2)!=="$$")return!1;if(b+=2,o=l.src.slice(b,y),c)return!0;for(o.trim().slice(-2)==="$$"&&(o=o.trim().slice(0,-2),g=!0),f=s;!g&&!(++f>=a)&&!((b=l.bMarks[f]+l.tShift[f])<(y=l.eMarks[f])&&l.tShift[f]<l.blkIndent);)l.src.slice(b,y).trim().slice(-2)==="$$"&&(p=l.src.slice(0,y).lastIndexOf("$$"),u=l.src.slice(b,p),g=!0);return l.line=f+1,(m=l.push("math_block","math",0)).block=!0,m.content=(o&&o.trim()?o+`
`:"")+l.getLines(s+1,f,l.tShift[s],!0)+(u&&u.trim()?u:""),m.map=[s,l.line],m.markup="$$",!0}d.exports=function(l,s){s=s||{},l.inline.ruler.after("escape","math_inline",r),l.block.ruler.after("blockquote","math_block",n,{alt:["paragraph","reference","blockquote","list"]}),l.renderer.rules.math_inline=function(a,c){return function(o){!e&&window.katex&&(e=window.katex),s.displayMode=!1;try{return e.renderToString(o,s)}catch(u){return s.throwOnError&&console.log(u),o}}(a[c].content)},l.renderer.rules.math_block=function(a,c){return function(o){!e&&window.katex&&(e=window.katex),s.displayMode=!0;try{return"<p>"+e.renderToString(o,s)+"</p>"}catch(u){return s.throwOnError&&console.log(u),o}}(a[c].content)+`
`}}},function(d,_){d.exports=function(i,e){i.image_add=function(r,n){i.__image instanceof Object||(i.__image={}),i.__image[r]=n},i.image_del=function(r){i.__image instanceof Object||(i.__image={}),delete i.__image[r]};var t=i.renderer.rules.image;i.renderer.rules.image=function(r,n,l,s,a){var c=r[n].attrs;if(i.__image instanceof Object){for(var o=0;o<c.length;o++)if(c[o][0]=="src"&&i.__image.hasOwnProperty(r[n].attrs[o][1])){c.push(["rel",c[o][1]]),c[o][1]=i.__image[r[n].attrs[o][1]];break}}return t(r,n,l,s,a)}}},function(d,_,i){i(71)},function(d,_,i){(_=i(43)(!1)).push([d.i,".op-icon.dropdown-wrapper.dropdown[data-v-218640b4]{position:relative}.op-icon.dropdown-wrapper.dropdown[type=button][data-v-218640b4]{-webkit-appearance:unset}.op-icon.dropdown-wrapper.dropdown .popup-dropdown[data-v-218640b4]{position:absolute;display:block;background:#fff;top:32px;left:-45px;min-width:130px;z-index:1600;border:1px solid #ebeef5;border-radius:4px;box-shadow:0 2px 12px 0 rgba(0,0,0,0.1)}.op-icon.dropdown-wrapper.dropdown .popup-dropdown .dropdown-item[data-v-218640b4]:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.op-icon.dropdown-wrapper.dropdown .popup-dropdown .dropdown-item[data-v-218640b4]:last-child{border-bottom-left-radius:3px;border-bottom-right-radius:3px}.op-icon.dropdown-wrapper.dropdown .popup-dropdown.op-header[data-v-218640b4]{left:-30px;min-width:90px}.op-icon.dropdown-wrapper.dropdown .popup-dropdown.fade-enter-active[data-v-218640b4],.op-icon.dropdown-wrapper.dropdown .popup-dropdown.fade-leave-active[data-v-218640b4]{opacity:1}.op-icon.dropdown-wrapper.dropdown .popup-dropdown.fade-enter[data-v-218640b4],.op-icon.dropdown-wrapper.dropdown .popup-dropdown.fade-leave-active[data-v-218640b4]{opacity:0}.op-icon.dropdown-wrapper.dropdown .popup-dropdown.transition[data-v-218640b4],.op-icon.dropdown-wrapper.dropdown .popup-dropdown.transition .dropdown-item[data-v-218640b4]{transition:all .2s linear 0s}.op-icon.dropdown-wrapper.dropdown .dropdown-item[data-v-218640b4]{height:40px;line-height:40px;font-size:14px;color:#606266;position:relative}.op-icon.dropdown-wrapper.dropdown .dropdown-item[data-v-218640b4]:hover{color:#303133;background-color:#e9e9eb}.op-icon.dropdown-wrapper.dropdown .dropdown-item input[data-v-218640b4]{position:absolute;font-size:100px;right:0;top:0;opacity:0;cursor:pointer}.op-icon.dropdown-wrapper.dropdown .dropdown-images[data-v-218640b4]{box-sizing:border-box}.op-icon.dropdown-wrapper.dropdown .dropdown-images button[data-v-218640b4]{position:absolute;top:-1px;right:5px;font-size:14px}.op-icon.dropdown-wrapper.dropdown .dropdown-images button[data-v-218640b4]:hover{color:#f56c6c;background-color:transparent}.op-icon.dropdown-wrapper.dropdown .dropdown-images span[data-v-218640b4]{display:inline-block;width:80px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.op-icon.dropdown-wrapper.dropdown .dropdown-images:hover .image-show[data-v-218640b4]{display:block !important}.op-icon.dropdown-wrapper.dropdown .dropdown-images .image-show[data-v-218640b4]{display:none;position:absolute;left:-128px;top:0;width:120px;height:90px;object-fit:contain;border:1px solid #f2f6fc}.op-icon.dropdown-wrapper.dropdown .dropdown-images .image-show.transition[data-v-218640b4]{transition:all .2s linear 0s}.op-icon.dropdown-wrapper.dropdown .dropdown-images.transition[data-v-218640b4]{transition:all .2s linear 0s}.add-image-link-wrapper[data-v-218640b4]{position:fixed;left:0;right:0;top:0;bottom:0;background:rgba(0,0,0,0.7);z-index:1600;transition:all .1s linear 0s}.add-image-link-wrapper.fade-enter-active[data-v-218640b4],.add-image-link-wrapper.fade-leave-active[data-v-218640b4]{opacity:1}.add-image-link-wrapper.fade-enter[data-v-218640b4],.add-image-link-wrapper.fade-leave-active[data-v-218640b4]{opacity:0}.add-image-link-wrapper .add-image-link[data-v-218640b4]{position:fixed;box-sizing:border-box;text-align:center;width:24%;left:38%;height:auto;padding:40px;top:25%;transition:all .1s linear 0s;z-index:3;background:#fff;border-radius:2px}@media only screen and (max-width:1500px){.add-image-link-wrapper .add-image-link[data-v-218640b4]{width:34%;left:33%}}@media only screen and (max-width:1000px){.add-image-link-wrapper .add-image-link[data-v-218640b4]{width:50%;left:25%}}@media only screen and (max-width:600px){.add-image-link-wrapper .add-image-link[data-v-218640b4]{width:80%;left:10%}}.add-image-link-wrapper .add-image-link i[data-v-218640b4]{font-size:24px;position:absolute;right:8px;top:6px;color:rgba(0,0,0,0.7);cursor:pointer}.add-image-link-wrapper .add-image-link .title[data-v-218640b4]{font-size:20px;margin-bottom:30px;margin-top:10px;font-weight:500 !important}.add-image-link-wrapper .add-image-link .input-wrapper[data-v-218640b4]{margin-top:10px;width:80%;border:1px solid #eeece8;text-align:left;margin-left:10%;height:35px}.add-image-link-wrapper .add-image-link .input-wrapper input[data-v-218640b4]{height:32px;line-height:32px;font-size:15px;width:90%;margin-left:8px;border:none;outline:none}.add-image-link-wrapper .add-image-link .op-btn[data-v-218640b4]{width:100px;height:35px;display:inline-block;margin-top:30px;cursor:pointer;text-align:center;line-height:35px;opacity:.9;border-radius:2px;letter-spacing:1px;font-size:15px}.add-image-link-wrapper .add-image-link .op-btn.sure[data-v-218640b4]{background:#2185d0;color:#fff;margin-left:5%}.add-image-link-wrapper .add-image-link .op-btn.sure[data-v-218640b4]:hover{opacity:1}.add-image-link-wrapper .add-image-link .op-btn.cancel[data-v-218640b4]{border:1px solid #bcbcbc;color:#bcbcbc}.add-image-link-wrapper .add-image-link .op-btn.cancel[data-v-218640b4]:hover{color:#000}",""]),d.exports=_},function(d,_,i){i.r(_);var e=i(78),t=i(24);for(var r in t)["default"].indexOf(r)<0&&function(s){i.d(_,s,function(){return t[s]})}(r);i(217);var n=i(3);const l=i.n(n)()(t.default,[["render",e.a]]);_.default=l},function(d,_,i){i(73)},function(d,_,i){(_=i(43)(!1)).push([d.i,'.auto-textarea-wrapper{position:relative;width:100%;margin:0;padding:0;line-height:normal}.auto-textarea-wrapper .auto-textarea-block{display:block;white-space:pre-wrap;word-wrap:break-word !important;visibility:hidden;overflow:hidden;margin:0;padding:0;box-sizing:border-box;font-size:100%}.auto-textarea-wrapper .auto-textarea-input{font-family:Menlo,"Ubuntu Mono",Consolas,"Courier New","Microsoft Yahei","Hiragino Sans GB","WenQuanYi Micro Hei",sans-serif;position:absolute;width:100%;height:100%;top:0;left:0;margin:0;padding:0;overflow-y:hidden;color:#2c3e50}.auto-textarea-wrapper .auto-textarea-input.no-border{outline:0 none;border:none !important}.auto-textarea-wrapper .auto-textarea-input.no-resize{resize:none}',""]),d.exports=_},function(d,_,i){i(74)},function(d,_,i){(_=i(43)(!1)).push([d.i,"textarea:disabled{background-color:#fff}.v-note-wrapper{position:relative;min-width:300px;min-height:300px;display:flex;flex-direction:column;background-color:#fff;z-index:1500;text-align:left;border:1px solid #f2f6fc;border-radius:4px}.v-note-wrapper.fullscreen{position:fixed;left:0;right:0;bottom:0;top:0;margin:0;height:auto;z-index:1501}.v-note-wrapper .v-note-op{padding:1px;width:100%;display:flex;white-space:pre-line;flex:none;min-height:40px;user-select:none;border-bottom:1px solid #f2f6fc;border-radius:4px 4px 0 0;background-color:#fff;z-index:1}.v-note-wrapper .v-note-op .v-left-item,.v-note-wrapper .v-note-op .v-right-item{flex:1;min-height:40px;box-sizing:border-box}.v-note-wrapper .v-note-op .v-left-item .op-icon-divider,.v-note-wrapper .v-note-op .v-right-item .op-icon-divider{height:40px;border-left:1px solid #e5e5e5;margin:0 6px 0 4px}.v-note-wrapper .v-note-op .v-left-item .op-icon,.v-note-wrapper .v-note-op .v-right-item .op-icon{box-sizing:border-box;display:inline-block;cursor:pointer;height:28px;width:28px;margin:6px 0 5px 0;font-size:14px;padding:4.5px 6px 5px 3.5px;color:#757575;border-radius:5px;text-align:center;background:none;border:none;outline:none;line-height:1}.v-note-wrapper .v-note-op .v-left-item .op-icon.dropdown-wrapper,.v-note-wrapper .v-note-op .v-right-item .op-icon.dropdown-wrapper{line-height:18px}.v-note-wrapper .v-note-op .v-left-item .op-icon.selected,.v-note-wrapper .v-note-op .v-right-item .op-icon.selected{color:rgba(0,0,0,0.8);background:#eaeaea}.v-note-wrapper .v-note-op .v-left-item .op-icon:hover,.v-note-wrapper .v-note-op .v-right-item .op-icon:hover{color:rgba(0,0,0,0.8);background:#e9e9eb}.v-note-wrapper .v-note-op .v-left-item.transition .op-icon,.v-note-wrapper .v-note-op .v-right-item.transition .op-icon{transition:all .2s linear 0s}.v-note-wrapper .v-note-op .v-right-item{text-align:right;padding-right:6px;max-width:30%}.v-note-wrapper .v-note-op .v-left-item{text-align:left;padding-left:6px}.v-note-wrapper .v-note-panel{position:relative;border-top:none;display:flex;flex:1;width:100%;box-sizing:border-box;overflow:hidden}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper{flex:0 0 50%;width:50%;padding:0;overflow-y:scroll;overflow-x:hidden;box-sizing:border-box;cursor:text;border-bottom-left-radius:4px}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style::-webkit-scrollbar{width:6px;background-color:#e5e5e5}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style::-webkit-scrollbar-thumb{background-color:#b7b7b7;border-radius:4px}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style::-webkit-scrollbar-thumb:hover{background-color:#a1a1a1}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style::-webkit-scrollbar-thumb:active{background-color:#a1a1a1}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style::-webkit-scrollbar-track{-webkit-box-shadow:0 0 0 #808080 inset}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style-border-radius::-webkit-scrollbar{border-bottom-right-radius:4px}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.transition{transition:all .2s linear 0s}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.single-edit{width:100%;flex:0 0 100%;overflow-y:auto}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.single-show{width:0;flex:0 0 0;display:none}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper .content-div{width:100%;padding:20px 25px;box-sizing:border-box;outline:0 none;border:none !important;color:#2c3e50;font-size:16px}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper .content-input-wrapper{width:100%;padding:8px 25px 15px 25px}.v-note-wrapper .v-note-panel .v-note-show{flex:0 0 50%;width:50%;overflow-y:auto;padding:0 0;transition:all .2s linear 0s}.v-note-wrapper .v-note-panel .v-note-show.single-show{flex:0 0 100%;width:100%}.v-note-wrapper .v-note-panel .v-note-show .v-show-content,.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html{width:100%;height:100%;padding:8px 25px 15px 25px;overflow-y:auto;box-sizing:border-box;overflow-x:hidden}.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style::-webkit-scrollbar,.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style::-webkit-scrollbar{width:6px;background-color:#e5e5e5}.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style::-webkit-scrollbar-thumb,.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style::-webkit-scrollbar-thumb{background-color:#b7b7b7;border-radius:4px}.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style::-webkit-scrollbar-thumb:hover,.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style::-webkit-scrollbar-thumb:hover{background-color:#a1a1a1}.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style::-webkit-scrollbar-thumb:active,.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style::-webkit-scrollbar-thumb:active{background-color:#a1a1a1}.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style::-webkit-scrollbar-track,.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style::-webkit-scrollbar-track{-webkit-box-shadow:0 0 0 #808080 inset}.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style-border-radius::-webkit-scrollbar,.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style-border-radius::-webkit-scrollbar{border-bottom-right-radius:4px}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper{display:flex;position:absolute;width:250px;right:0;top:0;bottom:0;height:100%;flex-direction:column;background-color:rgba(255,255,255,0.98);border-left:1px solid #f2f6fc;border-right:1px solid #f2f6fc}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper.transition{transition:all .1s linear 0s}@media only screen and (max-width:768px){.v-note-wrapper .v-note-panel .v-note-navigation-wrapper{width:50%}}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper.slideTop-enter-active,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper.slideTop-leave-active{height:100%}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper.slideTop-enter,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper.slideTop-leave-active{height:0}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-title{height:50px;width:100%;border-bottom:1px solid #f2f6fc;flex:none;line-height:50px;font-size:16px;box-sizing:border-box;padding:0 12px 0 18px}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-title .v-note-navigation-close{float:right;color:#606266;font-size:18px;cursor:pointer}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-title .v-note-navigation-close:hover{color:#303133}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content{overflow-y:auto;flex:1;padding:8px 0}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style::-webkit-scrollbar{width:6px;background-color:#e5e5e5}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style::-webkit-scrollbar-thumb{background-color:#b7b7b7;border-radius:4px}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style::-webkit-scrollbar-thumb:hover{background-color:#a1a1a1}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style::-webkit-scrollbar-thumb:active{background-color:#a1a1a1}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style::-webkit-scrollbar-track{-webkit-box-shadow:0 0 0 #808080 inset}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style-border-radius::-webkit-scrollbar{border-bottom-right-radius:4px}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h1,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h2,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h3,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h4,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h5,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h6{margin:2px 0;font-weight:500;font-size:17px;color:#2185d0;cursor:pointer;line-height:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 12px;border-bottom:none}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h1:hover,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h2:hover,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h3:hover,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h4:hover,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h5:hover,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h6:hover{color:#483d8b;text-decoration-line:underline}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h2{padding-left:27px;font-size:17px}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h3{padding-left:42px;font-size:17px}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h4{padding-left:58px;font-size:15px}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h5{padding-left:72px;font-size:15px}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h6{padding-left:87px;font-size:15px}.v-note-wrapper .v-note-read-model{position:relative;display:none;width:100%;height:100%;background:#fbfbfb;padding:30px 8% 50px 8%;overflow-y:auto;box-sizing:border-box}.v-note-wrapper .v-note-read-model.scroll-style::-webkit-scrollbar{width:6px;background-color:#e5e5e5}.v-note-wrapper .v-note-read-model.scroll-style::-webkit-scrollbar-thumb{background-color:#b7b7b7;border-radius:4px}.v-note-wrapper .v-note-read-model.scroll-style::-webkit-scrollbar-thumb:hover{background-color:#a1a1a1}.v-note-wrapper .v-note-read-model.scroll-style::-webkit-scrollbar-thumb:active{background-color:#a1a1a1}.v-note-wrapper .v-note-read-model.scroll-style::-webkit-scrollbar-track{-webkit-box-shadow:0 0 0 #808080 inset}.v-note-wrapper .v-note-read-model.scroll-style-border-radius::-webkit-scrollbar{border-bottom-right-radius:4px}.v-note-wrapper .v-note-read-model.show{display:block}.v-note-wrapper.shadow{border:none}.v-note-help-wrapper{position:fixed;left:0;right:0;top:0;bottom:0;background:rgba(0,0,0,0.7);z-index:1600;transition:all .1s linear 0s}.v-note-help-wrapper.fade-enter-active,.v-note-help-wrapper.fade-leave-active{opacity:1}.v-note-help-wrapper.fade-enter,.v-note-help-wrapper.fade-leave-active{opacity:0}.v-note-help-wrapper .v-note-help-content{position:relative;width:60%;max-width:800px;margin:30px auto;height:90%;min-width:320px;transition:all .1s linear 0s;z-index:3;border:1px solid #f2f6fc}.v-note-help-wrapper .v-note-help-content.shadow{border:none;box-shadow:0 0 5px rgba(0,0,0,0.157),0 0 5px rgba(0,0,0,0.227)}.v-note-help-wrapper .v-note-help-content i{font-size:28px;position:absolute;right:15px;top:8px;color:rgba(0,0,0,0.7);cursor:pointer}.v-note-help-wrapper .v-note-help-content i:hover{color:#000}.v-note-help-wrapper .v-note-help-content .v-note-help-show{width:100%;height:100%;font-size:18px;background:#fbfbfb;overflow-y:auto;padding:2% 6%}.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style::-webkit-scrollbar{width:6px;background-color:#e5e5e5}.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style::-webkit-scrollbar-thumb{background-color:#b7b7b7;border-radius:4px}.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style::-webkit-scrollbar-thumb:hover{background-color:#a1a1a1}.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style::-webkit-scrollbar-thumb:active{background-color:#a1a1a1}.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style::-webkit-scrollbar-track{-webkit-box-shadow:0 0 0 #808080 inset}.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style-border-radius::-webkit-scrollbar{border-bottom-right-radius:4px}.v-note-img-wrapper{position:fixed;display:flex;justify-content:center;align-items:center;left:0;right:0;top:0;bottom:0;background:rgba(0,0,0,0.7);z-index:1600;transition:all .1s linear 0s}.v-note-img-wrapper.fade-enter-active,.v-note-img-wrapper.fade-leave-active{opacity:1}.v-note-img-wrapper.fade-enter,.v-note-img-wrapper.fade-leave-active{opacity:0}.v-note-img-wrapper img{flex:0 0 auto;z-index:3}.v-note-img-wrapper i{font-size:28px;position:absolute;right:15px;top:8px;color:rgba(255,255,255,0.7);cursor:pointer}.v-note-img-wrapper i:hover{color:#fff}",""]),d.exports=_},function(d,_,i){i(233)},function(d,_){},,,,,,,,,function(d,_){},,function(d,_){}])})})(mavonEditor);const index="",adminData_vue_vue_type_style_index_0_lang="",_hoisted_1={key:0},_hoisted_2=["onClick"],_hoisted_3={id:"mdBox",class:"wh100"},_sfc_main={__name:"adminData",setup(d){const{upQx:_}=inject("qx");onMounted(()=>{getAdminNav().then(f=>{f.data.code===1?e.value=f.data.data:_()}),getUserImgList().then(f=>{f.data.code===1?(s.value=f.data.data,l.value=!1):_()})});let i=ref("### Welcome to webNote"),e=ref([]),t={markdown_css:function(){return"https://cdn.webnote.fun/mavonEditor/github-markdown.min.css"},hljs_js:function(){return"https://cdn.webnote.fun/mavonEditor/highlight.min.js"},hljs_lang:function(f){return"https://cdn.webnote.fun/mavonEditor/languages/"+f+".min.js"},hljs_css:function(f){if(f)return"https://cdn.webnote.fun/mavonEditor/styles/"+f+".min.css"},katex_js:function(){return"https://cdn.webnote.fun/mavonEditor/katex.min.js"},katex_css:function(){return"https://cdn.webnote.fun/mavonEditor/katex.min.css"}};function r(f,p){var y,k,w,v;let m=((k=(y=p==null?void 0:p.parent)==null?void 0:y.nodes[0])==null?void 0:k.title)||!1,g=((v=(w=p==null?void 0:p.parent)==null?void 0:w.nodes[1])==null?void 0:v.title)||!1,b=(p==null?void 0:p.title)||!1;m&&g&&b&&getMdData(`${m}/${g}/${b}`).then(x=>{x.data.code===1?i.value=x.data.data:_()})}let n=ref("1");const l=ref(!0);let s=ref([]),a=[{title:"图片名",dataIndex:"name",key:"name"},{title:"图片大小",dataIndex:"size",key:"size"},{title:"操作",dataIndex:"show",key:"show"}];const c=ref(""),o=ref(!1),u=f=>{c.value=f,o.value=!0};return(f,p)=>{const m=resolveComponent("a-table"),g=resolveComponent("a-tab-pane"),b=resolveComponent("a-directory-tree"),y=resolveComponent("a-tabs");return openBlock(),createBlock(y,{activeKey:unref(n),"onUpdate:activeKey":p[2]||(p[2]=k=>isRef(n)?n.value=k:n=k)},{default:withCtx(()=>[createVNode(g,{key:"1",tab:"图片"},{default:withCtx(()=>[createVNode(m,{dataSource:unref(s),columns:unref(a),loading:l.value},{bodyCell:withCtx(({column:k,record:w})=>[k.key==="show"?(openBlock(),createElementBlock("span",_hoisted_1,[createBaseVNode("a",{onClick:v=>u(w.key)},"查看图片",8,_hoisted_2)])):createCommentVNode("",!0)]),_:1},8,["dataSource","columns","loading"]),createVNode(ShowImg,{visible:o.value,"onUpdate:visible":p[0]||(p[0]=k=>o.value=k),imgkey:c.value},null,8,["visible","imgkey"])]),_:1}),createVNode(g,{key:"2",tab:"文档",class:"wh100"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_3,[createVNode(b,{style:{width:"256px"},multiple:"","tree-data":unref(e),onClick:r},null,8,["tree-data"]),createVNode(unref(mavonEditorExports.mavonEditor),{id:"md",modelValue:unref(i),"onUpdate:modelValue":p[1]||(p[1]=k=>isRef(i)?i.value=k:i=k),toolbarsFlag:!1,subfield:!1,externalLink:unref(t),defaultOpen:"preview"},null,8,["modelValue","externalLink"])])]),_:1})]),_:1},8,["activeKey"])}}};export{_sfc_main as default};
