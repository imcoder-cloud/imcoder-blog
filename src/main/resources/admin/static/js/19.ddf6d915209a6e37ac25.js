webpackJsonp([19],{"R/97":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("spLH"),l=a("vLgD"),n="/api/admin/visit",i={count7Day:function(){return Object(l.a)({url:n+"/count7Day",params:{},method:"get"})},terminalCount:function(){return Object(l.a)({url:n+"/terminalCount",params:{},method:"get"})},countVisit:function(){return Object(l.a)({url:n+"/countVisit",params:{},method:"get"})},countTodayCityVisit:function(){return Object(l.a)({url:n+"/countTodayCityVisit",params:{},method:"get"})},countOS:function(){return Object(l.a)({url:n+"/countOS",params:{},method:"get"})},page:function(t){return Object(l.a)({url:n+"/page",params:t,method:"get"})}},o=i,s=a("6D10"),u=a("PJh5"),c=a.n(u),m={components:{Pagination:r.a},data:function(){return{visits:[],tableLoading:!1,queryParams:{pageNum:1,pageSize:10},daterange:[],total:0}},created:function(){var t=c()().locale("zh-cn").format("YYYY-MM-DD");this.daterange=[t,t],this.getVisits()},methods:{getVisits:function(){var t=this;this.queryParams.startDate=this.daterange[0],this.queryParams.endDate=this.daterange[1],this.tableLoading=!0,o.page(this.queryParams).then(function(e){t.tableLoading=!1,t.visits=e.data.records,t.total=e.data.total})},handleSizeChange:function(t){this.queryParams.pageSize=t,this.getVisits()},handleCurrentChange:function(t){this.queryParams.pageNum=t,this.getVisits()},timeAgo:function(t){return s.a.timeAgo(t)}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{staticClass:"mb20"},[a("el-card",[a("div",{staticStyle:{"margin-top":"20px"}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"IP"}},[a("el-input",{attrs:{placeholder:"IP"},model:{value:t.queryParams.ip,callback:function(e){t.$set(t.queryParams,"ip",e)},expression:"queryParams.ip"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"城市"}},[a("el-input",{attrs:{placeholder:"城市"},model:{value:t.queryParams.city,callback:function(e){t.$set(t.queryParams,"city",e)},expression:"queryParams.city"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"时间段"}},[a("el-date-picker",{attrs:{type:"daterange",clearable:!1,"value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.daterange,callback:function(e){t.daterange=e},expression:"daterange"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.getVisits()}}},[t._v("查询")])],1)],1)],1),t._v(" "),a("div",{staticStyle:{padding:"20px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],staticStyle:{"margin-bottom":"20px"},attrs:{data:t.visits,"element-loading-background":"rgba(0, 0, 0, 0.3)","element-loading-text":"数据正在加载中","element-loading-spinner":"el-icon-loading"}},[a("el-table-column",{attrs:{label:"时间","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.timeAgo(e.row.createTime)))]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"ip",label:"IP"}}),t._v(" "),a("el-table-column",{attrs:{prop:"province",label:"省"}}),t._v(" "),a("el-table-column",{attrs:{prop:"city",label:"城市"}}),t._v(" "),a("el-table-column",{attrs:{prop:"isp",label:"ISP"}}),t._v(" "),a("el-table-column",{attrs:{prop:"source",label:"来源"}}),t._v(" "),a("el-table-column",{attrs:{prop:"url",label:"URL","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"browser",label:"浏览器"}}),t._v(" "),a("el-table-column",{attrs:{prop:"os",label:"系统"}}),t._v(" "),a("el-table-column",{attrs:{prop:"terminal",label:"终端"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型"}})],1),t._v(" "),a("pagination",{attrs:{pageNum:t.queryParams.pageNum,pageSize:t.queryParams.pageSize,total:t.total},on:{sizeChange:t.handleSizeChange,currentChange:t.handleCurrentChange}})],1)])],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(m,p,!1,function(t){a("fNKW")},null,null);e.default=d.exports},fNKW:function(t,e){}});