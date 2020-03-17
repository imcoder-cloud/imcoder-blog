webpackJsonp([17],{"8D+K":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Go1s"),n=a("vInK"),l={data:function(){return{optionsArr:["total","sizes","prev","pager","next","jumper"],tableData:[],editParams:{},modelRules:r.a.modelRules,queryParams:{pageNum:1,pageSize:10},total:0}},created:function(){this.getModels()},computed:{editTypeChange:function(){return this.editType}},watch:{},methods:{getModels:function(){var e=this;""==this.queryParams.name&&(this.queryParams.name=null),n.a.page(this.queryParams).then(function(t){e.tableData=t.data.records,e.total=t.data.total})},formatType:function(e,t,a,r){return"list"==a?"列表页":"单页"},handleSizeChange:function(e){this.queryParams.pageSize=e,this.getModels()},handleCurrentChange:function(e){this.queryParams.pageNum=e,this.getModels()},save:function(e){var t=this;this.$refs.modelForm.validate(function(e){if(!e)return!1;t.editParams.id?n.a.update(t.editParams).then(function(e){t.$message.success("保存成功")}):n.a.create(t.editParams).then(function(e){t.editParams={},t.$message.success("保存成功"),t.getModels()})})},edit:function(e){this.editParams=e},del:function(e){var t=this;n.a.delete(e.id).then(function(e){t.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$message.success("已删除"),t.getModels()}).catch(function(){})})},reset:function(e){this.$refs.modelForm.resetFields()}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{staticClass:"mb20",attrs:{xl:6,lg:6,md:10,sm:24,xs:24}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("模型编辑")])]),e._v(" "),a("div",[a("el-form",{ref:"modelForm",staticClass:"vertical-form",attrs:{model:e.editParams,"label-position":"top",rules:e.modelRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"模型名称"}},[a("el-input",{attrs:{prop:"name",placeholder:"模型名称"},model:{value:e.editParams.name,callback:function(t){e.$set(e.editParams,"name",t)},expression:"editParams.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{attrs:{prop:"type",filterable:"",placeholder:"请选择"},model:{value:e.editParams.type,callback:function(t){e.$set(e.editParams,"type",t)},expression:"editParams.type"}},[a("el-option",{attrs:{label:"单页",value:"page"}}),e._v(" "),a("el-option",{attrs:{label:"列表",value:"list"}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.save()}}},[e._v("保存")]),e._v(" "),a("el-button",{attrs:{size:"medium"},on:{click:function(t){return e.reset()}}},[e._v("重置")])],1)],1)],1)])],1),e._v(" "),a("el-col",{staticClass:"mb20",attrs:{xl:18,lg:18,md:14,sm:24,xs:24}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("模型列表")])]),e._v(" "),a("div",[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"模型名称"}},[a("el-input",{attrs:{placeholder:"模型名称"},model:{value:e.queryParams.name,callback:function(t){e.$set(e.queryParams,"name",t)},expression:"queryParams.name"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getModels()}}},[e._v("查询")])],1)],1)],1),e._v(" "),a("div",{staticStyle:{padding:"20px"}},[a("el-table",{staticStyle:{"margin-bottom":"20px"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"模型名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型",formatter:e.formatType}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.edit(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.del(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{background:!1,"current-page":e.queryParams.pageNum,"page-sizes":[10,20,30,40,50],"page-size":e.queryParams.pageSize,layout:e.optionsArr.join(","),total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(l,s,!1,function(e){a("Vo/U")},null,null);t.default=o.exports},"Vo/U":function(e,t){},vInK:function(e,t,a){"use strict";var r=a("vLgD"),n="/api/admin/model",l={findAll:function(e){return Object(r.a)({url:""+n,params:e,method:"get"})},page:function(e){return Object(r.a)({url:n+"/page",params:e,method:"get"})},get:function(e){return Object(r.a)({url:n+"/"+e,method:"get"})},update:function(e){return Object(r.a)({url:""+n,data:[e],method:"put"})},create:function(e){return Object(r.a)({url:n,data:[e],method:"post"})},delete:function(e){return Object(r.a)({url:n+"/"+e,method:"delete"})}};t.a=l}});