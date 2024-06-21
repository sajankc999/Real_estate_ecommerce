import React, { useState, useEffect } from 'react'
import api from '../api'
import { Navigate } from "react-router-dom";
import { jwtDecode  } from "jwt-decode";
import { REFRESH_TOKEN, ACCESS_TOKEN } from '../constants';

export default function ProtectedRoutes({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(null);
    useEffect(() => {
        auth().catch(() => setIsAuthorized(false));
    }, [])
    const refreshtoken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)
        try {
            const res = await api.post('/api/token/refresh/',
                { refresh: refreshToken })
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                // console.log('called')
                setIsAuthorized(true)

            } else {
                setIsAuthorized(false)
            }
        } catch (error) {
            console.log(error)
            setIsAuthorized(false)
        }
    }
    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        // console.log(token)
        if (!token) {
            setIsAuthorized(false);
            return
        }
        // setIsAuthorized(true);
        const decode = jwtDecode(token)
        const tokenExpiration = decode.exp
        const now = Date.now() / 1000

        if (now>= tokenExpiration ) {
            await refreshtoken()
        } else {
            setIsAuthorized(true);
        }
    }
    if (isAuthorized === null) {    
        return <div>Loading...</div>
    }
    // console.log(isAuthorized)
    return isAuthorized ? children: <Navigate to="/login" />

}
