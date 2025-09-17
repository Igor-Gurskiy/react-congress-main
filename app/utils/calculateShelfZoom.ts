type CalculateShelfZoomPropsType = {
	width: number
	height: number
	scaleRatio: number
	offset: number
	areaH: number
	areaW: number
	translate?: number
}

const calculateShelfZoom = ({
	width,
	height,
	scaleRatio,
	offset = 600,
	areaH = 350,
	areaW = 270,
	translate = -50,
}: CalculateShelfZoomPropsType) => {
	// e.preventDefault()
	// work area params
	const AREA_H = areaH
	const AREA_W = areaW
	const AREA_OFFSET_LEFT = offset

	const zoomInH = height / (AREA_H * scaleRatio)
	const zoomInW = width / ((AREA_W + 100) * scaleRatio)

	const centerX = width / 2
	const xIn = -AREA_OFFSET_LEFT - AREA_W / 2 + centerX
	const yTrans = translate
	const finalScale =
		zoomInH > zoomInW ? scaleRatio * zoomInH : scaleRatio * zoomInW

	return { x: xIn, y: yTrans, scale: finalScale }
}

export default calculateShelfZoom

export const calculateZoomToPoint = ({
	width,
	height,
	scaleRatio,
	offset = 600,
	areaH = 350,
	areaW = 270,
	translate = -50,
}: CalculateShelfZoomPropsType) => {
	// e.preventDefault()
	// work area params
	const AREA_H = areaH
	const AREA_W = areaW
	const AREA_OFFSET_LEFT = offset

	const zoomInH = height / AREA_H
	const zoomInW = width / AREA_W

	const centerX = width / 2
	const xIn = -AREA_OFFSET_LEFT - AREA_W / 2 + centerX
	const finalScale = Math.min(zoomInH, zoomInW)
	const yTrans = translate * finalScale

	// zoomInH > zoomInW ? scaleRatio * zoomInH : scaleRatio * zoomInW

	return { x: xIn, y: yTrans, scale: finalScale }
}
