// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Domaine de Beaune",
      link: [{ rel: "icon", type: "image/x-icon", href: "/logo-pomme.png" }],
      meta: [
        { property: "og:title", content: "Domaine de Beaune" },
        {
          property: "og:description",
          content:
            "Exploitation agricole familiale à Plauzat, en Auvergne. Venez cueillir vos pommes dans nos 4 hectares de vergers.",
        },
        {
          property: "og:image",
          content: "https://domainedebeaune.fr/assets/images/logo-beaune.jpg",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://domainedebeaune.fr",
        },
      ],
    },
  },
  content: {
    contentHead: false,
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/content",
    "dayjs-nuxt",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  components: [
    { path: "~/components/typography", pathPrefix: false },
    "~/components",
  ],
  runtimeConfig: {
    public: {
      brevoFormUrl: undefined,
    },
  },
});
