webpackJsonp([5],{"+Cg7":function(t,e){},D4TI:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Dd8w"),o=s.n(a),i=s("Ewld"),n={props:{title:{type:String,default:""}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"no-result"},[e("div",{staticClass:"no-result-icon"}),this._v(" "),e("p",{staticClass:"no-result-text"},[this._v(this._s(this.title))])])},staticRenderFns:[]};var l=s("VU/8")(n,r,!1,function(t){s("+Cg7")},"data-v-de50823c",null).exports,c=s("NYxO"),m={data:function(){var t=function(t,e,s){if(!e)return s(new Error("不能为空"));s()};return{show:{type:Boolean,default:!1},showClose:!1,dialogVisible:!1,appendToBody:!0,results:[],comments:[],items:{},showNoResult:!1,rateForm:{Content:"",star:0},rateRules:{Content:[{validator:t,trigger:"blur"}],star:[{validator:t,trigger:"blur"}],productID:[{validator:t,trigger:"blur"}]}}},created:function(){var t=this;setTimeout(function(){t.show=!0},20)},activated:function(){this.init()},methods:{init:function(){var t=this;if(!this.$route.params.Id)return this.$router.push("/index"),!1;this.getComment(),this.$axios.get("api/APPProduct/GetProductDetail?CanteenToken="+this.userToken,{params:{ProductID:this.$route.params.Id}}).then(function(e){1===e.data.Code?(t.items=e.data.Data,t.results=[t.items]):t.showNoResult=!0,console.log(e)}).catch(function(e){t.showNoResult=!0})},getComment:function(t,e){var s=this;this.$axios.get("api/APPProduct/GetSingleProductList?CanteenToken="+this.userToken,{params:{ProductID:this.$route.params.Id}}).then(function(a){console.log(a),1===a.data.Code&&("stop"===t&&(a.data.Data[e].hasClick=!0),s.comments=a.data.Data)})},like:function(t,e){var s=this;if(t.hasClick)return this.$message({message:"已经点过赞了",customClass:"myConfirm"}),!1;this.$axios.post("api/APPProduct/LikeComment?CanteenToken="+this.userToken+"&CommentID="+t.CommentID).then(function(t){1===t.data.Code&&s.getComment("stop",e)})},openComment:function(){this.dialogVisible=!0},submitFormRate:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return e.$refs.rateForm.resetFields(),console.log("error submit!!"),!1;e.$axios({method:"get",url:"api/APPProduct/CommentProduct?productID="+e.$route.params.Id+"&star="+e.rateForm.star+"&Content="+e.rateForm.Content+"&CanteenToken="+e.userToken}).then(function(t){1===t.data.Code?(e.$message({message:"操作成功",type:"success"}),e.dialogVisible=!1,e.getComment()):(e.$message({message:t.data.Message,type:"error"}),e.dialogVisible=!1),e.$refs.rateForm.resetFields()}).catch(function(t){t.response.data.Message.match("Token")||(e.$refs.rateForm.resetFields(),e.$alert("请求出错！！",{customClass:"myConfirm"}))})})}},computed:o()({},Object(c.c)(["userToken"])),components:{Scroll:i.a,noResult:l},watch:{}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"leftIn"}},[t.show?a("div",{staticClass:"foodDetail"},[t.showNoResult?a("no-result",{attrs:{title:"暂时没有上传图片"}}):t._e(),t._v(" "),a("scroll",{attrs:{data:t.results}},[a("div",{staticClass:"scrollInner"},[a("ul",{staticClass:"innerDetail"},[a("li",[t.items.ImageUrl?a("img",{attrs:{src:"http://212.64.74.12/"+t.items.ImageUrl,alt:"找不到图片"}}):t._e()]),t._v(" "),a("li",{staticClass:"count"},[a("p",{staticClass:"flex"},[a("span",{staticClass:"tip"},[t._v("得分：")]),t._v(" "),a("span",[t._v("\n                "+t._s(t.items.AvgStar)+" "+t._s("5.00"===t.items.AvgStar?"（100%好评）":"")+"\n                ")]),t._v(" "),t.items.IsRecommend?a("i",{staticClass:"iconfont recommend"},[t._v("")]):t._e(),t._v(" "),t.items.IsGood?a("i",{staticClass:"iconfont recommend"},[t._v("")]):t._e()])]),t._v(" "),a("li",[a("p",{staticClass:"flex desc"},[a("span",{staticClass:"tip"},[t._v("描述：")]),t._v(" "),a("span",[t._v(t._s(t.items.Describe))])])])]),t._v(" "),a("div",{staticClass:"flex topComment"},[a("span",[t._v("精选评价")]),t._v(" "),a("span",{on:{click:t.openComment}},[t._v("写评价")])]),t._v(" "),t.comments.length>0?a("ul",{staticClass:"commentDetail"},t._l(t.comments,function(e,o){return a("li",{key:o},[a("div",{staticClass:"flex"},[a("div",{staticClass:"img"},[a("img",{attrs:{src:e.HeadImg?e.HeadImg:s("FWfe"),alt:""}})]),t._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"top"},[a("span",[t._v(t._s(e.UserName))]),t._v(" "),a("span",{staticClass:"zan"},[a("i",{staticClass:"iconfont",on:{click:function(s){t.like(e,o)}}},[t._v("")]),t._v(t._s(e.LikesCount))])]),t._v(" "),a("p",[t._v("\n                    "+t._s(e.CommentMsg)+"\n                  ")])])])])}),0):t._e()])]),t._v(" "),a("el-dialog",{staticStyle:{"text-align":"center"},attrs:{title:"填写评价","append-to-body":t.appendToBody,"show-close":t.showClose,visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{ref:"rateForm",staticClass:"demo-ruleForm",attrs:{"status-icon":"",rules:t.rateRules,model:t.rateForm,"label-width":"0px"}},[a("el-form-item",{attrs:{prop:"Content"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请填写评价",rows:"6"},model:{value:t.rateForm.Content,callback:function(e){t.$set(t.rateForm,"Content",e)},expression:"rateForm.Content"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"star",label:"对菜单评分：","label-width":"100px"}},[a("el-rate",{staticClass:"star",staticStyle:{height:"auto","padding-top":"11px"},model:{value:t.rateForm.star,callback:function(e){t.$set(t.rateForm,"star",e)},expression:"rateForm.star"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer text-center",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){t.submitFormRate("rateForm")}}},[t._v("确 定")])],1)],1)],1):t._e()])},staticRenderFns:[]};var d=s("VU/8")(m,u,!1,function(t){s("U1K8")},"data-v-435b5261",null);e.default=d.exports},U1K8:function(t,e){}});