import { easePoly } from 'd3-ease'
import React, { useEffect, useState } from 'react'
import { useSpring } from 'react-spring'
import { useUIStore } from '@/stores/uiStore'
import Help from '@/components/Help/Help'
import ModalService from '@/components/shared/modal/ModalService'
import TolerianeModal from '@/components/screens/lrp/modals/products/toleriane/TolerianeModal'
import LipikarModal from '@/components/screens/lrp/modals/products/lipikar/LipikarModal'
import LipikarModalTwo from '@/components/screens/lrp/modals/products/lipikar/LipikarModalTwo'
import CicaplastModal from '@/components/screens/lrp/modals/products/cicaplast/CicaplastModal'
import AntheliosModal from '@/components/screens/lrp/modals/products/anthelios/AntheliosModal'

let timer: NodeJS.Timeout

const AllergInactivityShelf = () => {
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
			timer = setTimeout(() => setInactive(true), 100)
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

export default AllergInactivityShelf

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
				left="380px"
				top="175px"
				plus
				$p="8px"
				size={8}
				onClick={ModalService.open.bind(null, TolerianeModal)}
			/>

			<Help.Tip
				style={{ ...animation }}
				left="380px"
				top="285px"
				plus
				$p="8px"
				size={8}
				onClick={ModalService.open.bind(null, LipikarModal)}
			/>

			<Help.Tip
				style={{ ...animation }}
				left="505px"
				top="285px"
				plus
				$p="8px"
				size={8}
				onClick={ModalService.open.bind(null, LipikarModalTwo)}
			/>

			<Help.Tip
				style={{ ...animation }}
				left="380px"
				top="390px"
				plus
				$p="8px"
				size={8}
				onClick={ModalService.open.bind(null, CicaplastModal)}
			/>

			<Help.Tip
				style={{ ...animation }}
				left="380px"
				top="490px"
				plus
				$p="8px"
				size={8}
				onClick={ModalService.open.bind(null, AntheliosModal)}
			/>
		</>
	)
}
