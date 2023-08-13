import Loader from "@component/loader"
import watch from "@util/watch"
import { Dispatch, SetStateAction, useEffect } from "react"

export default function Observer({ setOffset }: { setOffset?: Dispatch<SetStateAction<number>> }) {
	const { fromRef, isIntersected } = watch()

	useEffect(() => {
		if (isIntersected && setOffset) setOffset((prev) => prev + 1)
	}, [isIntersected])

	return (
		<div ref={fromRef}>
			<Loader />
		</div>
	)
}
