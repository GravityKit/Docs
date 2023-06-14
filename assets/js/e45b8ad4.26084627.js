"use strict";(self.webpackChunkgravitykit_docs=self.webpackChunkgravitykit_docs||[]).push([[44288],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>h});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=o.createContext({}),s=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},d=function(t){var e=s(t.components);return o.createElement(l.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,l=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),p=s(n),f=a,h=p["".concat(l,".").concat(f)]||p[f]||u[f]||r;return n?o.createElement(h,c(c({ref:e},d),{},{components:n})):o.createElement(h,c({ref:e},d))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,c=new Array(r);c[0]=f;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[p]="string"==typeof t?t:a,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77418:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={id:"57ad06a6c6979107832444cf",number:"373",collectionId:"6076f9478996210f18bd33df",popularity:"0.2",publicUrl:"https://docs.gravitykit.com/article/373-insert-calculations-into-post-content",viewCount:"1212",lastPublishedAt:"2022-12-27T20:43:13Z",changeOrigin:"external",name:"Add calculations to blog posts",slug:"373-insert-calculations-into-post-content",status:"published",categories:["6155b0bf2b380503dfdf63f0"],keywords:["shortcode","math"],createdBy:"59634",createdAt:"2016-08-11T23:13:42Z",updatedBy:"59634",updatedAt:"2022-12-27T20:43:13Z",title:"Add calculations to blog posts",hsEditUrl:"https://secure.helpscout.net/docs/6076f9478996210f18bd33df/article/57ad06a6c6979107832444cf",pagination_prev:null,pagination_next:null,last_update:{date:new Date("2022-12-27T20:43:13.000Z"),author:"Zack Katz"}},c="Add calculations to blog posts",i={unversionedId:"gravity-forms-add-ons/gravitymath/57ad06a6c6979107832444cf",id:"gravity-forms-add-ons/gravitymath/57ad06a6c6979107832444cf",title:"Add calculations to blog posts",description:"Insert calculations into the post content",source:"@site/docs/gravity-forms-add-ons/gravitymath/373-insert-calculations-into-post-content.mdx",sourceDirName:"gravity-forms-add-ons/gravitymath",slug:"/gravity-forms-add-ons/gravitymath/373-insert-calculations-into-post-content",permalink:"/Docs/gravity-forms-add-ons/gravitymath/373-insert-calculations-into-post-content",draft:!1,editUrl:"https://github.com/GravityKit/Docs/tree/main/docs/gravity-forms-add-ons/gravitymath/373-insert-calculations-into-post-content.mdx",tags:[],version:"current",sidebarPosition:373,frontMatter:{id:"57ad06a6c6979107832444cf",number:"373",collectionId:"6076f9478996210f18bd33df",popularity:"0.2",publicUrl:"https://docs.gravitykit.com/article/373-insert-calculations-into-post-content",viewCount:"1212",lastPublishedAt:"2022-12-27T20:43:13Z",changeOrigin:"external",name:"Add calculations to blog posts",slug:"373-insert-calculations-into-post-content",status:"published",categories:["6155b0bf2b380503dfdf63f0"],keywords:["shortcode","math"],createdBy:"59634",createdAt:"2016-08-11T23:13:42Z",updatedBy:"59634",updatedAt:"2022-12-27T20:43:13Z",title:"Add calculations to blog posts",hsEditUrl:"https://secure.helpscout.net/docs/6076f9478996210f18bd33df/article/57ad06a6c6979107832444cf",pagination_prev:null,pagination_next:null,last_update:{date:"2022-12-27T20:43:13.000Z",author:"Zack Katz"}},sidebar:"gravitymath"},l={},s=[{value:"Insert calculations into the post content",id:"insert-calculations-into-the-post-content",level:3},{value:"The shortcode gets replaced on the front end with the calculation",id:"the-shortcode-gets-replaced-on-the-front-end-with-the-calculation",level:3}],d={toc:s},p="wrapper";function u(t){let{components:e,...n}=t;return(0,a.kt)(p,(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"add-calculations-to-blog-posts"},"Add calculations to blog posts"),(0,a.kt)("h3",{id:"insert-calculations-into-the-post-content"},"Insert calculations into the post content"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.gravitykit.com/wp-content/uploads/2018/01/insert-calculations-into-post-content.png?1470957180",alt:null})),(0,a.kt)("h3",{id:"the-shortcode-gets-replaced-on-the-front-end-with-the-calculation"},"The shortcode gets replaced on the front end with the calculation"),(0,a.kt)("p",null,"When a new entry gets added to Floaty's Star Form, the average will dynamically update. There's no need to edit the post."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.gravitykit.com/wp-content/uploads/2018/01/the-shortcode-gets-replaced-on-the-front-end-with-the-calculation.png?1470957181",alt:null})))}u.isMDXComponent=!0}}]);