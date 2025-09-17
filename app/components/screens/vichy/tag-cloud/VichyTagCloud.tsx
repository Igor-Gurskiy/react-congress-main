import styled from 'styled-components'
import React, { useEffect, useMemo, useState } from 'react'
import FormulaBack from '@/components/screens/vichy/formula/shared/FormulaBack'
import CloudForm from '@/components/screens/vichy/tag-cloud/cloud-form/CloudForm'
import media, { mediaMin } from '@/utils/media'
import dynamic from 'next/dynamic'
import TagCloud from '@/components/shared/tag-cloud/TagCloud'
import { motion } from 'framer-motion'
import { Word } from '@/components/shared/tag-cloud/use-my-cloud'
import { modifyCloudSetWithWord } from '@/utils/modify-cloud-set'

const MediaQuery = dynamic(() => import('react-responsive'), { ssr: false })

const VichyTagCloud = ({ cloud, preview }) => {
	const [set1, set2, set3, set4] = preview?.sets || [[], [], [], []]
	const [set, setSet] = useState<any[]>(set1)

	const maxScale = useMemo(
		() =>
			[...set2, ...set3, ...set4, ...set].reduce(
				(acc, word) => Math.max(acc, word.count),
				0,
			),
		[set, set2, set3, set4],
	)

	useEffect(() => {
		if (!preview || !preview.sets || !preview.sets.length) return
		setSet(preview?.sets[0])
	}, [preview?.sets])

	const handleAddWord = (word: Word) => {
		setSet((prev) => modifyCloudSetWithWord(prev, word))
	}

	return (
		<Wrapper>
			<FormulaBack link="/vichy" />

			<WrapperCloud>
				<TagCloud
					words={set.map((s) => ({ ...s, text: s.text.toUpperCase() }))}
					side={{ text: 'center', base: 'middle' }}
					scale={maxScale}
					colorScale="vichy"
					direction="lower"
				/>
			</WrapperCloud>
			<MiddleRow>
				<MediaQuery minDeviceWidth={768} minDeviceHeight={768}>
					{(matches) =>
						matches ? (
							<motion.div
								initial={{ translateX: '-100%', opacity: 0 }}
								animate={{ translateX: 0, opacity: 1 }}
								exit={{ translateX: '-100%', opacity: 0 }}
								transition={{
									type: 'spring',
									stiffness: 260,
									damping: 20,
								}}
								key="side-cloud"
								style={{
									flexBasis: '33%',
									flexGrow: 1,
									height: '100%',
								}}
							>
								<TagCloud
									words={set2.map((s) => ({
										...s,
										text: s.text.toUpperCase(),
									}))}
									side={{ text: 'center', base: 'middle' }}
									scale={maxScale}
									colorScale="vichy"
								/>
							</motion.div>
						) : null
					}
				</MediaQuery>

				<FormColumn>
					<CloudForm tags={cloud?.options || []} addWord={handleAddWord} />
				</FormColumn>

				<MediaQuery minDeviceWidth={768} minDeviceHeight={768}>
					{(matches) =>
						matches ? (
							<motion.div
								initial={{ translateX: '-100%', opacity: 0 }}
								animate={{ translateX: 0, opacity: 1 }}
								exit={{ translateX: '-100%', opacity: 0 }}
								transition={{
									type: 'spring',
									stiffness: 260,
									damping: 20,
								}}
								key="side-cloud"
								style={{
									flexBasis: '33%',
									flexGrow: 1,
									height: '100%',
								}}
							>
								<TagCloud
									words={set3.map((s) => ({
										...s,
										text: s.text.toUpperCase(),
									}))}
									side={{ text: 'center', base: 'middle' }}
									scale={maxScale}
									colorScale="vichy"
								/>
							</motion.div>
						) : null
					}
				</MediaQuery>
			</MiddleRow>

			<MediaQuery minDeviceWidth={576} minDeviceHeight={768}>
				{(matches) =>
					matches ? (
						<motion.div
							initial={{ translateX: '-100%', opacity: 0 }}
							animate={{ translateX: 0, opacity: 1 }}
							exit={{ translateX: '-100%', opacity: 0 }}
							transition={{
								type: 'spring',
								stiffness: 260,
								damping: 20,
							}}
							key="side-cloud"
							style={{
								flex: 1,
								order: 3,
							}}
						>
							<TagCloud
								words={set4.map((s) => ({ ...s, text: s.text.toUpperCase() }))}
								side={{ text: 'center', base: 'bottom' }}
								scale={maxScale}
								colorScale="vichy"
								direction="upper"
							/>
						</motion.div>
					) : null
				}
			</MediaQuery>
		</Wrapper>
	)
}

export default VichyTagCloud

const WrapperCloud = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	order: 1;
	width: 100%;
`

const MiddleRow = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	align-items: center;
	flex: 1;
	order: -1;

	${mediaMin.sm`
		grid-template-columns: 1fr 1fr 1fr;
		order: 1;
	`} @media screen and(max-height: 767.98 px) {
		grid-template-columns: 1fr;
		order: -1;
	}
`

const FormColumn = styled.div`
	flex-basis: 33%;
	flex-grow: 1;
	height: 100%;
	min-width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	${mediaMin.sm`
		min-width: 558px;
	`}
`

export const Wrapper = styled.div`
	background: url(../assets/images/vichy/cloud/bg.jpg);
	background-size: cover;
	display: grid;
	grid-template-rows: 1fr 1fr;

	padding: 32px;
	position: fixed;
	width: 100vw;
	height: calc(var(--vh, 1vh) * 100);

	max-width: 100vw;

	.resizer {
		width: 100%;
		height: 100%;
	}

	${media.md`
		padding: 16px;
	`}

	${mediaMin.sm`
		grid-template-rows: 1fr 1fr 1fr;
	`} @media screen and(max-height: 767.98 px) {
		display: grid;
		grid-template-rows: 1fr 1fr;
		padding: 16px;
	}
`
