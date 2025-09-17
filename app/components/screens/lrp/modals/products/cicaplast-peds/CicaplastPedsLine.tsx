import ProductModal from "@/components/shared/product-modal/ProductModal";
import Box from "@/components/Box";
import React from "react";
import Molecule from "@/components/ui/molecule/Molecule";
import useResponsive from "@/hooks/useResponsive";

const CicaplastPedsLine = () => {
    const {isMobile} = useResponsive()

    const position = {
        top: '0%',
        right: '-25%'
    }

    const mobilePos = {
        top: '25%',
        left: '15%'
    }

    return (
        <ProductModal.LineContainer>
            <Molecule id="cicaplast-peds" position={isMobile ? mobilePos : position} direction="left"
                      translate={{x: '-50%'}}/>
            <ProductModal.Typography $subtitle>Объёмы средств</ProductModal.Typography>
            <ProductModal.Line>
                <Box $flex $fullWidth $direction="column" $flexGrow={1} $mt={16} $mb={16}>
                    <Box $fullWidth $flex $justifyContent="space-between">
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={86} src="assets/images/lrp/modals/cicaplast-peds/levres.png"/>
                            <ProductModal.Volume>7 мл</ProductModal.Volume>
                        </Box>
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={180} src="assets/images/lrp/modals/cicaplast-peds/spray.png"/>
                            <ProductModal.Volume>100 мл</ProductModal.Volume>
                        </Box>
                    </Box>
                </Box>
            </ProductModal.Line>
        </ProductModal.LineContainer>
    )
}

export default CicaplastPedsLine