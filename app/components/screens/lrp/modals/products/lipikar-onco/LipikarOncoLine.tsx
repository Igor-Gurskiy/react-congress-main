import ProductModal from "@/components/shared/product-modal/ProductModal";
import Box from "@/components/Box";
import React from "react";
import Molecule from "@/components/ui/molecule/Molecule";
import useResponsive from "@/hooks/useResponsive";

const LipikarOncoLine = () => {
    const {isMobile} = useResponsive()

    const position = {
        top: '-15%',
        right: '15%'
    }

    const mPos = {
        top: '50%',
        right: '5%'
    }

    const pos = isMobile ? mPos : position

    return (
        <ProductModal.LineContainer>
            <ProductModal.Typography $subtitle>Объёмы средств</ProductModal.Typography>
            <ProductModal.Line>
                <Molecule id="lipikar-onco" position={pos} direction="right"
                          translate={{x: '0%'}}/>
                <ProductModal.Typography $subtitle $mb={20}>ОСНОВНОЙ УХОД</ProductModal.Typography>
                <Box $flex $fullWidth $direction="column" $flexGrow={1}>
                    <Box $fullWidth $flex $justifyContent="space-between">
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={91} src="assets/images/lrp/modals/lipikar/baume75.png"/>
                            <ProductModal.Volume>75 мл</ProductModal.Volume>
                        </Box>
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={123} src="assets/images/lrp/modals/lipikar/baume200.png"/>
                            <ProductModal.Volume>200 мл</ProductModal.Volume>
                        </Box>
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={159} src="assets/images/lrp/modals/lipikar/baume400.png"/>
                            <ProductModal.Volume>400 мл</ProductModal.Volume>
                        </Box>
                    </Box>
                </Box>

                <ProductModal.Typography $subtitle $mt={32} $mb={16}>ОЧИЩЕНИЕ</ProductModal.Typography>
                <Box $flex $fullWidth $direction="column" $flexGrow={1}>
                    <Box $fullWidth $flex $justifyContent="space-between">
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={106} src="assets/images/lrp/modals/lipikar/syndet200.png"/>
                            <ProductModal.Volume>200 мл</ProductModal.Volume>
                        </Box>
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={141} src="assets/images/lrp/modals/lipikar/syndet400.png"/>
                            <ProductModal.Volume>400 мл</ProductModal.Volume>
                        </Box>

                    </Box>
                </Box>


            </ProductModal.Line>
        </ProductModal.LineContainer>
    )
}

export default LipikarOncoLine