import coffee from '../../assets/coffee.svg'
import Icon1 from '../../assets/Icon1.svg'
import Icon2 from '../../assets/Icon2.svg'
import Icon3 from '../../assets/Icon3.svg'
import Icon4 from '../../assets/Icon4.svg'

import {
  BodyContainer,
  IntroductionSection,
  IntroductionText,
  TextInfo,
  TextInfoContainer,
  CoffeeTitle,
  CoffeeSelectionContainer,
} from './styles'
import { CoffeeSelection } from '../../components/CoffeeSelection'

export function Home() {
  return (
    <BodyContainer>
      <IntroductionSection>
        <img src={coffee} alt="" />

        <div>
          <IntroductionText>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivry você recebe seu café onde estiver, a qualquer
              hora
            </span>

            <TextInfoContainer>
              <TextInfo>
                <img src={Icon1} alt="" />
                <a>Compra simples e segura</a>
              </TextInfo>
              <TextInfo>
                <img src={Icon2} alt="" />
                <a>Entrega rápida e rastreada</a>
              </TextInfo>
              <TextInfo>
                <img src={Icon3} alt="" />
                <a>Entrega rápida e rastreada</a>
              </TextInfo>
              <TextInfo>
                <img src={Icon4} alt="" />
                <a>O café chega fresquinho até você</a>
              </TextInfo>
            </TextInfoContainer>
          </IntroductionText>
        </div>
      </IntroductionSection>

      <CoffeeTitle>
        <h2>Nossos cafés</h2>
      </CoffeeTitle>

      <CoffeeSelectionContainer>
        <CoffeeSelection />
      </CoffeeSelectionContainer>
    </BodyContainer>
  )
}
