import styled from 'styled-components'

export const CartBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  & h2 {
    font-size: larger;
  }
`
export const CartBody = styled.div`
  gap: 1rem;
  border-radius: 0.5rem 4rem;
  background-color: ${(props) => props.theme['white-200']};
  padding: 1.2rem 2rem 2rem 2rem;
`
export const CartUnit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1.5px solid ${(props) => props.theme['input-border']};
  gap: 1rem;
  & img {
    width: 4.5rem;
  }
`

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem 0;

  & div {
    display: flex;
    flex-direction: row;
    gap: 1rem 0.4rem;
  }
`
export const QuantityDiv = styled.div`
  display: flex;
  background-color: ${(props) => props.theme['input-border']};
  border: 1px solid ${(props) => props.theme['input-border']};
  border-radius: 0.4rem;
  padding: 0.4rem;
  align-items: center;

  & p {
    font-size: smaller;
  }
`
export const Price = styled.span`
  margin-left: 3rem;
  margin-bottom: 2.5rem;
  font-weight: 700;
`

export const TotalInfos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 1rem;
`
export const TotalInfosLine = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ConfirmOrderButton = styled.button`
  background-color: ${(props) => props.theme['yellow-500']};
  border: 0;
  padding: 0.8rem 0;
  border-radius: 0.4rem;
  color: white;

  &:hover {
    background-color: ${(props) => props.theme['yellow-600']};
    transition: background-color 0.2s;
  }
`
