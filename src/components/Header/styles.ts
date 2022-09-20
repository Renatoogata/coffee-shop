import styled from 'styled-components'

export const HeaderContainer = styled.body`
  padding: 1rem 0 6rem 0;
`

export const HeaderContent = styled.div`
  width: 100%;
  margin: 0 auto; //centralizar
  padding: 0 1.5rem; //se a tela do usuario for menor que 1120px a conteudo nao fique grudado nas laterais

  display: flex;
  justify-content: space-between;
  align-items: center; // por mais que fique cada um de um lado com essa tag, verticalmente alinhados com o centro
`

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const LocalizationButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['purple-100']};
  padding: 0.4rem;
  border-radius: 0.4rem;
  font-family: 'Roboto';
  font-size: small;
  color: ${(props) => props.theme['purple-600']};
  border: 0;
`

export const CartButton = styled.button`
  display: flex;
  background-color: ${(props) => props.theme['yellow-300']};
  padding: 0.4rem;
  border-radius: 0.4rem;
  border: 0;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-500']};
    transition: background-color 0.2s;
  }
`
