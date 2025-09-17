import React from "react";
import styled from "styled-components";

const ModalClose = ({close}) => {
    return (
        <Close onClick={close}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                    fill="white"/>
            </svg>
        </Close>
    )
}

export default ModalClose

const Close = styled.div`
  cursor: pointer;
  padding: 12px;
  margin-right: -12px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalCloseWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`