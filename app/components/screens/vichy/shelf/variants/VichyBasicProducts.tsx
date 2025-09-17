import ShelfItem from "@/components/ShelfItem"
import {useUIStore} from "@/stores/uiStore"
import React from "react"
import {useVichyModalStore} from "@/stores/vichyModalStore";
import ModalService from "@/components/shared/modal/ModalService";
import LiftactivModal from "@/components/screens/vichy/modals/products/liftactiv/LiftactivModal";
import NeovadiolModal from "@/components/screens/vichy/modals/products/neovadiol/NeovadiolModal";
import MineralModal from "@/components/screens/vichy/modals/products/mineral/MineralModal";
import NormadermModal from "@/components/screens/vichy/modals/products/normaderm/NormadermModal";
import DeodorantModal from "@/components/screens/vichy/modals/products/deodorant/DeodorantModal";

const VichyBasicProducts = () => {
    const newbie = useVichyModalStore(state => state.newbie)
    const locked = useUIStore(state => state.locked)
    const animated = useVichyModalStore(state => state.animated)
    const setAnimated = useVichyModalStore(state => state.setAnimated)
    const isAnimated = newbie && locked && animated
    const closeAllExcept = useVichyModalStore(state => state.closeAllExcept)

    return (
        <>
            <ShelfItem
                onChange={setAnimated}
                source="assets/images/vichy/shelf/basic/liftactive.png"
                alt="liftactiv"
                animated={isAnimated}
                top={227}
                left={123}
                width={580}
                height={156}
                onClick={ModalService.open.bind(null, LiftactivModal)}
                scale={0.5}
                glow={1}
            />

            <ShelfItem
                onChange={setAnimated}
                source="assets/images/vichy/shelf/basic/neovadiol.png"
                alt="neovadiol"
                animated={isAnimated}
                top={346}
                left={193}
                width={298}
                height={152}
                // onClick={closeAllExcept.bind(null, 'neovadiol')}
                onClick={ModalService.open.bind(null, NeovadiolModal)}
                scale={0.5}
                glow={1}
            />

            <ShelfItem
                onChange={setAnimated}
                source="assets/images/vichy/shelf/basic/mineral89.png"
                alt="mineral89"
                animated={isAnimated}
                top={468}
                left={193}
                width={282}
                height={165}
                onClick={ModalService.open.bind(null, MineralModal)}
                scale={0.5}
                glow={1}
            />

            <ShelfItem
                onChange={setAnimated}
                source="assets/images/vichy/shelf/basic/normaderm.png"
                alt="normaderm"
                animated={isAnimated}
                top={576}
                left={176}
                width={350}
                height={172}
                onClick={ModalService.open.bind(null, NormadermModal)}
                scale={0.5}
                glow={1}
            />

            <ShelfItem
                onChange={setAnimated}
                source="assets/images/vichy/shelf/basic/deodorants.png"
                alt="deodorants"
                animated={isAnimated}
                top={716}
                left={187}
                width={315}
                height={129}
                onClick={ModalService.open.bind(null, DeodorantModal)}
                scale={0.5}
                glow={1}
            />


        </>
    )
}

export default VichyBasicProducts