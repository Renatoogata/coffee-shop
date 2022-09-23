import expressoTradicional from '../src/assets/coffeeTypes/expressoTradicional.svg'
import expressoAmericano from '../src/assets/coffeeTypes/expressoAmericano.svg'
import expressoCremoso from '../src/assets/coffeeTypes/expressoCremoso.svg'
import expressoGelado from '../src/assets/coffeeTypes/expressoGelado.svg'
import cafeComLeite from '../src/assets/coffeeTypes/cafeComLeite.svg'
import latte from '../src/assets/coffeeTypes/latte.svg'
import capuccino from '../src/assets/coffeeTypes/capuccino.svg'
import macchiato from '../src/assets/coffeeTypes/macchiato.svg'
import mocaccino from '../src/assets/coffeeTypes/mocaccino.svg'
import chocolateQuente from '../src/assets/coffeeTypes/chocolateQuente.svg'
import cubano from '../src/assets/coffeeTypes/cubano.svg'
import havaiano from '../src/assets/coffeeTypes/havaiano.svg'
import arabe from '../src/assets/coffeeTypes/arabe.svg'
import irlandes from '../src/assets/coffeeTypes/irlandes.svg'

enum typeCoffee {
  tradicional = 'TRADICIONAL',
  gelado = 'GELADO',
  comLeite = 'COM LEITE',
  especial = 'ESPECIAL',
  alcoolico = 'ALCOÓLICO',
}

export const coffeeList = [
  {
    id: 1,
    image: expressoTradicional,
    type: [typeCoffee.tradicional],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moidos',
    price: 9.99,
  },
  {
    id: 2,
    image: expressoAmericano,
    type: [typeCoffee.tradicional],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.99,
  },
  {
    id: 3,
    image: expressoCremoso,
    type: [typeCoffee.tradicional],
    title: 'Expressso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.99,
  },
  {
    id: 4,
    image: expressoGelado,
    type: [typeCoffee.tradicional, typeCoffee.gelado],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.99,
  },
  {
    id: 5,
    image: cafeComLeite,
    type: [typeCoffee.tradicional],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicinal com leite vaporizado',
    price: 9.99,
  },
  {
    id: 6,
    image: latte,
    type: [typeCoffee.tradicional, typeCoffee.comLeite],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.99,
  },
  {
    id: 7,
    image: capuccino,
    type: [typeCoffee.tradicional, typeCoffee.comLeite],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de cafém leite e espuma',
    price: 9.99,
  },
  {
    id: 8,
    image: macchiato,
    type: [typeCoffee.tradicional, typeCoffee.comLeite],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.99,
  },
  {
    id: 9,
    image: mocaccino,
    type: [typeCoffee.tradicional, typeCoffee.comLeite],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.99,
  },
  {
    id: 10,
    image: chocolateQuente,
    type: [typeCoffee.especial, typeCoffee.comLeite],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.99,
  },
  {
    id: 11,
    image: cubano,
    type: [typeCoffee.especial, typeCoffee.alcoolico, typeCoffee.gelado],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.99,
  },
  {
    id: 12,
    image: havaiano,
    type: [typeCoffee.especial],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.99,
  },
  {
    id: 13,
    image: arabe,
    type: [typeCoffee.especial, typeCoffee.alcoolico],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.99,
  },
  {
    id: 14,
    image: irlandes,
    type: [typeCoffee.tradicional, typeCoffee.comLeite],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açucar e chantily',
    price: 9.99,
  },
]
