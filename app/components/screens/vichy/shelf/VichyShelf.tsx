import {useUIStore} from '@/stores/uiStore';
import {useVichyModalStore} from '@/stores/vichyModalStore';
import {usePinch} from '@use-gesture/react';
import React, {useEffect, useState} from 'react';
import styled, {css} from "styled-components";
import {BannerAnimationFlicker} from '../../../ui/Animation';
import VichyBasicProducts from "@/components/screens/vichy/shelf/variants/VichyBasicProducts";
import VichyInactivityShelf from "@/components/screens/vichy/shelf/VichyInactivityShelf";

const VichyShelf = ({onClick, ...otherProps}) => {
    const newbie = useVichyModalStore(state => state.newbie)
    const locked = useUIStore(state => state.locked)
    const animated = useVichyModalStore(state => state.animated)

    const [hover, setHover] = useState(false)

    const onPinch = usePinch(() => {
        onClick();
    })

    useEffect(() => {
        if (locked) {
            setHover(false)
        }
    }, [locked])

    return (
        <Container>
            {!locked && <ClickZone onClick={onClick} onMouseEnter={setHover.bind(null, true)}
                                   onMouseLeave={setHover.bind(null, false)} {...onPinch()}/>}
            {/* <Shelf /> */}
            <ShelfPicture>
                <source srcSet="assets/images/vichy/shelf/vichy-shelf.webp" type="image/webp"/>
                <source srcSet="assets/images/vichy/shelf/vichy-shelf.png" type="image/png"/>
                <img src="assets/images/vichy/shelf/vichy-shelf.png" alt="Vichy LOR"/>
            </ShelfPicture>

            <ProductsLight id="products" $locked={locked} $active={hover}/>

            <VichyBasicProducts/>

            <VichyInactivityShelf/>
        </Container>
    )
}

const MemoVichyShelf = React.memo(VichyShelf)

export default MemoVichyShelf

const ProductsLight = styled.div<{ $locked?: boolean, $active?: boolean }>`
  user-select: none;
  background: url(assets/images/vichy/light/shelf-light.png);
  position: absolute;
  left: -50px;
  width: 633px;
  height: 1032px;
  top: -56px;
  opacity: 0;
  transition: all 0.3s;
  animation: ${BannerAnimationFlicker} 10s 3s ease-out infinite;
  cursor: pointer;
  z-index: 1001;
  will-change: opacity;
  transform: translateZ(0);
  pointer-events: none;

  ${props => props.$locked && css`
    opacity: 0;
    animation: none;
    pointer-events: none;
  `}

  ${props => props.$active && css`
    opacity: 1;
    animation: none;
  `}
`

const ClickZone = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 12001;
`

const ShelfPicture = styled.picture`
  position: absolute;
  top: 0px;
  left: 0px;

  img {
    width: 1058px;
    height: 1855px;
    z-index: 2;
    will-change: transform;
    transform-origin: top left;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.5);
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
  }
`

const Container = styled.div`
  position: absolute;
  width: 527px;
  height: 928px;
  z-index: 1;
  top: 177px;
  left: 960px;
  cursor: pointer;
`