"use client"

import styles from "./styles.module.css"
import TrendingSearches from "@component/trendingSearches"
import { trendingSearchesContext } from "@contexts"
import { LeftIcon, RightIcon } from "@icons"
import isInRange from "@util/isInRange"
import { useContext, useEffect, useRef, useState } from "react"

export default function TrendingSearchesCarrousel() {
	const { trendingSearches = [] } = useContext(trendingSearchesContext)
	const ul = useRef(document.createElement("ul"))
	const [state, setState] = useState(1)
	const [ulState, setUlState] = useState({
		scrollLeft: 0,
		scrollWidth: 0,
		clientWidth: 0,
	})

	useEffect(() => {
		const { scrollLeft, scrollWidth, clientWidth } = ulState

		if (!(scrollLeft && scrollWidth && clientWidth)) return

		const maxScroll = scrollWidth - clientWidth
		if (isInRange(scrollLeft, { max: 50 })) {
			state - 1 && setState(1)
		} else if (isInRange(scrollLeft, { min: maxScroll - 50, max: maxScroll })) {
			state + 1 && setState(-1)
		} else {
			state && setState(0)
		}
	}, [ulState])

	function prev() {
		const { scrollLeft, clientWidth } = ul.current

		ul.current.scroll(Math.max(0, scrollLeft - clientWidth / 2), 0)
	}

	function next() {
		const { scrollLeft, clientWidth, scrollWidth } = ul.current

		ul.current.scroll(Math.min(scrollWidth - clientWidth, scrollLeft + clientWidth / 2), 0)
	}

	function updateUlState() {
		const { scrollLeft, scrollWidth, clientWidth } = ul.current

		setUlState({ scrollLeft, scrollWidth, clientWidth })
	}

	return (
		<section className={styles.trending_searches_container}>
			<span
				style={{
					width: state === 1 ? "0px" : "auto",
				}}
				onClick={prev}
				onKeyUp={function () {}}
			>
				<LeftIcon />
			</span>
			<TrendingSearches trendingSearches={trendingSearches} onScroll={updateUlState} refer={ul} />
			<span
				style={{
					width: state === -1 ? "0px" : "auto",
				}}
				onClick={next}
				onKeyUp={function () {}}
			>
				<RightIcon />
			</span>
		</section>
	)
}
