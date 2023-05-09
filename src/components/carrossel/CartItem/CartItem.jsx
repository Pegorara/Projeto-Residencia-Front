import { CCard, CCardImage, CCol, CRow } from "@coreui/react";
import Placeholder from '../../../assets/images/WF Image Placeholder.svg'
import '../CartItem/style.css'
import { useEffect, useState } from "react";

export function CartItem({price}) {
  const basePrice = price
  const [counter, setCounter] = useState(1)
  const [itemPrice, setItemPrice] = useState(price)

  useEffect(() => {
    if(counter < 1) {
      setCounter(1)
      setItemPrice(basePrice)
    }
  }, [basePrice, counter])

  function addPrice() {
    setCounter(counter + 1)
    setItemPrice(basePrice * (counter + 1))
  }
  function reducePrice() {
    setCounter(counter - 1)
    setItemPrice(itemPrice - basePrice)
  }

  return (
    <CCard className="mb-3 cartItem">
      <CRow className="g-0">
        <CCol md={4} style={{maxWidth: '100px'}}>
          <CCardImage src={Placeholder} />
        </CCol>
        <CCol md={8}>
          <div className="itemInfos">
            <span className="itemName">SuperCool Clothing</span>
            <span className="itemSize">Tamanho: P</span>
            <span className="removeItem">Remover</span>
          </div>
        </CCol>
      </CRow>
      <CRow className="g-0">
        <div className="itemCount">
          <button className="buttonCounter" onClick={() => reducePrice()}>&#x2212;</button>
          <span className="itemCounter">{counter}</span>
          <button className="buttonCounter" onClick={() => addPrice()}>&#x2b;</button>
        </div>
      </CRow>
      <CRow className="g-0">
        <div className="itemPrice">
          <span>R$ {basePrice},00</span>
        </div>
      </CRow>
      <CRow className="g-0">
        <div className="itemPrice">
          <span>R$ {itemPrice},00</span>
        </div>
      </CRow>
    </CCard>
  )
}