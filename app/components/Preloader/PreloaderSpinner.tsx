import styled, { keyframes } from 'styled-components'

const PreloaderSpinner = () => {
	return (
		<Spinner>
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
		</Spinner>
	)
}

export default PreloaderSpinner

const rollerAniamtion = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
	display: inline-block;
	position: relative;
	width: 40px;
	height: 40px;

	div {
		animation: ${rollerAniamtion} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		transform-origin: 20px 20px;

		&::after {
			content: ' ';
			display: block;
			position: absolute;
			width: 5px;
			height: 5px;
			border-radius: 50%;
			background: #012d82;
			margin: -2px 0 0 -2px;
		}

		&:nth-child(1) {
			animation-delay: -0.036s;

			&::after {
				top: 32px;
				left: 32px;
			}
		}

		&:nth-child(2) {
			animation-delay: -0.072s;

			&::after {
				top: 34px;
				left: 28px;
			}
		}

		&:nth-child(3) {
			animation-delay: -0.108s;

			&::after {
				top: 36px;
				left: 24px;
			}
		}

		&:nth-child(4) {
			animation-delay: -0.144s;

			&::after {
				top: 36px;
				left: 20px;
			}
		}

		&:nth-child(5) {
			animation-delay: -0.18s;

			&::after {
				top: 36px;
				left: 16px;
			}
		}

		&:nth-child(6) {
			animation-delay: -0.216s;

			&::after {
				top: 34px;
				left: 12px;
			}
		}

		&:nth-child(7) {
			animation-delay: -0.252s;

			&::after {
				top: 32px;
				left: 9px;
			}
		}

		&:nth-child(8) {
			animation-delay: -0.288s;

			&::after {
				top: 28px;
				left: 6px;
			}
		}
	}
`
