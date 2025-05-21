import React from 'react'

import { Routes, Route, Navigate } from 'react-router'

import routes from './routes'

function MainRouter() {
    return (
        <Routes>
            {routes.map((route) => (
                <Route key={route.name} element={<route.component />} path={route.path} />
            ))}
            <Route element={<Navigate replace to="/" />} path="*" />
        </Routes>
    )
}

export default MainRouter
