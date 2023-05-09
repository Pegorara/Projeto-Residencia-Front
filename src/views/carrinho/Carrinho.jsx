import CIcon from '@coreui/icons-react'
import '../carrinho/style.css'
import { cilArrowLeft } from '@coreui/icons'
import { CButton, CFormInput, CFormSelect } from '@coreui/react'
import { CartItem } from '../../components/carrossel/CartItem/CartItem'

function Carrinho() {
  return (
    <div className='cart'>
      <div className="cartList">
        <div className="cartListHeader">
          <h3>Carrinho</h3>
          <h3>3 Itens</h3>
        </div>
        <span className="divider"></span>
        <div className="cartListBody">
          <p>Detalhes do produto</p>
          <p>Quantidade</p>
          <p>Preço</p>
          <p>Total</p>
        </div>
        <div className="cartListItems">
          <CartItem price={140} />
          <CartItem price={240} />
          <CartItem price={200} />
        </div>
        <CButton color='link' id="backToShopping" href="#"><CIcon icon={cilArrowLeft} size='md' /> Continuar comprando</CButton>
      </div>
      <div className="cartSummary">
        <h4>Resumo</h4>
        <span className="divider"></span>
        <div className='summaryInfos'>
          <div className="summ">
            <span>Itens 3</span>
            <span>R$ 580,00</span>
          </div>
          <p>Entrega</p>
          <CFormSelect 
            aria-label="Default select example"
            options={[
              'Entrega padrão - R$ 20,00',
              'Entrega expressa - R$ 50,00'
            ]}
          />
          <p id='coupon'>Cupom de desconto</p>
          <CFormInput
            type="text"
            placeholder="Insira o cupom"
          />
          <CButton id='couponButton'>Aplicar</CButton>
        </div>
        <span className="divider"></span>
        <div className='cartTotal'>
          <div className="summ">
            <span>Total</span>
            <span>R$ 600,00</span>
          </div>
          <CButton id='checkoutButton'>Finalizar Pedido</CButton>
        </div>
      </div>
    </div>
  )
}

export default Carrinho