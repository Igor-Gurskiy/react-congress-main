import { API } from '@/api';
import { EventsEnum } from '@/api/tracker';
import AppLayout from '@/layouts/AppLayout';
import React, { useEffect } from 'react';
import HallPage from "@/components/screens/hall/HallPage";

const IndexPage = () => {

    useEffect(() => {
        API.tracker.sendEvent(EventsEnum.mainVisit)
    }, [])

    return (
        <AppLayout
            title="Главная"
        >
            <HallPage />
        </AppLayout>
    )
}

export default IndexPage