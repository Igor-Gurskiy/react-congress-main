import React, { useEffect } from 'react';
import {useRouter} from "next/router";

const NotFoundPage = () => {

    const router = useRouter()

    useEffect(() => {
        router.push('/')
    }, [])

    return null
}

export default NotFoundPage