import styled from 'styled-components'

export const BodyContainer = styled.body`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1rem;

  & h2 {
    font-size: larger;
    margin-bottom: 0.8rem;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme['white-200']};
  width: 42rem;
  padding: 2rem;

  & input {
    border-radius: 0.4rem;
    background-color: ${(props) => props.theme['input-background']};
    border: 1px solid ${(props) => props.theme['input-border']};
    margin-bottom: 1.2rem;
    padding: 0.8rem;
  }

  & input:focus {
    outline: none;
  }

  & input:nth-child(3) {
    width: 100%;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;

  & input:nth-child(2) {
    width: 100%;
  }

  & input:nth-child(3) {
    width: 25%;
  }
`
export const AdressTitle = styled.form`
  display: flex;
  align-items: baseline;

  & div {
    margin-left: 0.5rem;

    & p:first-child {
      font-weight: 600;
    }

    & p:nth-child(2) {
      color: ${(props) => props.theme['text-black-light']};
      font-size: 90%;
      margin-top: 0.3rem;
      margin-bottom: 2rem;
    }
  }
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
  background-color: ${(props) => props.theme['white-200']};
  padding: 2rem;
`

export const PaymentSelectButton = styled.button``