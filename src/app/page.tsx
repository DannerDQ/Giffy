import styles from "./app.module.css"
import TrendingSearchesCarrousel from "@component/TrendingSearchesCarrousel"
import TrendingGifs from "@component/trendingGifs"
import { TrendingSearchesContext } from "@contexts"
import { HotIcon, TrendingIcon } from "@icons"

export default async function App() {
	return (
		<section className={styles.app_container}>
			<section>
				<div className="title">
					<TrendingIcon />
					<h2>Trending Searches</h2>
				</div>
				<TrendingSearchesContext>
					<TrendingSearchesCarrousel />
				</TrendingSearchesContext>
			</section>
			<section className={styles.trending_gifs_wrapper}>
				<div className="title">
					<HotIcon />
					<h2>Trending Gifs</h2>
				</div>
				<TrendingGifs />
			</section>
		</section>
	)
}
