import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Home from 'pages/Home';
import Heatmap from 'pages/Heatmap';
import NotFound from 'pages/NotFound';

function Main() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/heatmap' element={<Heatmap />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}

export default Main;