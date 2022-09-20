import styled from 'styled-components'

export const CoffeeSelectionUnit = styled.div`
  width: 16rem;
  background-color: ${(props) => props.theme['white-200']};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem 2rem;
  /* margin: 0 1rem 1rem 0; */

  img {
    margin-top: -1.2rem;
    padding: 0 0 0.8rem 0;
  }

  @media (max-width: 48rem) {
    size: 100%;
  }
`
export const CoffeeTypeContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CoffeeType = styled.span`
  background-color: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-600']};
  padding: 0.3rem 0.4rem;
  font-size: 0.6rem;
  font-weight: 600;
  border-radius: 1rem;
  margin: 0 0.2rem 0.6rem 0;
`
export const CoffeeTitle = styled.h2`
  display: flex;
  text-align: center;
  font-size: 1.4rem;
`

export const CoffeeDescription = styled.span`
  height: 5rem;
  padding: 0.4rem 1rem;
  text-align: center;
  color: ${(props) => props.theme['white-300']};
  font-size: 0.9rem;
`
export const CoffeeSelectionFooter = styled.footer`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 0rem 0 1rem 0;
  align-items: baseline;
`

export const Price = styled.span`
  font-family: 'Baloo 2';
  font-size: 1.8rem;
  font-weight: 800;
  margin-left: 0.2rem;
`

export const FooterSection = styled.section`
  display: flex;
  align-items: center;
`

export const QuantityOperator = styled.button`
  border: 0;
  margin: 0.2rem;
`
export const Quantity = styled.span`
  display: flex;
  text-align: center;
  margin-bottom: 0.4rem;
`

export const Cart = styled.span`
  background-color: ${(props) => props.theme['purple-600']};
  padding: 0.2rem 0.4rem;
  color: white;
  margin-left: 0.5rem;
  border-radius: 0.4rem;
  border: 0;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['purple-500']};
    transition: background-color 0.2s;
  }
`
