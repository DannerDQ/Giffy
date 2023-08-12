"use client"

import styles from "./styles.module.css"
import TrendingTerm from "@component/trendingTerm"
import { MutableRefObject, UIEventHandler, memo } from "react"

function TrendingSearches({
	trendingSearches = [],
	refer: ul,
	onScroll,
}: {
	trendingSearches: Array<string>
	refer: MutableRefObject<HTMLUListElement>
	onScroll: UIEventHandler
}) {
	return (
		<ul onScroll={onScroll} ref={ul} className={styles.trending_searches}>
			{trendingSearches.map((searchTerm) => {
				return <TrendingTerm text={searchTerm} key={crypto.randomUUID()} />
			})}
		</ul>
	)
}

export default memo(TrendingSearches, (prev, curr) => {
	return prev.trendingSearches === curr.trendingSearches
})
