export const KEY = "6vyi06hYDqfrLJOHnaermAeDggVJgsYK"
export const GIPHY = "https://api.giphy.com"
export const TRENDING_SEARCH_TERMS = `${GIPHY}/v1/trending/searches?api_key=${KEY}`
export const TRENDING_GIFS = `${GIPHY}/v1/gifs/trending?api_key=${KEY}&limit=35&bundle=messaging_non_clips`
export const SEARCH_GIFS = `${GIPHY}/v1/gifs/search?api_key=${KEY}&limit=35&bundle=clips_grid_picker`
export const RELATED_GIFS = `${GIPHY}/v1/gifs/related?api_key=${KEY}`

export const BG_COLORS = [
	"rgb(0, 255, 153)", // Green
	"rgb(0, 204, 255)", // SkyBlue
	"rgb(153, 51, 255)", // Violet
	"rgb(255, 102, 102)", // Red
	"rgb(255, 243, 92)", // Yellow
]
