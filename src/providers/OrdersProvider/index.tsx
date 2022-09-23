import { createContext, ReactNode, useReducer } from 'react'

export type CoffeeInfo = {
  id: number
  image: string
  type: string[]
  title: string
  description: string
  price: number
}

interface OrderContextProps {
  cart: CoffeeInfo[]
  totalPrice: number
  addCoffeeToCart: (coffee: CoffeeInfo, amount: number) => void
  removeCoffeeToCart: (coffee: CoffeeInfo) => void
}

export const OrderContext = createContext({} as OrderContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

// export const CartProvider = ({ children }: CartContextProviderProps) => {
//   const [cartState, dispatch] = useReducer(
//     (state:any, action:any) => {
//         switch(action.type) {
//             case 'ADD_COFFEE_TO_CART': {

//             }

//             default
//             return state;
//         }
//     },{
//         //tudo que eu vou usar
//     }
// //   )

//     const addCoffeeToCart = (coffee: CoffeeInfo, amount: number) => {
//     dispatch({})
//   }
// }
