import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'

export default function RootLayout() {
  return (
    <>
      <header>

      </header>
      <Navbar/>
      <main className='d-flex flex-column w-100'>
        <Outlet/>
      </main>
      <aside>
        
      </aside>
      <Footer/>
    </>
  )
}
