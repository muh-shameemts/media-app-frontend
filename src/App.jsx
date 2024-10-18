
import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage'
import WatchHistory from './Pages/WatchHistory'
import PageNotFound from './Pages/PageNotFound';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path={'/'} element={<LandingPage/>}/>
      <Route path={'/home'} element={<Home/>}/>
      <Route path={'/watchHistory'} element={<WatchHistory/>}/>
      <Route path={'*'} element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
        </>
  )
}

export default App
