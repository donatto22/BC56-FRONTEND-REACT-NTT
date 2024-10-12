import Footer from "@components/footer/Footer"
import Header from "@components/header/Header"
import { ReactNode } from "react"

const ProductsLayout = ({ children }: { children: ReactNode }): React.JSX.Element => {
  return (
    <>
    <Header/>
    { children }
    <Footer/>
    </>
  )
}

export default ProductsLayout