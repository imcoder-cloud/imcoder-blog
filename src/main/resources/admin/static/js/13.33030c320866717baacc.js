webpackJsonp([13],{"3b1b":function(e,t,a){"use strict";var l=a("vLgD"),i="/api/admin/extField",r={findAll:function(e){return Object(l.a)({url:""+i,params:e,method:"get"})},page:function(e){return Object(l.a)({url:i+"/page-plus",params:e,method:"get"})},get:function(e){return Object(l.a)({url:i+"/"+e,method:"get"})},getExtFields:function(e){return Object(l.a)({url:i+"/getByCategoryIds",params:e,method:"get"})},create:function(e){return Object(l.a)({url:""+i,data:[e],method:"post"})},update:function(e){return Object(l.a)({url:""+i,data:[e],method:"put"})},delete:function(e){return Object(l.a)({url:i+"/"+e,method:"delete"})}};t.a=r},QWnY:function(e,t){},afpO:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("p/Fm"),i=a("spLH"),r=a("3b1b"),s={components:{CategoryTree:l.default,Pagination:i.a},data:function(){return{tableLoading:!1,fields:[],queryParams:{pageNum:1,pageSize:10},total:0,showAddForm:!1,editParams:{size:255,type:"input"}}},created:function(){this.getExtField()},methods:{getExtField:function(){var e=this;""==this.queryParams.name&&(this.queryParams.name=null),this.tableLoading=!0,r.a.page(this.queryParams).then(function(t){e.tableLoading=!1,e.fields=t.data.records,e.total=t.data.total})},handleNodeClick:function(e){this.queryParams.categoryId=e.id,this.editParams.categoryId=e.id,this.getExtField()},handleSizeChange:function(e){this.queryParams.pageSize=e,this.getExtField()},handleCurrentChange:function(e){this.queryParams.pageNum=e,this.getExtField()},showForm:function(e){if(e&&(this.editParams=e),!this.editParams.categoryId)return this.$message.warning("请选择栏目分类"),!1;this.showAddForm=!0},saveField:function(){var e=this;return this.editParams.name?this.editParams.field?this.editParams.size?"select"!=this.editParams.type&&"radio"!=this.editParams.type&&"checkbox"!=this.editParams.type||this.editParams.value?void(this.editParams.id?r.a.update(this.editParams).then(function(t){e.$message.success("保存成功"),e.showAddForm=!1,e.getExtField()}):r.a.create(this.editParams).then(function(t){e.$message.success("保存成功"),e.reset(),e.showAddForm=!1,e.getExtField()})):(this.$message.warning("请填写字段值"),!1):(this.$message.warning("请填写长度"),!1):(this.$message.warning("请填写字段"),!1):(this.$message.warning("请填写名称"),!1)},del:function(e){var t=this;r.a.delete(e.id).then(function(e){t.$message.success("删除成功"),t.getExtField()})},reset:function(){this.editParams.id=null,this.editParams.size=255,this.editParams.type="input",this.editParams.name="",this.editParams.field=""}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{staticClass:"mb20",attrs:{xl:5,lg:6,md:10,sm:24,xs:24}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("选择栏目")])]),e._v(" "),a("category-tree",{on:{"node-click":e.handleNodeClick}})],1)],1),e._v(" "),a("el-col",{staticClass:"mb20",attrs:{xl:19,lg:18,md:14,sm:24,xs:24}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("字段列表")])]),e._v(" "),a("div",[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"字段名称"}},[a("el-input",{attrs:{placeholder:"字段名称"},model:{value:e.queryParams.title,callback:function(t){e.$set(e.queryParams,"title",t)},expression:"queryParams.title"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getExtField()}}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.showForm(null)}}},[e._v("新增")])],1)],1)],1),e._v(" "),a("div",{staticStyle:{padding:"20px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{"margin-bottom":"20px"},attrs:{data:e.fields,"element-loading-background":"rgba(0, 0, 0, 0.3)","element-loading-text":"数据正在加载中","element-loading-spinner":"el-icon-loading"}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"categoryName",label:"栏目"}}),e._v(" "),a("el-table-column",{attrs:{prop:"description",label:"描述","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"size",label:"长度"}}),e._v(" "),a("el-table-column",{attrs:{prop:"value",label:"字段值","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.showForm(t.row)}}},[e._v("修改")]),e._v(" "),a("el-popconfirm",{staticStyle:{"margin-left":"10px"},attrs:{title:"确定删除本条数据吗？删除后不可恢复。",cancelButtonType:"default"},on:{onConfirm:function(a){return e.del(t.row)}}},[a("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[e._v("删除")])],1)]}}])})],1),e._v(" "),a("pagination",{attrs:{pageNum:e.queryParams.pageNum,pageSize:e.queryParams.pageSize,total:e.total},on:{sizeChange:e.handleSizeChange,currentChange:e.handleCurrentChange}})],1)])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"新增字段",width:"500px",visible:e.showAddForm},on:{"update:visible":function(t){e.showAddForm=t}}},[a("el-form",{attrs:{model:e.editParams,"label-position":"right","label-width":"60px"}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{attrs:{disabled:null!=e.editParams.id,autocomplete:"off",placeholder:"名称：建议2-4字以内"},model:{value:e.editParams.name,callback:function(t){e.$set(e.editParams,"name",t)},expression:"editParams.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"字段"}},[a("el-input",{attrs:{disabled:null!=e.editParams.id,autocomplete:"off",placeholder:"以字母开头，下划线分隔，例：price"},model:{value:e.editParams.field,callback:function(t){e.$set(e.editParams,"field",t)},expression:"editParams.field"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{attrs:{disabled:null!=e.editParams.id,placeholder:"请选类型"},model:{value:e.editParams.type,callback:function(t){e.$set(e.editParams,"type",t)},expression:"editParams.type"}},[a("el-option",{attrs:{label:"单行文本",value:"input"}}),e._v(" "),a("el-option",{attrs:{label:"多行文本",value:"textarea"}}),e._v(" "),a("el-option",{attrs:{label:"下拉列表",value:"select"}}),e._v(" "),a("el-option",{attrs:{label:"日期选择",value:"date"}}),e._v(" "),a("el-option",{attrs:{label:"单选按钮",value:"radio"}}),e._v(" "),a("el-option",{attrs:{label:"多选按钮",value:"checkbox"}}),e._v(" "),a("el-option",{attrs:{label:"图片上传",value:"image"}}),e._v(" "),a("el-option",{attrs:{label:"附件上传",value:"file"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"长度"}},[a("el-input",{attrs:{autocomplete:"off",disabled:null!=e.editParams.id,placeholder:"字段长度"},model:{value:e.editParams.size,callback:function(t){e.$set(e.editParams,"size",t)},expression:"editParams.size"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"字段值"}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"只在单选、多选、下拉选择时有效"},model:{value:e.editParams.value,callback:function(t){e.$set(e.editParams,"value",t)},expression:"editParams.value"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"字段描述"},model:{value:e.editParams.description,callback:function(t){e.$set(e.editParams,"description",t)},expression:"editParams.description"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.showAddForm=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.saveField}},[e._v("确定")])],1)],1)],1)},staticRenderFns:[]};var n=a("VU/8")(s,o,!1,function(e){a("QWnY")},null,null);t.default=n.exports}});