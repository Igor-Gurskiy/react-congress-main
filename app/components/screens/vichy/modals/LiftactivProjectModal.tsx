import Box from '@/components/Box';
import Modal from '@/components/Modal';
import useWindowSize from '@/hooks/useWindowSize';
import {useVichyModalStore} from '@/stores/vichyModalStore';
import React from 'react';
import {Scrollbars} from 'react-custom-scrollbars-2';
import styled from 'styled-components';


const LiftactivProjectModal = ({close}) => {
    const liftactivProject = useVichyModalStore(state => state.liftactivProject)
    const setLiftactivProject = useVichyModalStore(state => state.setLiftactivProject)

    const [_, height] = useWindowSize()

    return (
        <Modal maxWidth={930} open={true} onClose={close} center>
            <Scrollbars
                style={{width: '100%', height: '100%'}}
                autoHeight
                autoHeightMin={200}
                autoHeightMax={height - 70}
                autoHide={false}
                renderView={props => <div {...props} style={{...props.style, overflow: 'hidden', overflowY: 'auto'}}/>}
            >
                <Wrapper>
                    <picture>
                        <source srcSet="assets/images/vichy/liftactiv_modal.webp" type="image/webp"/>
                        <source srcSet="assets/images/vichy/liftactiv_modal.png" type="image/png"/>
                        <img src="assets/images/vichy/liftactiv_modal.png" alt="liftactiv projcet modal"/>
                    </picture>
                </Wrapper>
            </Scrollbars>
        </Modal>
    )
}

export default LiftactivProjectModal


const Wrapper = styled(Box)`
  border-radius: 4px;
  max-width: 930px;

  img {
    max-width: 100%
  }
`
