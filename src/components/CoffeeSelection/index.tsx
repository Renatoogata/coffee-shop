import { ShoppingCartSimple, Plus, Minus } from 'phosphor-react'
import { coffeeList } from './repository'

import {
  Cart,
  CoffeeDescription,
  CoffeeSelectionFooter,
  CoffeeSelectionUnit,
  CoffeeTitle,
  CoffeeType,
  CoffeeTypeContainer,
  FooterSection,
  Price,
  Quantity,
  QuantityOperator,
} from './styles'

export function CoffeeSelection() {
  return (
    <>
      {coffeeList.map((coffee) => {
        return (
          <CoffeeSelectionUnit key={coffee.id}>
            <img src={coffee.image} alt="" />
            <CoffeeTypeContainer>
              {coffee.type.map((type) => {
                return <CoffeeType key={type}>{type}</CoffeeType>
              })}
            </CoffeeTypeContainer>
            <CoffeeTitle>{coffee.title}</CoffeeTitle>
            <CoffeeDescription>{coffee.description}</CoffeeDescription>

            <CoffeeSelectionFooter>
              <div>
                <span>R$</span>
                <Price>{coffee.price}</Price>
              </div>
              <FooterSection>
                <QuantityOperator>
                  <Minus size={16} />
                </QuantityOperator>
                <Quantity>1</Quantity>
                <QuantityOperator>
                  <Plus size={16} />
                </QuantityOperator>
                <Cart>
                  <ShoppingCartSimple size={25} />
                </Cart>
              </FooterSection>
            </CoffeeSelectionFooter>
          </CoffeeSelectionUnit>
        )
      })}
    </>
  )
}
