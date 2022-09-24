import * as zod from 'zod'

import { BodyContainer } from './styles'
import { coffeeList } from '../../../database/coffees'
import { InputForm } from './componets/InputForm'
import { OrderCart } from './componets/Cart'

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

export function handleCreateNewOrder() {}

export function Order() {
  return (
    <BodyContainer>
      <InputForm />

      <OrderCart />
    </BodyContainer>
  )
}
