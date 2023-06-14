"use strict";(self.webpackChunkgravitykit_docs=self.webpackChunkgravitykit_docs||[]).push([[19035],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=i,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||n;return a?r.createElement(f,o(o({ref:t},u),{},{components:a})):r.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<n;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},51945:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=a(87462),i=(a(67294),a(3905));const n={id:"601ab3552042ff6d1b2aa36e",number:"749",collectionId:"6076f9478996210f18bd33df",publicUrl:"https://docs.gravitykit.com/article/749-developer-hooks-for-math-by-gravityview",viewCount:"175",lastPublishedAt:"2022-12-14T21:30:22Z",changeOrigin:"hsapp-js",name:"Developer Hooks for GravityMath",slug:"749-developer-hooks-for-math-by-gravityview",status:"published",categories:["6155b0bf2b380503dfdf63f0"],createdBy:"59634",createdAt:"2021-02-03T14:29:41Z",updatedBy:"80506",updatedAt:"2022-12-14T21:30:22Z",title:"Developer Hooks for GravityMath",hsEditUrl:"https://secure.helpscout.net/docs/6076f9478996210f18bd33df/article/601ab3552042ff6d1b2aa36e",pagination_prev:null,pagination_next:null,last_update:{date:new Date("2022-12-14T21:30:22.000Z"),author:"Rafael Ehlers"}},o="Developer Hooks for GravityMath",l={unversionedId:"gravity-forms-add-ons/gravitymath/601ab3552042ff6d1b2aa36e",id:"gravity-forms-add-ons/gravitymath/601ab3552042ff6d1b2aa36e",title:"Developer Hooks for GravityMath",description:"- gravityview/math/tablefootercalculation/math_shortcode Modify Math shortcode parameters before calculation",source:"@site/docs/gravity-forms-add-ons/gravitymath/749-developer-hooks-for-math-by-gravityview.mdx",sourceDirName:"gravity-forms-add-ons/gravitymath",slug:"/gravity-forms-add-ons/gravitymath/749-developer-hooks-for-math-by-gravityview",permalink:"/Docs/gravity-forms-add-ons/gravitymath/749-developer-hooks-for-math-by-gravityview",draft:!1,editUrl:"https://github.com/GravityKit/Docs/tree/main/docs/gravity-forms-add-ons/gravitymath/749-developer-hooks-for-math-by-gravityview.mdx",tags:[],version:"current",sidebarPosition:749,frontMatter:{id:"601ab3552042ff6d1b2aa36e",number:"749",collectionId:"6076f9478996210f18bd33df",publicUrl:"https://docs.gravitykit.com/article/749-developer-hooks-for-math-by-gravityview",viewCount:"175",lastPublishedAt:"2022-12-14T21:30:22Z",changeOrigin:"hsapp-js",name:"Developer Hooks for GravityMath",slug:"749-developer-hooks-for-math-by-gravityview",status:"published",categories:["6155b0bf2b380503dfdf63f0"],createdBy:"59634",createdAt:"2021-02-03T14:29:41Z",updatedBy:"80506",updatedAt:"2022-12-14T21:30:22Z",title:"Developer Hooks for GravityMath",hsEditUrl:"https://secure.helpscout.net/docs/6076f9478996210f18bd33df/article/601ab3552042ff6d1b2aa36e",pagination_prev:null,pagination_next:null,last_update:{date:"2022-12-14T21:30:22.000Z",author:"Rafael Ehlers"}},sidebar:"gravitymath"},d={},s=[{value:"<code>gravityview/math/entries/visible</code> modifies visible entries used in the calculation",id:"gravityviewmathentriesvisible-modifies-visible-entries-used-in-the-calculation",level:3},{value:"<code>gravityview/math/aggregate_data/modify_field_value</code> modifies field values used for aggregate data calculation",id:"gravityviewmathaggregate_datamodify_field_value-modifies-field-values-used-for-aggregate-data-calculation",level:3},{value:"<code>gravityview/math/shortcode/output</code> modify the output of the shortcode",id:"gravityviewmathshortcodeoutput-modify-the-output-of-the-shortcode",level:3}],u={toc:s},c="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"developer-hooks-for-gravitymath"},"Developer Hooks for GravityMath"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gravityview/math/table_footer_calculation/math_shortcode")," Modify Math shortcode parameters before calculation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gravityview/math/table_footer_calculation/calculation_result")," Modify calculation result"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gravityview/math/table_footer_calculation/format_time_field_calculation_result")," Format calculation result of a time field"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gravityview/math/entries/visible")," Modify visible entries"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gravityview/math/aggregate_data/modify_field_value")," Modify field value used for aggregate data calculation")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gravityviewmathentriesvisible-modifies-visible-entries-used-in-the-calculation"},(0,i.kt)("inlineCode",{parentName:"h3"},"gravityview/math/entries/visible")," modifies visible entries used in the calculation"),(0,i.kt)("p",null,"Since 2.0"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"$entries")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"th"},"array","[","]")),(0,i.kt)("th",{parentName:"tr",align:null},"Array of visible entries used to calculate the current result."))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"$atts")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"array")),(0,i.kt)("td",{parentName:"tr",align:null},"Shortcode parameters")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gravityviewmathaggregate_datamodify_field_value-modifies-field-values-used-for-aggregate-data-calculation"},(0,i.kt)("inlineCode",{parentName:"h3"},"gravityview/math/aggregate_data/modify_field_value")," modifies field values used for aggregate data calculation"),(0,i.kt)("p",null,"Since 2.0"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"$value")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"th"},"string")),(0,i.kt)("th",{parentName:"tr",align:null},"Array of visible entries used to calculate the current result."))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"$transform_value")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"The transformation operation name passed via shortcode")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gravityviewmathshortcodeoutput-modify-the-output-of-the-shortcode"},(0,i.kt)("inlineCode",{parentName:"h3"},"gravityview/math/shortcode/output")," modify the output of the shortcode"),(0,i.kt)("p",null,"Since 1.0"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"$result")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"th"},"string")),(0,i.kt)("th",{parentName:"tr",align:null},"Shortcode output.")))),(0,i.kt)("p",null,"Here's an example to display ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," when the calculation result is empty for some reason:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nadd_filter('gravityview/math/shortcode/output', function( $result) {\n    return ($result === '') ? 0 : $result;\n});\n")))}p.isMDXComponent=!0}}]);