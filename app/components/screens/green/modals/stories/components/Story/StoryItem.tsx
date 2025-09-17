import { IStoryItem } from '@/components/screens/green/modals/stories/stories'
import { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'

interface IStoryItemProps {
	item: IStoryItem
	scale: number
	isActiveSection: boolean
}

const StoryItem: FC<IStoryItemProps & HTMLAttributes<HTMLDivElement>> = ({
	item,
	scale,
	isActiveSection,
	...otherProps
}) => {
	const { component: Story, ad } = item

	return (
		<StoryItemWrapper>
			<StoryContainer {...otherProps}>
				<div
					style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}
				>
					<Story />
				</div>
			</StoryContainer>
			{ad && isActiveSection && (
				<AdText>
					Реклама {ad.advertiser}. ERID: {ad.erId}
				</AdText>
			)}
		</StoryItemWrapper>
	)
}
export default StoryItem

const StoryItemWrapper = styled.div`
	height: 100%;
	width: 100%;
`

const StoryContainer = styled.div`
	height: 100%;
	width: 100%;
	overflow: hidden;
	border-radius: 16px;
	background: #161616;
	user-select: none;
`

const AdText = styled.div`
	padding: 10px;

	color: #fff;
	text-align: center;

	font-size: 18px;
	font-weight: 300;
	line-height: 120%;
`
