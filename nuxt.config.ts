// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@vueuse/nuxt"],

	// ssr:true,
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/scss/main.scss" as *;',
				},
			},
		},
	},

	css: ["@/assets/css/main.css", "@/assets/css/vendor/aos.css", "@/assets/css/my.css"],

	app: {
		head: {
			title: "澜申科技",
			meta: [
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					charset: "utf-8",
				},
				{ hid: "keywords", name: "keywords", content: "澜申科技" },
				{ hid: "description", name: "description", content: "澜申,科技,家居,智慧,软件" },
			],
			script: [{ src: "/js/vendor/jquery.min.js" }, { src: "/js/vendor/popper.min.js" }, { src: "/js/vendor/bootstrap.min.js" }, { src: "/js/vendor/aos.js" }, { src: "/js/functions.js" }],
		},
	},

	compatibilityDate: "2024-11-19",
});
