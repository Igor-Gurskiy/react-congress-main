import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import useClickOutside from '@/hooks/useClickOutside'
import { useTourStore } from '@/stores/tourStore'
import { SpecType, useUIStore } from '@/stores/uiStore'
import React, { useEffect } from 'react'
import { animated, useTransition } from 'react-spring'
import styled, { css } from 'styled-components'
import Box, { BoxPropsType } from '../../Box'
import SelectButton from './SelectButton'

const SpecializationSelector = () => {
	const specialization = useUIStore((state) => state.specialization)
	const setSpecialization = useUIStore((state) => state.setSpecialization)
	const scaleRatio = useUIStore((state) => state.scaleRatio)
	const user = useUIStore((state) => state.user)
	const tour = useTourStore((state) => state.tour)
	const isLoading = useUIStore((state) => state.isLoading)
	const preloader = useUIStore((state) => state.preloader)
	const setUser = useUIStore((state) => state.setUser)
	const specSelector = useUIStore((state) => state.specSelector)
	const setSpecSelector = useUIStore((state) => state.setSpecSelector)

	// const [list, setList] = useState<ProfessionType[]>([])

	useEffect(() => {
		if (!isLoading && !preloader && !tour && user && !user.profession_id) {
			setSpecSelector(true)
		}
	}, [isLoading, preloader, user, tour])

	// const fetchProfessions = async () => {
	//     const response = await API.me.getProfessionList()
	//     if (response && response.profession_list) {
	//         setList(response.profession_list.filter(p => p.visible))
	//     }
	// }

	const transitions = useTransition(specSelector, {
		from: { opacity: 0, transform: 'translate(-50%, 100%)' },
		enter: { opacity: 1, transform: 'translate(-50%, 15%)' },
		leave: { opacity: 0, transform: 'translate(-50%,  100%)' },
		config: {
			duration: 500,
		},
	})

	const backdrops = useTransition(specSelector, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: {
			duration: 300,
		},
	})

	const select = async (spec: SpecType, id: number) => {
		// 7 -  дерматолог/косметолог
		// 6 -  аллерголог
		// 5 -  онколог
		// 4 -  терапевт
		// 1 -  педиатр
		// 8 -  фармацевт/провизор

		const prevUserProfId = user?.profession_id

		// choose same profession
		if (prevUserProfId && specialization == spec) {
			setSpecSelector(false)
			return
		}

		// TEST ONLY
		// setSpecialization(spec)
		// setSpecSelector(false)

		// PRODUCTION
		const response = await API.me.setProfession(id)
		if (response && response.whoami.profession_id) {
			setUser(response.whoami)
			if (response.whoami.profession_id == id) {
				setSpecialization(spec)
				localStorage.removeItem('molecules')
				if (!prevUserProfId) {
					API.tracker.sendEvent(EventsEnum.specSuccess)
				}
			}
		}
		setSpecSelector(false)
	}

	const onClose = () => setSpecSelector(false)
	const useNodeRef = useClickOutside(onClose)


	return backdrops((styles, item) =>
		item ? (
			<Backdrop style={styles}>
				<ScaleWrapper $scale={scaleRatio} ref={useNodeRef}>
					{transitions((style, item) =>
						item ? (
							<SelectorWrapper style={style}>
								<SelectText>
									<b>Выберите</b>
									<br />
									свою специализацию
								</SelectText>
								<Selector>
									<SelectBox>
										<Box $flex $flexGrow={1} $flexWrap="wrap" $fullWidth>
											<BtnBox>
												<SelectButton
													$fullWidth
													$active={specialization === 'dermatology'}
													onClick={select.bind(null, 'dermatology', 7)}
												>
													Дерматолог / Косметолог
												</SelectButton>
											</BtnBox>
											<BtnBox>
												<SelectButton
													$fullWidth
													$active={specialization === 'allerg'}
													onClick={select.bind(null, 'allerg', 6)}
												>
													Аллерголог
												</SelectButton>
											</BtnBox>
											<BtnBox>
												<SelectButton
													$fullWidth
													$active={specialization === 'oncology'}
													onClick={select.bind(null, 'oncology', 5)}
												>
													Онколог
												</SelectButton>
											</BtnBox>
											<BtnBox>
												<SelectButton
													$fullWidth
													$active={specialization === 'therapy'}
													onClick={select.bind(null, 'therapy', 4)}
												>
													Терапевт
												</SelectButton>
											</BtnBox>
											<BtnBox>
												<SelectButton
													$fullWidth
													$active={specialization === 'pediatrics'}
													onClick={select.bind(null, 'pediatrics', 1)}
												>
													Педиатр
												</SelectButton>
											</BtnBox>
											<BtnBox>
												<SelectButton
													$fullWidth
													$active={specialization === 'pharmacy'}
													onClick={select.bind(null, 'pharmacy', 8)}
												>
													Фармацевт / Провизор
												</SelectButton>
											</BtnBox>
										</Box>
									</SelectBox>
								</Selector>
								<picture>
									<source
										srcSet="assets/images/hall/panel.webp"
										type="image/webp"
									/>
									<source
										srcSet="assets/images/hall/panel.png"
										type="image/png"
									/>
									<img
										src="assets/images/hall/panel.png"
										alt="specialization selector panel"
									/>
								</picture>
							</SelectorWrapper>
						) : (
							''
						),
					)}
				</ScaleWrapper>
			</Backdrop>
		) : (
			''
		),
	)
}

export default SpecializationSelector

const ScaleWrapper = styled.div<{ $scale: number; ref: any }>`
	position: absolute;
	left: 50%;
	bottom: 0;
	transform-origin: top left;
	${({ $scale }) =>
		$scale &&
		css`
			transform: scale(${$scale}) translate(-50%, 100%);
		`}
`

const BtnBox = styled(Box)<BoxPropsType>`
	margin: 15px 10px;
	flex-grow: 1;
	min-width: 45%;
`

const Backdrop = styled(animated.div)`
	position: absolute;
	width: 100%;
	height: 100%;
	background: rgba(31, 31, 31, 0.9);
	top: 0px;
	left: 0px;
	z-index: 30001;
`

const Selector = styled.div`
	position: absolute;
	width: 100%;
	top: 220px;
	min-height: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

const SelectBox = styled.div`
	width: 100%;
	max-width: 515px;
	/* ${SelectButton} {
        margin: 15px 10px;
    } */
`

const SelectText = styled.div`
	font-family: 'Gilroy', sans-serif;
	font-size: 32px;
	font-weight: 400;
	line-height: 40px;
	width: 100%;
	text-align: center;
	text-transform: uppercase;
	position: absolute;
	top: 100px;
`

const SelectorWrapper = styled(animated.div)`
	position: absolute;
	z-index: 2;
	left: 50%;
	bottom: 0;
	transform-origin: top left;
	transform: translate(-50%, 100%);
	opacity: 0;
`
