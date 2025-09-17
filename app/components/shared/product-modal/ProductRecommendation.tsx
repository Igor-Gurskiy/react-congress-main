import { useUIStore } from '@/stores/uiStore'
import media from '@/utils/media'
import React from 'react'
import styled, { css } from 'styled-components'
import Box, { BoxPropsType } from '../../Box'
import LikeButton from './LikeButton'

interface ProductRecommendationPropsType extends BoxPropsType {
	like: boolean
	likeId?: string
	counter?: number
	setLike?: (like: boolean) => void
	onClick: () => void
	color?: string
}

const declanse = (count: number) => {
	if (count === 1) return 'коллег'
	if (count >= 2 && count <= 4) return 'коллеги'
	if (count > 10 && count % 10 === 1) return 'коллега'
	return 'коллег'
}

const fakeLikes = {
	greenPopup1Like: 431,
	greenPopup2Like: 632,
	greenPopup3Like: 542,
	greenPopup4Like: 342,
	lrpEffaclarLike: 591,
	lrpIsoBiomeLike: 511,
	lrpSerumLike: 314,
	lrpLipikarDermLike: 1704,
	lrpLaitLike: 511,
	lrpTolerianeLike: 291,
	lrpBaumeLike: 487,
	lrpCicaplastLike: 563,
	lrpAntheliosLike: 608,
	lrpLipikarPedsLike: 644,
	lrpCicaplastPedsLike: 386,
	lrpTolerianeOncoLike: 178,
	lrpEffaclarPedsLike: 390,
	lrpLipikarOncoLike: 217,
	lrpAntheliosOncoLike: 239,
	lrpNiacinamideLike: 239,
	vichyLifLike: 487,
	vichyNeoLike: 390,
	vichyMinLike: 390,
	vichyNormLike: 563,
	dercosPSOLike: 386,
	dercosADDLike: 511,
	dercosAminexilLike: 342,
	lrpLaitPedsLike: 562,
	lrpKidsPedsLike: 667,
	lrpBaumePedsLike: 321,
	lrpBaumeOncoLike: 239,
	lrpTolerianeAllergLike: 317,
	lrpLipikarAllergLike: 425,
	lrpAntheliosAllergLike: 608,
	lrpCicaplastAllergLike: 563,
	lrpLaitAllergLike: 284,
}

const ProductRecommendation: React.FC<ProductRecommendationPropsType> = ({
	like,
	likeId,
	setLike,
	onClick,
	color = '#1F1F1F',
	...otherProps
}) => {
	const likesList = useUIStore((state) => state.likeList)
	const setLikesList = useUIStore((state) => state.setLikeList)
	const likeData = likesList.find((like) => like.like_id === likeId)
	const likesCount = likeData ? likeData.count : 0
	const fakeLikesCount = (likeId && fakeLikes[likeId]) || 0
	const count = likesCount + fakeLikesCount

	const onLikeHandler = () => {
		if (typeof onClick === 'function') {
			onClick()
		}

		if (!like) {
			const newLikeData = likesList.map((like) => {
				if (like.like_id === likeId) {
					like.count = like.count + 1
				}
				return like
			})

			const newLikesData = newLikeData.concat()
			setLikesList(newLikesData)
		}
	}

	return (
		<RecommendationBox {...otherProps}>
			<RecommendationCounter $color={color}>
				{count} {declanse(count)} рекомендуют
			</RecommendationCounter>
			<LikeButton like={like} onClick={onLikeHandler} />
		</RecommendationBox>
	)
}

export default ProductRecommendation

const RecommendationBox = styled(Box)`
	font-family: 'Gilroy';
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	li {
		font-family: 'Gilroy';
		font-size: 13px;
		line-height: 16px;
		color: #1f1f1f;
		margin-left: 16px;
	}

	&:not(:last-child) {
		margin-bottom: 8px;
	}

	${media.md`
        width: 100%;
        justify-content: space-between;
    `}
`

const RecommendationCounter = styled.div<{ $color?: string }>`
	font-family: 'Gilroy';
	margin-bottom: 8px;
	font-weight: 400;
	font-size: 10px;
	line-height: 16px;

	${({ $color }) =>
		$color &&
		css`
			color: ${$color};
		`} /* or 160% */ text-align: right;
`
