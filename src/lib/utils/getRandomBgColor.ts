import { BG_COLORS } from "@constants"

export default function getRandomBgColor(max = BG_COLORS.length) {
	const index = Math.floor(Math.random() * max)

	return BG_COLORS[index]
}
