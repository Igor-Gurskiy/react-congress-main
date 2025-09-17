import ProductModal from "@/components/shared/product-modal/ProductModal";
import Box from "@/components/Box";
import React from "react";

const EffaclarLine = () => {
    return (
        <ProductModal.LineContainer>
            <ProductModal.Typography $subtitle>Объёмы средств</ProductModal.Typography>
            <ProductModal.Line>
                <ProductModal.Typography $subtitle $mb={20}>Основной уход</ProductModal.Typography>
                <Box $flex $fullWidth $direction="column" $flexGrow={1} $p="14px 16px">
                    <Box $fullWidth $flex $justifyContent="space-between">
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={88} src="assets/images/lrp/modals/effaclar/serum.png"/>
                            <ProductModal.Volume>30 мл</ProductModal.Volume>
                        </Box>
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={101} src="assets/images/lrp/modals/effaclar/duo.png"/>
                            <ProductModal.Volume>40 мл</ProductModal.Volume>
                        </Box>
                    </Box>
                </Box> 

                <ProductModal.Typography $subtitle $mt={16} $mb={16}>очищение</ProductModal.Typography>
                <Box $flex $fullWidth $direction="column" $flexGrow={1} $p="14px 16px">
                    <Box $fullWidth $flex $justifyContent="space-between">
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={130} src="assets/images/lrp/modals/effaclar/moussant200.png"/>
                            <ProductModal.Volume>200 мл</ProductModal.Volume>
                        </Box>
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={172} src="assets/images/lrp/modals/effaclar/purifiant400.png"/>
                            <ProductModal.Volume>400 мл</ProductModal.Volume>
                        </Box>
                    </Box>
                </Box>
                <Box $flex $fullWidth $direction="column" $flexGrow={1} $p="14px 16px">
                    <Box $fullWidth $flex $justifyContent="space-between">
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={130} src="assets/images/lrp/modals/effaclar/purifiant200.png"/>
                            <ProductModal.Volume>200 мл</ProductModal.Volume>
                        </Box>
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={174} src="assets/images/lrp/modals/effaclar/moussant400.png"/>
                            <ProductModal.Volume>400 мл</ProductModal.Volume>
                        </Box>
                    </Box>
                </Box>

            </ProductModal.Line>
        </ProductModal.LineContainer>
    )
}

export default EffaclarLine