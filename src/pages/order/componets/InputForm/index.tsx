import { Bank, CreditCard, MapPinLine, Money } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import {
  AdressTitle,
  FormContainer,
  InputContainer,
  PaymentMethodContainer,
  PaymentMethodDiv,
} from './styles'

export const InputForm = () => {
  const { register, handleSubmit } = useForm()

  return (
    <>
      <FormContainer>
        <AdressTitle>
          <MapPinLine size={22} color="#C47F17" />
          <div>
            <p>Endereço de entrega</p>
            <p>Informe o endereço onde deseja receber o seu pedido</p>
          </div>
        </AdressTitle>

        <input type="text" placeholder="CEP" {...register('CEP')} />
        <input type="text" placeholder="Rua" {...register('roadName')} />

        <InputContainer>
          <input type="text" placeholder="Número" {...register('number')} />
          <input
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
        </InputContainer>
        <InputContainer>
          <input type="text" placeholder="Bairro" {...register('district')} />
          <input type="text" placeholder="Cidade" {...register('city')} />
          <input type="text" placeholder="UF" {...register('estate')} />
        </InputContainer>
      </FormContainer>

      <FormContainer>
        <AdressTitle>
          <MapPinLine size={22} color="#C47F17" />
          <div>
            <p>Pagamento</p>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </AdressTitle>

        <PaymentMethodContainer>
          <PaymentMethodDiv>
            <CreditCard size={20} color="#8047F8" />
            <span>CARTÃO DE CRÉDITO</span>
          </PaymentMethodDiv>
          <PaymentMethodDiv>
            <Bank size={20} color="#8047F8" />
            <span>CARTÃO DE DÉBITO</span>
          </PaymentMethodDiv>
          <PaymentMethodDiv>
            <Money size={20} color="#8047F8" />
            <span>DINHEIRO</span>
          </PaymentMethodDiv>
        </PaymentMethodContainer>
      </FormContainer>
    </>
  )
}
