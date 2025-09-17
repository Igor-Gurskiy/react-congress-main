import ProductModal from "@/components/shared/product-modal/ProductModal";
import Box from "@/components/Box";
import React from "react";
import Molecule from "@/components/ui/molecule/Molecule";
import useResponsive from "@/hooks/useResponsive";

const KidsLine = () => {
    const {isMobile} = useResponsive()

    const position = {
        bottom: -45,
        left: '50%'
    }

    const mPos = {
        top: '2%',
        left: '7%'
    }

    const pos = isMobile ? mPos : position

    return (
        <ProductModal.LineContainer>
            <ProductModal.Typography $subtitle>Объёмы средств</ProductModal.Typography>
            <ProductModal.Line>
                <Box $flex $fullWidth $direction="column" $flexGrow={1} $mt={16}>
                    <Box $fullWidth $flex $justifyContent="space-between">
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={136} src="assets/images/lrp/modals/kids/lotion.png"/>
                            <ProductModal.Volume>50 мл</ProductModal.Volume>
                        </Box>
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={183} src="assets/images/lrp/modals/kids/lotion250.png"/>
                            <ProductModal.Volume>250 мл</ProductModal.Volume>
                        </Box>
                    </Box>
                </Box>

                <Box $flex $fullWidth $direction="column" $flexGrow={1} $mt={32} $mb={16}>
                    <Box $fullWidth $flex $justifyContent="space-between">
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={183} src="assets/images/lrp/modals/kids/spray.png"/>
                            <ProductModal.Volume>200 мл</ProductModal.Volume>
                        </Box>
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={199} src="assets/images/lrp/modals/kids/hydration.png"/>
                            <ProductModal.Volume>250 мл</ProductModal.Volume>
                        </Box>

                    </Box>
                </Box>
                <Molecule id="kids-peds" position={pos} direction="right" translate={{x: '-50%'}}/>
            </ProductModal.Line>
        </ProductModal.LineContainer>
    )
}

export default KidsLine