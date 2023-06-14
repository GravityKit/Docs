"use strict";(self.webpackChunkgravitykit_docs=self.webpackChunkgravitykit_docs||[]).push([[26252],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=i,y=p["".concat(o,".").concat(g)]||p[g]||d[g]||r;return n?a.createElement(y,c(c({ref:t},u),{},{components:n})):a.createElement(y,c({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,c=new Array(r);c[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:i,c[1]=s;for(var l=2;l<r;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},99458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={id:"6350f6f04d805871ceaa4fc8",number:"876",collectionId:"5fe214556451e825e3b8d359",popularity:"0.2",publicUrl:"https://docs.gravitykit.com/article/876-managing-your-licenses",viewCount:"97",lastPublishedAt:"2022-10-24T18:44:51Z",changeOrigin:"unknown",name:"Managing Your Licenses",slug:"876-managing-your-licenses",status:"published",categories:["5fe214db6451e825e3b8d360"],createdBy:"543004",createdAt:"2022-10-20T07:21:20Z",updatedBy:"80506",updatedAt:"2022-10-24T18:44:51Z",title:"Managing Your Licenses",hsEditUrl:"https://secure.helpscout.net/docs/5fe214556451e825e3b8d359/article/6350f6f04d805871ceaa4fc8",pagination_prev:null,pagination_next:null,last_update:{date:new Date("2022-10-24T18:44:51.000Z"),author:"Rafael Ehlers"}},c="Managing Your Licenses",s={unversionedId:"general-help/licensing/6350f6f04d805871ceaa4fc8",id:"general-help/licensing/6350f6f04d805871ceaa4fc8",title:"Managing Your Licenses",description:"In this article, we'll show you how to manage your GravityKit product licenses using our new licensing and settings framework. The new framework provides a central licensing screen where you can activate or deactivate license keys related to any GravityKit product.",source:"@site/docs/general-help/licensing/876-managing-your-licenses.mdx",sourceDirName:"general-help/licensing",slug:"/general-help/licensing/876-managing-your-licenses",permalink:"/general-help/licensing/876-managing-your-licenses",draft:!1,editUrl:"https://github.com/GravityKit/Docs/tree/main/docs/general-help/licensing/876-managing-your-licenses.mdx",tags:[],version:"current",sidebarPosition:876,frontMatter:{id:"6350f6f04d805871ceaa4fc8",number:"876",collectionId:"5fe214556451e825e3b8d359",popularity:"0.2",publicUrl:"https://docs.gravitykit.com/article/876-managing-your-licenses",viewCount:"97",lastPublishedAt:"2022-10-24T18:44:51Z",changeOrigin:"unknown",name:"Managing Your Licenses",slug:"876-managing-your-licenses",status:"published",categories:["5fe214db6451e825e3b8d360"],createdBy:"543004",createdAt:"2022-10-20T07:21:20Z",updatedBy:"80506",updatedAt:"2022-10-24T18:44:51Z",title:"Managing Your Licenses",hsEditUrl:"https://secure.helpscout.net/docs/5fe214556451e825e3b8d359/article/6350f6f04d805871ceaa4fc8",pagination_prev:null,pagination_next:null,last_update:{date:"2022-10-24T18:44:51.000Z",author:"Rafael Ehlers"}},sidebar:"general-help"},o={},l=[{value:"Adding a License Key for an Unlicensed Product",id:"adding-a-license-key-for-an-unlicensed-product",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"managing-your-licenses"},"Managing Your Licenses"),(0,i.kt)("p",null,"In this article, we'll show you how to manage your GravityKit product licenses using our new licensing and settings framework. The new framework provides a central licensing screen where you can activate or deactivate license keys related to any GravityKit product."),(0,i.kt)("p",null,"In your WordPress Admin menu, hover over ",(0,i.kt)("em",{parentName:"p"},"GravityKit")," and click on ",(0,i.kt)("em",{parentName:"p"},"Products ","&"," Licenses"),".",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/helpscout.net/docs/assets/54c58489e4b051242988532c/images/6350f9f3927a2c1634dfc157/file-KsiFChzygZ.png",alt:"the Products & Licenses option underneath the new GravityKit menu item"})),(0,i.kt)("p",null,"If you haven't activated a license yet, get the license key from your ",(0,i.kt)("a",{parentName:"p",href:"https://www.gravitykit.com/account"},"Account page")," and paste it in the box. You can activate any GravityKit product license here."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/helpscout.net/docs/assets/54c58489e4b051242988532c/images/63510169927a2c1634dfc176/file-bq1g1uMMm1.png",alt:"Activating a license using the new licensing and settings framework"})),(0,i.kt)("p",null,"After activating a license, you'll see an overview of your active licenses, including their expiration dates and a link to deactivate them if you so desire."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/helpscout.net/docs/assets/54c58489e4b051242988532c/images/6350f9fc9471985a5ac53e27/file-1zcargpePD.png",alt:"License management for GravityKit products"})),(0,i.kt)("h2",{id:"adding-a-license-key-for-an-unlicensed-product"},"Adding a License Key for an Unlicensed Product"),(0,i.kt)("p",null,'If you have an unlicensed GravityKit product installed on your website, you can add the license for it by clicking on the link that says "I have a license key".'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/helpscout.net/docs/assets/54c58489e4b051242988532c/images/635129bc9471985a5ac53eda/file-hvybiMAeRU.png",alt:"A link on the plugin card that says 'I have a license key'"}),"Clicking this link will open a box where you can paste your license key. After that, click Activate to activate the license key for that product. If you don't have a valid license key, click Buy Now to get one. We cannot provide updates or support for unlicensed products."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/helpscout.net/docs/assets/54c58489e4b051242988532c/images/635129fb9471985a5ac53edb/file-XbOu7ERDZ7.png",alt:"A input box where you can paste a valid license key and a button to activate it"})))}d.isMDXComponent=!0}}]);