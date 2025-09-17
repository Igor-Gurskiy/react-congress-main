import ProductModal from "@/components/shared/product-modal/ProductModal";
import Box from "@/components/Box";
import React from "react";

const CicaplastLine = () => {
    return (
        <ProductModal.LineContainer>
            <ProductModal.Typography $subtitle>Объёмы средств</ProductModal.Typography>
            <ProductModal.Line>
                <Box $flex $fullWidth $direction="column" $flexGrow={1}>
                    <Box $fullWidth $flex $justifyContent="space-between">
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={86} src="assets/images/lrp/modals/cicaplast/baume.png"/>
                            <ProductModal.Volume>7 мл</ProductModal.Volume>
                        </Box>
                        <Box $flex $flexGrow={1} $direction="column" $alignItems="center" $justifyContent="flex-end">
                            <img height={180} src="assets/images/lrp/modals/cicaplast/spray.png"/>
                            <ProductModal.Volume>100 мл</ProductModal.Volume>
                        </Box>
                    </Box>
                </Box>
            </ProductModal.Line>
        </ProductModal.LineContainer>
    )
}

export default CicaplastLine