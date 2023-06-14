"use strict";(self.webpackChunkgravitykit_docs=self.webpackChunkgravitykit_docs||[]).push([[80650],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),d=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=d(t.components);return r.createElement(l.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=d(a),m=n,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return a?r.createElement(f,o(o({ref:e},c),{},{components:a})):r.createElement(f,o({ref:e},c))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:n,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},29567:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={id:"6038271324d2d21e45eda58f",number:"756",collectionId:"6076f9478996210f18bd33df",popularity:"0.1",publicUrl:"https://docs.gravitykit.com/article/756-gravity-forms-duration-calculations",viewCount:"806",lastPublishedAt:"2023-02-23T21:51:03Z",changeOrigin:"hsapp-js",name:"How to perform Gravity Forms time calculations in GravityView",slug:"756-gravity-forms-duration-calculations",status:"published",categories:["6155b0bf2b380503dfdf63f0"],createdBy:"59634",createdAt:"2021-02-25T22:39:15Z",updatedBy:"59634",updatedAt:"2023-02-23T21:51:03Z",title:"How to perform Gravity Forms time calculations in GravityView",hsEditUrl:"https://secure.helpscout.net/docs/6076f9478996210f18bd33df/article/6038271324d2d21e45eda58f",pagination_prev:null,pagination_next:null,last_update:{date:new Date("2023-02-23T21:51:03.000Z"),author:"Zack Katz"}},o="How to perform Gravity Forms time calculations in GravityView",s={unversionedId:"gravity-forms-add-ons/gravitymath/6038271324d2d21e45eda58f",id:"gravity-forms-add-ons/gravitymath/6038271324d2d21e45eda58f",title:"How to perform Gravity Forms time calculations in GravityView",description:"Video Transcript:",source:"@site/docs/gravity-forms-add-ons/gravitymath/756-gravity-forms-duration-calculations.mdx",sourceDirName:"gravity-forms-add-ons/gravitymath",slug:"/gravity-forms-add-ons/gravitymath/756-gravity-forms-duration-calculations",permalink:"/Docs/gravity-forms-add-ons/gravitymath/756-gravity-forms-duration-calculations",draft:!1,editUrl:"https://github.com/GravityKit/Docs/tree/main/docs/gravity-forms-add-ons/gravitymath/756-gravity-forms-duration-calculations.mdx",tags:[],version:"current",sidebarPosition:756,frontMatter:{id:"6038271324d2d21e45eda58f",number:"756",collectionId:"6076f9478996210f18bd33df",popularity:"0.1",publicUrl:"https://docs.gravitykit.com/article/756-gravity-forms-duration-calculations",viewCount:"806",lastPublishedAt:"2023-02-23T21:51:03Z",changeOrigin:"hsapp-js",name:"How to perform Gravity Forms time calculations in GravityView",slug:"756-gravity-forms-duration-calculations",status:"published",categories:["6155b0bf2b380503dfdf63f0"],createdBy:"59634",createdAt:"2021-02-25T22:39:15Z",updatedBy:"59634",updatedAt:"2023-02-23T21:51:03Z",title:"How to perform Gravity Forms time calculations in GravityView",hsEditUrl:"https://secure.helpscout.net/docs/6076f9478996210f18bd33df/article/6038271324d2d21e45eda58f",pagination_prev:null,pagination_next:null,last_update:{date:"2023-02-23T21:51:03.000Z",author:"Zack Katz"}},sidebar:"gravitymath"},l={},d=[{value:"Video Transcript:",id:"video-transcript",level:2}],c={toc:d},u="wrapper";function p(t){let{components:e,...a}=t;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-perform-gravity-forms-time-calculations-in-gravityview"},"How to perform Gravity Forms time calculations in GravityView"),(0,n.kt)("section",null,(0,n.kt)("iframe",{allowfullscreen:"",frameborder:"0",mozallowfullscreen:"",src:"https://www.loom.com/embed/7854b40e3351444e9bfc0059abad3b3a",webkitallowfullscreen:""})),(0,n.kt)("h2",{id:"video-transcript"},"Video Transcript:"),(0,n.kt)("p",null,"We're going to be adding a duration field to Gravity Forms and then calculating averages and fastest and slowest times using GravityView and ",(0,n.kt)("a",{parentName:"p",href:"https://www.gravitykit.com/extensions/math/"},"GravityMath")," plugin to get started, I'm going to add a single line, text, field, click to expand it, check the input mask button."),(0,n.kt)("p",null,"And this is key for the ",(0,n.kt)("a",{parentName:"p",href:"https://www.gravitykit.com/extensions/math/"},"GravityMath plugin"),": selecting the mask type to be either minutes or hours duration."),(0,n.kt)("p",null,"I'm going to select minutes for this example. I'm going to name the field duration. I'm going to save the form and then display the form entries."),(0,n.kt)("p",null,"I'm going to create a View based on this, and I'll call it \"Duration Times\". I'm feeling creative today, apparently! Now, in order to display the field, I'm going to add it to the View and I'm going to select the field options and going to check the add field calculations to the table footer setting."),(0,n.kt)("p",null,"This is added by GravityMath. So when I check that, you'll see, that I have the option to format the results in the way that I want."),(0,n.kt)("p",null,"And I'm going to leave this default value for now and we'll come back here. I'm going to publish the View and now all we need is some entries."),(0,n.kt)("p",null,"I'm going to click, to preview the form, and let's add a few entries, in 10 minutes. Let's add 15 minutes."),(0,n.kt)("p",null,"Let's add how about 30 seconds? So 10 minutes, 15 minutes, 30 seconds. And let's do 15 minutes and 30 seconds."),(0,n.kt)("p",null,"All right. Let's take a look again at the View. Okay. I'm going to uncheck approved entries only, so I don't need to improve the entries and let's take a look at the website."),(0,n.kt)("p",null,"Let's see what it looks like. So you can see the duration times here that we just entered. And the total of those times is here."),(0,n.kt)("p",null,"As we expected. Now, I'm going to change the field settings to not show the total, but let's instead show the average speed."),(0,n.kt)("p",null,"And instead of just showing the value, let's also say, let's set a label that's different than what the default is, which is just the value."),(0,n.kt)("p",null,"Let's set a label that says \"Average speed: {result}\". And instead of showing the numbers in English, let's show them as values, just pure numbers."),(0,n.kt)("p",null,"Let's see how that goes. I'm going to save the View, go back over, refresh the screen, and we can see \"Average speed:\"."),(0,n.kt)("p",null,"That's the label that we set up? 10 minutes and 15 seconds."))}p.isMDXComponent=!0}}]);