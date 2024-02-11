// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Domaine de Beaune",
      link: [{ rel: "icon", type: "image/x-icon", href: "/apple.svg" }],
      meta: [
        { property: "og:title", content: "Domaine de Beaune" },
        {
          property: "og:description",
          content:
            "Nous sommes une exploitation agricole familiale et produisons entre autres des pommes sur 4 hectares. Grâce à l'eau du ciel, le soleil, le sol riche et volcanique des puys et un usage minimaliste et raisonné de traitements, les fruits profitent du terroir exceptionnel des coteaux d'Auvergne pour murir à leur rythme.",
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
