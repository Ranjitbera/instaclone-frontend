import React from 'react'
import './landing.css'
import LandingPage from './component/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostView from './component/PostView';
import Form from './component/Form';


function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/postview" element={<PostView />} />
        <Route path="/post" element={<Form />} />
      </Routes>
    </BrowserRouter>
  </>)
}

export default App;