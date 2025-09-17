import media from '@/utils/media';
import { easePoly } from 'd3-ease';
import React from 'react';
import { animated, useSpring, useTransition } from 'react-spring';
import styled from 'styled-components';

const GameModal = ({ open, children, onClose }) => {

    const transitions = useTransition(open, {
        from: { opacity: 0 },
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

    return transitions((style, item) => item ? (
        <ModalWrapper style={style}>
            <ModalContent style={animation}>
                <ModalBody>
                    {children}
                </ModalBody>
            </ModalContent>
        </ModalWrapper>
    ) : '')
}

export default GameModal


const ModalContent = styled(animated.div)`
    max-width: 958px;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    background: #fff;
    padding: 45px 45px 30px 45px;
    margin: 20px auto 0 auto;

    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25), 0px 1px 2px rgba(0, 0, 0, 0.25);
    border-radius: 8px 8px 0px 0px;

    flex-grow: 1;
    
    ${media.md`
        padding: 30px;
        margin-top: 60px;
        border-radius: 8px;
    `}
`

const ModalWrapper = styled(animated.div)`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
   
    background: rgba(234, 234, 234, 1);
    z-index: 1001;

    display: flex;
    padding: 10px 15px 0 15px;


    ${media.md`
        padding: 10px 15px;
        height: 100%;
    `}
`

const ModalBody = styled(animated.div)`
    max-width: 826px;
    width: 100%;
    border-radius: 4px;
    
    font-family: Gilroy, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;
    color: #1F1F1F;
    position: relative;
    max-height: 90%;
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    
    ${media.md`
        max-height: 100%;
    `}
`