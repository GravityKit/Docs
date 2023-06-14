/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	gravityactions: [
		{
			type: 'link',
			href: '/gravity-forms-add-ons/gravityactions/', // document ID
			label: 'GravityActions', // sidebar label
			className: 'sidebar-header',
		},
		{
			type: 'autogenerated',
			dirName: 'gravity-forms-add-ons/gravityactions',
		}
	],
	gravitycalendar: [
		{
			type: 'autogenerated',
			dirName: 'gravity-forms-add-ons/gravitycalendar',
		}
	],
	gravitycharts: [
		{
			type: 'autogenerated',
			dirName: 'gravity-forms-add-ons/gravitycharts',
		}
	],
	gravityedit: [
		{
			type: 'autogenerated',
			dirName: 'gravity-forms-add-ons/gravityedit',
		}
	],
	gravityexport: [
		{
			type: 'autogenerated',
			dirName: 'gravity-forms-add-ons/gravityexport',
		}
	],
	gravityimport: [
		{
			type: 'autogenerated',
			dirName: 'gravity-forms-add-ons/gravityimport',
		}
	],
	gravitymath: [
		{
			type: 'autogenerated',
			dirName: 'gravity-forms-add-ons/gravitymath',
		}
	],
	gravityrevisions: [
		{
			type: 'autogenerated',
			dirName: 'gravity-forms-add-ons/gravityrevisions',
		}
	],
	gravityview: [
		{
			type: 'link',
			href: '/gravity-forms-add-ons/gravityview/',
			label: 'GravityView',
			className: 'sidebar-header',
		},
		{
			type: 'doc',
			id: 'gravity-forms-add-ons/gravityview/getting-started/579aa5d0903360293603a8e2',
			label: 'Getting Started',
		},
		{
			type: 'autogenerated',
			dirName: 'gravity-forms-add-ons/gravityview',
		}
	],
	datatables: [
		{
			type: 'autogenerated',
			dirName: 'gravity-forms-add-ons/gravityview/extensions-layouts/datatables',
		}
	],
	"diy-layout": [
		{
			type: 'autogenerated',
			dirName: 'gravity-forms-add-ons/gravityview/extensions-layouts/diy-layout',
		}
	],
	"maps-premium-view": [
		{
			type: 'autogenerated',
			dirName: 'gravity-forms-add-ons/gravityview/extensions-layouts/maps-premium-view',
		}
	],
	"featured-entries": [
		{
			type: 'autogenerated',
			dirName: 'gravity-forms-add-ons/gravityview/extensions-layouts/featured-entries',
		}
	],
	"social-sharing-seo": [
		{
			type: 'autogenerated',
			dirName: 'gravity-forms-add-ons/gravityview/extensions-layouts/social-sharing-seo',
		}
	],
	"a-z-filters": [
		{
			type: 'autogenerated',
			dirName: 'gravity-forms-add-ons/gravityview/extensions-layouts/a-z-filters',
		}
	],
	"multiple-forms": [
		{
			type: 'autogenerated',
			dirName: 'gravity-forms-add-ons/gravityview/extensions-layouts/multiple-forms',
		}
	],
	"advanced-filter": [
		{
			type: 'autogenerated',
			dirName: 'gravity-forms-add-ons/gravityview/extensions-layouts/advanced-filter',
		}
	],
	"ratings-reviews": [
		{
			type: 'autogenerated',
			dirName: 'gravity-forms-add-ons/gravityview/extensions-layouts/ratings-reviews',
		}
	],
	"general-help": [
		{
			type: 'autogenerated',
			dirName: 'general-help',
		}
	],
};

module.exports = sidebars;
