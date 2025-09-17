import styled, { css } from 'styled-components'

const SkinCeuticalsClose = ({ ...otherProps }) => {
	return (
		<CloseWrapper {...otherProps} $position="absolute" style={{ zIndex: 7 }}>
			<svg
				width="607"
				height="504"
				viewBox="0 0 607 504"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M17 504V405H22.5L71.5 488V500.5L576 479.5L567 471V393.5H570L598.5 467V477.5H603V92H606.5V68L2.5 0V32.5H0.5V504H17Z"
					fill="#313131"
					fillOpacity="0.6"
				/>
			</svg>
		</CloseWrapper>
	)
}

const VichyClose = ({ ...otherProps }) => {
	return (
		<CloseWrapper {...otherProps} $position="absolute" style={{ zIndex: 7 }}>
			<svg
				width="560"
				height="428"
				viewBox="0 0 560 428"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<mask
					id="mask0_6019_27599"
					style={{ maskType: 'alpha' }}
					maskUnits="userSpaceOnUse"
					x="4"
					y="0"
					width="552"
					height="420"
				>
					<path
						d="M6.91743 412.745L4.83008 1.91611L554.877 0.975852V419.245L6.91743 412.745Z"
						fill="#D9D9D9"
						stroke="black"
					/>
				</mask>
				<g mask="url(#mask0_6019_27599)">
					<rect
						x="-1265.64"
						y="-593.257"
						width="2499"
						height="1249"
						fill="black"
						fillOpacity="0.3"
						stroke="black"
					/>
				</g>
			</svg>
		</CloseWrapper>
	)
}

const DercosClose = ({ ...otherProps }) => {
	return (
		<CloseWrapper {...otherProps} $position="absolute" style={{ zIndex: 7 }}>
			<svg
				width="538"
				height="462"
				viewBox="0 0 538 462"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<mask
					id="mask0_6019_27612"
					style={{ maskType: 'alpha' }}
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="538"
					height="462"
				>
					<path
						d="M537.575 0.806213L534.892 461.048C435.877 455.513 137.579 445.559 0.806641 441.273V18.5238L537.575 0.806213Z"
						fill="#D9D9D9"
					/>
				</mask>
				<g mask="url(#mask0_6019_27612)">
					<rect
						x="-1882"
						y="-574.096"
						width="2500"
						height="1250"
						fill="black"
						fillOpacity="0.3"
					/>
				</g>
			</svg>
		</CloseWrapper>
	)
}

const LRPClose = ({ ...otherProps }) => {
	return (
		<CloseWrapper {...otherProps} $position="absolute" style={{ zIndex: 7 }}>
			<svg
				width="519"
				height="407"
				viewBox="0 0 519 407"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2 31L4 407L516 400V44L517 43L518.5 15L0 0.5V29.5L2 31Z"
					fill="#313131"
					fillOpacity="0.6"
				/>
			</svg>
		</CloseWrapper>
	)
}

const Close = ({ children }) => <div>{children}</div>

Close.SkinCeuticals = SkinCeuticalsClose
Close.Vichy = VichyClose
Close.Dercos = DercosClose
Close.LRP = LRPClose

export default Close

type CloseWrapperPropsType = {
	$left?: string
	$right?: string
	$top?: string
	$bottom?: string
	$position?: string
}

const CloseWrapper = styled.div<CloseWrapperPropsType>`
	${({ $left }) =>
		$left &&
		css`
			left: ${$left}px;
		`}
	${({ $right }) =>
		$right &&
		css`
			right: ${$right}px;
		`}
  ${({ $top }) =>
		$top &&
		css`
			top: ${$top}px;
		`}
  ${({ $bottom }) =>
		$bottom &&
		css`
			bottom: ${$bottom}px;
		`}
  ${({ $position }) =>
		$position &&
		css`
			position: ${$position};
		`}
`
