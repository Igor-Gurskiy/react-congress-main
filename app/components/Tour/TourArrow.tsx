import {useTransition} from "react-spring"
import ArrowIcon from "../ui/ArrowIcon"

type TourArrowPropsType = {
    open: boolean
    left?: number | null
    right?: number | null
    top?: number | null
    rotate?: number | null
    style?: any
}

const TourArrow: React.FC<TourArrowPropsType> = ({open, left, top, right, rotate, style: styles = {zIndex: 212}}) => {
    const transition = useTransition(open, {
        from: {opacity: 0, transform: 'translateY(-30px) scale(0.8)'},
        enter: {opacity: 1, transform: 'translateY(0px) scale(1)'},
        leave: {opacity: 0, transform: 'translateY(-30px) scale(0.8)'}
    })

    return transition((style, item) => item ? (
        <ArrowIcon style={{...style, ...styles}} top={top} left={left} right={right} position="absolute"
                   rotate={rotate}/>
    ) : '')
}

export default TourArrow