import styles from "./style.module.css"
import Link from "next/link"

export default function Glitch({ text = "GIFFY" }) {
	return (
		<section>
			<Link href="/">
				<div className={styles.glitch_container}>
					<p className={styles.glitch} data-text={text}>
						<span aria-hidden="true">{text}</span>
						{text}
						<span aria-hidden="true">{text}</span>
					</p>
				</div>
			</Link>
			<br />
			<Link href="https://giphy.com/" target="_blank" style={{ position: "relative", zIndex: 3 }}>
				<img src="/powered_by_giphy.gif" alt="Powered by Giphy" />
			</Link>
		</section>
	)
}
