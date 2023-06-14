"use strict";(self.webpackChunkgravitykit_docs=self.webpackChunkgravitykit_docs||[]).push([[13276],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),h=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=h(t.components);return r.createElement(s.Provider,{value:e},t.children)},l="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),l=h(a),p=n,g=l["".concat(s,".").concat(p)]||l[p]||d[p]||i;return a?r.createElement(g,o(o({ref:e},u),{},{components:a})):r.createElement(g,o({ref:e},u))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=p;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[l]="string"==typeof t?t:n,o[1]=c;for(var h=2;h<i;h++)o[h]=a[h];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},18206:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=a(87462),n=(a(67294),a(3905));const i={id:"62f416196d67192dc61b9bb9",number:"855",collectionId:"6076f9478996210f18bd33df",publicUrl:"https://docs.gravitykit.com/article/855-customizing-image-charts",viewCount:"101",lastPublishedAt:"2022-10-18T23:29:16Z",changeOrigin:"unknown",name:"Modifying image charts in GravityCharts",slug:"855-customizing-image-charts",status:"published",categories:["6261683a93a48c44483342eb"],createdBy:"59634",createdAt:"2022-08-10T20:33:29Z",updatedBy:"80506",updatedAt:"2022-10-18T23:29:16Z",title:"Modifying image charts in GravityCharts",hsEditUrl:"https://secure.helpscout.net/docs/6076f9478996210f18bd33df/article/62f416196d67192dc61b9bb9",pagination_prev:null,pagination_next:null,last_update:{date:new Date("2022-10-18T23:29:16.000Z"),author:"Rafael Ehlers"}},o="Modifying image charts in GravityCharts",c={unversionedId:"gravity-forms-add-ons/gravitycharts/62f416196d67192dc61b9bb9",id:"gravity-forms-add-ons/gravitycharts/62f416196d67192dc61b9bb9",title:"Modifying image charts in GravityCharts",description:"This feature is currently in beta! If you encounter any issues, please let our support know.",source:"@site/docs/gravity-forms-add-ons/gravitycharts/855-customizing-image-charts.mdx",sourceDirName:"gravity-forms-add-ons/gravitycharts",slug:"/gravity-forms-add-ons/gravitycharts/855-customizing-image-charts",permalink:"/gravity-forms-add-ons/gravitycharts/855-customizing-image-charts",draft:!1,editUrl:"https://github.com/GravityKit/Docs/tree/main/docs/gravity-forms-add-ons/gravitycharts/855-customizing-image-charts.mdx",tags:[],version:"current",sidebarPosition:855,frontMatter:{id:"62f416196d67192dc61b9bb9",number:"855",collectionId:"6076f9478996210f18bd33df",publicUrl:"https://docs.gravitykit.com/article/855-customizing-image-charts",viewCount:"101",lastPublishedAt:"2022-10-18T23:29:16Z",changeOrigin:"unknown",name:"Modifying image charts in GravityCharts",slug:"855-customizing-image-charts",status:"published",categories:["6261683a93a48c44483342eb"],createdBy:"59634",createdAt:"2022-08-10T20:33:29Z",updatedBy:"80506",updatedAt:"2022-10-18T23:29:16Z",title:"Modifying image charts in GravityCharts",hsEditUrl:"https://secure.helpscout.net/docs/6076f9478996210f18bd33df/article/62f416196d67192dc61b9bb9",pagination_prev:null,pagination_next:null,last_update:{date:"2022-10-18T23:29:16.000Z",author:"Rafael Ehlers"}},sidebar:"gravitycharts"},s={},h=[{value:"Actions",id:"actions",level:2},{value:"<code>gk/gravitycharts/image-charts/quickchart/instance</code>",id:"gkgravitychartsimage-chartsquickchartinstance",level:3},{value:"Example code",id:"example-code",level:2},{value:"Set chart background color",id:"set-chart-background-color",level:3},{value:"Change the chart title and font",id:"change-the-chart-title-and-font",level:3},{value:"Add a QuickChart API key for improved speed and customer service",id:"add-a-quickchart-api-key-for-improved-speed-and-customer-service",level:3},{value:"Use a self-hosted QuickChart installation instead of the default chart service",id:"use-a-self-hosted-quickchart-installation-instead-of-the-default-chart-service",level:3},{value:"Print debug output about the chart data being used",id:"print-debug-output-about-the-chart-data-being-used",level:3}],u={toc:h},l="wrapper";function d(t){let{components:e,...a}=t;return(0,n.kt)(l,(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"modifying-image-charts-in-gravitycharts"},"Modifying image charts in GravityCharts"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"This feature is currently in beta!")," If you encounter any issues, please let our support know.")),(0,n.kt)("p",null,"Image charts are generated using the ",(0,n.kt)("a",{parentName:"p",href:"https://quickchart.io/documentation/"},"QuickChart API"),". QuickChart is powerful and allows you to customize the look and feel of the chart. QuickChart generates images from chart configuration settings, which are stored in a format called ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON"},"JSON"),"."),(0,n.kt)("p",null,"When converting a chart to an image, there may be differences that require tweaking to match the look of the charts exactly. You can modify the chart output by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"gk/gravitycharts/image-charts/quickchart/instance")," action."),(0,n.kt)("h2",{id:"actions"},(0,n.kt)("a",{parentName:"h2",href:"#actions"}),"Actions"),(0,n.kt)("h3",{id:"gkgravitychartsimage-chartsquickchartinstance"},(0,n.kt)("a",{parentName:"h3",href:"#gkgravitychartsimage-chartsquickchartinstance"}),(0,n.kt)("inlineCode",{parentName:"h3"},"gk/gravitycharts/image-charts/quickchart/instance")),(0,n.kt)("p",null,"Override QuickChart API settings for the chart."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"$chart")),(0,n.kt)("td",{parentName:"tr",align:null},"object"),(0,n.kt)("td",{parentName:"tr",align:null},"The ",(0,n.kt)("a",{parentName:"td",href:"https://quickchart.io/documentation/api/instance/"},"QuickChart instance")," to modify.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"config")),(0,n.kt)("td",{parentName:"tr",align:null},"object"),(0,n.kt)("td",{parentName:"tr",align:null},"The configuration to apply to the instance.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"$atts")),(0,n.kt)("td",{parentName:"tr",align:null},"array"),(0,n.kt)("td",{parentName:"tr",align:null},"The shortcode attributes (see the ",(0,n.kt)("a",{parentName:"td",href:"https://docs.gravitykit.com/article/850-gravitycharts-shortcode"},(0,n.kt)("inlineCode",{parentName:"a"},"[gravitycharts]")," Shortcode")," doc for a list of attributes).")))),(0,n.kt)("h2",{id:"example-code"},(0,n.kt)("a",{parentName:"h2",href:"#example-code"}),"Example code"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Note: This code is PHP. If you're not sure what that is or how to use this filter, we recommend reaching out to ",(0,n.kt)("a",{parentName:"p",href:"https://www.gravitykit.com/codeable"},"a Codeable.io expert")," who can help with making these changes.")),(0,n.kt)("p",null,"  Please ",(0,n.kt)("a",{parentName:"p",href:"https://quickchart.io/documentation/"},"refer to the QuickChart docs")," to see what features are available."),(0,n.kt)("h3",{id:"set-chart-background-color"},(0,n.kt)("a",{parentName:"h3",href:"#set-chart-background-color"}),"Set chart background color"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"/**\n* Override QuickChart API settings for the chart.\n* @see https://github.com/typpo/quickchart-php for documentation\n* @param GravityKit\\GravityCharts\\QuickChart $chart\n* @param array $atts\n*/\nadd_action( 'gk/gravitycharts/image-charts/quickchart/instance', function ( $chart, $atts ) {\n\n   // Only modify chart #17. Remove this condition to modify all charts.\n   if( 17 !== (int) $atts['id'] ) {\n       return;\n   }\n\n   // Set background color to yellow\n   $chart->setBackgroundColor( 'rgb(255,255,120)' );\n   \n}, 10, 2 );\n")),(0,n.kt)("h3",{id:"change-the-chart-title-and-font"},(0,n.kt)("a",{parentName:"h3",href:"#change-the-chart-title-and-font"}),"Change the chart title and font"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"/**\n* Change the chart title to \"My Chart\" and override font settings.\n*\n* @see https://github.com/typpo/quickchart-php for documentation\n*\n* @param \\GravityKit\\GravityCharts\\QuickChart $chart\n* @param array $atts\n*/\nadd_action( 'gk/gravitycharts/image-charts/quickchart/instance', function ( $chart, $atts ) {\n\n   // Only modify chart #17. Remove this condition to modify all charts.\n   if( 17 !== (int) $atts['id'] ) {\n       return;\n   }\n\n    $config = $chart->getConfig();\n\n    $config['options']['plugins']['title'] = [\n        'display' => 1,\n        'text' => 'My Chart', // Change the text\n        'color' => 'teal', // Color\n        'font' => [\n            'family' => 'Noto Sans Mono', // Font family. All Noto fonts are valid. {@see https://fonts.google.com/noto/fonts}\n            'size' => 32, // Font size in pixels\n            'weight' => 700, // Font weight\n        ],\n    ];\n\n    $chart->setConfig( $config );\n\n}, 10, 2 );\n")),(0,n.kt)("h3",{id:"add-a-quickchart-api-key-for-improved-speed-and-customer-service"},(0,n.kt)("a",{parentName:"h3",href:"#use-the-quickchart-service-instead-of-gravitykits-chart-service"}),"Add a QuickChart API key for improved speed and customer service"),(0,n.kt)("p",null,"QuickChart offers ",(0,n.kt)("a",{parentName:"p",href:"https://quickchart.io/pricing/"},"a Professional plan")," at $40/mo. Professional plans have no rate limiting, faster chart generation, and access to additional features. If you sign up, you will get an API key. Here's how to add the API key to GravityCharts image charts:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"/**\n* Override QuickChart API settings for the chart.\n* @see https://github.com/typpo/quickchart-php for documentation\n* @param GravityKit\\GravityCharts\\QuickChart $chart\n* @param array $atts\n*/\nadd_action( 'gk/gravitycharts/image-charts/quickchart/instance', function ( $chart, $atts ) {    \n   $chart->setApiKey( 'REPLACE_THIS_WITH_YOUR_API_KEY' );\n}, 10, 2 );\n")),(0,n.kt)("h3",{id:"use-a-self-hosted-quickchart-installation-instead-of-the-default-chart-service"},(0,n.kt)("a",{parentName:"h3",href:"#use-the-quickchart-service-instead-of-gravitykits-chart-service"}),"Use a self-hosted QuickChart installation instead of the default chart service"),(0,n.kt)("p",null,"If you want to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/typpo/quickchart#docker"},"run your own instance of QuickChart"),", you can. It will require updating the host setting. Here's how to do that:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"/**\n* Override QuickChart API settings for the chart.\n* @see https://github.com/typpo/quickchart-php for documentation\n* @param GravityKit\\GravityCharts\\QuickChart $chart\n* @param array $atts\n*/\nadd_action( 'gk/gravitycharts/image-charts/quickchart/instance', function ( $chart, $atts ) {\n\n   // Use QuickCharts.io.\n   $chart->setHost( 'quickcharts.io' );\n   \n   // If you have one, enter your API key.\n   $chart->setApiKey( 'YOUR_API_KEY' );\n}, 10, 2 );\n")),(0,n.kt)("h3",{id:"print-debug-output-about-the-chart-data-being-used"},(0,n.kt)("a",{parentName:"h3",href:"#print-debug-output-about-the-chart-data-being-used"}),"Print debug output about the chart data being used"),(0,n.kt)("p",null,"If you want to figure out what data is being shown in an image chart, here's some example code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"/**\n* Print debugging information about each chart.\n*/\nadd_action( 'gk/gravitycharts/image-charts/quickchart/instance', function ( $chart, $atts ) {\n\n   // Only show debugging to admins\n   if ( ! current_user_can( 'manage_options' ) ) {\n       return;\n   }\n\n   echo '<h3>Chart Data</h3>';\n   echo '';\n   print_r( $chart->getConfig() );\n   echo '';\n   \n   echo '<h3>Chart Block/Shortcode Attributes</h3>';\n   echo '';\n   print_r( $atts );\n   echo '';\n}, 20, 3 );\n")))}d.isMDXComponent=!0}}]);