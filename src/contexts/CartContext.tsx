import { ReactNode, createContext, useState } from 'react'

interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
  defaultPriceId: string
}

interface CartContextType {
  cart: IProduct[]
  totalValue: number
  addProduct: (product: IProduct) => void
  removeProduct: (product: IProduct) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<IProduct[]>([])
  const [totalValue, setTotalValue] = useState(0)

  function addProduct(product: IProduct) {
    const isProductCart = cart.some(
      (productCart) => productCart.id === product.id,
    )

    if (!isProductCart) {
      const newCart = [...cart, product]
      const price = Number(product.price.replace('R$', '').replace(',', '.'))

      setTotalValue(totalValue + price)
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
      const price = Number(product.price.replace('R$', '').replace(',', '.'))

      setTotalValue(totalValue - price)
      setCart(newCart)
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, totalValue }}
    >
      {children}
    </CartContext.Provider>
  )
}
