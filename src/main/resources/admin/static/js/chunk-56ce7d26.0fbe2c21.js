(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56ce7d26"],{"011e":function(e,t,a){"use strict";var i=a("b775"),s="/api/admin/extField",l={findAll:function(e){return Object(i["a"])({url:"".concat(s),params:e,method:"get"})},page:function(e){return Object(i["a"])({url:"".concat(s,"/page-plus"),params:e,method:"get"})},get:function(e){return Object(i["a"])({url:"".concat(s,"/").concat(e),method:"get"})},getExtFields:function(e){return Object(i["a"])({url:"".concat(s,"/getByCategoryIds"),params:e,method:"get"})},create:function(e){return Object(i["a"])({url:"".concat(s),data:e,method:"post"})},update:function(e){return Object(i["a"])({url:"".concat(s),data:e,method:"put"})},delete:function(e){return Object(i["a"])({url:"".concat(s,"/").concat(e),method:"delete"})}};t["a"]=l},"031b":function(e,t,a){"use strict";var i=a("b775"),s="/api/admin/template",l={findAll:function(e){return Object(i["a"])({url:"".concat(s),params:e,method:"get"})},directory:function(e){return Object(i["a"])({url:"".concat(s,"/directory"),params:e,method:"get"})},fileList:function(){return Object(i["a"])({url:"".concat(s,"/file-list"),method:"get"})},getContent:function(e){return Object(i["a"])({url:"".concat(s,"/content"),params:e,method:"get"})},write:function(e){return Object(i["a"])({url:"".concat(s,"/write"),data:e,method:"put"})},copyFile:function(e){return Object(i["a"])({url:"".concat(s,"/file/copy"),data:e,method:"post"})},createDir:function(e){return Object(i["a"])({url:"".concat(s,"/directory/create"),data:e,method:"post"})},createFile:function(e){return Object(i["a"])({url:"".concat(s,"/create"),data:e,method:"post"})},rename:function(e,t){return Object(i["a"])({url:"".concat(s,"/rename"),params:{srcPath:e,targetPath:t},method:"put"})},deleteFile:function(e){return Object(i["a"])({url:"".concat(s,"/file/delete"),data:e,method:"delete"})},update:function(e){return Object(i["a"])({url:"".concat(s),data:e,method:"put"})},setActive:function(e){return Object(i["a"])({url:"".concat(s,"/setActive"),data:e,method:"put"})},delete:function(e){return Object(i["a"])({url:"".concat(s,"/").concat(e),method:"delete"})}};t["a"]=l},"07a2":function(e,t,a){var i=a("8a1c");e.exports=function(e){if(i(e))throw TypeError("The method doesn't accept regular expressions");return e}},"0d7a":function(e,t,a){"use strict";var i=a("b2a2"),s=a("8a1c"),l=a("857c"),r=a("2732"),n=a("ef4c"),o=a("38eb"),c=a("d88d"),d=a("59da"),u=a("5139"),f=a("efe2"),p=[].push,m=Math.min,h=4294967295,g=!f((function(){return!RegExp(h,"y")}));i("split",2,(function(e,t,a){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,a){var i=String(r(this)),l=void 0===a?h:a>>>0;if(0===l)return[];if(void 0===e)return[i];if(!s(e))return t.call(i,e,l);var n,o,c,d=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,g=new RegExp(e.source,f+"g");while(n=u.call(g,i)){if(o=g.lastIndex,o>m&&(d.push(i.slice(m,n.index)),n.length>1&&n.index<i.length&&p.apply(d,n.slice(1)),c=n[0].length,m=o,d.length>=l))break;g.lastIndex===n.index&&g.lastIndex++}return m===i.length?!c&&g.test("")||d.push(""):d.push(i.slice(m)),d.length>l?d.slice(0,l):d}:"0".split(void 0,0).length?function(e,a){return void 0===e&&0===a?[]:t.call(this,e,a)}:t,[function(t,a){var s=r(this),l=void 0==t?void 0:t[e];return void 0!==l?l.call(t,s,a):i.call(String(s),t,a)},function(e,s){var r=a(i,e,this,s,i!==t);if(r.done)return r.value;var u=l(e),f=String(this),p=n(u,RegExp),x=u.unicode,b=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(g?"y":"g"),v=new p(g?u:"^(?:"+u.source+")",b),y=void 0===s?h:s>>>0;if(0===y)return[];if(0===f.length)return null===d(v,f)?[f]:[];var k=0,E=0,P=[];while(E<f.length){v.lastIndex=g?E:0;var w,F=d(v,g?f:f.slice(E));if(null===F||(w=m(c(v.lastIndex+(g?0:E)),f.length))===k)E=o(f,E,x);else{if(P.push(f.slice(k,E)),P.length===y)return P;for(var _=1;_<=F.length-1;_++)if(P.push(F[_]),P.length===y)return P;E=k=w}}return P.push(f.slice(k)),P}]}),!g)},"0fe2":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("栏目分类")]),e.addPermission?a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){e.reset(),e.showAddForm=!0}}},[e._v("新增")]):e._e()],1),a("div",[a("vxe-table",{ref:"categoryTree",attrs:{"tree-config":"","highlight-hover-row":"",border:!1,"edit-config":{trigger:"click",mode:"cell"},data:e.categories,"row-id":"id"}},[a("vxe-table-column",{attrs:{field:"name",title:"名称","tree-node":""}}),a("vxe-table-column",{attrs:{field:"id",title:"Id",width:"80"}}),a("vxe-table-column",{attrs:{field:"type",title:"类型",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(1==t.row.type?"导航":"分类"))]}}])}),a("vxe-table-column",{attrs:{field:"path",title:"访问路径"}}),a("vxe-table-column",{attrs:{field:"listPage",title:"列表页"}}),a("vxe-table-column",{attrs:{field:"detailPage",title:"详情页"}}),e.editPermission?a("vxe-table-column",{attrs:{title:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(a){return e.statusChange(t.row)}},model:{value:t.row.status,callback:function(a){e.$set(t.row,"status",a)},expression:"scope.row.status"}})]}}],null,!1,2182610324)}):e._e(),a("vxe-table-column",{attrs:{field:"sort",title:"顺序",width:"80"}}),a("vxe-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.editPermission?a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.edit(t.row)}}},[e._v("编辑")]):e._e(),e.delPermission?a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.del(t.row)}}},[e._v("删除")]):e._e()]}}])})],1)],1)]),a("el-dialog",{attrs:{width:"500px",title:"栏目编辑",visible:e.showAddForm},on:{"update:visible":function(t){e.showAddForm=t}}},[a("el-form",{ref:"categoryForm",staticClass:"vertical-form",attrs:{model:e.editParams,"label-position":"right","label-width":"70px"}},[a("el-tabs",{attrs:{value:"basic"}},[a("el-tab-pane",{attrs:{label:"基础信息",name:"basic"}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{attrs:{prop:"name",placeholder:"名称"},model:{value:e.editParams.name,callback:function(t){e.$set(e.editParams,"name",t)},expression:"editParams.name"}})],1),a("el-form-item",{attrs:{label:"父栏目"}},[e.treeData.length>0?a("tree-select",{attrs:{props:e.config,data:e.treeData},on:{"node-click":e.nodeClick},model:{value:e.parentCategory,callback:function(t){e.parentCategory=t},expression:"parentCategory"}}):e._e()],1),a("el-form-item",{attrs:{label:"路径"}},[a("el-input",{attrs:{placeholder:"访问路径"},model:{value:e.editParams.path,callback:function(t){e.$set(e.editParams,"path",t)},expression:"editParams.path"}})],1),a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editParams.type,callback:function(t){e.$set(e.editParams,"type",t)},expression:"editParams.type"}},[a("el-option",{attrs:{label:"导航",value:1}}),a("el-option",{attrs:{label:"分类",value:2}})],1)],1),a("el-form-item",{attrs:{label:"列表页"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editParams.listPage,callback:function(t){e.$set(e.editParams,"listPage",t)},expression:"editParams.listPage"}},e._l(e.templates,(function(e){return a("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1)],1),a("el-form-item",{attrs:{label:"详情页"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editParams.detailPage,callback:function(t){e.$set(e.editParams,"detailPage",t)},expression:"editParams.detailPage"}},e._l(e.templates,(function(e){return a("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1)],1),a("el-form-item",{attrs:{label:"顺序"}},[a("el-input",{attrs:{prop:"sort",placeholder:"顺序"},model:{value:e.editParams.sort,callback:function(t){e.$set(e.editParams,"sort",t)},expression:"editParams.sort"}})],1),a("el-form-item",{attrs:{label:"状态"}},[a("el-radio-group",{model:{value:e.editParams.status,callback:function(t){e.$set(e.editParams,"status",t)},expression:"editParams.status"}},[a("el-radio",{attrs:{label:1}},[e._v("显示")]),a("el-radio",{attrs:{label:0}},[e._v("隐藏")])],1)],1),a("el-form-item",{attrs:{label:"子栏目"}},[a("el-radio-group",{model:{value:e.editParams.showChildren,callback:function(t){e.$set(e.editParams,"showChildren",t)},expression:"editParams.showChildren"}},[a("el-radio",{attrs:{label:1}},[e._v("显示")]),a("el-radio",{attrs:{label:0}},[e._v("隐藏")])],1)],1)],1),a("el-tab-pane",{attrs:{label:"扩展字段",name:"extField"}},[a("el-form-item",{attrs:{label:"扩展"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.showExtForm=!0}}},[e._v("添加字段")])],1),e._l(e.extFields,(function(t){return a("el-form-item",{key:t.id,attrs:{label:t.name}},["input"==t.type?a("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:t.name},model:{value:e.categoryExtFields[t.field],callback:function(a){e.$set(e.categoryExtFields,t.field,a)},expression:"categoryExtFields[ext.field]"}}):"textarea"==t.type?a("el-input",{staticStyle:{width:"80%"},attrs:{type:"textarea",placeholder:t.name},model:{value:e.categoryExtFields[t.field],callback:function(a){e.$set(e.categoryExtFields,t.field,a)},expression:"categoryExtFields[ext.field]"}}):"select"==t.type?a("el-select",{staticStyle:{width:"80%"},attrs:{placeholder:t.name},model:{value:e.categoryExtFields[t.field],callback:function(a){e.$set(e.categoryExtFields,t.field,a)},expression:"categoryExtFields[ext.field]"}},e._l(t.value.split("，"),(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1):"date"==t.type?a("el-date-picker",{staticStyle:{width:"80%"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:t.name},model:{value:e.categoryExtFields[t.field],callback:function(a){e.$set(e.categoryExtFields,t.field,a)},expression:"categoryExtFields[ext.field]"}}):"radio"==t.type?a("el-radio-group",{staticStyle:{width:"80%"},model:{value:e.categoryExtFields[t.field],callback:function(a){e.$set(e.categoryExtFields,t.field,a)},expression:"categoryExtFields[ext.field]"}},e._l(t.value.split("，"),(function(t){return a("el-radio",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1):"checkbox"==t.type?a("el-checkbox-group",{staticStyle:{width:"80%"},model:{value:e.categoryExtFields[t.field],callback:function(a){e.$set(e.categoryExtFields,t.field,a)},expression:"categoryExtFields[ext.field]"}},e._l(t.value.split("，"),(function(e){return a("el-checkbox",{key:e,attrs:{label:e}})})),1):"image"==t.type?a("el-upload",{staticStyle:{width:"80%",float:"left"},attrs:{action:"/api/admin/upload/image","on-remove":e.handleExtImgRemove,"on-success":e.onExtImgSuccess,data:{ext_field:t.field},"file-list":e.categoryExtFields[t.field],multiple:"","list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1):"file"==t.type?a("el-upload",{staticStyle:{width:"80%",float:"left"},attrs:{action:"/api/admin/upload/file","on-remove":e.handleExtFileRemove,"on-success":e.onExtFileSuccess,data:{ext_field:t.field},"file-list":e.categoryExtFields[t.field],multiple:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("不超过500kb")])],1):e._e(),a("el-button",{staticStyle:{"font-size":"20px","margin-left":"20px",padding:"0",color:"#F56C6C"},attrs:{type:"text"},on:{click:function(a){return e.delExt(t)}}},[a("i",{staticClass:"el-icon-close"})])],1)}))],2),a("el-tab-pane",{attrs:{label:"高级设置",name:"advance"}},[a("el-form-item",{attrs:{label:"副标题"}},[a("el-input",{attrs:{prop:"alias",placeholder:"副标题"},model:{value:e.editParams.alias,callback:function(t){e.$set(e.editParams,"alias",t)},expression:"editParams.alias"}})],1),a("el-form-item",{attrs:{label:"链接"}},[a("el-input",{attrs:{prop:"outLink",placeholder:"外部链接"},model:{value:e.editParams.outLink,callback:function(t){e.$set(e.editParams,"outLink",t)},expression:"editParams.outLink"}})],1),a("el-form-item",{attrs:{label:"关键字"}},[a("el-input",{attrs:{prop:"keywords",placeholder:"SEO关键字"},model:{value:e.editParams.keywords,callback:function(t){e.$set(e.editParams,"keywords",t)},expression:"editParams.keywords"}})],1),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea",placeholder:"SEO描述"},model:{value:e.editParams.description,callback:function(t){e.$set(e.editParams,"description",t)},expression:"editParams.description"}})],1),a("el-form-item",{attrs:{label:"图标"}},[a("el-upload",{attrs:{action:"/api/admin/upload/image","on-remove":e.handleRemove,"on-success":e.onSuccess,"file-list":e.fileList,limit:1,"list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1),a("el-form-item",{attrs:{label:"大图"}},[a("el-upload",{attrs:{action:"/api/admin/upload/image","on-remove":e.handleImgRemove,"on-success":e.onImgSuccess,"file-list":e.imgList,limit:1,"list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1),a("el-form-item",{attrs:{label:"多图"}},[a("el-upload",{attrs:{action:"/api/admin/upload/image","on-remove":e.handleMultRemove,"on-success":e.onMultSuccess,"file-list":e.multFileList,multiple:"","list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.showAddForm=!1,e.reset()}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确定")])],1)],1),a("el-dialog",{attrs:{title:"新增扩展字段",width:"500px",visible:e.showExtForm},on:{"update:visible":function(t){e.showExtForm=t}}},[a("el-form",{attrs:{model:e.extParams,"label-position":"right","label-width":"80px"}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{attrs:{placeholder:"名称：建议2-4字以内"},model:{value:e.extParams.name,callback:function(t){e.$set(e.extParams,"name",t)},expression:"extParams.name"}})],1),a("el-form-item",{attrs:{label:"字段"}},[a("el-input",{attrs:{placeholder:"以字母开头，下划线分隔，例：price"},model:{value:e.extParams.field,callback:function(t){e.$set(e.extParams,"field",t)},expression:"extParams.field"}})],1),a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{attrs:{placeholder:"请选类型"},model:{value:e.extParams.type,callback:function(t){e.$set(e.extParams,"type",t)},expression:"extParams.type"}},[a("el-option",{attrs:{label:"单行文本",value:"input"}}),a("el-option",{attrs:{label:"多行文本",value:"textarea"}}),a("el-option",{attrs:{label:"下拉列表",value:"select"}}),a("el-option",{attrs:{label:"日期选择",value:"date"}}),a("el-option",{attrs:{label:"单选按钮",value:"radio"}}),a("el-option",{attrs:{label:"多选按钮",value:"checkbox"}}),a("el-option",{attrs:{label:"图片上传",value:"image"}}),a("el-option",{attrs:{label:"附件上传",value:"file"}})],1)],1),a("el-form-item",{attrs:{label:"长度"}},[a("el-input",{attrs:{disabled:null!=e.extParams.id,placeholder:"字段长度"},model:{value:e.extParams.size,callback:function(t){e.$set(e.extParams,"size",t)},expression:"extParams.size"}})],1),a("el-form-item",{attrs:{label:"字段值"}},[a("el-input",{attrs:{type:"textarea",placeholder:"只在单选、多选、下拉选择时有效，以逗号（，）分隔。 例：红，绿"},model:{value:e.extParams.value,callback:function(t){e.$set(e.extParams,"value",t)},expression:"extParams.value"}})],1),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea",placeholder:"字段描述"},model:{value:e.extParams.description,callback:function(t){e.$set(e.extParams,"description",t)},expression:"extParams.description"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.showExtForm=!1}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.confirmField}},[e._v("确定")])],1)],1)],1)},s=[],l=(a("b4fb"),a("fe59"),a("b130"),a("ecb4"),a("9302"),a("2eeb"),a("ea69"),a("053b"),a("e35a"),a("90aa"),a("0d7a"),a("08ba"),a("e769")),r=a("c52d"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"imcoder-tree-select",style:{width:e.width}},[a("el-popover",{ref:"treeContent",attrs:{placement:"bottom",width:e.width,trigger:e.trigger,disabled:e.disabled,transition:"fade-in","popper-class":"imcoder-tree-popper"},model:{value:e.options_show,callback:function(t){e.options_show=t},expression:"options_show"}},[a("el-scrollbar",{staticClass:"imcoder-tree-content"},[a("div",{staticClass:"imcoder-tree-body"},[a("el-tree",{ref:"tree-select",staticClass:"imcoder-options-tree",attrs:{"highlight-current":"",data:e.selfData,props:e.selfProps,"node-key":e.nodeKey,"show-checkbox":e.checkbox,"expand-on-click-node":!1,"default-checked-keys":e.checked_keys,"default-expand-all":e.defaultExpandAll,"default-expanded-keys":e.defaultExpandedKeys},on:{check:e.handleCheckChange,"node-click":e.treeItemClick}})],1)]),a("div",{staticClass:"selected-box",class:[{"imcoder-disabled":e.disabled,"no-wrap":e.nowrap},e.sizeClass],attrs:{slot:"reference"},slot:"reference"},[a("div",{staticClass:"tag-box"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.selecteds.length>0,expression:"selecteds.length > 0"}]},[e.collapseTags?[a("el-tag",{staticClass:"imcoder-select-tag",attrs:{closable:"",size:e.size,title:e.collapseTagsItem[e.selfProps.label]},on:{close:function(t){return e.tabClose(e.collapseTagsItem[e.nodeKey])}}},[e._v(e._s(e.collapseTagsItem[e.selfProps.label]))]),this.selecteds.length>1?a("el-tag",{staticClass:"imcoder-select-tag",attrs:{size:e.size}},[e._v("+"+e._s(this.selecteds.length-1))]):e._e()]:e._l(e.selecteds,(function(t){return a("el-tag",{key:t[e.nodeKey],staticClass:"imcoder-select-tag",attrs:{closable:"",size:e.size,title:t[e.selfProps.label]},on:{close:function(a){return e.tabClose(t[e.nodeKey])}}},[e._v(e._s(t[e.selfProps.label]))])}))],2),a("span",{directives:[{name:"show",rawName:"v-show",value:0==e.selecteds.length,expression:"selecteds.length == 0"}],staticClass:"imcoder-placeholder-box"},[e._v(e._s(e.placeholder))])]),a("div",{staticClass:"icon-box"},[a("transition",{attrs:{name:"fade-rotate",mode:"out-in"}},[e.options_show?a("i",{key:"btm",staticClass:"el-icon-arrow-up"}):a("i",{key:"top",staticClass:"el-icon-arrow-down"})])],1)])],1)],1)},o=[],c=(a("513c"),a("0eaa")),d={name:"imcoderTreeSelect",data:function(){return{selecteds:[],options_show:!1,checked_keys:[],width:"100%"}},props:{data:{type:Array,default:function(){return[]}},props:{type:Object,default:function(){return{}}},nodeKey:{type:String,default:"id"},value:[String,Number,Array,Object],checkbox:{type:Boolean,default:!1},collapseTags:{type:Boolean,default:!1},leaf:{type:Boolean,default:!1},trigger:{type:String,default:"click"},disabled:{type:Boolean,default:!1},nowrap:{type:Boolean,default:!1},noCheckedClose:{type:Boolean,default:!1},placeholder:{type:String,default:"请选择"},size:{type:String,default:"medium"},defaultExpandAll:{type:Boolean,default:!0},defaultExpandedKeys:{type:Array,default:function(){return[]}}},model:{prop:"value",event:"change"},methods:{handleCheckChange:function(e,t){t.checkedNodes;var a=t.checkedKeys,i=this.$refs["tree-select"].getCheckedNodes(this.leaf);this.selecteds=i,this.$emit("change",i),0===a.length&&this.noCheckedClose&&(this.options_show=!1)},treeItemClick:function(e,t){this.checkbox||this.leaf&&!t.isLeaf||(this.selecteds=e,this.options_show=!1,this.$emit("change",this.selecteds))},tabClose:function(e){this.disabled||(this.checkbox?(this.$refs["tree-select"].setChecked(e,!1,!0),this.selecteds=this.$refs["tree-select"].getCheckedNodes(),0===this.selecteds.length&&this.noCheckedClose&&(this.options_show=!1)):(this.selecteds=[],this.$refs["tree-select"].setCurrentKey(null),this.options_show=!1),this.$emit("change",this.selecteds))},clear:function(){this.selecteds=[]},chaeckDefaultValue:function(){var e=this,t=this.value;if(!t&&0!=t||Array.isArray(t)&&0===t.length){if(this.selecteds=[],!this.checkbox)return;return this.checked_keys=[],void this.$nextTick((function(){e.$refs["tree-select"].setCheckedKeys([])}))}if(this.checkbox)return this.checked_keys="object"===Object(l["a"])(t[0])?t.map((function(t){return t[e.nodeKey]})):t,void this.$nextTick((function(){e.selecteds=e.$refs["tree-select"].getCheckedNodes(e.leaf)}));if("object"===Object(l["a"])(t)){var a=Array.isArray(t)?t[0]:t;this.selecteds=[a],this.$nextTick((function(){e.$refs["tree-select"].setCurrentNode(a)}))}else this.$nextTick((function(){e.$refs["tree-select"].setCurrentKey(t);var a=e.$refs["tree-select"].getCurrentNode();e.selecteds=a?[a]:[]}))},closeOptions:function(){this.options_show=!1}},created:function(){this.chaeckDefaultValue()},mounted:function(){var e=document.getElementsByClassName("imcoder-tree-select")[0],t=e.getBoundingClientRect().width;this.width=t},watch:{value:function(e){this.chaeckDefaultValue()}},computed:{selfData:function(){return this.data},selfProps:function(){return Object(c["a"])({label:"name",children:"children",disabled:function(e){return e.disabled}},this.props)},sizeClass:function(){var e="size-medium";switch(this.size){case"medium":e="size-medium";break;case"small":e="size-small";break;case"default":e="size-default";break;case"mini":e="size-mini";break;default:e="size-medium";break}return e},collapseTagsItem:function(){return this.selecteds[0]||{}}}},u=d,f=(a("d0df"),a("4023")),p=Object(f["a"])(u,n,o,!1,null,null,null),m=p.exports,h=a("651a"),g=a("031b"),x=a("011e"),b=a("4360"),v={components:{TreeSelect:m},data:function(){return{addPermission:!1,editPermission:!1,delPermission:!1,showAddForm:!1,categories:[],treeData:[],templates:[],config:{value:"id",label:"name",children:"children"},editParams:{status:1,type:1,sort:1,showChildren:1},parentCategory:{id:0,name:"顶级栏目"},fileList:[],imgList:[],multFileList:[],showExtForm:!1,extParams:{size:255,type:"input",struct:"category"},extFields:[],categoryExtFields:{},extField:""}},created:function(){this.addPermission=b["a"].state.user.permissions.indexOf(200101001)>-1,this.editPermission=b["a"].state.user.permissions.indexOf(200101002)>-1,this.delPermission=b["a"].state.user.permissions.indexOf(200101003)>-1,this.getCategorys(),this.getTemplates(),this.getExtFields()},computed:{editTypeChange:function(){return this.editType}},watch:{},methods:{getCategorys:function(){var e=this;h["a"].tree({type:1}).then((function(t){e.categories=t.data,e.treeData=[{id:0,name:"顶级栏目"}].concat(Object(r["a"])(t.data))}))},getTemplates:function(){var e=this;g["a"].fileList().then((function(t){e.templates=t.data}))},nodeClick:function(e){this.editParams.parentId=e.id},save:function(e){var t=this;if(!this.editParams.name)return this.$message.warning("请填写名称"),!1;if(!this.parentCategory.id&&0!=this.parentCategory.id)return this.$message.warning("请选择父栏目"),!1;if(!this.editParams.listPage)return this.$message.warning("请选择列表页"),!1;if(!this.editParams.detailPage)return this.$message.warning("请选择详情页"),!1;var a=Object.assign({},this.categoryExtFields);for(var i in a){var s=a[i];if("object"==Object(l["a"])(s))if(s.join("||").includes("object")){var r=s.map((function(e){return e.url})).join("||");a[i]=r}else a[i]=s.join("||")}this.editParams.extFieldList=this.extFields,this.editParams.extFields=a,this.editParams.parentId=this.parentCategory.id,this.editParams.icon=this.fileList.map((function(e){return e.url})).join(""),this.editParams.img=this.imgList.map((function(e){return e.url})).join(""),this.editParams.imgs=this.multFileList.map((function(e){return e.url})).join("||");var n=t.editParams.id;n?h["a"].update(t.editParams).then((function(e){t.reset(),t.$message.success("保存成功")})):h["a"].create(t.editParams).then((function(e){t.reset(),t.$message.success("保存成功"),t.getCategorys()}))},edit:function(e){var t=this;if(this.editParams=e,e.icon){var a={};a.name=e.icon.split("@@")[1],a.url=e.icon,this.fileList=[a]}if(e.img){var i={};i.name=e.img.split("@@")[1],i.url=e.img,this.fileList=[i]}e.imgs&&e.imgs.split("||").map((function(e){var a={};a.name=e.split("@@")[1],a.url=e,t.multFileList.push(a)}));var s=this.$refs.categoryTree.getRowById(e.parentId),l="顶级栏目";s&&(l=s.name),this.parentCategory={id:e.parentId,name:l},this.getExtInfo(e.id),this.showAddForm=!0},getExtInfo:function(e){var t=this;this.categoryExtFields={},h["a"].get(e).then((function(e){t.categoryExtFields=e.data.extFields||{},t.categoryExtFields&&t.extFields.forEach((function(e){if("checkbox"==e.type)t.categoryExtFields[e.field]&&t.$set(t.categoryExtFields,e.field,t.categoryExtFields[e.field].split("||"));else if("image"==e.type||"file"==e.type){var a=t.categoryExtFields[e.field],i=[];if(a){var s=a.split("||");s.map((function(t){var a={};a.name=t.split("@@")[1],a.url=t,a.field=e.field,i.push(a)})),t.$set(t.categoryExtFields,e.field,i)}}else{var l=t.categoryExtFields[e.field];t.$set(t.categoryExtFields,e.field,l)}}))}))},getExtFields:function(){var e=this;x["a"].findAll({struct:"category"}).then((function(t){e.extFields=t.data}))},del:function(e){var t=this;e.children&&e.children.length>0?this.$message.warning("该栏目下有子栏目，不允许删除"):h["a"].delete(e.id).then((function(e){t.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$message.success("已删除"),t.getCategorys(),t.reset()})).catch((function(){}))}))},statusChange:function(e){var t=this;h["a"].update({id:e.id,status:e.status}).then((function(e){t.$message.success("修改成功")}))},reset:function(e){this.showAddForm=!1,this.editParams={status:1,type:1,sort:1,showChildren:1},this.multFileList=[],this.fileList=[],this.categoryExtFields={}},onSuccess:function(e,t,a){t.url=e.data.url,this.fileList=a},onImgSuccess:function(e,t,a){t.url=e.data.url,this.imgList=a},onMultSuccess:function(e,t,a){t.url=e.data.url,this.multFileList=a},handleRemove:function(e,t){this.fileList=t},handleImgRemove:function(e,t){this.imgList=t},handleMultRemove:function(e,t){this.multFileList=t},onExtImgSuccess:function(e,t,a){t.url=e.data.url;var i=e.data.extField;this.extField=i,this.extImgList=a,this.categoryExtFields[i]=a},onExtFileSuccess:function(e,t,a){t.url=e.data.url;var i=e.data.extField;this.extFileList=a,this.categoryExtFields[i]=a},handleExtImgRemove:function(e,t){this.extField=e.field,this.extImgList=t,this.categoryExtFields[this.extField]=t},handleExtFileRemove:function(e,t){this.extField=e.field,this.extFileList=t,this.categoryExtFields[this.extField]=t},confirmField:function(){var e=this;this.extFields.push(Object.assign({},this.extParams)),this.extFields.forEach((function(t){"checkbox"==t.type&&e.$set(e.categoryExtFields,t.field,[])})),this.extParams={size:255,type:"input",struct:"category"},this.showExtForm=!1},delExt:function(e){var t=this;if(console.log(e),e.id)this.$confirm("删除此字段将删除与此字段关联的数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){x["a"].delete(e.id).then((function(a){t.$message.success("删除成功");var i=t.extFields.indexOf(e);-1!==i&&t.extFields.splice(i,1)}))}));else{var a=this.extFields.indexOf(e);-1!==a&&this.extFields.splice(a,1)}}}},y=v,k=Object(f["a"])(y,i,s,!1,null,null,null);t["default"]=k.exports},"22ef":function(e,t,a){"use strict";var i=a("efe2");function s(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=i((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=i((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},3015:function(e,t,a){},"38eb":function(e,t,a){"use strict";var i=a("f62c").charAt;e.exports=function(e,t,a){return t+(a?i(e,t).length:1)}},5139:function(e,t,a){"use strict";var i=a("99ad"),s=a("22ef"),l=RegExp.prototype.exec,r=String.prototype.replace,n=l,o=function(){var e=/a/,t=/b*/g;return l.call(e,"a"),l.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=s.UNSUPPORTED_Y||s.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],u=o||d||c;u&&(n=function(e){var t,a,s,n,u=this,f=c&&u.sticky,p=i.call(u),m=u.source,h=0,g=e;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(e).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==e[u.lastIndex-1])&&(m="(?: "+m+")",g=" "+g,h++),a=new RegExp("^(?:"+m+")",p)),d&&(a=new RegExp("^"+m+"$(?!\\s)",p)),o&&(t=u.lastIndex),s=l.call(f?a:u,g),f?s?(s.input=s.input.slice(h),s[0]=s[0].slice(h),s.index=u.lastIndex,u.lastIndex+=s[0].length):u.lastIndex=0:o&&s&&(u.lastIndex=u.global?s.index+s[0].length:t),d&&s&&s.length>1&&r.call(s[0],a,(function(){for(n=1;n<arguments.length-2;n++)void 0===arguments[n]&&(s[n]=void 0)})),s}),e.exports=n},"513c":function(e,t,a){"use strict";var i=a("1e2c"),s=a("d890"),l=a("e8d6"),r=a("1944"),n=a("faa8"),o=a("2118"),c=a("7063"),d=a("9f67"),u=a("efe2"),f=a("6d60"),p=a("b338").f,m=a("aa6b").f,h=a("d910").f,g=a("c10f").trim,x="Number",b=s[x],v=b.prototype,y=o(f(v))==x,k=function(e){var t,a,i,s,l,r,n,o,c=d(e,!1);if("string"==typeof c&&c.length>2)if(c=g(c),t=c.charCodeAt(0),43===t||45===t){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:i=2,s=49;break;case 79:case 111:i=8,s=55;break;default:return+c}for(l=c.slice(2),r=l.length,n=0;n<r;n++)if(o=l.charCodeAt(n),o<48||o>s)return NaN;return parseInt(l,i)}return+c};if(l(x,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var E,P=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof P&&(y?u((function(){v.valueOf.call(a)})):o(a)!=x)?c(new b(k(t)),a,P):k(t)},w=i?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),F=0;w.length>F;F++)n(b,E=w[F])&&!n(P,E)&&h(P,E,m(b,E));P.prototype=v,v.constructor=P,r(s,x,P)}},"59da":function(e,t,a){var i=a("2118"),s=a("5139");e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var l=a.call(e,t);if("object"!==typeof l)throw TypeError("RegExp exec method returned something other than an Object or null");return l}if("RegExp"!==i(e))throw TypeError("RegExp#exec called on incompatible receiver");return s.call(e,t)}},"651a":function(e,t,a){"use strict";a("fe59"),a("053b"),a("08ba");var i=a("b775"),s="/api/admin/category",l={};function r(e,t){t.forEach((function(t){e.key===t.parentId&&(e.children||(e.children=[]),e.children.push({key:t.id,title:t.name,isLeaf:!1}))})),e.children?e.children.forEach((function(e){return r(e,t)})):e.isLeaf=!0}l.findAll=function(e){return Object(i["a"])({url:"".concat(s),params:e,method:"get"})},l.page=function(e){return Object(i["a"])({url:"".concat(s,"/page"),params:e,method:"get"})},l.get=function(e){return Object(i["a"])({url:"".concat(s,"/").concat(e),method:"get"})},l.tree=function(e){return Object(i["a"])({url:"".concat(s,"/tree"),method:"get",params:e})},l.create=function(e){return Object(i["a"])({url:"".concat(s,"/save"),data:e,method:"post"})},l.update=function(e){return Object(i["a"])({url:"".concat(s,"/update"),data:e,method:"put"})},l.delete=function(e){return Object(i["a"])({url:"".concat(s,"/").concat(e),method:"delete"})},l.concreteTree=function(e){var t={key:0,title:"top",children:[]};return r(t,e),t.children},t["a"]=l},"783d":function(e,t,a){var i=a("90fb"),s=i("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[s]=!1,"/./"[e](t)}catch(i){}}return!1}},"8a1c":function(e,t,a){var i=a("a719"),s=a("2118"),l=a("90fb"),r=l("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==s(e))}},"90aa":function(e,t,a){"use strict";var i=a("1c8b"),s=a("07a2"),l=a("2732"),r=a("783d");i({target:"String",proto:!0,forced:!r("includes")},{includes:function(e){return!!~String(l(this)).indexOf(s(e),arguments.length>1?arguments[1]:void 0)}})},9302:function(e,t,a){"use strict";var i=a("1c8b"),s=a("692f"),l=a("da10"),r=a("d7e1"),n=[].join,o=s!=Object,c=r("join",",");i({target:"Array",proto:!0,forced:o||!c},{join:function(e){return n.call(l(this),void 0===e?",":e)}})},b130:function(e,t,a){"use strict";var i=a("1c8b"),s=a("45af").includes,l=a("258f0"),r=a("ff9c"),n=r("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:!n},{includes:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),l("includes")},b2a2:function(e,t,a){"use strict";a("e35a");var i=a("1944"),s=a("efe2"),l=a("90fb"),r=a("5139"),n=a("0fc1"),o=l("species"),c=!s((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),u=l("replace"),f=function(){return!!/./[u]&&""===/./[u]("a","$0")}(),p=!s((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));e.exports=function(e,t,a,u){var m=l(e),h=!s((function(){var t={};return t[m]=function(){return 7},7!=""[e](t)})),g=h&&!s((function(){var t=!1,a=/a/;return"split"===e&&(a={},a.constructor={},a.constructor[o]=function(){return a},a.flags="",a[m]=/./[m]),a.exec=function(){return t=!0,null},a[m](""),!t}));if(!h||!g||"replace"===e&&(!c||!d||f)||"split"===e&&!p){var x=/./[m],b=a(m,""[e],(function(e,t,a,i,s){return t.exec===r?h&&!s?{done:!0,value:x.call(t,a,i)}:{done:!0,value:e.call(a,t,i)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),v=b[0],y=b[1];i(String.prototype,e,v),i(RegExp.prototype,m,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}u&&n(RegExp.prototype[m],"sham",!0)}},c10f:function(e,t,a){var i=a("2732"),s=a("fc8c"),l="["+s+"]",r=RegExp("^"+l+l+"*"),n=RegExp(l+l+"*$"),o=function(e){return function(t){var a=String(i(t));return 1&e&&(a=a.replace(r,"")),2&e&&(a=a.replace(n,"")),a}};e.exports={start:o(1),end:o(2),trim:o(3)}},d0df:function(e,t,a){"use strict";var i=a("3015"),s=a.n(i);s.a},e35a:function(e,t,a){"use strict";var i=a("1c8b"),s=a("5139");i({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},fc8c:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"}}]);