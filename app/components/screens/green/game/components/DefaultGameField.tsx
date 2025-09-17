import styled from 'styled-components'
import React from 'react'

const DefaultGameField = () => {
	return (
		<Container>
			<Border />
			<FieldContainer>
				<div
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						background: 'url(/assets/images/green/game/stripes.svg)',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
					}}
				/>

				<HandsContainer>
					<div>
						<img alt="container" src="/assets/images/green/game/hand.svg" />
					</div>
					<div>
						<img alt="container" src="/assets/images/green/game/hand.svg" />
					</div>
				</HandsContainer>
			</FieldContainer>
		</Container>
	)
}

export default DefaultGameField


const HandsContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;

	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	div {
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: 100%;
			height: calc(40 * var(--size));
		}

		&:last-child {
			transform: scaleX(-1);
		}
	}

	@media screen and (max-width: 1023.98px) {
		top: 10%;
	}
`

const Container = styled.div`
	position: absolute;

	bottom: 0;
	width: 90vw;
	height: 90vh;
`

const FieldContainer = styled.div`
	position: absolute;
	bottom: 0;
	width: 90vw;
	height: 90vh;

	//background: ;

	backdrop-filter: blur(48px);
	clip-path: polygon(0% 0%, 2.5% 0.5%, 5% 1%, 7.5% 1.5%, 10% 2%, 12.5% 2.5%, 15% 3%, 17.5% 3.5%, 20% 4%, 22.5% 4.25%, 25% 4.5%, 27.5% 4.75%, 30% 5%, 32.5% 5.25%, 35% 5.5%, 37.5% 5.75%, 40% 6%, 50% 6%, 60% 6%, 62.5% 5.75%, 65% 5.5%, 67.5% 5.25%, 70% 5%, 72.5% 4.75%, 75% 4.5%, 77.5% 4.25%, 80% 4%, 82.5% 3.5%, 85% 3%, 87.5% 2.5%, 90% 2%, 92.5% 1.5%, 95% 1%, 97.5% 0.5%, 100% 0%, 100% 100%, 0% 100%);
	border: 20px solid #fff;
	//border-top-left-radius: 16px;
	//border-top-right-radius: 16px;
	border-bottom: none;
	border-top: none;


	@media screen and (max-width: 1023.98px) {
		border: 16px solid #fff;
		border-bottom: none;
		border-top: none;
	}

	@media screen and (max-width: 767.98px) {
		border: 8px solid #fff;
		border-bottom: none;
		border-top: none;
	}

  }
`

const Border = styled.div`
  position: absolute;
  top: -20px; 
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 10%, rgba(255,255,255,0) 10%);
  width: 90vw; 
  height: 90vh; 
  border: 20px solid #fff;
  border-bottom: none;
  border-left: none;
  border-rigth: none;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  clip-path: polygon(0% 0%, 2.5% 0.5%, 5% 1%, 7.5% 1.5%, 10% 2%, 12.5% 2.5%, 15% 3%, 17.5% 3.5%, 20% 4%, 22.5% 4.25%, 25% 4.5%, 27.5% 4.75%, 30% 5%, 32.5% 5.25%, 35% 5.5%, 37.5% 5.75%, 40% 6%, 50% 6%, 60% 6%, 62.5% 5.75%, 65% 5.5%, 67.5% 5.25%, 70% 5%, 72.5% 4.75%, 75% 4.5%, 77.5% 4.25%, 80% 4%, 82.5% 3.5%, 85% 3%, 87.5% 2.5%, 90% 2%, 92.5% 1.5%, 95% 1%, 97.5% 0.5%, 100% 0%, 100% 100%, 0% 100%);

  @media screen and (max-width: 1023.98px) {
	top: -16px;
	border: 16px solid #fff;
	border-bottom: none;
	border-left: none;
    border-rigth: none;
  }

  @media screen and (max-width: 767.98px) {
	top: -8px;
	border: 8px solid #fff;
	border-bottom: none;
	border-left: none;
    border-rigth: none;
	border-top-left-radius: 0px;
  	border-top-right-radius: 0px;
  }
`;
