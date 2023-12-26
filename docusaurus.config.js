// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GravityKit',
  tagline: 'Essential add-ons for Gravity Forms.',
  url: 'https://beta.docs.gravitykit.com/',
  baseUrl: '/Docs/',
  deploymentBranch: 'main',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  favicon: 'img/GravityKit-logo.png',
  organizationName: 'GravityKit',
  projectName: 'Docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/GravityKit/Docs/tree/main/',
          exclude: ['internal/**', 'support-guide/**'],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'GravityKit',
        logo: {
          alt: 'GravityKit Logo',
          src: 'img/GravityKit-logo.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Gravity Forms Add-Ons',
            position: 'left',
            items: [
              {
                label: 'GravityView',
                to:    'gravity-forms-add-ons/gravityview/',
              },
              {
                label: 'GravityActions',
                to:    'gravity-forms-add-ons/gravityactions/',
              },
              {
                label: 'GravityImport',
                to:    'gravity-forms-add-ons/gravityimport/',
              },
              {
                label: 'GravityEdit',
                to:    'gravity-forms-add-ons/gravityedit/',
              },
              {
                label: 'GravityRevisions',
                to:    'gravity-forms-add-ons/gravityrevisions/',
              },
              {
                label: 'GravityCharts',
                to:    'gravity-forms-add-ons/gravitycharts/',
              },
              {
                label: 'GravityMath',
                to:    'gravity-forms-add-ons/gravitymath/',
              },
              {
                label: 'GravityCalendar',
                to:    'gravity-forms-add-ons/gravitycalendar/',
              },
              {
                label: 'GravityExport',
                to:    'gravity-forms-add-ons/gravityexport/',
              }
            ],
          },
          {
            type: 'dropdown',
            label: 'GravityView Extensions',
            position: 'left',
            items: [
              {
                label: 'Advanced Filters',
                to:    'gravity-forms-add-ons/gravityview/extensions-layouts/advanced-filter/',
              },
              {
                label: 'Multiple Forms',
                to:    'gravity-forms-add-ons/gravityview/extensions-layouts/multiple-forms/',
              },
              {
                label: 'Ratings & Reviews',
                to:    'gravity-forms-add-ons/gravityview/extensions-layouts/ratings-reviews/'
              },
              {
                label: 'Featured Entries',
                to:    'gravity-forms-add-ons/gravityview/extensions-layouts/featured-entries/',
              },
              {
                label: 'Social Sharing & SEO',
                to:    'gravity-forms-add-ons/gravityview/extensions-layouts/social-sharing-seo/',
              },
              {
                label: 'A-Z Filters',
                to:    'gravity-forms-add-ons/gravityview/extensions-layouts/a-z-filters/',
              },
              {
                label: 'Dashboard Views',
                to:    'gravity-forms-add-ons/gravityview/extensions-layouts/dashboard-views/',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'GravityView Layouts',
            position: 'left',
            items: [
              {
                label: 'DataTables',
                to:    'gravity-forms-add-ons/gravityview/extensions-layouts/datatables/',
              },
              {
                label: 'DIY',
                to:    'gravity-forms-add-ons/gravityview/extensions-layouts/diy-layout/',
              },
              {
                label: 'Maps',
                to:    'gravity-forms-add-ons/gravityview/extensions-layouts/maps-premium-view/',
              },
            ],
          },
          {
            to: '/general-help/',
            label: 'General Help',
            position: 'left',
            items: [
              {
                label: 'Account & Billing',
                to:    'general-help/billing/',
              },
              {
                label: 'License Related',
                to:    'general-help/licensing/',
              },
              {
                label: 'Plugins & Settings',
                to:    'general-help/downloads/',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook Group',
                href: 'https://www.facebook.com/groups/gravitykit',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://www.gravitykit.com/blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/gravityview/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Katz Web Services, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [ 'php', 'javascript', 'css' ],
      },
    }),
};

module.exports = config;
