import React from 'react';
import HallHelpOverlay from './HallHelpOverlay';
import HallInactivityHelp from './HallInactivityHelp';
import HallScene from './HallScene';
import HallTour from './HallTour';

const HallScreen = (props) => {
    // Always passed when wrapped in RoomPanorama
    const { transition } = props

    return (
        <>
            <HallScene />
            {transition((style, item) => item ? <HallHelpOverlay style={style} /> : '') as any}
            <HallInactivityHelp />
            <HallTour />
        </>
    )
}

export default HallScreen
