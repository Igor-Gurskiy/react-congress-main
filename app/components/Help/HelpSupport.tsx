import React from 'react'
import styled from "styled-components"
import {useUIStore} from "@/stores/uiStore";

const HelpSupport = ({style = {}}) => {

    const specialization = useUIStore(state => state.specialization)

    return (
        <Support style={style}>
            {specialization === 'pharmacy' ? (
                <>
                    <SupportBold>техподдержка</SupportBold>
                    <SupportBold as="a" href="mailto:support@proexpertme.ru">support@proexpertme.ru</SupportBold>
                </>
            ) : (
                <>
                    <SupportBold>техподдержка</SupportBold>
                    <Phone as="a" href="tel:8-800-511-43-87">8-800-511-43-87</Phone>
                    <SupportBold as="a"
                                 href="mailto:support@dermatologicalbeauty.loreal.com.ru">support@dermatologicalbeauty.loreal.com.ru</SupportBold>
                </>
            )}
        </Support>
    )
}

export default HelpSupport

const Support = styled.div`
  position: absolute;
  right: 50px;
  bottom: 60px;
  text-align: right;
  font-family: 'Gilroy', sans-serif;
  color: #fff;
`

const SupportBold = styled.div`
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.03em;
  font-weight: 800;
  display: block;
  color: #fff;
  text-decoration: none;
`

const Phone = styled.div`
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  color: #fff;
  text-decoration: none;
`