import { Tag, TagsService } from '@/api/tags.service'
import Modal from '@/components/Modal'
import { queryClient } from '@/utils/query-client'
import { useMutation } from '@tanstack/react-query'
import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'

const SendTagModal = ({ close, tags = [] }) => {
	const [tagId, setTagId] = useState<number | null>(null)

	const { mutateAsync, isLoading } = useMutation({
		mutationKey: ['send tag'],
		mutationFn: (tagId: number) => TagsService.sendTag(tagId),
	})

	const handleTagChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value
		setTagId(+value)
	}

	const handleSelectTag = async () => {
		if (!tagId) {
			alert('Тег не выбран')
			return
		}
		onCloseHandler()

		await mutateAsync(tagId)
		queryClient.refetchQueries(['tags'])
		alert('Тег добавлен')
	}

	const onCloseHandler = () => {
		if (typeof close === 'function') {
			close()
		}
	}

	return (
		<Modal maxWidth={300} open={true} onClose={onCloseHandler}>
			<Wrapper>
				<div>Выберите тег</div>
				<div>
					<select onChange={handleTagChange}>
						<option value="">Выберите тэг</option>
						{(tags as Tag[]).map((tag) => (
							<option key={tag.id} value={tag.id}>
								{tag.name}
							</option>
						))}
					</select>
				</div>
				<div>
					<button onClick={handleSelectTag}>Отправить</button>
				</div>
			</Wrapper>
		</Modal>
	)
}

export default SendTagModal

const Wrapper = styled.div`
	font-weight: 400;
	padding: 20px;

	div {
		margin-bottom: 16px;
	}

	select {
		width: 100%;
	}
`
