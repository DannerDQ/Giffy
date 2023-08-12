import "./globals.css"
import Glitch from "@component/glitch"
import SearchBar from "@component/searchBar"
import { GifsContext } from "@contexts"
import type { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
	title: "GIFFY",
	description: "Find the perfect gif for every occasion. Explore a universe of gif's.",
}

export default function RootLayout({
	children,
}: {
	children: ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<header>
					<div>
						<Glitch />
						<SearchBar />
					</div>
				</header>
				<main>
					<GifsContext>{children}</GifsContext>
				</main>
			</body>
		</html>
	)
}
