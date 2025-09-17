import { useSortGameStore } from '@/components/screens/green/game/stores/sort-game.store'
import React, { useRef } from 'react'
import { ISortGameItem } from '@/components/screens/green/game/utils/sort-game-items'
import { isCollided } from '@/components/screens/green/game/utils/collison'
import ModalService from '@/components/shared/modal/ModalService'
import ResultsModal from '@/components/screens/green/game/components/modals/Results/ResultsModal'
import DefaultGameField from '@/components/screens/green/game/components/DefaultGameField'
import Product from '@/components/screens/green/game/components/Product'
import Basket from '@/components/screens/green/game/components/Basket'
import styled from 'styled-components'

const GameContainer = () => {
	// const { width, height } = useWindowSize()
	const isStarted = useSortGameStore((state) => state.isStarted)
	const addScore = useSortGameStore((state) => state.addScore)
	const setGameState = useSortGameStore((state) => state.setGameState)
	const nextProduct = useSortGameStore((state) => state.nextProduct)
	const productRef = useRef<HTMLImageElement | null>(null)
	const floorRef = useRef<HTMLDivElement | null>(null)
	const basketRef = useRef<HTMLImageElement | null>(null)

	const checkCollisions = (product: ISortGameItem) => {
		if (!isStarted) return

		// collided with floor
		if (isCollided(productRef, floorRef)) {
			setGameState(false)

			if (product.sortable) {
				ModalService.open(ResultsModal, { product })
				return
			}

			addScore()
			nextProduct()

			return
		}

		let productRect
		let basketRect
		
		if (productRef.current && basketRef.current) {
			productRect = productRef.current.getBoundingClientRect();
			basketRect = basketRef.current.getBoundingClientRect();
		}

		const isCollidedWithBottomCenter = (
  			rect1: DOMRect,
  			rect2: DOMRect
		): boolean => {
  			const productBottomCenter = {
    			x: rect1.left + rect1.width / 2,
    			y: rect1.bottom,
  			};

  			return (
    			productBottomCenter.x >= rect2.left &&
    			productBottomCenter.x <= rect2.right &&
    			productBottomCenter.y >= rect2.top &&
    			productBottomCenter.y <= rect2.bottom
  			);
		};


		// collided with basket
		if (isCollidedWithBottomCenter(productRect, basketRect)) {
			setGameState(false)

			if (!product.sortable) {
				ModalService.open(ResultsModal, { product })
				return
			}

			addScore()
			nextProduct()

			return
		}
	}

	return (
		<>
			<DefaultGameField />
			{/*<GameField />*/}

			<Product ref={productRef} checkCollisions={checkCollisions} />

			<Floor ref={floorRef} />
			<Basket ref={basketRef} />
		</>
	)
}

export default GameContainer

const Floor = styled.div`
	position: fixed;
	bottom: 0;
	left: -3000vw;
	right: -3000vw;
	background: transparent;
	width: 6000vw;
	height: 3vmin;
`
