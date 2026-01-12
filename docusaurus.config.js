// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lista Recurring Events',
  tagline: 'Documentation for the Lista Recurring Events WordPress Plugin',
  favicon: 'img/lre-logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'listapage', // Usually your GitHub org/user name.
  projectName: 'lista-recurring-events', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          routeBasePath: '/', // Docs at root instead of /docs/
          sidebarPath: './sidebars.js',
          // Remove or update this to your repo
          // editUrl: 'https://github.com/your-org/your-repo/tree/main/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // Replace with your project's social card
        image: 'img/lre-social.webp',
        colorMode: {
          respectPrefersColorScheme: true,
        },
        navbar: {
          title: 'Lista Recurring Events',
          logo: {
            alt: 'Lista Recurring Events Logo',
            src: 'img/lre-logo.png',
          },
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
              position: 'left',
              label: 'Documentation',
            },
            {
              href: 'https://developer.listapage.io',
              label: 'Listapage',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Documentation',
              items: [
                {
                  label: 'Getting Started',
                  to: '/getting-started/installation',
                },
                {
                  label: 'Recurrence Patterns',
                  to: '/recurrence-patterns/overview',
                },
                {
                  label: 'Bricks Builder',
                  to: '/bricks-builder/query-loop',
                },
              ],
            },
            {
              title: 'Integrations',
              items: [
                {
                  label: 'Elementor',
                  to: '/elementor/loop-widget',
                },
                {
                  label: 'Calendar',
                  to: '/calendar/configuration',
                },
                {
                  label: 'Shortcodes',
                  to: '/shortcodes/reference',
                },
              ],
            },
            {
              title: 'Resources',
              items: [
                {
                  label: 'Developers',
                  to: '/developers/php-functions',
                },
                {
                  label: 'Troubleshooting',
                  to: '/troubleshooting/common-issues',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Listapage. Built with Docusaurus.`,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
          additionalLanguages: ['php', 'bash'],
        },
      }),
};

export default config;
