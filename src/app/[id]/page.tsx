"use client"

import styles from "./styles.module.css"
import Gif from "@component/gif"
import Loader from "@component/loader"
import Related from "@component/related"
import { DownloadIcon, RelatedIcon } from "@icons"
import { gif as gifType } from "@types"
import getByID from "@util/getByID"
import { useEffect, useState } from "react"

export default function ({ params: { id } }: { params: { id: string } }) {
	const [loading, setLoading] = useState(true)
	const [gif, setGif] = useState({
		url: "",
		id: "",
		title: "",
		srcSet: "",
		height: 0,
		width: 0,
		original: { url: "", width: 0, height: 0 },
	})

	useEffect(() => {
		const storageGifs = localStorage.getItem("gifs")

		if (storageGifs) {
			const gifs = JSON.parse(storageGifs)
			const storageGif: gifType | undefined = gifs.find((gif: gifType) => gif.id === id)

			if (storageGif) {
				const {
					id,
					title,
					original: { url, webp: srcSet, height, width },
				} = storageGif
				setGif({
					id,
					title,
					srcSet: srcSet ?? "",
					url,
					height,
					width,
					original: { url: "", width: 0, height: 0 },
				})
				setLoading(false)
				return
			}
		}
		getByID(id).then((gif) => {
			setGif(gif)
			setLoading(false)
		})
	}, [id])

	function download() {
		fetch(gif.url)
			.then((res) => res.blob())
			.then((blob) => {
				const url = URL.createObjectURL(blob)
				const anchor = document.createElement("a")
				anchor.setAttribute("href", url)
				anchor.setAttribute("download", gif.title)

				anchor.click()
				URL.revokeObjectURL(url)
			})
	}

	return (
		<div className={styles.view_gif}>
			{loading ? (
				<Loader />
			) : (
				<>
					<h2>{gif.title}</h2>
					<div
						style={{
							width: gif.width,
							height: gif.height,
						}}
						className={styles.wrapper}
					>
						<Gif gif={gif} />
					</div>
					<span className={styles.download} onClick={download} onKeyDown={() => {}}>
						<DownloadIcon />
					</span>
					<div className={styles.related}>
						<div className="title">
							<RelatedIcon />
							<h2>Related GIFs</h2>
						</div>
						<Related id={id} />
					</div>
				</>
			)}
		</div>
	)
}
