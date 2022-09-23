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
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={logo} alt="Home" />
        </NavLink>

        <HeaderMenu>
          <LocalizationButton>
            <img src={localizationIcon} alt="" />
            <span>Porto Alegre, RS</span>
          </LocalizationButton>
          <NavLink to="/cart">
            <CartButton color="primary">
              <img src={cart} alt="" />
            </CartButton>
          </NavLink>
        </HeaderMenu>
      </HeaderContent>
    </HeaderContainer>
  )
}
