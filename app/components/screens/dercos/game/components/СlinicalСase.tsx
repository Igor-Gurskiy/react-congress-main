import React from 'react'
import styled from 'styled-components'
import media from '@/utils/media'

import closeIcon from '/public/assets/images/dercos/linegame/close__clinic-case.svg'
import ScrollbarsBody from '@/components/ScollbarsBody'

const ClinicalCase = ({ srcOne, srcTwo, doctor, patient, lastDay, close }) => {
	return (
		<ClinicalCaseContent>
			<ScrollbarsBody factor={-60}>
				<CloseButton onClick={close}>
					<img className="close-icon" src={closeIcon.src} alt="" />
					<span>закрыть</span>
				</CloseButton>
				<ClinicalPhoto>
					<BeforeBlock>
						<img
							className="first__photo"
							src={srcOne}
							alt="До"
							loading="eager"
						/>
						<p>День 0</p>
					</BeforeBlock>
					<AfterBlock>
						<img
							className="second__photo"
							src={srcTwo}
							alt="После"
							loading="eager"
						/>
						<p>День {lastDay}</p>
					</AfterBlock>
				</ClinicalPhoto>
				<ClinicalCaseDescrContainer>
					<div>
						<p>Врач</p>
						<p>Пациент</p>
					</div>
					<ClinicalCaseDescr>
						<p>{doctor}</p>
						<p>{patient}</p>
					</ClinicalCaseDescr>
				</ClinicalCaseDescrContainer>
			</ScrollbarsBody>
		</ClinicalCaseContent>
	)
}

export default ClinicalCase

const ClinicalCaseContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 872px;
	padding: 32px;
	background-color: #fff;
	box-shadow: 30px 26px 61px -33px rgba(0, 0, 0, 0.25);

	${media.lg`	
		max-width: 736px;
		padding:  16px;
		`}
	${media.md`	
		max-width: 100%;
		min-height: 100%;
		position: absolute;
		overflow: auto;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 6;
		`}
`
const CloseButton = styled.div`
	display: flex;

	align-items: center;
	margin-bottom: 16px;
	cursor: pointer;
	max-width: 140px;

	span {
		color: #000;
		font-size: 16px;
		font-weight: 300;
		line-height: 120%;
		letter-spacing: 1.12px;
		text-transform: uppercase;
	}

	${media.md`	
	margin-bottom: 0px;

		`}
`
const ClinicalPhoto = styled.div`
	display: flex;
	justify-content: center;

	margin-bottom: 16px;
	${media.md`	
		flex-direction: column;
		align-items:center;
	`}
`
const BeforeBlock = styled.div`
	text-align: center;
	margin-right: 8px;

	img {
		max-width: 350px;
		max-height: 350px;
	}

	p {
		font-size: 20px;
		font-weight: 300;
		line-height: 120%;
		${media.lg`	
	font-size: 16px;
	
	img {
	max-width: 280px;
		max-height: 280px;}
		`}
	}

	${media.md`
	margin-bottom: 30px;	
		`}
`
const AfterBlock = styled.div`
	text-align: center;

	img {
		max-width: 350px;
		max-height: 350px;
	}

	p {
		font-size: 20px;
		font-weight: 300;
		line-height: 120%;
		${media.lg`	
	font-size: 16px;
	
	img {
	max-width: 280px;
		max-height: 280px;}
		`}
	}
`
const ClinicalCaseDescrContainer = styled.div`
	display: flex;

	div:first-child {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		margin-right: 10px;
		text-align: right;
		color: #000;
		font-size: 20px;
		font-weight: 800;
		line-height: 120%;
		${media.lg`	
	font-size: 16px;
		`}
	}
`
const ClinicalCaseDescr = styled.div`
	color: #000;
	font-size: 20px;
	font-weight: 300;
	line-height: 120%;
	${media.lg`	
	font-size: 16px;
		`}
`
