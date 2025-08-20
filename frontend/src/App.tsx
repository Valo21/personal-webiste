import { BrowserRouter, Routes, Route } from 'react-router';

import Home from './pages/Home';
import RootLayout from './components/RootLayout';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './context/ThemeContext';
import MTA from './pages/MTA';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootLayout/>}>
            <Route index element={<Home/>}/>  
            <Route path='about' element={<About/>} />
            <Route path='mta' element={<MTA/>} />      
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
