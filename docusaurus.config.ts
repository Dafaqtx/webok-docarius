import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Webok frontend documentation",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "webok", // Usually your GitHub org/user name.
  projectName: "webok-frontend-documentation", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ru",
    locales: ["ru"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Webok Frontend",
      logo: {
        alt: "Webok Frontend",
        src: "img/abdt-logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Документация",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Packages",
          items: [
            {
              label: "Webok General",
              href: "https://gitlab.akbars.tech/abo/webok-general-components",
            },
            {
              label: "Webok toolkit",
              href: "https://gitlab.akbars.tech/abo/webok-toolkit",
            },
          ],
        },
        {
          title: "Projects",
          items: [
            {
              label: "Webok",
              href: "https://gitlab.akbars.tech/abo/webok",
            },
            {
              label: "Webok Incognito",
              href: "https://gitlab.akbars.tech/abo/webok-incognito",
            },
            {
              label: "Webok Admin",
              href: "https://gitlab.akbars.tech/abo/Abdt.Ok.Admin.Front",
            },
          ],
        },
        {
          title: "Microfrontends",
          items: [
            {
              label: "Webok Features Main",
              href: "https://gitlab.akbars.tech/abo/webok-features-main",
            },
            {
              label: "Webok Features Incognito",
              href: "https://gitlab.akbars.tech/abo/webok-features-incognito",
            },
            {
              label: "Webok Shared",
              href: "https://gitlab.akbars.tech/abo/webok-shared",
            },
            {
              label: "Webok Games",
              href: "https://gitlab.akbars.tech/abo/webok-games",
            },
            {
              label: "Webok Card Tariffs",
              href: "https://gitlab.akbars.tech/abo/webok-card-tariffs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Webok Frontend, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
