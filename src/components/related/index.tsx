import ListOfGifs from "@component/listOfGifs"
import Loader from "@component/loader"
import Observer from "@component/observer"
import { RELATED_GIFS } from "@constants"
import { gifsContext } from "@contexts"
import getGifs from "@util/getGifs"
import withoutRepeat from "@util/withoutRepeat"
import { useContext, useEffect } from "react"

export default function Related({ id }: { id: string }) {
	const { gifs = [], setGifs, offset = 0, setOffset } = useContext(gifsContext)

	useEffect(() => {
		const url = `${RELATED_GIFS}&gif_id=${id}&offset=${offset * 35}`

		getGifs(url).then((relatedGifs) => {
			setGifs?.(withoutRepeat(...gifs, ...relatedGifs))
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
