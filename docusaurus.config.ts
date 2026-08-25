import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const SITE_URL = 'https://aide.owo.bj';
const SITE_NAME = "OwoDesk — Centre d'aide";
const SITE_DESCRIPTION =
  "Documentation OwoDesk : ERP et CRM multi-sociétés pour les PME de l'espace OHADA. Comptabilité SYSCOHADA, facturation électronique MECeF (Bénin), stock, CRM. Édité par Code Lab.";

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      description: SITE_DESCRIPTION,
      inLanguage: 'fr-FR',
      publisher: {'@id': 'https://codelab.bj/#organization'},
      isPartOf: {'@id': 'https://www.owo.bj/#organization'},
    },
    {
      '@type': 'Organization',
      '@id': 'https://codelab.bj/#organization',
      name: 'CodeLab BJ',
      legalName: 'CodeLab BJ',
      alternateName: ['Code Lab', 'Code Lab BJ', 'CodeLabBj'],
      url: 'https://codelab.bj',
      email: 'hello@codelab.bj',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Îlot 34, parcelle L, quartier Tokplégbé',
        addressLocality: 'Cotonou',
        addressCountry: 'BJ',
      },
      sameAs: ['https://www.owo.bj', SITE_URL],
      description:
        "Code Lab édite OwoDesk (ERP/CRM pour PME de l'espace OHADA). À ne pas confondre avec Owo Financial Services (OFS, ofs.bj) ni avec Owotech.",
    },
  ],
};

