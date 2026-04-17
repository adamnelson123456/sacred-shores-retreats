import { Outlet } from 'react-router-dom'
import MerchCartBar from '../components/MerchCartBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MerchCartProvider } from '../context/MerchCartContext'
import { MerchCurrencyProvider } from '../context/MerchCurrencyContext'

export default function MerchLayout() {
  return (
    <MerchCurrencyProvider>
      <MerchCartProvider>
        <Navbar />
        <MerchCartBar />
        <Outlet />
        <Footer />
      </MerchCartProvider>
    </MerchCurrencyProvider>
  )
}
