import { dynamicImport, dynamicImportState } from "@types"
import { useEffect, useState } from "react"

export default function awaitMasonry(promise: Promise<any>): dynamicImport {
	const [imported, setImported]: dynamicImportState = useState({ default: null, prototype: null })

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