(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MemberList"],{"739c":function(t,e,a){},c063:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-main",[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("客资管理")]),a("el-breadcrumb-item",[t._v("我的客资")])],1),a("el-table",{staticClass:"table100",attrs:{data:t.tableData}},[t._v("> "),t._l(t.tableFields,(function(e){return["operation"!=e.id?[a("el-table-column",{key:e.id,attrs:{prop:e.id,label:e.label,width:e.width}})]:[a("el-table-column",{key:e.id,attrs:{label:e.lable,width:"row.width"},scopedSlots:t._u([{key:"default",fn:function(n){return[t._l(e.buttons,(function(e){return[a("el-button",{key:e.label,attrs:{type:e.type,size:e.size},on:{click:function(a){return t.actions(n.row,e.action)}}},[t._v(t._s(e.label))])]}))]}}],null,!0)})]]}))],2)],1)},l=[],r=a("bc3a"),i=a.n(r),s=a("4328"),o=a.n(s);i.a.defaults.headers["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",i.a.defaults.transformRequest=[function(t){return o.a.stringify(t)}];var u={name:"Main",data:function(){return{tableFields:[],tableData:[]}},created:function(t){console.log("加载了",t),this.getDataList()},methods:{jumpTo:function(t){alert(t),this.$router.push(t)},getDataList:function(){var t=this,e="http://dress.net/api/customer.customer/index";i.a.post(e,{}).then((function(e){var a=e.data;t.tableFields=a.data.fields,t.tableData=a.data.list}))},actions:function(t,e){console.log(t,e),alert("aa")}}},c=u,d=(a("de5d"),a("2877")),b=Object(d["a"])(c,n,l,!1,null,null,null);e["default"]=b.exports},de5d:function(t,e,a){"use strict";var n=a("739c"),l=a.n(n);l.a}}]);
//# sourceMappingURL=MemberList.8062eb6c.js.map