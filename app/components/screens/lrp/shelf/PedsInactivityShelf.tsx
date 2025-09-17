import { easePoly } from 'd3-ease'
import React, { useEffect, useState } from 'react'
import { useSpring } from 'react-spring'
import { useUIStore } from '@/stores/uiStore'
import Help from '@/components/Help/Help'
import ModalService from '@/components/shared/modal/ModalService'
import EffaclarPedsModal from '@/components/screens/lrp/modals/products/effackar-peds/EffaclarPedsModal'
import LipikarPedsModal from '@/components/screens/lrp/modals/products/lipikar-peds/LipikarPedsModal'
import LaitModal from '@/components/screens/lrp/modals/products/lait/LaitModal'
import CicaplastBaumePedsModal from '@/components/screens/lrp/modals/products/cicaplastbaume-peds/CicaplastBaumePedsModal'
import CicaplastPedsModal from '@/components/screens/lrp/modals/products/cicaplast-peds/CicaplastPedsModal'
import KidsModal from '@/components/screens/lrp/modals/products/kids/KidsModal'

let timer: NodeJS.Timeout

const PedsInactivityShelf = () => {
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

export default PedsInactivityShelf

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
				left="360px"
				top="166px"
				plus
				$p="8px"
				size={8}
				onClick={ModalService.open.bind(null, EffaclarPedsModal)}
			/>

			<Help.Tip
				style={{ ...animation }}
				left="360px"
				top="285px"
				plus
				$p="8px"
				size={8}
				onClick={ModalService.open.bind(null, LipikarPedsModal)}
			/>

			<Help.Tip
				style={{ ...animation }}
				left="498px"
				top="285px"
				plus
				$p="8px"
				size={8}
				onClick={ModalService.open.bind(null, LaitModal)}
			/>

			<Help.Tip
				style={{ ...animation }}
				left="360px"
				top="390px"
				plus
				$p="8px"
				size={8}
				onClick={ModalService.open.bind(null, CicaplastBaumePedsModal)}
			/>

			<Help.Tip
				style={{ ...animation }}
				left="498px"
				top="390px"
				plus
				$p="8px"
				size={8}
				onClick={ModalService.open.bind(null, CicaplastPedsModal)}
			/>

			<Help.Tip
				style={{ ...animation }}
				left="360px"
				top="500px"
				plus
				$p="8px"
				size={8}
				onClick={ModalService.open.bind(null, KidsModal)}
			/>
		</>
	)
}
