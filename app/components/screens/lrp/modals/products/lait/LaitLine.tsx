import ProductModal from "@/components/shared/product-modal/ProductModal";
import Box from "@/components/Box";
import React from "react";

const LaitLine = () => {
    return (
        <ProductModal.LineContainer>
            <ProductModal.Typography $subtitle>Объёмы средств</ProductModal.Typography>
            <ProductModal.Line>
                <ProductModal.Typography $subtitle $mb={20}>уход</ProductModal.Typography>
                <Box $flex $fullWidth $direction="column" $flexGrow={1}>
                    <Box $fullWidth $flex $justifyContent="space-between">
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={106} src="assets/images/lrp/modals/lait/lait200.png"/>
                            <ProductModal.Volume>200 мл</ProductModal.Volume>
                        </Box>
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={143} src="assets/images/lrp/modals/lait/lait400.png"/>
                            <ProductModal.Volume>400 мл</ProductModal.Volume>
                        </Box>

                    </Box>
                </Box>

                <ProductModal.Typography $subtitle $mt={32} $mb={32}>очищение</ProductModal.Typography>
                <Box $flex $fullWidth $direction="column" $flexGrow={1}>
                    <Box $fullWidth $flex $justifyContent="space-between">
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={114} src="assets/images/lrp/modals/lait/lavant200.png"/>
                            <ProductModal.Volume>200 мл</ProductModal.Volume>
                        </Box>
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={153} src="assets/images/lrp/modals/lait/lavant400.png"/>
                            <ProductModal.Volume>400 мл</ProductModal.Volume>
                        </Box>

                    </Box>

                </Box>


            </ProductModal.Line>
        </ProductModal.LineContainer>
    )
}

export default LaitLine