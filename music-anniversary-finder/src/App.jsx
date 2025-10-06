import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ArtistPage from './pages/ArtistPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/artist/:artistId" element={<ArtistPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}