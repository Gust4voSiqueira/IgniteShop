import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { Handbag } from 'phosphor-react'
import { Cart } from '../cart'

import logoImg from '../../assets/logo.svg'
import { useContext } from 'react'
import { CartContext } from '@/contexts/CartContext'
import { Header } from '@/styles/components/header'

export function HeaderComponent() {
  const { cart } = useContext(CartContext)

  return (
    <Header>
      <Image src={logoImg} alt="" />

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div>
            {cart.length > 0 && <span>{cart.length}</span>}

            <button>
              <Handbag size={25} color="#8D8D99" />
            </button>
          </div>
        </Dialog.Trigger>

        <Cart />
      </Dialog.Root>
    </Header>
  )
}
