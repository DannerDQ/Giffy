"use client"

import ListOfGifs from "@component/listOfGifs"
import Loader from "@component/loader"
import Observer from "@component/observer"
import { TRENDING_GIFS } from "@constants"
import { gifsContext } from "@contexts"
import getGifs from "@util/getGifs"
import withoutRepeat from "@util/withoutRepeat"
import { useContext, useEffect } from "react"

export default function TrendingGifs() {
	const { gifs = [], offset = 0, setGifs, setOffset } = useContext(gifsContext)

	useEffect(() => {
		const url = `${TRENDING_GIFS}&&offset=${offset * 35}`

		getGifs(url).then((trendingGifs) => {
			setGifs?.(withoutRepeat(...gifs, ...trendingGifs))
		})
	}, [offset])

	return gifs.length === 0 ? (
		<Loader />
	) : (
		<>
			<ListOfGifs gifs={gifs} />
			<Observer setOffset={setOffset} />
		</>
	)
}
