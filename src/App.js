import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { fetchPartners } from './features/partners/partnersSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';
import { Route, Routes } from 'react-router-dom';
import { AboutPage, CampsiteDetailPage, CampsitesDirectoryPage, ContactPage, HomePage } from './pages';
import { Header, Footer } from './components';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampsites());
    dispatch(fetchPartners());
    dispatch(fetchPromotions());
  }, [dispatch]);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='contact' element={ <ContactPage/> } />
        <Route path='about' element={ <AboutPage /> } />
        <Route path='directory' element={ <CampsitesDirectoryPage/> } />
        <Route path='directory/:campsiteId' element={ <CampsiteDetailPage /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;