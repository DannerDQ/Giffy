"use client"

import styles from "./styles.module.css"
import ListOfGifs from "@component/listOfGifs"
import Loader from "@component/loader"
import Observer from "@component/observer"
import { SEARCH_GIFS } from "@constants"
import { gifsContext } from "@contexts"
import { SearchResultsIcon } from "@icons"
import getGifs from "@util/getGifs"
import withoutRepeat from "@util/withoutRepeat"
import { useContext, useEffect, useState } from "react"

export default function SearchResults({ params: { query } }: { params: { query: string } }) {
	const { gifs = [], setGifs, offset = 0, setOffset } = useContext(gifsContext)
	const [endPagination, setEndPagination] = useState(false)

	useEffect(() => {
		const url = `${SEARCH_GIFS}&&q=${query}&&offset=${offset * 35}`

		getGifs(url).then((results) => {
			if (results.length === 0) {
				setEndPagination(true)
				return
			}

			setGifs?.(withoutRepeat(...gifs, ...results))
		})
	}, [offset, query])

	return (
		<section className={styles.search_results}>
			<div className="title">
				<SearchResultsIcon />
				<h2>{decodeURIComponent(query)}</h2>
			</div>
			{gifs.length === 0 ? (
				<Loader />
			) : (
				<>
					<ListOfGifs gifs={gifs} />
					{endPagination ? <></> : <Observer setOffset={setOffset} />}
				</>
			)}
		</section>
	)
}
