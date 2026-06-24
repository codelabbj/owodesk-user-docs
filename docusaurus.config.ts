import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OwoDesk — Centre d\'aide',
  tagline: 'Documentation pour les entreprises qui utilisent OwoDesk',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://docs.owodesk.com',
  baseUrl: '/',

  organizationName: 'owodesk',
  projectName: 'user-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  plugins: [
    [
      '@cmfcmf/docusaurus-search-local',
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        language: 'fr',
        style: undefined,
        maxSearchResults: 10,
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {from: '/category/par-module', to: '/category/modules'},
          {from: '/category/parcours-metier', to: '/category/modules'},
          {from: '/par-module/tableau-de-bord', to: '/modules/tableau-de-bord'},
          {from: '/par-module/crm', to: '/modules/crm'},
          {from: '/par-module/facturation', to: '/modules/facturation'},
          {from: '/par-module/stock-inventaire', to: '/modules/stock'},
          {from: '/par-module/comptabilite', to: '/modules/comptabilite'},
          {from: '/par-module/rh', to: '/modules/rh'},
          {from: '/par-module/demandes-internes', to: '/modules/demandes-internes'},
          {from: '/par-module/pos', to: '/modules/pos'},
          {from: '/par-module/ecommerce-marketplace', to: '/modules/ecommerce'},
          {from: '/par-module/projets', to: '/modules/projets'},
          {from: '/par-module/assistant-owo', to: '/modules/assistant-owo'},
          {from: '/par-module/ventes', to: '/modules/facturation'},
          {from: '/par-module/achats', to: '/modules/stock'},
          {from: '/par-module/depenses', to: '/modules/comptabilite'},
          {from: '/par-module/boite-outils', to: '/category/modules'},
          {from: '/modules/ventes/', to: '/modules/facturation'},
          {from: '/modules/ventes/creer-devis', to: '/modules/facturation/creer-devis'},
          {from: '/modules/ventes/convertir-devis-en-commande', to: '/modules/facturation/creer-devis'},
          {from: '/modules/ventes/gerer-commandes', to: '/modules/facturation/creer-facture'},
          {from: '/modules/ventes/bons-livraison', to: '/modules/stock/mouvements-stock'},
          {from: '/modules/ventes/facturer-commande', to: '/modules/facturation/creer-facture'},
          {from: '/modules/achats/', to: '/modules/stock'},
          {from: '/modules/achats/creer-fournisseur', to: '/modules/stock/achats'},
          {from: '/modules/achats/commande-fournisseur', to: '/modules/stock/achats'},
          {from: '/modules/achats/confirmer-commande', to: '/modules/stock/achats'},
          {from: '/modules/achats/receptionner-marchandises', to: '/modules/stock/achats'},
          {from: '/modules/achats/payer-fournisseur', to: '/modules/stock/achats'},
          {from: '/modules/depenses/', to: '/modules/comptabilite'},
          {from: '/modules/depenses/categories-depenses', to: '/modules/comptabilite/depenses'},
          {from: '/modules/depenses/enregistrer-depense', to: '/modules/comptabilite/depenses'},
          {from: '/modules/depenses/analyse-depenses', to: '/modules/comptabilite/rapports-financiers'},
          {from: '/modules/comptabilite/balance-comptes', to: '/modules/comptabilite/rapports-financiers'},
          {from: '/modules/comptabilite/echeancier-clients', to: '/modules/comptabilite/dettes-et-creances'},
          {from: '/modules/comptabilite/echeancier-fournisseurs', to: '/modules/comptabilite/dettes-et-creances'},
          {from: '/modules/comptabilite/virement-caisse', to: '/modules/comptabilite/tresorerie'},
          {from: '/modules/boite-outils/', to: '/category/modules'},
          {from: '/parcours-metier/vente-a-facture', to: '/modules/facturation/creer-facture'},
          {from: '/parcours-metier/certification-fiscale', to: '/modules/facturation/certification-fiscale'},
          {from: '/parcours-metier/certification-fiscale-configuration', to: '/modules/facturation/certification-fiscale'},
          {from: '/parcours-metier/certification-fiscale-types-mecef', to: '/modules/facturation/certification-fiscale'},
          {from: '/parcours-metier/certification-fiscale-factures', to: '/modules/facturation/finaliser-facture'},
          {from: '/parcours-metier/certification-fiscale-tickets-pos', to: '/modules/pos/encaisser-vente'},
          {from: '/parcours-metier/gerer-stock', to: '/modules/stock/creer-produit'},
          {from: '/parcours-metier/payer-employes', to: '/modules/rh/paie'},
          {from: '/parcours-metier/demande-conge', to: '/modules/rh/conges-et-permissions'},
          {from: '/parcours-metier/demande-decaissement', to: '/modules/demandes-internes/creer-demande-decaissement'},
          {from: '/parcours-metier/vente-pos', to: '/modules/pos/encaisser-vente'},
          {from: '/parcours-metier/vendre-en-ligne', to: '/modules/ecommerce/configurer-boutique'},
          {from: '/modules/facturation/parcours/vente-a-facture', to: '/modules/facturation/creer-facture'},
          {from: '/modules/facturation/parcours/certification-fiscale', to: '/modules/facturation/certification-fiscale'},
          {from: '/modules/facturation/parcours/certification-fiscale/configuration', to: '/modules/facturation/certification-fiscale'},
          {from: '/modules/facturation/parcours/certification-fiscale/types-mecef', to: '/modules/facturation/certification-fiscale'},
          {from: '/modules/facturation/parcours/certification-fiscale/factures', to: '/modules/facturation/finaliser-facture'},
          {from: '/modules/facturation/parcours/certification-fiscale/tickets-pos', to: '/modules/pos/encaisser-vente'},
          {from: '/modules/stock/parcours/gerer-stock', to: '/modules/stock/creer-produit'},
          {from: '/modules/rh/parcours/payer-employes', to: '/modules/rh/paie'},
          {from: '/modules/rh/parcours/demande-conge', to: '/modules/rh/conges-et-permissions'},
          {from: '/modules/demandes-internes/parcours/demande-decaissement', to: '/modules/demandes-internes/creer-demande-decaissement'},
          {from: '/modules/pos/parcours/vente-pos', to: '/modules/pos/encaisser-vente'},
          {from: '/modules/ecommerce/parcours/vendre-en-ligne', to: '/modules/ecommerce/configurer-boutique'},
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/owodesk-social-card.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'OwoDesk',
      logo: {
        alt: 'OwoDesk',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://owo.bj',
          label: 'owo.bj',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Démarrage',
          items: [
            {label: 'Accueil', to: '/'},
            {label: 'Premiers pas', to: '/category/premiers-pas'},
            {label: 'FAQ', to: '/faq'},
          ],
        },
        {
          title: 'Guides',
          items: [
            {label: 'Modules', to: '/category/modules'},
          ],
        },
        {
          title: 'Légal',
          items: [
            {label: 'owo.bj', href: 'https://owo.bj'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} OwoDesk. Tous droits réservés.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
