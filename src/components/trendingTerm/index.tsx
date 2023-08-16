import styles from "./styles.module.css"
import { BG_COLORS } from "@constants"
import getRandomBgColor from "@util/getRandomBgColor"
import Link from "next/link"

export default function TrendingTerm({ text }: { text: string }) {
	const bg_color = getRandomBgColor(BG_COLORS.length - 1)

	return (
		<li style={{ backgroundColor: bg_color }} className={styles.trending_term}>
			<Link href={`/search/${text}`}>
				<h3>{text}</h3>
			</Link>
		</li>
	)
}
