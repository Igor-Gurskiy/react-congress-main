import { easePoly } from 'd3-ease'
import React, { useEffect, useState } from 'react'
import { useSpring } from 'react-spring'
import { useUIStore } from '@/stores/uiStore'
import Help from '@/components/Help/Help'
import ModalService from '@/components/shared/modal/ModalService'
import AntheliosOncoModal from '@/components/screens/lrp/modals/products/anthelios-onco/AntheliosOncoModal'
import DermallergoModal from '@/components/screens/lrp/modals/products/dermallergo/DermallergoModal'
import BaumeModal from '@/components/screens/lrp/modals/products/baume/BaumeModal'
import LipikarOncoModal from '@/components/screens/lrp/modals/products/lipikar-onco/LipikarOncoModal'

let timer: NodeJS.Timeout

const OncoInactivityShelf = () => {
	const [inactive, setInactive] = useState(false)
	const locked = useUIStore((state) => state.locked)

	const disableInactivity = () => {
		clearTimeout(timer)
		setInactive(false)
	}

	useEffect(() => {
		document.addEventListener('prevent-inactivity', disableInactivity, true)

		return () => {
			disableInactivity()
			document.removeEventListener(
				'prevent-inactivity',
				disableInactivity,
				true,
			)
		}
	}, [])

	useEffect(() => {
		if (locked) {
			timer = setTimeout(() => setInactive(true), 10000)
		} else {
			disableInactivity()
		}
		return () => {
			disableInactivity()
		}
	}, [locked])

	if (!inactive) return null

	return <Tips />
}

export default OncoInactivityShelf

const Tips = () => {
	const animation = useSpring({
		from: { opacity: 0, transform: 'scale(0.6)' },
		to: { opacity: 1, transform: 'scale(1)' },
		config: { duration: 700, easing: easePoly.exponent(2) },
	})

	return (
		<>
			<Help.Tip
				style={{ ...animation }}
				left="395px"
				top="180px"
				plus
				$p="8px"
				size={8}
				onClick={ModalService.open.bind(null, LipikarOncoModal)}
			/>

			<Help.Tip
				style={{ ...animation }}
				left="395px"
				top="275px"
				plus
				$p="8px"
				size={8}
				onClick={ModalService.open.bind(null, BaumeModal)}
			/>

			<Help.Tip
				style={{ ...animation }}
				left="395px"
				top="370px"
				plus
				$p="8px"
				size={8}
				onClick={ModalService.open.bind(null, DermallergoModal)}
			/>

			<Help.Tip
				style={{ ...animation }}
				left="395px"
				top="465px"
				plus
				$p="8px"
				size={8}
				onClick={ModalService.open.bind(null, AntheliosOncoModal)}
			/>
		</>
	)
}
