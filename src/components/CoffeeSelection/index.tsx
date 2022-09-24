import { ShoppingCartSimple, Plus, Minus } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CoffeeInfo } from '../../providers/OrdersProvider/index'

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

interface FullCoffeeCardProps {
  coffee: CoffeeInfo
}

export const CoffeeSelection = ({ coffee }: FullCoffeeCardProps) => {
  const [cart, setCart] = useState<CoffeeInfo[]>([])

  const { id, image, type, title, description, price } = coffee

  const [coffeeAmount, setCoffeeAmount] = useState(1)

  function addOnCart() {
    setCart((state) => [...state, coffee])
  }

  function addOne() {
    if (coffeeAmount < 9) {
      setCoffeeAmount((state) => state + 1)
    }
  }

  function removeOne() {
    if (coffeeAmount > 1) {
      setCoffeeAmount((state) => state - 1)
    }
  }

  return (
    <CoffeeSelectionUnit key={id}>
      <img src={image} alt="" />
      <CoffeeTypeContainer>
        {type.map((type) => (
          <CoffeeType key={type}>{type}</CoffeeType>
        ))}
      </CoffeeTypeContainer>
      <CoffeeTitle>{title}</CoffeeTitle>
      <CoffeeDescription>{description}</CoffeeDescription>

      <CoffeeSelectionFooter>
        <div>
          <span>R$</span>
          <Price>{price}</Price>
        </div>
        <FooterSection>
          <QuantityOperator onClick={removeOne}>
            <Minus size={16} />
          </QuantityOperator>
          <Quantity>{coffeeAmount}</Quantity>
          <QuantityOperator onClick={addOne}>
            <Plus size={16} />
          </QuantityOperator>
          <Cart onClick={addOnCart}>
            <ShoppingCartSimple size={25} />
          </Cart>
        </FooterSection>
      </CoffeeSelectionFooter>
    </CoffeeSelectionUnit>
  )
}
