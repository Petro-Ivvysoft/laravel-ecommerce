(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{593:function(e,t,o){"use strict";o.r(t);var n=[{title:"Name",dataIndex:"name",key:"name",sorter:!0},{title:"Slug",dataIndex:"slug",key:"slug",sorter:!0},{title:"Meta Title",dataIndex:"meta_title",key:"meta_title",sorter:!0},{title:"Action",key:"action",scopedSlots:{customRender:"action"},sorter:!1,width:"10%"}],i={props:["baseUrl"],data:function(){return{columns:n}},methods:{getEditUrl:function(e){return this.baseUrl+"/product/"+e.id+"/edit"},getDeleteUrl:function(e){return this.baseUrl+"/product/"+e.id},deleteProduct:function(e){var t=this.baseUrl+"/product/"+e.id,o=this;this.$confirm({title:"Do you Want to delete "+e.name+" product?",okType:"danger",onOk:function(){axios.delete(t).then((function(e){!0===e.success&&o.$notification.error({key:"product.delete.success",message:e.data.message}),window.location.reload()})).catch((function(e){o.$notification.error({key:"product.delete.error",message:e.message})}))},onCancel:function(){}})}}},r=o(6),a=Object(r.a)(i,void 0,void 0,!1,null,null,null);t.default=a.exports}}]);