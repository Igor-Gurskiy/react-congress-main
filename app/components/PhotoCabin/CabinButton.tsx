import styled, { css } from "styled-components";

const CabinButton = ({ children }) => {
    return <CabinButtonBase>{children}</CabinButtonBase>
}

export default CabinButton

const CabinButtonBase = styled.button`
    border: none;
    outline: none;
    font-weight: 800;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.008em;
    text-transform: uppercase;
    border-radius: 5px;
    padding: 15px 20px;
    cursor: pointer;
    text-decoration: none;
    max-height: 50px;

    &:disabled {
        opacity: 0.7;
    }
`

const ChooseButton = styled(CabinButtonBase)<{ $color?: string }>`
    ${({ $color }) => $color && css`
        border: 2px solid ${$color};
        color: ${$color};
    `}
`

const UploadButton = styled(CabinButtonBase)<{ $color?: string }>`
    background: #00AEEF;
    color: #fff;

    ${({ $color }) => $color && css`
        background: ${$color};
    `}
`

const DoNotLike = styled(CabinButtonBase)<{ $color?: string }>`
    background: transparent;

    ${({ $color }) => $color && css`
        color: ${$color};
    `}

    &:hover {
        text-decoration: underline;
    }
`

const Loader = styled.div`
    margin-right: 10px;
`

CabinButton.Choose = ChooseButton
CabinButton.Upload = UploadButton
CabinButton.DoNotLike = DoNotLike
CabinButton.Loader = Loader