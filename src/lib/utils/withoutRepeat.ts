import { gif } from "@types"

export default function withoutRepeat(...gifs: gif[]) {
	const set = new Set()

	return gifs.filter((gif) => {
		if (set.has(gif.id)) return false

		set.add(gif.id)
		return true
	})
}
