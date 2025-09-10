import Header from '../components/Header'
import Footer from '../components/Footer'

const RootLayout = ({children, cartItems}) => {
  return (
    <>
    <Header cartItems={cartItems}/>
    <main>
        {children}
    </main>
    <Footer/>
    </>
  )
}

export default RootLayout