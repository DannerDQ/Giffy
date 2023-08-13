type baseGif = {
	title: string
	id: string
}

type baseInfo = {
	url: string
	width: number
	height: number
	webp?: string
}

export type bruteGif = baseGif & {
	images: {
		original: baseInfo
		fixed_width: baseInfo
	}
}

export type gif = baseInfo &
		baseGif & {
			srcSet: string
			original: baseInfo
		}
