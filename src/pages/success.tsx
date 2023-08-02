import { stripe } from '@/lib/stripe'
import {
  ImageContainer,
  ImagesSection,
  SucccessContainer,
} from '@/styles/pages/success'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'

interface ISuccessProps {
  customerName: string
  products: {
    name: string
    imageUrl: string
  }[]
}

export default function Success({ customerName, products }: ISuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SucccessContainer>
        <h1>Compra efetuada!</h1>

        <ImagesSection>
          {products?.map((product) => (
            <ImageContainer key={product.name}>
              <Image src={product.imageUrl} width={120} height={110} alt="" />
            </ImageContainer>
          ))}
        </ImagesSection>

        <p>
          Uhull <strong>{customerName}</strong>, sua compra de {products.length}{' '}
          camisetas já está a caminho da sua casa
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SucccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  const products = session.line_items?.data
    .map((item) => item.price.product as Stripe.Product)
    .map((product) => ({
      name: product.name,
      imageUrl: product.images[0],
    }))

  return {
    props: {
      customerName,
      products,
    },
  }
}
