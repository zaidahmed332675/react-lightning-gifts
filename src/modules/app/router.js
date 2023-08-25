// NPM Dependencies
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Module Dependencies
import NotFoundPage from 'modules/error/pages/not-found';
import LandingPage from 'modules/create/pages/landing-page';
import RedeemPage from 'modules/redeem/pages/redeem-page';

/**
 * RouterMap
 */
const RouterMap = () => (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/redeem/:id" element={<RedeemPage />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
);

export default RouterMap;
