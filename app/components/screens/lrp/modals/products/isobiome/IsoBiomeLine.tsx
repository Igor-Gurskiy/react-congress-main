import ProductModal from "@/components/shared/product-modal/ProductModal";
import Box from "@/components/Box";
import React from "react";

const IsoBiomeLine = () => {
    return (
        <ProductModal.LineContainer>
            <ProductModal.Typography $subtitle>Объёмы средств</ProductModal.Typography>
            <ProductModal.Line>
                <ProductModal.Typography $subtitle $mb={20}>Основной уход</ProductModal.Typography>
                <Box $flex $fullWidth $direction="column" $flexGrow={1} $p="14px 16px">
                    <Box $fullWidth $flex $justifyContent="space-between">
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={110} src="assets/images/lrp/modals/isobiome/apaisant.png"/>
                            <ProductModal.Volume>40 мл</ProductModal.Volume>
                        </Box>
                    </Box>
                </Box>

                <ProductModal.Typography $subtitle $mt={16} $mb={16}>очищение</ProductModal.Typography>
                <Box $flex $fullWidth $direction="column" $flexGrow={1} $p="14px 16px">
                    <Box $fullWidth $flex $justifyContent="space-between">
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={127} src="assets/images/lrp/modals/isobiome/creme200.png"/>
                            <ProductModal.Volume>200 мл</ProductModal.Volume>
                        </Box>
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={179} src="assets/images/lrp/modals/isobiome/creme390.png"/>
                            <ProductModal.Volume>390 мл</ProductModal.Volume>
                        </Box>
                    </Box>
                </Box>
            </ProductModal.Line>
        </ProductModal.LineContainer>
    )
}

export default IsoBiomeLine