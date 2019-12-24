import React, { Component } from 'react'
import SessionManager, { Role } from '../utils/session'
import { Redirect } from 'react-router-dom'

const Home = () => {
    if (!SessionManager.isLoggedIn() && SessionManager.getUser() == null) {
        return <Redirect to={{ pathname: '/login' }} />
    }
    
    const role = SessionManager.getUserRole();
    if (role === Role.admin) {
        return <Redirect to={{ pathname: '/admin/verifikasi' }} />
    } else {
        return <Redirect to={{ pathname: '/beranda' }} />
    }
}

export default Home;