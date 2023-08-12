/** @type {import('next').NextConfig} */
const nextConfig = {
	redirects: async function () {
		return [
			{
				source: "/search",
				destination: "/",
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig
