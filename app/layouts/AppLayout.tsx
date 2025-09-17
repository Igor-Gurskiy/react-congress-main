import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import {useUIStore} from '../stores/uiStore'

const AppLayout = ({children, title = '', style = {}}) => {
    const setConnection = useUIStore(state => state.setConnection)

    // useEffect(() => {
    //     const connectionSpeed = navigator && navigator.connection && navigator.connection?.downlink || 2
    //     setConnection(connectionSpeed)
    // }, [])

    return (
        <Wrapper style={style}>
            <Head>
                {/* <title>{title} | Loreal Congress 2021</title> */}
                <title>Онлайн-конгресс L'Oréal Dermatological Beauty</title>
                <meta name="viewport"
                      content="width=device-width, height=device-height, initial-scale=1,minimum-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=0, shrink-to-fit=no"/>
            </Head>
            {children}
        </Wrapper>
    )
}

export default AppLayout

const Wrapper = styled.div`
  margin: 0 !important;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
`