import { useForm } from 'react-hook-form'
import { MapPinLine } from 'phosphor-react'

import * as zod from 'zod'

import {
  AdressTitle,
  BodyContainer,
  FormContainer,
  InputContainer,
  PaymentMethodContainer,
  PaymentSelectButton,
} from './styles'
import { coffeeList } from '../../../database/coffees'

interface CartContextData {
  cart: typeof coffeeList[]
}

const newCompleteOrderFormSchema = zod.object({
  CEP: zod.string().regex(/^[0-9]{5}-[0-9]{3}$/),
  roadName: zod.string().min(5),
  number: zod.string().min(1).max(5),
  complement: zod.string().min(20),
  district: zod.string().min(5),
  city: zod.string(),
  estate: zod.string(),
})

export type NewOrderAdressInfo = zod.infer<typeof newCompleteOrderFormSchema>

export function Chart() {
  const { register, handleSubmit } = useForm()

  function handleCreateNewOrder() {}

  return (
    <BodyContainer>
      <h2>Complete seu pedido</h2>
      <FormContainer onSubmit={handleCreateNewOrder}>
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
          <PaymentSelectButton>Cartao de Crédito</PaymentSelectButton>
          <PaymentSelectButton>Cartao de Débito</PaymentSelectButton>
          <PaymentSelectButton>Dinheiro</PaymentSelectButton>
        </PaymentMethodContainer>
      </FormContainer>
    </BodyContainer>
  )
}