const config: Config = {
  title: SITE_NAME,
  tagline: SITE_DESCRIPTION,
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: SITE_URL,
  baseUrl: '/',

  organizationName: 'codelabbj',
  projectName: 'owodesk-user-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/img/favicon-32x32.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/img/favicon-16x16.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/apple-touch-icon.png',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify(jsonLd),
    },
  ],

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
          {from: '/par-module/depenses', to: '/modules/tresorerie/depenses'},
          {from: '/par-module/boite-outils', to: '/category/modules'},
          {from: '/modules/ventes/', to: '/modules/facturation'},
          {from: '/modules/ventes/creer-devis', to: '/modules/facturation/facture-pro'},
          {from: '/modules/ventes/convertir-devis-en-commande', to: '/modules/facturation/facture-pro'},
          {from: '/modules/ventes/gerer-commandes', to: '/modules/facturation/facture-unientrepot'},
          {from: '/modules/ventes/bons-livraison', to: '/modules/stock/mouvements'},
          {from: '/modules/stock/categories-produits', to: '/modules/stock/produits'},
          {from: '/modules/stock/creer-produit', to: '/modules/stock/produits'},
          {from: '/modules/stock/variantes-produit', to: '/modules/stock/produits'},
          {from: '/modules/stock/taxes', to: '/modules/stock/produits'},
          {from: '/modules/stock/mouvements-stock', to: '/modules/stock/mouvements'},
          {from: '/modules/stock/inventaire-physique', to: '/modules/stock/niveaux-stock'},
          {from: '/modules/stock/regles-reapprovisionnement', to: '/modules/stock/niveaux-stock'},
          {from: '/modules/ventes/facturer-commande', to: '/modules/facturation/facture-unientrepot'},
          {from: '/modules/facturation/creer-facture', to: '/modules/facturation/facture-unientrepot'},
          {from: '/modules/facturation/creer-client', to: '/modules/facturation/facture-unientrepot'},
          {from: '/modules/facturation/finaliser-facture', to: '/modules/facturation/factures'},
          {from: '/modules/facturation/gerer-paiements', to: '/modules/facturation/factures'},
          {from: '/modules/facturation/creer-devis', to: '/modules/facturation/facture-pro'},
          {from: '/modules/facturation/certification-fiscale', to: '/modules/facturation/fiscal-efacture'},
          {from: '/modules/facturation/signature-et-email', to: '/modules/facturation/factures'},
          {from: '/modules/facturation/tableau-de-bord-facturation', to: '/modules/facturation/vue-ensemble'},
          {from: '/modules/achats/', to: '/modules/stock'},
          {from: '/modules/achats/creer-fournisseur', to: '/modules/stock/achats'},
          {from: '/modules/achats/commande-fournisseur', to: '/modules/stock/achats'},
          {from: '/modules/achats/confirmer-commande', to: '/modules/stock/achats'},
          {from: '/modules/achats/receptionner-marchandises', to: '/modules/stock/achats'},
          {from: '/modules/achats/payer-fournisseur', to: '/modules/stock/achats'},
          {from: '/modules/depenses/', to: '/modules/tresorerie'},
          {from: '/modules/depenses/categories-depenses', to: '/modules/tresorerie/depenses'},
          {from: '/modules/depenses/enregistrer-depense', to: '/modules/tresorerie/depenses'},
          {from: '/modules/depenses/analyse-depenses', to: '/modules/tresorerie/rapports'},
          {from: '/modules/comptabilite/vue-ensemble', to: '/modules/tresorerie/vue-ensemble'},
          {from: '/modules/comptabilite/tresorerie', to: '/modules/tresorerie/caisse-banque'},
          {from: '/modules/comptabilite/revenus', to: '/modules/tresorerie/revenus'},
          {from: '/modules/comptabilite/depenses', to: '/modules/tresorerie/depenses'},
          {from: '/modules/comptabilite/dettes-et-creances', to: '/modules/tresorerie/dettes-et-creances'},
          {from: '/modules/comptabilite/rapports-financiers', to: '/modules/tresorerie/rapports'},
          {from: '/par-module/tresorerie', to: '/modules/tresorerie'},
          {from: '/modules/comptabilite/journaux-comptables', to: '/modules/comptabilite/journaux'},
          {from: '/modules/comptabilite/saisie-ecritures', to: '/modules/comptabilite/journal-ecritures'},
          {from: '/modules/comptabilite/piste-audit', to: '/modules/tresorerie/audit'},
          {from: '/modules/comptabilite/balance-comptes', to: '/modules/comptabilite/balance'},
          {from: '/modules/comptabilite/echeancier-clients', to: '/modules/tresorerie/dettes-et-creances'},
          {from: '/modules/comptabilite/echeancier-fournisseurs', to: '/modules/tresorerie/dettes-et-creances'},
          {from: '/modules/comptabilite/virement-caisse', to: '/modules/tresorerie/caisse-banque'},
          {from: '/modules/boite-outils/', to: '/category/modules'},
          {from: '/parcours-metier/vente-a-facture', to: '/modules/facturation/facture-unientrepot'},
          {from: '/parcours-metier/certification-fiscale', to: '/modules/facturation/fiscal-efacture'},
          {from: '/parcours-metier/certification-fiscale-configuration', to: '/modules/facturation/fiscal-efacture'},
          {from: '/parcours-metier/certification-fiscale-types-mecef', to: '/modules/facturation/fiscal-efacture'},
          {from: '/parcours-metier/certification-fiscale-factures', to: '/modules/facturation/factures'},
          {from: '/parcours-metier/certification-fiscale-tickets-pos', to: '/modules/pos/encaissement'},
          {from: '/modules/pos/ouvrir-session-caisse', to: '/modules/pos/sessions-caisse'},
          {from: '/modules/pos/creer-vente', to: '/modules/pos/encaissement'},
          {from: '/modules/pos/encaisser-vente', to: '/modules/pos/encaissement'},
          {from: '/modules/pos/annuler-vente', to: '/modules/pos/annulations'},
          {from: '/modules/pos/fermer-session-caisse', to: '/modules/pos/sessions-caisse'},
          {from: '/modules/pos/consulter-rapport-z', to: '/modules/pos/sessions-caisse'},
          {from: '/parcours-metier/gerer-stock', to: '/modules/stock/produits'},
          {from: '/modules/rh/departements', to: '/modules/rh/employes'},
          {from: '/modules/rh/creer-employe', to: '/modules/rh/employes'},
          {from: '/modules/rh/inviter-employe', to: '/modules/rh/employes'},
          {from: '/modules/rh/consulter-fiche-employe', to: '/modules/rh/employes'},
          {from: '/modules/rh/pointage-presence', to: '/modules/rh/presence'},
          {from: '/modules/rh/configuration-paie', to: '/modules/rh/paie'},
          {from: '/modules/rh/documents-employes', to: '/modules/rh/documents'},
          {from: '/modules/rh/demandes-documents', to: '/modules/rh/demandes-pieces'},
          {from: '/modules/rh/jours-feries', to: '/modules/rh/conges-permissions'},
          {from: '/modules/rh/conges-et-permissions', to: '/modules/rh/conges-permissions'},
          {from: '/parcours-metier/payer-employes', to: '/modules/rh/paie'},
          {from: '/parcours-metier/demande-conge', to: '/modules/rh/conges-permissions'},
          {from: '/parcours-metier/demande-decaissement', to: '/modules/demandes-internes/nouvelle-demande'},
          {from: '/modules/demandes-internes/creer-demande-decaissement', to: '/modules/demandes-internes/nouvelle-demande'},
          {from: '/modules/demandes-internes/valider-demande-decaissement', to: '/modules/demandes-internes/boite-reception'},
          {from: '/parcours-metier/vente-pos', to: '/modules/pos/encaissement'},
          {from: '/parcours-metier/vendre-en-ligne', to: '/modules/ecommerce/parametres-boutique'},
          {from: '/modules/ecommerce/configurer-boutique', to: '/modules/ecommerce/parametres-boutique'},
          {from: '/modules/ecommerce/publier-produits', to: '/modules/ecommerce/produits'},
          {from: '/modules/ecommerce/zones-livraison', to: '/modules/ecommerce'},
          {from: '/modules/ecommerce/methodes-livraison', to: '/modules/ecommerce'},
          {from: '/modules/ecommerce/gestion-commandes', to: '/modules/ecommerce/commandes-initiees'},
          {from: '/modules/ecommerce/codes-promo', to: '/modules/ecommerce/produits'},
          {from: '/modules/projets/creer-projet', to: '/modules/projets/taches'},
          {from: '/modules/projets/creer-tache', to: '/modules/projets/taches'},
          {from: '/modules/projets/commenter-tache', to: '/modules/projets/taches'},
          {from: '/modules/projets/analytics-projet', to: '/modules/projets'},
          {from: '/modules/crm/gerer-entreprises', to: '/modules/crm/entreprises'},
          {from: '/modules/crm/creer-contact', to: '/modules/crm/contacts'},
          {from: '/modules/crm/pipelines-vente', to: '/modules/crm/pipelines'},
          {from: '/modules/crm/gerer-affaires', to: '/modules/crm/accueil'},
          {from: '/modules/crm/activites-commerciales', to: '/modules/crm/accueil'},
          {from: '/modules/crm/vue-360-client', to: '/modules/crm/vue-360'},
          {from: '/modules/facturation/parcours/vente-a-facture', to: '/modules/facturation/facture-unientrepot'},
          {from: '/modules/facturation/parcours/certification-fiscale', to: '/modules/facturation/fiscal-efacture'},
          {from: '/modules/facturation/parcours/certification-fiscale/configuration', to: '/modules/facturation/fiscal-efacture'},
          {from: '/modules/facturation/parcours/certification-fiscale/types-mecef', to: '/modules/facturation/fiscal-efacture'},
          {from: '/modules/facturation/parcours/certification-fiscale/factures', to: '/modules/facturation/factures'},
          {from: '/modules/facturation/parcours/certification-fiscale/tickets-pos', to: '/modules/pos/encaissement'},
          {from: '/modules/stock/parcours/gerer-stock', to: '/modules/stock/produits'},
          {from: '/modules/rh/parcours/payer-employes', to: '/modules/rh/paie'},
          {from: '/modules/rh/parcours/demande-conge', to: '/modules/rh/conges-permissions'},
          {from: '/modules/demandes-internes/parcours/demande-decaissement', to: '/modules/demandes-internes/nouvelle-demande'},
          {from: '/modules/pos/parcours/vente-pos', to: '/modules/pos/encaissement'},
          {from: '/modules/ecommerce/parcours/vendre-en-ligne', to: '/modules/ecommerce/parametres-boutique'},
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
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/owodesk-social-card.png',
    metadata: [
      {
        name: 'keywords',
        content:
          "OwoDesk, centre d'aide, documentation, ERP OHADA, CRM, SYSCOHADA, facturation, MECeF Bénin, multi-sociétés, multi-pays, Code Lab",
      },
      {name: 'robots', content: 'index, follow'},
      {name: 'author', content: 'Code Lab'},
      {name: 'theme-color', content: '#E8450A'},
      {name: 'application-name', content: 'OwoDesk'},
      {name: 'apple-mobile-web-app-title', content: 'OwoDesk'},
      {property: 'og:locale', content: 'fr_FR'},
      {property: 'og:site_name', content: SITE_NAME},
      {name: 'twitter:site', content: '@owodesk'},
    ],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'OwoDesk',
      logo: {
        alt: 'Logo OwoDesk',
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
          href: 'https://www.owo.bj',
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
            {label: 'owo.bj', href: 'https://www.owo.bj'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Code Lab. OwoDesk.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
