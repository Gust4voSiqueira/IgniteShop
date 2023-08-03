import { CartContext } from '@/contexts/CartContext'
import {
  Close,
  Content,
  EmptyCart,
  Overlay,
  ProductCartContainer,
  ProductsSection,
  Title,
} from '@/styles/components/cart'
import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import { Handbag, X } from 'phosphor-react'
import { useContext, useState } from 'react'
import { ProductCart } from './sections/product/_index'
import { FooterCartSection } from './sections/footerCart/_index'

interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface IRenderCartProducts {
  products: IProduct[]
  removeProduct: (product: IProduct) => void
}

function RenderCartProducts({ products, removeProduct }: IRenderCartProducts) {
  return (
    <ProductsSection>
      {products.map((product) => (
        <ProductCartContainer key={product.id}>
          <ProductCart product={product} removeProduct={removeProduct} />
        </ProductCartContainer>
      ))}
    </ProductsSection>
  )
}

export function Cart() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)
  const { cart, removeProduct } = useContext(CartContext)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const priceIds = cart.map((product) => product.defaultPriceId)

      const response = await axios.post('/api/checkout', {
        priceIds,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      console.log(err)

      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Sacola de compras</Title>
        <Close>
          <X color="#8D8D99" size={28} weight="bold" />
        </Close>

        {cart.length > 0 ? (
          <RenderCartProducts products={cart} removeProduct={removeProduct} />
        ) : (
          <EmptyCart>
            <Handbag size={120} weight="fill" />
            <h3>Parece que não há nada na sua sacola.</h3>
          </EmptyCart>
        )}

        {cart.length > 0 && (
          <FooterCartSection
            isCreatingCheckoutSession={isCreatingCheckoutSession}
            handleBuyProduct={handleBuyProduct}
          />
        )}
      </Content>
    </Dialog.Portal>
  )
}
