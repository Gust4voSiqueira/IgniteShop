import { CartContext } from '@/contexts/CartContext'
import {
  FooterCart,
  ImageContainer,
  InfoProductContainer,
  ProductCartContainer,
} from '@/styles/components/cart'
import { Close, Content, Overlay } from '@/styles/pages/app'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { useContext } from 'react'
import { EmptyCart } from './sections/emptyCart'

interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface IHandleCart {
  cart: IProduct[]
  removeProduct: (product: IProduct) => void
}

function HandleCart({ cart, removeProduct }: IHandleCart) {
  if (cart.length === 0) return <EmptyCart />

  return (
    <div>
      {cart.map((product) => {
        return (
          <ProductCartContainer key={product.id}>
            <ImageContainer>
              <Image src={product.imageUrl} alt="" width={100} height={110} />
            </ImageContainer>

            <InfoProductContainer>
              <span>{product.name}</span>
              <b>{product.price}</b>

              <button onClick={() => removeProduct(product)}>Remover</button>
            </InfoProductContainer>
          </ProductCartContainer>
        )
      })}

      <FooterCart>
        <div>
          <span className="quantitieText">Quantidade</span>
          <span className="totalValue">3 itens</span>
        </div>

        <div>
          <b className="totalValue">Valor total</b>
          <h3>R$ 270,00</h3>
        </div>
      </FooterCart>
    </div>
  )
}

export function Cart() {
  const { cart, removeProduct } = useContext(CartContext)

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Sacola de compras</Dialog.Title>
        <Close>
          <X color="#8D8D99" size={28} weight="bold" />
        </Close>
        <HandleCart cart={cart} removeProduct={removeProduct} />
      </Content>
    </Dialog.Portal>
  )
}
