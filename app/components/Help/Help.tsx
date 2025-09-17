import { animated } from 'react-spring'
import styled from 'styled-components'
import TurnPhoneHelp from '../TurnPhoneHelp'
import HelpBottom from './HelpBottom'
import HelpBrand from './HelpBrand'
import HelpControls from './HelpControls'
import HelpSupport from './HelpSupport'
import HelpTip, { TipText } from './HelpTip'

const Help = ({ children, ...otherProps }) => {

    return (
        <Overlay {...otherProps}>
            {children}
        </Overlay>
    )
}

export default Help

Help.Controls = HelpControls
Help.Brand = HelpBrand
Help.Support = HelpSupport
Help.TurnPhone = TurnPhoneHelp
Help.Bottom = HelpBottom
Help.Tip = HelpTip
Help.TipText = TipText

const Overlay = styled(animated.div)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 1100;
`