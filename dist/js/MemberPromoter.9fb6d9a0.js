(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MemberPromoter"],{"08eb":function(t,e,a){"use strict";var l=a("4e8b"),n=a.n(l);n.a},"4e8b":function(t,e,a){},cfe0:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-main",[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("客资管理")]),a("el-breadcrumb-item",[t._v("我的客资")])],1),a("el-table",{staticClass:"table100",attrs:{data:t.tableData}},[t._v("> "),t._l(t.tableFields,(function(e){return["operation"!=e.id?[a("el-table-column",{key:e.id,attrs:{prop:e.id,label:e.label,width:e.width}})]:[a("el-table-column",{key:e.id,attrs:{label:e.lable,width:"row.width"},scopedSlots:t._u([{key:"default",fn:function(l){return[t._l(e.buttons,(function(e){return[a("el-button",{key:e.label,attrs:{type:e.type,size:e.size},on:{click:function(a){return t.actions(l.row,e.action)}}},[t._v(t._s(e.label))])]}))]}}],null,!0)})]]}))],2)],1)},n=[],i={name:"Main",data:function(){return{tableFields:[],tableData:[]}},created:function(){this.getDataList()},methods:{jumpTo:function(t){alert(t),this.$router.push(t)},getDataList:function(){var t=this,e=this.host+"/api/customer.customer/promoter";this.axios.post(e,{}).then((function(e){var a=e.data;t.tableFields=a.data.fields,t.tableData=a.data.list}))},actions:function(t,e){console.log(t,e),alert("aa")}}},r=i,o=(a("08eb"),a("2877")),s=Object(o["a"])(r,l,n,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=MemberPromoter.9fb6d9a0.js.map