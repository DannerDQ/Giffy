"use client"

import styles from "./styles.module.css"
import Gif from "@component/gif"
import { gif } from "@types"
import Masonry from "masonry-layout"
import { useEffect, useRef } from "react"

export default function ListOfGifs({ gifs }: { gifs: gif[] }) {
	const listOfGifs = useRef(document.createElement("ul"))

	useEffect(() => {
		new Masonry(listOfGifs.current, {
			columnWidth: 200,
			itemSelector: ".selector",
			fitWidth: true,
			gutter: 20,
		})
	})

	return (
		<ul className={styles.list_of_gifs} ref={listOfGifs}>
			{gifs.map((gif) => {
				return (
					<li key={gif.id} className="selector">
						<Gif gif={gif} />
					</li>
				)
			})}
		</ul>
	)
}
