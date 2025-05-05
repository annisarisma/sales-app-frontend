import product3 from '/assets/images/products/img-03.png'
import product4 from '/assets/images/products/img-04.png'
import product9 from '/assets/images/products/img-09.png'

const products = [
  {
    id: 1,
    image: product4,
    name: 'Crop top Sweater Clothing',
    qty: 1,
    color: 'Pink',
    size: 'M',
    price: 22.12,
    discount: 0,
  },
  {
    id: 2,
    image: product3,
    name: 'Spar Men Black Running Shoes',
    qty: 2,
    color: 'Black',
    size: '8',
    price: 71.56,
    discount: 0,
  },
  {
    id: 3,
    image: product9,
    name: 'Hoodie Jacket Letterman Sleeve Coat',
    qty: 1,
    color: 'Blue',
    size: 'L',
    price: 44.49,
    discount: 0,
  },
]
const addresses = [
  {
    type: 'Home',
    firstName: 'Jordan',
    lastName: 'Roughley',
    phone: '2015184185',
    address: '13833 Jayda Squares Apt. 849, Sharonville',
    city: 'Washington',
    country: 'USA',
    zip: '33199 8539',
  },
  {
    type: 'Work',
    firstName: 'Prof. Ronaldo ',
    lastName: 'Funk',
    phone: '6179419815',
    address: '6602 Schroeder Ville Apt. 066',
    city: 'Bennytown',
    country: 'USA',
    zip: '62144 1437',
  },
]
export { products, addresses }
