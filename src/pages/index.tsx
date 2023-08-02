/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'

import { stripe } from '@/lib/stripe'
import { GetStaticProps } from 'next'

import Stripe from 'stripe'
import Head from 'next/head'
import { Handbag, X } from 'phosphor-react'
import { CartContext } from '@/contexts/CartContext'
import { useContext } from 'react'
import Link from 'next/link'

interface IHomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
    defaultPriceId: string
  }[]
}

export default function Home({ products }: IHomeProps) {
  const { addProduct, removeProduct, cart } = useContext(CartContext)
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product className="keen-slider__slide" key={product.id}>
              <Link href={`/product/${product.id}`} prefetch={false}>
                <Image src={product.imageUrl} alt="" width={520} height={480} />
              </Link>

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>

                {!cart.some((productCart) => productCart.id === product.id) ? (
                  <button
                    className="addProduct"
                    onClick={() => addProduct(product)}
                  >
                    <Handbag size={30} color="#FFF" />
                  </button>
                ) : (
                  <button
                    className="removeProduct"
                    onClick={() => removeProduct(product)}
                  >
                    <X size={30} color="#FFF" />
                  </button>
                )}
              </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
    active: true,
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
