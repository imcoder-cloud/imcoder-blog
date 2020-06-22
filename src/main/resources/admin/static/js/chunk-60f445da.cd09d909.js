(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60f445da"],{"651a":function(e,t,a){"use strict";a("fe59"),a("053b"),a("08ba");var r=a("b775"),s="/api/admin/category",i={};function n(e,t){t.forEach((function(t){e.key===t.parentId&&(e.children||(e.children=[]),e.children.push({key:t.id,title:t.name,isLeaf:!1}))})),e.children?e.children.forEach((function(e){return n(e,t)})):e.isLeaf=!0}i.findAll=function(e){return Object(r["a"])({url:"".concat(s),params:e,method:"get"})},i.page=function(e){return Object(r["a"])({url:"".concat(s,"/page"),params:e,method:"get"})},i.get=function(e){return Object(r["a"])({url:"".concat(s,"/").concat(e),method:"get"})},i.tree=function(e){return Object(r["a"])({url:"".concat(s,"/tree"),method:"get",params:e})},i.create=function(e){return Object(r["a"])({url:"".concat(s,"/save"),data:e,method:"post"})},i.update=function(e){return Object(r["a"])({url:"".concat(s,"/update"),data:e,method:"put"})},i.delete=function(e){return Object(r["a"])({url:"".concat(s,"/").concat(e),method:"delete"})},i.concreteTree=function(e){var t={key:0,title:"top",children:[]};return n(t,e),t.children},t["a"]=i},ef3a:function(e,t,a){"use strict";t["a"]={loginRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},modelRules:{name:[{required:!0,message:"请输入模型名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}]}}},f4e4:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("分类栏目")])]),a("div",[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{attrs:{placeholder:"名称"},model:{value:e.queryParams.name,callback:function(t){e.$set(e.queryParams,"name",t)},expression:"queryParams.name"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getList()}}},[e._v("查询")])],1),a("el-form-item",[e.addPermission?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.reset(),e.showAddForm=!0}}},[e._v("新增")]):e._e()],1)],1)],1),a("div",{staticStyle:{padding:"20px"}},[a("el-table",{staticStyle:{"margin-bottom":"20px"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"name",label:"名称"}}),a("el-table-column",{attrs:{prop:"path",label:"路径"}}),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),a("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.editPermission?a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.edit(t.row)}}},[e._v("编辑")]):e._e(),e.delPermission?a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.del(t.row)}}},[e._v("删除")]):e._e()]}}])})],1),a("el-pagination",{attrs:{background:!1,"current-page":e.queryParams.pageNum,"page-sizes":[10,20,30,40,50],"page-size":e.queryParams.pageSize,layout:e.optionsArr.join(","),total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)]),a("el-dialog",{attrs:{title:"编辑标签",width:"500px",visible:e.showAddForm},on:{"update:visible":function(t){e.showAddForm=t}}},[a("el-form",{ref:"tagForm",staticClass:"vertical-form",attrs:{model:e.editParams,"label-position":"right",rules:e.tagRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{attrs:{prop:"name",placeholder:"名称"},model:{value:e.editParams.name,callback:function(t){e.$set(e.editParams,"name",t)},expression:"editParams.name"}})],1),a("el-form-item",{attrs:{label:"访问路径"}},[a("el-input",{attrs:{placeholder:"访问路径"},model:{value:e.editParams.path,callback:function(t){e.$set(e.editParams,"path",t)},expression:"editParams.path"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.showAddForm=!1,e.reset()}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确定")])],1)],1)],1)},s=[],i=(a("ecb4"),a("053b"),a("ef3a")),n=a("651a"),o=a("4360"),l={data:function(){return{addPermission:!1,editPermission:!1,delPermission:!1,showAddForm:!1,optionsArr:["total","sizes","prev","pager","next","jumper"],tableData:[],editParams:{type:2},tagRules:i["a"].tagRules,queryParams:{pageNum:1,pageSize:10,type:2},total:0}},created:function(){this.addPermission=o["a"].state.user.permissions.indexOf(300104001)>-1,this.editPermission=o["a"].state.user.permissions.indexOf(300104002)>-1,this.delPermission=o["a"].state.user.permissions.indexOf(300104003)>-1,this.getList()},watch:{},methods:{getList:function(){var e=this;""==this.queryParams.name&&(this.queryParams.name=null),n["a"].page(this.queryParams).then((function(t){e.tableData=t.data.records,e.total=t.data.total}))},handleSizeChange:function(e){this.queryParams.pageSize=e,this.getList()},handleCurrentChange:function(e){this.queryParams.pageNum=e,this.getList()},save:function(e){var t=this;if(!this.editParams.name)return this.$message.warning("请填写名称"),!1;this.editParams.path||(this.editParams.path=this.editParams.name);var a=this.editParams.id;a?n["a"].update(this.editParams).then((function(e){t.$message.success("保存成功"),t.reset()})):n["a"].create(this.editParams).then((function(e){t.reset(),t.$message.success("保存成功"),t.getList()}))},edit:function(e){this.editParams=e,this.showAddForm=!0},del:function(e){var t=this;n["a"].delete(e.id).then((function(e){t.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$message.success("已删除"),t.getList()}))}))},reset:function(e){this.showAddForm=!1,this.editParams={type:2}}}},c=l,u=a("4023"),d=Object(u["a"])(c,r,s,!1,null,null,null);t["default"]=d.exports}}]);