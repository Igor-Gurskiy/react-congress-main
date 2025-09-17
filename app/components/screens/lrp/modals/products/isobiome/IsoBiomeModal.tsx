import {API} from '@/api';
import {EventsEnum, LikesEnum} from '@/api/tracker';
import ProductModal from '@/components/shared/product-modal/ProductModal';
import {useUIStore} from '@/stores/uiStore';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Box from "@/components/Box";
import IsoBiomeLine from "@/components/screens/lrp/modals/products/isobiome/IsoBiomeLine";
import IsoBiomeBenefites from "@/components/screens/lrp/modals/products/isobiome/IsoBiomeBenefites";
import IsoBiomeCleaning from "@/components/screens/lrp/modals/products/isobiome/IsoBiomeCleaning";


const IsoBiomeModal = ({close}) => {
    const likes = useUIStore(state => state.likes)
    const addLike = useUIStore(state => state.addLike)
    const spec = useUIStore(state => state.specialization)

    const [like, setLike] = useState(false)

    useEffect(() => {
        API.tracker.sendEvent(EventsEnum.lrpIsoBiomeVisit)
        setLike(likes.includes(LikesEnum.lrpIsoBiomeLike))
    }, [])

    const handleLike = () => {
        if (like) return
        API.tracker.sendLike(LikesEnum.lrpIsoBiomeLike)
        addLike(LikesEnum.lrpIsoBiomeLike)
        setLike(true)
    }

    const onCloseHandler = () => {
        if (typeof close === 'function') {
            close()
        }
    }

    return (
        <ProductModal open={true} onClose={onCloseHandler}>
            <ProductModal.Body onClose={onCloseHandler}>

                <ProductModal.Column>
                    <ProductModal.BrandContainer
                        $color="url(/assets/images/lrp/modals/isobiome/badge.png)"
                        style={{padding: '16px 32px'}}
                    >
                        <Box $flex>
                            <NewSticker>новинка</NewSticker>
                        </Box>
                        <Brand>EFFACLAR H ISO-BIOME</Brand>
                    </ProductModal.BrandContainer>

                    <ProductModal.LeftContainer>
                        <ProductModal.Typography $description>
                            Комплексный уход за кожей с акне: нормализует микробиом и восстанавливает кожный барьер при
                            применении лекарственных средств
                        </ProductModal.Typography>

                        <ProductModal.MobileVisible visible={false}>
                            <IsoBiomeLine/>
                        </ProductModal.MobileVisible>
                    </ProductModal.LeftContainer>

                </ProductModal.Column>

                <ProductModal.Column>

                    <ProductModal.RightContainer>
                        <IsoBiomeBenefites/>
                        <IsoBiomeCleaning/>
                    </ProductModal.RightContainer>

                </ProductModal.Column>

                <ProductModal.MobileVisible visible={true}>
                    <IsoBiomeLine/>
                </ProductModal.MobileVisible>

            </ProductModal.Body>
            <ProductModal.Footer
                $justifyContent="flex-end"
                background="assets/images/lrp/modals/isobiome/bg.png"
            >
                <ProductModal.Recommendation
                    $flex
                    $alignItems="center"
                    like={like}
                    onClick={handleLike}
                    likeId={LikesEnum.lrpIsoBiomeLike}
                />
            </ProductModal.Footer>
        </ProductModal>
    )
}


export default IsoBiomeModal

const Text = styled.div`
  font-weight: 300;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 1px;
`

const Brand = styled(Text)`
  font-weight: 800;
	font-size: 24px;
	line-height: 26px;

  span {
    font-weight: 400;
  }
`

const NewSticker = styled.div`
  padding: 5px 9px 6px;
  gap: 10px;
  height: 24px;
  background: #36B0FC;
  border-radius: 2px;

  font-weight: 600;
  font-size: 12px;
  line-height: 13px;

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: lowercase;
  color: #FFFFFF;
`