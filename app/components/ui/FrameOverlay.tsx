import styled from "styled-components";
import { TipText } from "../Help/HelpTip";
import BackButton from "./Button/BackButtonBase";
import HelpButtonBase from "./Button/HelpButtonBase";

const FrameOverlay = styled.div<{ $scale?: number }>`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: visible;
    bottom: 0;
    ${props => props.$scale && `
        ${BackButton}, ${HelpButtonBase} {
            transform: scale(${props.$scale});
            z-index: 1;
        }
        ${HelpButtonBase} {
            transform-origin: right top;
        }
        ${BackButton}, ${TipText} {
            transform-origin: left top;
        }
    `}
`


export default FrameOverlay