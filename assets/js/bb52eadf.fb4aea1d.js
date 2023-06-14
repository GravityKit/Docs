"use strict";(self.webpackChunkgravitykit_docs=self.webpackChunkgravitykit_docs||[]).push([[93150],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>f});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=o.createContext({}),p=function(t){var e=o.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},l=function(t){var e=p(t.components);return o.createElement(c.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(f,i(i({ref:e},l),{},{components:r})):o.createElement(f,i({ref:e},l))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[d]="string"==typeof t?t:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53026:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={id:"637578e2b00eaf68a3f3df81",number:"890",collectionId:"6076f9478996210f18bd33df",publicUrl:"https://docs.gravitykit.com/article/890-how-to-restrict-access-to-import-entries",viewCount:"10",lastPublishedAt:"2022-11-17T00:04:03Z",changeOrigin:"unknown",name:"How to restrict access to Import Entries",slug:"890-how-to-restrict-access-to-import-entries",status:"published",categories:["6155b0dee5648623c88e04fa"],createdBy:"80506",createdAt:"2022-11-16T23:57:22Z",updatedBy:"80506",updatedAt:"2022-11-17T00:04:03Z",title:"How to restrict access to Import Entries",hsEditUrl:"https://secure.helpscout.net/docs/6076f9478996210f18bd33df/article/637578e2b00eaf68a3f3df81",pagination_prev:null,pagination_next:null,last_update:{date:new Date("2022-11-17T00:04:03.000Z"),author:"Rafael Ehlers"}},i="How to restrict access to Import Entries",s={unversionedId:"gravity-forms-add-ons/gravityimport/637578e2b00eaf68a3f3df81",id:"gravity-forms-add-ons/gravityimport/637578e2b00eaf68a3f3df81",title:"How to restrict access to Import Entries",description:"Screenshot of the Import/Export page of Gravity Forms",source:"@site/docs/gravity-forms-add-ons/gravityimport/890-how-to-restrict-access-to-import-entries.mdx",sourceDirName:"gravity-forms-add-ons/gravityimport",slug:"/gravity-forms-add-ons/gravityimport/890-how-to-restrict-access-to-import-entries",permalink:"/gravity-forms-add-ons/gravityimport/890-how-to-restrict-access-to-import-entries",draft:!1,editUrl:"https://github.com/GravityKit/Docs/tree/main/docs/gravity-forms-add-ons/gravityimport/890-how-to-restrict-access-to-import-entries.mdx",tags:[],version:"current",sidebarPosition:890,frontMatter:{id:"637578e2b00eaf68a3f3df81",number:"890",collectionId:"6076f9478996210f18bd33df",publicUrl:"https://docs.gravitykit.com/article/890-how-to-restrict-access-to-import-entries",viewCount:"10",lastPublishedAt:"2022-11-17T00:04:03Z",changeOrigin:"unknown",name:"How to restrict access to Import Entries",slug:"890-how-to-restrict-access-to-import-entries",status:"published",categories:["6155b0dee5648623c88e04fa"],createdBy:"80506",createdAt:"2022-11-16T23:57:22Z",updatedBy:"80506",updatedAt:"2022-11-17T00:04:03Z",title:"How to restrict access to Import Entries",hsEditUrl:"https://secure.helpscout.net/docs/6076f9478996210f18bd33df/article/637578e2b00eaf68a3f3df81",pagination_prev:null,pagination_next:null,last_update:{date:"2022-11-17T00:04:03.000Z",author:"Rafael Ehlers"}},sidebar:"gravityimport"},c={},p=[],l={toc:p},d="wrapper";function u(t){let{components:e,...r}=t;return(0,n.kt)(d,(0,o.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-restrict-access-to-import-entries"},"How to restrict access to Import Entries"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/helpscout.net/docs/assets/54c58489e4b051242988532c/images/63757a51fd962f4d057bb251/file-aVN46EmSnP.png",alt:"Screenshot of the Import/Export page of Gravity Forms"})),(0,n.kt)("p",null,"It's easy to give access to a custom user role to import entries ",(0,n.kt)("a",{parentName:"p",href:"https://docs.gravitykit.com/article/825-capabilities-necessary-to-import-entries"},"by adding some capabilities")," to that role. But if you want to restrict access to the Import Entries tab in the Import/Export page of Gravity Forms, then you'll need to use the code snippet below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"/**\n* Remove the ability of a user to import entries based on their role.\n*\n* @param array $caps Array of capabilities required to display the UI.\n*\n* @return array\n*/\nadd_filter( 'gravityview/import/capabilities', function ( $caps ) {\n\n   // REPLACE THIS with the role you want to exclude from importing entries.\n   $role = 'editor';\n\n   $user = wp_get_current_user();\n\n   if ( ! $user || ! $user->exists() ) {\n       return [];\n   }\n\n   if ( in_array( $role, $user->roles, true ) ) {\n       return [];\n   }\n\n   return $caps;\n} );\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"See how to add this code snippet to your website: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.gravitykit.com/article/210-where-to-put-code-samples"},"Where to put code samples"),".")))}u.isMDXComponent=!0}}]);