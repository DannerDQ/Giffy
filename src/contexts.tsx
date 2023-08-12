"use client"

import Loader from "@component/loader"
import { gif } from "@types"
import getTrendingSearchTerms from "@util/getTrendingSearchTerms"
import {
	Context,
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useEffect,
	useState,
} from "react"

export const ratingContext: Context<{
	rating?: string
	setRating?: Dispatch<SetStateAction<string>>
}> = createContext({})

export const gifsContext: Context<{
	gifs?: gif[]
	setGifs?: Dispatch<SetStateAction<gif[]>>
	offset?: number
	setOffset?: Dispatch<SetStateAction<number>>
}> = createContext({})

export const trendingSearchesContext: Context<{
	trendingSearches?: string[]
}> = createContext({})

export function RatingContext({ children }: { children: ReactNode }) {
	const [rating, setRating] = useState("r")

	useEffect(() => {
		const storageRating = localStorage.getItem("rating")

		if (storageRating) setRating(storageRating)
		else localStorage.setItem("rating", rating)
	}, [])

	return <ratingContext.Provider value={{ rating, setRating }}>{children}</ratingContext.Provider>
}

export function GifsContext({ children }: { children: ReactNode }) {
	const [gifs, setGifs] = useState(Array<gif>)
	const [offset, setOffset] = useState(0)

	useEffect(() => {
		if (gifs.length !== 0) {
			localStorage.setItem("gifs", JSON.stringify(gifs))
		}
	}, [gifs])

	return (
		<gifsContext.Provider value={{ gifs, setGifs, offset, setOffset }}>
			{children}
		</gifsContext.Provider>
	)
}

export function TrendingSearchesContext({ children }: { children: ReactNode }) {
	const [trendingSearches, setTrendingSearches] = useState(Array<string>)

	useEffect(() => {
		getTrendingSearchTerms().then((trendingSearchTerms) => {
			setTrendingSearches(trendingSearchTerms)
		})
	}, [])

	return (
		<trendingSearchesContext.Provider value={{ trendingSearches }}>
			{trendingSearches.length === 0 ? <Loader /> : children}
		</trendingSearchesContext.Provider>
	)
}
