import {
  CartBody,
  CartBodyContainer,
  CartUnit,
  ConfirmOrderButton,
  Price,
  QuantityContainer,
  QuantityDiv,
  TotalInfos,
  TotalInfosLine,
} from './styles'
import arabe from '../../../../assets/coffeeTypes/arabe.svg'
import cafeComLeite from '../../../../assets/coffeeTypes/cafeComLeite.svg'
import { Minus, Plus, Trash } from 'phosphor-react'

export const OrderCart = () => {
  return (
    <CartBodyContainer>
      <h2>Café selecionados</h2>
      <CartBody>
        <CartUnit>
          <img src={arabe} alt="" />
          <QuantityContainer>
            <span>Expresso Tradicional</span>
            <div>
              <QuantityDiv>
                <Minus size={16} />
                <span>1</span>
                <Plus size={16} />
              </QuantityDiv>
              <QuantityDiv>
                <Trash size={16} color="#8047F8" />
                <p>REMOVER</p>
              </QuantityDiv>
            </div>
          </QuantityContainer>

          <Price>R$9,90</Price>
        </CartUnit>
        <CartUnit>
          <img src={cafeComLeite} alt="" />
          <QuantityContainer>
            <span>Expresso Tradicional</span>
            <div>
              <QuantityDiv>
                <Minus size={16} />
                <span>1</span>
                <Plus size={16} />
              </QuantityDiv>
              <QuantityDiv>
                <Trash size={16} color="#8047F8" />
                <p>REMOVER</p>
              </QuantityDiv>
            </div>
          </QuantityContainer>

          <Price>R$9,90</Price>
        </CartUnit>

        <TotalInfos>
          <TotalInfosLine>
            <span>Total de itens</span>
            <span>R$ 19,80</span>
          </TotalInfosLine>
          <TotalInfosLine>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </TotalInfosLine>
          <TotalInfosLine>
            <h2>Total</h2>
            <h2>R$ 33,20</h2>
          </TotalInfosLine>
          <ConfirmOrderButton>CONFIRMAR PEDIDO</ConfirmOrderButton>
        </TotalInfos>
      </CartBody>
    </CartBodyContainer>
  )
}
