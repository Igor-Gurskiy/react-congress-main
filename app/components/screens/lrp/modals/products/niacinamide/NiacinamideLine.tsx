import ProductModal from "@/components/shared/product-modal/ProductModal";
import Box from "@/components/Box";
import React from "react";
import Molecule from "@/components/ui/molecule/Molecule";
import useResponsive from "@/hooks/useResponsive";

const NiacinamideLine = () => {
    const {isMobile} = useResponsive()

    const position = {
        bottom: '5%',
        right: '0%'
    }

    const mPos = {
        top: '-15%',
        right: '0%'
    }

    return (
        <ProductModal.LineContainer>
            <ProductModal.Typography $subtitle>Объёмы средств</ProductModal.Typography>
            <ProductModal.Line>
                <Molecule id="niacinamide" position={isMobile ? mPos : position} direction="left"
                          translate={{x: '0%'}}/>
                <Box $flex $fullWidth $direction="column" $flexGrow={1}>
                    <Box $fullWidth $flex $justifyContent="space-between">
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={389} src="assets/images/lrp/modals/niacinamide/niacinamide.png"/>
                            <ProductModal.Volume>30 мл</ProductModal.Volume>
                        </Box>
                    </Box>
                </Box>
            </ProductModal.Line>
        </ProductModal.LineContainer>
    )
}

export default NiacinamideLine