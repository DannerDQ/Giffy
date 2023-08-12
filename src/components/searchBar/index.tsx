"use client"

import styles from "./styles.module.css"
import { SearchIcon } from "@icons"
import { FormEvent, useRef } from "react"

export default function SearchBar() {
	const input = useRef(null)

	function handleSubmit(event: FormEvent) {
		event.preventDefault()

		const query = input.current.value
		location.href = `/search/${query}`
	}

	return (
		<form className={styles.search_container} autoComplete="on" onSubmit={handleSubmit}>
			<label className={styles.search_label}>
				<input
					ref={input}
					type="search"
					className={styles.search_input}
					placeholder="Type something here..."
					required
					spellCheck
				/>
				<button className={styles.search_button} type="submit">
					<SearchIcon />
				</button>
			</label>
		</form>
	)
}
