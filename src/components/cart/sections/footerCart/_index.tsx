import { CartContext } from '@/contexts/CartContext'
import { FooterCart } from '@/styles/components/cart'
import { useContext } from 'react'

interface IFooterCartSection {
  isCreatingCheckoutSession: boolean
  handleBuyProduct: () => void
}

export function FooterCartSection({
  isCreatingCheckoutSession,
  handleBuyProduct,
}: IFooterCartSection) {
  const { cart, totalValue } = useContext(CartContext)
  const totalValueFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalValue)

  return (
    <FooterCart>
      <div>
        <span className="quantitieText">Quantidade</span>
        <span className="totalValue">
          {cart.length > 1 ? `${cart.length} itens` : `${cart.length} item`}
        </span>
      </div>

      <div>
        <b className="totalValue">Valor total</b>
        <h3>{totalValueFormatter}</h3>
      </div>

      <button
        disabled={isCreatingCheckoutSession}
        className="finnallyButton"
        onClick={handleBuyProduct}
      >
        Finalizar compra
      </button>
    </FooterCart>
  )
}
