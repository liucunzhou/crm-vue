(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DressPackage"],{1471:function(t,e,a){},"437c":function(t,e,a){"use strict";var n=a("1471"),l=a.n(n);l.a},6317:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-main",[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("礼服管理")]),a("el-breadcrumb-item",[t._v("礼服套餐")])],1),a("el-table",{staticClass:"table100",attrs:{data:t.tableData}},[t._v("> "),t._l(t.tableFields,(function(e){return["operation"!=e.id?[a("el-table-column",{key:e.id,attrs:{prop:e.id,label:e.label,width:e.width}})]:[a("el-table-column",{key:e.id,attrs:{label:e.lable,width:"row.width"},scopedSlots:t._u([{key:"default",fn:function(n){return[t._l(e.buttons,(function(e){return[a("el-button",{key:e.label,attrs:{type:e.type,size:e.size},on:{click:function(a){return t.actions(n.row,e.action)}}},[t._v(t._s(e.label))])]}))]}}],null,!0)})]]}))],2)],1)},l=[],i={name:"Main",data:function(){return{tableFields:[],tableData:[]}},created:function(){this.getDataList()},methods:{jumpTo:function(t){alert(t),this.$router.push(t)},getDataList:function(){var t=this,e=this.host+"/api/dress.package/index";this.axios.post(e,{}).then((function(e){var a=e.data;t.tableFields=a.data.fields,t.tableData=a.data.list}))},actions:function(t,e){console.log(t,e),alert("aa")}}},s=i,r=(a("437c"),a("2877")),o=Object(r["a"])(s,n,l,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=DressPackage.4e09c39d.js.map