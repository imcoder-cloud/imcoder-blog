webpackJsonp([32],{"0OYy":function(e,t){},"2uFj":function(e,t,n){"use strict";t.a={TOKEN_KEY:"token",ROUTER_KEY:"routers",DYNAMIC_ROUTER_KEY:"dynamic-routers",ROUTER_WHITE_LIST:["/login"]}},"5W1q":function(e,t){},"6D10":function(e,t,n){"use strict";var i=n("pFYg"),a=n.n(i),o=n("OVpc"),r=n.n(o),s={getCircularReplacer:function(){var e=new r.a;return function(t,n){if("object"===(void 0===n?"undefined":a()(n))&&null!==n){if(e.has(n))return;e.add(n)}return n}},notNull:function(e){return null!=e&&void 0!=e&&"null"!=e&&"undefined"!=e&&""!=e},isNull:function(e){return!this.notNull(e)},getSettingStorage:function(e){var t=localStorage.getItem(e);return"true"==(t=!!this.notNull(t)&&t)}};t.a=s},GYT0:function(e,t){},IcnI:function(e,t,n){"use strict";var i=n("7+uW"),a=n("NYxO"),o=n("6D10"),r={state:{settings:{lang:localStorage.getItem("lang")||"zh-CN",openSetting:o.a.getSettingStorage("openSetting"),showViewsBar:o.a.getSettingStorage("showViewsBar"),viewBarType:localStorage.getItem("viewBarType")||"tab",keepViewsByRefresh:o.a.getSettingStorage("keepViewsByRefresh"),collapseMenu:o.a.getSettingStorage("collapseMenu"),uniqueOpened:o.a.getSettingStorage("uniqueOpened"),showBreadCrumb:o.a.getSettingStorage("showBreadCrumb")}},mutations:{UPDATE_SETTINGS:function(e,t){var n=t.key,i=t.value,a=t.type;if(a&&"toggle"===a)return e.settings[n]=!e.settings[n],void localStorage.setItem(n,e.settings[n]);e.settings[n]=i,localStorage.setItem(n,i)}},actions:{updateSettings:function(e,t){(0,e.commit)("UPDATE_SETTINGS",t)}}},s=n("//Fk"),c=n.n(s),u=n("woOf"),d=n.n(u),m=n("Gu7T"),E=n.n(m),l=n("BO1k"),f=n.n(l),p=n("d7EF"),T=n.n(p),_=n("mvHQ"),g=n.n(_),v={state:{keepViewsByRefresh:o.a.getSettingStorage("keepViewsByRefresh"),visitedViews:[]},mutations:{ADD_VISITED_VIEW:function(e,t){var n=e.keepViewsByRefresh?JSON.parse(sessionStorage.getItem("visitedViews")||"[]"):e.visitedViews;if(n.some(function(e){return e.path===t.path}))e.visitedViews=n;else{var i={};i.name=t.name||"无标题",i.path=t.path,i.fullPath=t.fullPath,i.fixed=t.fixed,n.push(i),e.visitedViews=n,sessionStorage.setItem("visitedViews",g()(n))}},DEL_VISITED_VIEW:function(e,t){var n=e.keepViewsByRefresh?JSON.parse(sessionStorage.getItem("visitedViews")||"[]"):e.visitedViews,i=!0,a=!1,o=void 0;try{for(var r,s=f()(n.entries());!(i=(r=s.next()).done);i=!0){var c=r.value,u=T()(c,2),d=u[0];if(u[1].path===t.path){n.splice(d,1),e.visitedViews=n,sessionStorage.setItem("visitedViews",g()(n));break}}}catch(e){a=!0,o=e}finally{try{!i&&s.return&&s.return()}finally{if(a)throw o}}},DEL_OTHERS_VISITED_VIEWS:function(e,t){var n=e.keepViewsByRefresh?JSON.parse(sessionStorage.getItem("visitedViews")||"[]"):e.visitedViews,i=n.filter(function(e){return e.fixed}),a=!0,o=!1,r=void 0;try{for(var s,c=f()(n.entries());!(a=(s=c.next()).done);a=!0){var u=s.value,d=T()(u,2),m=d[0];if(d[1].path===t.path&&!t.fixed){n=n.slice(m,m+1),n=[].concat(E()(i),E()(n)),e.visitedViews=n,sessionStorage.setItem("visitedViews",g()(n));break}}}catch(e){o=!0,r=e}finally{try{!a&&c.return&&c.return()}finally{if(o)throw r}}},DEL_ALL_VISITED_VIEWS:function(e){var t=e.visitedViews.filter(function(e){return e.fixed});e.visitedViews=t,sessionStorage.setItem("visitedViews",g()(t))},UPDATE_VISITED_VIEW:function(e,t){var n=!0,i=!1,a=void 0;try{for(var o,r=f()(e.visitedViews);!(n=(o=r.next()).done);n=!0){var s=o.value;if(s.path===t.path){s=d()(s,t);break}}}catch(e){i=!0,a=e}finally{try{!n&&r.return&&r.return()}finally{if(i)throw a}}}},actions:{addView:function(e,t){(0,e.dispatch)("addVisitedView",t)},addVisitedView:function(e,t){(0,e.commit)("ADD_VISITED_VIEW",t)},delView:function(e,t){var n=e.dispatch,i=e.state;return new c.a(function(e){n("delVisitedView",t),e({visitedViews:[].concat(E()(i.visitedViews))})})},delVisitedView:function(e,t){var n=e.commit,i=e.state;return new c.a(function(e){n("DEL_VISITED_VIEW",t),e([].concat(E()(i.visitedViews)))})},delOthersViews:function(e,t){var n=e.dispatch,i=e.state;return new c.a(function(e){n("delOthersVisitedViews",t),e({visitedViews:[].concat(E()(i.visitedViews))})})},delOthersVisitedViews:function(e,t){var n=e.commit,i=e.state;return new c.a(function(e){n("DEL_OTHERS_VISITED_VIEWS",t),e([].concat(E()(i.visitedViews)))})},delAllViews:function(e,t){var n=e.dispatch,i=e.state;return new c.a(function(e){n("delAllVisitedViews",t),e({visitedViews:[].concat(E()(i.visitedViews))})})},delAllVisitedViews:function(e){var t=e.commit,n=e.state;return new c.a(function(e){t("DEL_ALL_VISITED_VIEWS"),e([].concat(E()(n.visitedViews)))})},updateVisitedView:function(e,t){(0,e.commit)("UPDATE_VISITED_VIEW",t)}}},S={state:{user:{},role:[],routers:n("YaEn").a.options.routes,dynamicRouters:[]},mutations:{GET_USER:function(e){return e.user},SET_USER:function(e,t){e.user=t},SET_ROUTER:function(e,t){e.routers=e.routers.concat(t)},GET_DYNAMIC_ROUTER:function(e){return e.dynamicRouters},SET_DYNAMIC_ROUTER:function(e,t){e.dynamicRouters=t}},actions:{getUser:function(e){(0,e.commit)("GET_USER")},setUser:function(e,t){(0,e.commit)("SET_USER",t)},setRouters:function(e,t){(0,e.commit)("SET_ROUTER",t)},getDynamicRouters:function(e){(0,e.commit)("GET_DYNAMIC_ROUTER")},setDynamicRouters:function(e,t){(0,e.commit)("SET_DYNAMIC_ROUTER",t)}}},h={settings:function(e){return e.settings.settings},visitedViews:function(e){return e.viewsBar.visitedViews},showBreadCrumb:function(e){return e.viewsBar.showBreadCrumb},user:function(e){return e.user.user},routers:function(e){return e.user.routers},dynamicRouters:function(e){return e.user.dynamicRouters}};i.default.use(a.a);var I=new a.a.Store({modules:{settings:r,viewsBar:v,user:S},getters:h});t.a=I},"L/EB":function(e,t){},MWF8:function(e,t,n){var i={"./":["8hXn",3],"./basic/banner":["JEQ8",0,28],"./basic/banner.vue":["JEQ8",0,28],"./basic/category":["JDI/",0,18],"./basic/category.vue":["JDI/",0,18],"./basic/color-picker":["vAOe",15],"./basic/color-picker.vue":["vAOe",15],"./basic/count-to":["+rsb",14],"./basic/count-to.vue":["+rsb",14],"./basic/ext":["afpO",0,9],"./basic/ext.vue":["afpO",0,9],"./basic/floor":["GYXo",12],"./basic/floor.vue":["GYXo",12],"./basic/form":["Uial",0,29],"./basic/form.vue":["Uial",0,29],"./basic/model":["8D+K",0,17],"./basic/model.vue":["8D+K",0,17],"./basic/select-tree":["egjg",0,11],"./basic/select-tree.vue":["egjg",0,11],"./basic/sticky":["kW3u",20],"./basic/sticky.vue":["kW3u",20],"./basic/tree":["wiei",8],"./basic/tree.vue":["wiei",8],"./components/category-tree":["p/Fm",0],"./components/category-tree.vue":["p/Fm",0],"./components/menu-bar":["7Yuv",0,21],"./components/menu-bar.vue":["7Yuv",0,21],"./components/menu-item":["uQBQ",0],"./components/menu-item.vue":["uQBQ",0],"./components/menu-link":["1ENj",0],"./components/menu-link.vue":["1ENj",0],"./components/nav-bar":["H0Nb",30],"./components/nav-bar.vue":["H0Nb",30],"./components/views-bar":["jKLp",0,13],"./components/views-bar.vue":["jKLp",0,13],"./content/list":["qBs3",0,10],"./content/list.vue":["qBs3",0,10],"./content/tag":["4+SH",0,16],"./content/tag.vue":["4+SH",0,16],"./content/write":["/rFD",0,7],"./content/write.vue":["/rFD",0,7],"./donate":["iXGt",2],"./donate/":["iXGt",2],"./donate/index":["iXGt",2],"./donate/index.vue":["iXGt",2],"./error/401":["3RDD",26],"./error/401.vue":["3RDD",26],"./error/404":["34W9",24],"./error/404.vue":["34W9",24],"./error/500":["ExNb",25],"./error/500.vue":["ExNb",25],"./home":["26dS",0,6],"./home.vue":["26dS",0,6],"./icon":["MGaV",1],"./icon/":["MGaV",1],"./icon/dd-icon":["yCge",22],"./icon/dd-icon.vue":["yCge",22],"./icon/element":["h00n",23],"./icon/element.vue":["h00n",23],"./icon/fontawesome":["VdS2",27],"./icon/fontawesome.vue":["VdS2",27],"./icon/index":["MGaV",1],"./icon/index.vue":["MGaV",1],"./index":["8hXn",3],"./index.vue":["8hXn",3],"./login":["Quw4",0,4],"./login.vue":["Quw4",0,4],"./settings":["p9Hj",19],"./settings.vue":["p9Hj",19],"./theme/edit":["Q5jp",5,0],"./theme/edit.vue":["Q5jp",5,0]};function a(e){var t=i[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}a.keys=function(){return Object.keys(i)},a.id="MWF8",e.exports=a},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},a,!1,function(e){n("GYT0")},null,null).exports,r=n("YaEn"),s=n("Dd8w"),c=n.n(s),u=n("SQ6o"),d=n("2uFj"),m=n("IcnI"),E=n("6D10"),l=n("Y81h"),f=n.n(l),p=(n("UVIz"),n("pd7E"));r.a.beforeEach(function(e,t,n){f.a.start(),E.a.notNull(u.a.getToken())?0===m.a.state.user.dynamicRouters.length?T(n,e):n():d.a.ROUTER_WHITE_LIST.indexOf(e.path)>-1?n():n("/login")}),r.a.afterEach(function(){f.a.done()});var T=function(e,t){var n=u.a.getDynamicRouters();0===n.length&&(n=p.a.routers,u.a.setDynamicRouters(n)),m.a.dispatch("setDynamicRouters",p.a.routers),r.a.addRoutes(_(n)),e(c()({},t,{replace:!0}))},_=function e(t){return t.filter(function(t){if(t.component){var n=t.component;t.component=g(n)}return t.children&&t.children.length&&(t.children=e(t.children)),!0})},g=function(e){return function(){return n("MWF8")("./"+e)}},v=n("zL8q"),S=n.n(v),h=(n("tvR6"),n("5W1q"),n("XLwt")),I=n.n(h),w=(n("ZHXk"),n("oGZU")),V=n.n(w),R=(n("0OYy"),n("L/EB"),n("urW8")),N=n.n(R),b=n("TXmL"),O=n("wUZ8"),y=n.n(O),D=c()({message:{settings:{TITLE:"settings",OPEN_VIEWS_BAR_TEXT:"open views-bar",VIEWS_BAR_SYTLE_TEXT:"views-bar style",VIEWS_BAR_SYTLE_TAB_TEXT:"Tab",VIEWS_BAR_SYTLE_TAG_TEXT:"Tag",KEEP_VIEWS_AFTER_REFRESH_TEXT:"Keep views after refreshing",COLLAPSE_MENU_BAR_TEXT:"collapse menu bar",UNIQUE_OPENED_TEXT:"unique opened",OPEN_BREAD_CRUMB_TEXT:"open bread crumb"},navBar:{MESSAGE_TEXT:"message",NOTE_TEXT:"note",SHARE_TEXT:"share",FULL_SCREEN_TEXT:"fullscreen",CANCEL_FULL_SCREEN_TEXT:"cancel",SETTINGS_TEXT:"settings",BASIC_INFO_TEXT:"information",ABOUT_TEXT:"about",LOGOUT_TEXT:"logout"}}},y.a),A=n("Vi3T"),B=n.n(A),U={en:D,"zh-CN":c()({message:{settings:{TITLE:"系统设置",OPEN_VIEWS_BAR_TEXT:"开启视图页签",VIEWS_BAR_SYTLE_TEXT:"视图页签样式",VIEWS_BAR_SYTLE_TAB_TEXT:"选项卡",VIEWS_BAR_SYTLE_TAG_TEXT:"标签",KEEP_VIEWS_AFTER_REFRESH_TEXT:"刷新保留其他视图",COLLAPSE_MENU_BAR_TEXT:"收缩菜单栏",UNIQUE_OPENED_TEXT:"保持一个子菜单展开",OPEN_BREAD_CRUMB_TEXT:"开启面包屑"},navBar:{MESSAGE_TEXT:"消息",NOTE_TEXT:"便签",SHARE_TEXT:"分享",FULL_SCREEN_TEXT:"全屏",CANCEL_FULL_SCREEN_TEXT:"取消全屏",SETTINGS_TEXT:"系统设置",BASIC_INFO_TEXT:"基本信息",ABOUT_TEXT:"关于我们",LOGOUT_TEXT:"退出登录"}}},B.a)};i.default.use(b.a);var L=new b.a({locale:localStorage.lang||"zh-CN",messages:U});N.a.i18n(function(e,t){return L.t(e,t)});var X=L,x=n("f2pj"),Y=n.n(x);i.default.use(Y.a),i.default.config.productionTip=!1,i.default.use(S.a),i.default.use(I.a),i.default.use(V.a),new i.default({el:"#app",router:r.a,store:m.a,i18n:X,components:{App:o},template:"<App/>"})},SQ6o:function(e,t,n){"use strict";var i=n("mvHQ"),a=n.n(i),o=n("2uFj"),r={getToken:function(){return sessionStorage.getItem(o.a.TOKEN_KEY)},setToken:function(e){return sessionStorage.setItem(o.a.TOKEN_KEY,e)},delToken:function(){return sessionStorage.setItem(o.a.TOKEN_KEY,null)},getRouters:function(){var e=sessionStorage.get(o.a.ROUTER_KEY);return JSON.parse(e||"[]")},setRouters:function(e){return sessionStorage.set(o.a.ROUTER_KEY,a()(e))},getDynamicRouters:function(){var e=sessionStorage.getItem(o.a.DYNAMIC_ROUTER_KEY);return JSON.parse(e||"[]")},setDynamicRouters:function(e){return sessionStorage.setItem(o.a.DYNAMIC_ROUTER_KEY,a()(e))},delRouters:function(){return sessionStorage.setItem(o.a.ROUTER_KEY,null)}};t.a=r},UVIz:function(e,t){},YaEn:function(e,t,n){"use strict";var i=n("7+uW"),a=n("/ocq");i.default.use(a.a),t.a=new a.a({routes:[{path:"/login",name:"login",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"Quw4"))}}]})},pd7E:function(e,t,n){"use strict";t.a={userName:"admin",password:"admin",roles:[],routers:[{path:"/",name:"Home",enName:"Home",component:"home",redirect:"index",children:[{id:1,path:"index",name:"首页",enName:"Home",icon:"el-icon-s-home",parentId:0,fixed:!0,component:"index",meta:{fixed:!0}}]},{id:2,path:"https://github.com/dongdong-cloud/vue-admin",name:"Project",enName:"Project",icon:"fa fa-github",parentId:0,component:"home",type:"external",children:[{id:3,path:"https://github.com/dongdong-cloud/vue-admin",name:"项目地址",enName:"Project",icon:"fa fa-github",parentId:2,component:"index",type:"external"}]},{id:4,path:"/basic",name:"基础内容",enName:"Basic",icon:"fa fa-cogs",parentId:0,component:"home",children:[{id:5,path:"banner",name:"轮播图",enName:"Banner",icon:"fa fa-table",parentId:4,component:"basic/banner"},{id:6,path:"ext",name:"扩展字段",enName:"Ext",icon:"fa fa-wpforms",parentId:4,component:"basic/ext"},{id:32,path:"category",name:"分类栏目",enName:"Categories",icon:"fa fa-exchange",parentId:4,component:"basic/category"}]},{id:9,path:"/content",name:"文章内容",enName:"Content",icon:"fa fa-pencil-square",parentId:0,component:"home",children:[{id:10,path:"list",name:"所有内容",enName:"All",icon:"fa fa-pencil-square-o",parentId:9,component:"content/list"},{id:41,path:"write",name:"内容编辑",enName:"Edit",icon:"fa fa-file-text-o",parentId:9,component:"content/write"},{id:36,path:"tags",name:"标签",enName:"Tags",icon:"dd markdown",parentId:9,component:"content/tag"}]},{id:16,path:"/settings",name:"Settings",enName:"Settings",icon:"fa fa-cog",parentId:0,component:"home",type:"click",children:[{id:17,path:"settings",name:"系统设置",enName:"Settings",icon:"fa fa-cog",parentId:16,type:"click"}]},{id:25,path:"/theme",name:"外观主题",enName:"Theme",icon:"el-icon-menu",parentId:0,component:"home",children:[{id:29,path:"edit",name:"编辑",enName:"Level two 2",icon:"el-icon-menu",parentId:25,component:"theme/edit"}]},{id:30,path:"https://dd-admin.ocreatech.com",name:"链接",enName:"Link",icon:"fa fa-link",type:"external",parentId:0,children:[{id:31,path:"https://dd-admin.ocreatech.com",name:"外部链接",enName:"External Link",icon:"fa fa-external-link-square",parentId:30,type:"external"}]}]}},tvR6:function(e,t){}},["NHnr"]);