import { ReactNode, createContext, useState } from 'react'

interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface CartContextType {
  cart: IProduct[]
  addProduct: (product: IProduct) => void
  removeProduct: (product: IProduct) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<IProduct[]>([])

  function addProduct(product: IProduct) {
    const isProductCart = cart.some(
      (productCart) => productCart.id === product.id,
    )

    if (!isProductCart) {
      const newCart = [...cart, product]
      setCart(newCart)
    }
  }

  function removeProduct(product: IProduct) {
    const isProductCart = cart.some(
      (productCart) => productCart.id === product.id,
    )

    if (isProductCart) {
      const newCart = cart.filter(
        (productCart) => productCart.id !== product.id,
      )
      setCart(newCart)
    }
  }

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  )
}
