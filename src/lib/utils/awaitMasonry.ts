import { Dispatch, SetStateAction, useEffect, useState } from "react"

type dynamicImport = {
	default: any
	prototype: any
}

export default function awaitMasonry(promise: any): dynamicImport {
	const [imported, setImported]: [dynamicImport, Dispatch<SetStateAction<dynamicImport>>] =
		useState({ default: null, prototype: null })

	useEffect(() => {
		let cancelled = false
		const awaitImport = async () => {
			const result = await promise

			if (!cancelled && result && imported.default === null) {
				setImported(result)
			}
		}
		awaitImport()

		return () => {
			cancelled = true
		}
	}, [imported])

	return imported
}