import { TRENDING_SEARCH_TERMS } from "@constants"

export default function getTrendingSearchTerms(): Promise<string[]> {
	return fetch(TRENDING_SEARCH_TERMS)
		.then((res) => res.json())
		.then((trendingSearchTerms: { data: string[] }) => trendingSearchTerms.data)
		.catch(() => {
			return new Array<string>()
		})
}
