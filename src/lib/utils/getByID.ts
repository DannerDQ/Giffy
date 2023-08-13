import { GIPHY, KEY } from "@constants"
import { bruteGif, gif } from "@types"

export default function getByID(id: string): Promise<gif> {
	const url = `${GIPHY}/v1/gifs/${id}?api_key=${KEY}`

	return fetch(url)
		.then((res) => res.json())
		.then(({ data }: { data: bruteGif }) => {
			const {
				title,
				images: { original },
			} = data

			const { url, height, width, webp } = original

			return {
				id,
				title,
				url,
				height: Number(height),
				width: Number(width),
				srcSet: webp ?? "",
				original: { url: "", width: 0, height: 0 },
			}
		})
		.catch(() => {
			return {
				id,
				title: "",
				url: "",
				height: 0,
				width: 0,
				srcSet: "",
				original: { url: "", width: 0, height: 0 },
			}
		})
}
