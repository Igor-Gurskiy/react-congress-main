import { easePoly } from 'd3-ease'
import React, { useEffect, useState } from 'react'
import { useSpring } from 'react-spring'
import { useUIStore } from '@/stores/uiStore'
import Help from '@/components/Help/Help'
import ModalService from '@/components/shared/modal/ModalService'
import EffaclarModal from '@/components/screens/lrp/modals/products/effaclar/EffaclarModal'
import AntiageModal from '@/components/screens/lrp/modals/products/antiage/AntiageModal'
import LipikarModal from '@/components/screens/lrp/modals/products/lipikar/LipikarModal'
import LipikarModalTwo from '@/components/screens/lrp/modals/products/lipikar/LipikarModalTwo'
import TolerianeModal from '@/components/screens/lrp/modals/products/toleriane/TolerianeModal'
import TolerianeRosaliacModal from '@/components/screens/lrp/modals/products/toleriane-rosaliac/TolerianeRosaliacModal'
import CicaplastModal from '@/components/screens/lrp/modals/products/cicaplast/CicaplastModal'
import AntheliosModal from '@/components/screens/lrp/modals/products/anthelios/AntheliosModal'

let timer: NodeJS.Timeout

const BasicInactivityShelf = () => {
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

export default BasicInactivityShelf

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
				left="363px"
				top="140px"
				plus
				$p="6px"
				size={8}
				onClick={ModalService.open.bind(null, EffaclarModal)}
			/>

			<Help.Tip
				style={{ ...animation }}
				left="363px"
				top="215px"
				plus
				$p="6px"
				size={8}
				onClick={ModalService.open.bind(null, AntiageModal)}
			/>

			<Help.Tip
				style={{ ...animation }}
				left="363px"
				top="315px"
				plus
				$p="6px"
				size={8}
				onClick={ModalService.open.bind(null, LipikarModal)}
			/>

			<Help.Tip
				style={{ ...animation }}
				left="506px"
				top="315px"
				plus
				$p="6px"
				size={8}
				onClick={ModalService.open.bind(null, LipikarModalTwo)}
			/>

			<Help.Tip
				style={{ ...animation }}
				left="363px"
				top="405px"
				plus
				$p="6px"
				size={8}
				onClick={ModalService.open.bind(null, TolerianeRosaliacModal)}
			/>

			<Help.Tip
				style={{ ...animation }}
				left="506px"
				top="405px"
				plus
				$p="6px"
				size={8}
				onClick={ModalService.open.bind(null, TolerianeModal)}
			/>

			<Help.Tip
				style={{ ...animation }}
				left="363px"
				top="490px"
				plus
				$p="6px"
				size={8}
				onClick={ModalService.open.bind(null, CicaplastModal)}
			/>

			<Help.Tip
				style={{ ...animation }}
				left="363px"
				top="565px"
				plus
				$p="6px"
				size={8}
				onClick={ModalService.open.bind(null, AntheliosModal)}
			/>
		</>
	)
}
