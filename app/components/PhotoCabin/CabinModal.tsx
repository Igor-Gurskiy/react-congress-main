import useClickOutside from '@/hooks/useClickOutside';
import { easePoly } from 'd3-ease';
import React from 'react';
import { animated, useSpring, useTransition } from 'react-spring';
import styled, { css } from 'styled-components';

const CabinModal = ({ open, children, onClose, finished = false }) => {

    const transitions = useTransition(open, {
        from: { opacity: 0, transform: "scale(1.1)" },
        enter: { opacity: 1, transform: "scale(1)" },
        leave: { opacity: 0, transform: "scale(1.1)" },
        config: {
            duration: 300,
            easing: easePoly.exponent(2)
        }
    })

    const animation = useSpring({
        config: {
            duration: 300,
            easing: easePoly.exponent(2)
        },
        delay: 100,
        opacity: open ? 1 : 0,
        transform: open ? 'scale(1)' : 'scale(0.6)'
    })

    const useNodeRef = useClickOutside(onClose)

    return transitions((style, item) => item ? (
        <ModalWrapper style={style}>
            <ModalContent ref={useNodeRef as any} style={animation} $finished={finished}>
                <ModalHeader>
                    <Close onClick={onClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z" fill="white" />
                        </svg>
                    </Close>
                </ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
            </ModalContent>
        </ModalWrapper>
    ) : '')
}

export default CabinModal

const Close = styled.div`
    cursor: pointer;
    transition: all 0.3s;
`

const ModalContent = styled(animated.div)<{ $finished: boolean }>`
    ${({ $finished }) => $finished ? css`max-width: 296px;` : css`max-width: 1024px;`}
    width: 100%;
    overflow: hidden;
    max-height: 100%;
    max-height: calc(100%);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`


const ModalBody = styled.div`
    font-family: 'Gilroy', sans-serif;
    font-size: 13px;
    line-height: 20px;
    color: #1F1F1F;
    position: relative;
    overflow: auto;
`

const ModalWrapper = styled(animated.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    justify-content: center;
    background: rgba(31, 31, 31, 0.8);
    z-index: 10001;
    padding: 10px 15px;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
`

const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`