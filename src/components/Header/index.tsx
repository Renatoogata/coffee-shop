import {
  CartButton,
  HeaderContainer,
  HeaderContent,
  HeaderMenu,
  LocalizationButton,
} from './styles'

import logo from '../../assets/logo.svg'
import localizationIcon from '../../assets/localizationIcon.svg'
import cart from '../../assets/cart.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <HeaderMenu>
          <LocalizationButton>
            <img src={localizationIcon} alt="" />
            <span>Porto Alegre, RS</span>
          </LocalizationButton>
          <CartButton color="primary">
            <img src={cart} alt="" />
          </CartButton>
        </HeaderMenu>
      </HeaderContent>
    </HeaderContainer>
  )
}
