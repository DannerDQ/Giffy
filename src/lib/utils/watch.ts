import { useEffect, useRef, useState } from "react"

export default function watch() {
	const fromRef = useRef(null)
	const [isIntersected, setIntersection] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const { isIntersecting } = entries[0]

				setIntersection(isIntersecting)
			},
			{ rootMargin: "200px" }
		)
		
		if (fromRef.current) observer.observe(fromRef.current)

		return () => observer.disconnect()
	})

	return { fromRef, isIntersected }
}
