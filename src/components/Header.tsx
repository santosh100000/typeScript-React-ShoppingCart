import useCart from "../hooks/useCart"
import Nav from "./Nav"


type PropTypes = {
    viewCart:boolean,
    setViewCart:React.Dispatch<React.SetStateAction<boolean>>
}
const Header = ({viewCart,setViewCart}:PropTypes) => {
    const{totalItems, totalPrice}= useCart();

    const content = (
        <header className="header">
            <div className="header__title-bar">
                <h1>Santosh Co.</h1>
                <div className="header__price-box">
                   <p>Total Items:{totalItems}</p>
                   <p>Total price:{totalPrice}</p>

                </div>
            </div>
            <Nav viewCart ={viewCart} setViewCart={setViewCart}/>
        </header>
    )
  return content
   
  
}
export default Header