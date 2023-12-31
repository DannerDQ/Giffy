import styles from "./styles.module.css"
import { gif as gifType } from "@types"
import getRandomBgColor from "@util/getRandomBgColor"
import { memo } from "react"

function Gif({ gif }: { gif: gifType }) {
	const { id, srcSet, url, title, width, height } = gif
	const backgroundColor = getRandomBgColor()

	function handleClick() {
		location.href = `/${id}`
	}

	return (
		<div
			style={{ backgroundColor, width, height }}
			className={styles.gif}
			data-id={gif.id}
			onClick={handleClick}
			onKeyDown={() => {}}
		>
			<picture>
				<source type="image/webp" srcSet={srcSet} />
				<img src={url} alt={title} />
			</picture>
		</div>
	)
}

export default memo(Gif, (prev, curr) => {
	return prev.gif.url === curr.gif.url
})
