import {useContext}from 'react'
import { UseProductContextType, ProductsContext} from '../context/ProductsProvider'


const useProducts = ():UseProductContextType =>{
        return useContext(ProductsContext)
}
export default useProducts
