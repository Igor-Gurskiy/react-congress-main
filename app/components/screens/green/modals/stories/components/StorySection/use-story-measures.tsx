import { useWindowSize } from 'react-use'

const GAP_BETWEEN_STORY_SECTIONS = 90
export const useStoryMeasures = (position: number) => {
	const { width, height } = useWindowSize()

	const storyHeight = height - 120
	const storyWidth = storyHeight * 0.56
	const storyScale = position != 0 ? 0.4 : 1
	const posOffset = getPositionOffset(position, storyWidth, storyScale)
	const storyItemScale = Math.max(storyHeight / 583, storyWidth / 291)

	const storyTranslateX = width / 2 - storyWidth / 2 + posOffset

	const isVisible =
		width + storyWidth * 2 + GAP_BETWEEN_STORY_SECTIONS > storyTranslateX

	return {
		height: storyHeight,
		width: storyWidth,
		translateX: storyTranslateX,
		scale: storyScale,
		itemScale: storyItemScale,
		isVisible,
	}
}

const getPositionOffset = (
	pos: number,
	storyWidth: number,
	storyScale: number,
) => {
	if (pos === 0) return 0

	const currentStoryOffset =
		pos > 0 ? storyWidth + GAP_BETWEEN_STORY_SECTIONS : 0
	const offsetPos = pos > 0 ? pos - 1 : pos

	return (
		currentStoryOffset +
		offsetPos * (storyWidth * storyScale + GAP_BETWEEN_STORY_SECTIONS)
	)
}
