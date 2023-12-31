import { bruteGif, gif } from "@types"

export default function getGifs(url: string) {
	return fetch(url)
		.then((response) => response.json())
		.then((trending): gif[] => {
			const data: bruteGif[] = trending.data

			return data.map((bruteGif): gif => {
				const { id, title, images } = bruteGif
				const {
					original: { url: originalUrl, width: originalWidth, height: originalHeight },
					fixed_width: { webp: srcSet, url, width, height },
				} = images

				return {
					title,
					id,
					url,
					srcSet: srcSet ?? "",
					width: Number(width),
					height: Number(height),
					original: {
						url: originalUrl,
						width: Number(originalWidth),
						height: Number(originalHeight),
					},
				}
			})
		})
		.catch(() => {
			return new Array<gif>()
		})
}
