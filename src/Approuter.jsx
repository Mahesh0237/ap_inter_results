import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loader, Stack, Text } from '@mantine/core';
const Interresultspage = lazy(() => import('./pages/Interresultspage'))
function Approuter({captureScreenshot}) {
    return (
        <BrowserRouter>
            <Suspense fallback={
                <Stack align='center' justify='center' style={{ height: "100vh" }}>
                    <Loader variant="bars" color="green" />
                    <Text size="md" fw={600} c="white">Loading please wait....</Text>
                </Stack>
            }>
                <Routes>
                    <Route path='/' element={<Interresultspage captureScreenshot={captureScreenshot} />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Approuter