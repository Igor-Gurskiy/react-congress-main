import React from 'react'
import { GameButton } from '@/components/screens/vichy/game/components/GameButton'
import styles from './WelcomeModal.module.scss'
import styled from 'styled-components'
import ModalService from '@/components/shared/modal/ModalService'
import GameRulesModal from '@/components/screens/green/game/components/modals/GameRules/GameRulesModal'
import media from '@/utils/media'

const Welcome = ({ close }) => {
	const handleNextModal = () => {
		close()
		setTimeout(() => ModalService.open(GameRulesModal), 100)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>Практикум по сортировке вторсырья</div>

			<div className={styles.text}>
				Ловите в контейнер «Несу перемены»
				<br />
				упаковки от косметики
			</div>
			<div className={styles.controls} onClick={handleNextModal}>
				<Button button>Правила сортировки</Button>
			</div>
			<Ad>Реклама skin.ru ERID: 2SDnjd6163A</Ad>
		</div>
	)
}

export default Welcome

const Button = styled(GameButton)`
	max-width: 100%;
	width: auto;
	padding: 6px 24px;
	border-radius: 8px;
`
const Ad = styled.div`
	margin-top: 8px;
	color: #141414;
	text-align: center;
	font-size: 14px;
	font-weight: 300;
	line-height: 120%;
	${media.sm`
	font-size: 12px;
  `}
`
