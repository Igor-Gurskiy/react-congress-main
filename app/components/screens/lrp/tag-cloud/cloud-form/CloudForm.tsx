import styles from './CloudForm.module.scss'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import React, { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { TagsService } from '@/api/tags.service'
import PulseButton from '@/components/Help/PulsingButton'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { Word } from '@/components/shared/tag-cloud/use-my-cloud'
import { API } from '@/api'
import { EventsEnum } from '@/api/tracker'
import CloudSearchTagInput from '@/components/ui/CloudSearchTagInput'

const CloudForm = ({ tags = [] as any[], addWord = (word: Word) => {} }) => {
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [isAdd, setIsAdd] = useState(false)
	const { control, handleSubmit, reset, watch } = useForm({
		mode: 'onChange',
	})

	const currentValue = watch('tag')

	const { mutateAsync, isLoading } = useMutation({
		mutationKey: ['send tag'],
		mutationFn: (tagId: number) => TagsService.sendTag(tagId),
	})

	const onSubmit = async (data) => {
		const tagId = data?.tag?.value
		if (!tagId) {
			alert('Тег не выбран')
			return
		}

		addWord({ text: data.tag.label, count: 4, added: true })
		try {
			await mutateAsync(tagId)
			API.tracker.sendEvent(
				EventsEnum.lrpCloudWordEntry,
				`params[word]=${data.tag.label}`,
			)
		} catch (e) {
			console.error('error while sending tag add request')
		}
		reset()
		setIsSubmitted(true)
		setIsAdd(false)
	}

	useEffect(() => {
		if (currentValue) {
			if (currentValue['__isNew__']) {
				setIsAdd(true)
			} else {
				setIsAdd(false)
			}
		}
	}, [currentValue])

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
			<div>
				<h1 className={styles.title}>Игра в ассоциации</h1>
			</div>
			<AnimatePresence mode="wait">
				{isSubmitted && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
					>
						<div className={clsx(styles.heading, styles.fullWidth)}>
							Благодарим!
						</div>
						<div className={clsx(styles.caption, styles.fullWidth)}>
							Ваше слово будет добавлено в облако после модерации.
						</div>
						<div className={clsx(styles.description, styles.fullWidth)}>
							Вы можете добавить еще слова-ассоциации с <b>La Roche-Posay</b> и
							увидите, какие ассоциации чаще всего вызывает упоминание бренда
							среди&nbsp;специалистов
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			<div className={clsx(styles.fullWidth, styles.search)}>
				<CloudSearchTagInput
					control={control}
					options={tags}
					placeholder="Ваше Слово-Ассоциация"
				/>
			</div>
			{!isSubmitted && (
				<div className={clsx(styles.description, styles.fullWidth)}>
					Впишите свое слово-ассоциацию с <b>La Roche-Posay</b> и увидите, какие
					ассоциации чаще всего вызывает упоминание бренда
					среди&nbsp;специалистов
				</div>
			)}
			<div>
				<SubmitButton button>
					{isAdd ? 'Отправить на модерацию' : 'Отправить'}
				</SubmitButton>
			</div>
		</form>
	)
}
export default CloudForm

const SubmitButton = styled(PulseButton)`
	background: #ffffff;
	border-color: #ffffff;
	border-radius: 3px;
	padding: 8px 16px;
	flex-shrink: 0;

	min-width: 220px;

	.pulse-text {
		color: #36b0fc;
		text-align: center;
		font-size: 16px;
	}
`
