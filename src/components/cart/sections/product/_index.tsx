import {
  ImageContainer,
  InfoProductContainer,
  ProductCartContainer,
} from '@/styles/components/cart'
import Image from 'next/image'

interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface IProductCart {
  product: IProduct
  removeProduct: (product: IProduct) => void
}

export function ProductCart({ product, removeProduct }: IProductCart) {
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
}
