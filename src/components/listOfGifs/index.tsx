"use client"

import styles from "./styles.module.css"
import Gif from "@component/gif"
import { gif } from "@types"
import awaitMasonry from "@util/awaitMasonry"
import { useEffect, useRef } from "react"

export default function ListOfGifs({ gifs }: { gifs: gif[] }) {
	const listOfGifs = useRef(null)
	const { default: Masonry } = awaitMasonry(import("masonry-layout"))
	let masonry = null

	useEffect(() => {
		if (listOfGifs.current && Masonry) {
			new Masonry(listOfGifs.current, {
				columnWidth: 200,
				itemSelector: ".selector",
				fitWidth: true,
				gutter: 20,
			})
		}
	}, [Masonry, gifs])

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
