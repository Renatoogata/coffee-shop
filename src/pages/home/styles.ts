import styled from 'styled-components'

export const BodyContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const IntroductionSection = styled.section`
  display: flex;
  flex-direction: row-reverse;
  gap: 1rem;

  @media (max-width: 48rem) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

export const IntroductionText = styled.div`
  width: 85%;

  h1 {
    font-size: 3rem;
    padding: 0 0 1rem 0;
  }

  span {
    font-size: 1.4rem;
    font-family: 'Roboto';
  }
`

export const TextInfoContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem 0 0 0;
`

export const TextInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0 0 1rem 0;
  font-family: 'Roboto';
`

export const CoffeeTitle = styled.h1`
  padding: 5rem 0 3rem 0;
`
export const CoffeeSelectionContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.6rem;
  margin-bottom: 8rem;

  @media (max-width: 48rem) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
`
