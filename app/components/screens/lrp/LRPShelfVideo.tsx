import ModalService from '@/components/shared/modal/ModalService'
import VideoModal from '@/components/shared/video-modal/VideoModal'
import { EventsEnum } from '@/api/tracker'
import styled from 'styled-components'
import { FC, SVGProps } from 'react'

const LrpShelfVideo: FC<SVGProps<SVGElement>> = ({
	onMouseEnter,
	onMouseLeave,
}) => {
	return (
		<VideoWrapper
			width="328"
			height="656"
			viewBox="0 0 328 656"
			fill="none"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={() => {
				ModalService.open(VideoModal, {
					videoId: 'meUmfwF_tGU',
					trackerId: EventsEnum.lrpVideoVisit,
					trackerProgressId: EventsEnum.lrpVideoProgress,
				})
			}}
		>
			<path
				d="M327.5 656C240.642 656 157.341 621.443 95.9225 559.931C34.5044 498.419 -2.41624e-06 414.991 0 328C2.41624e-06 241.009 34.5044 157.581 95.9225 96.069C157.341 34.557 240.642 -1.03736e-06 327.5 0L327.5 328L327.5 656Z"
				fill="transparent"
				fillOpacity="0"
			/>
		</VideoWrapper>
	)
}

export default LrpShelfVideo

const VideoWrapper = styled.svg`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 12010;
	cursor: pointer;
	pointer-events: visible;
`
