import product3 from '/assets/images/products/img-03.png'
import product4 from '/assets/images/products/img-04.png'
import product9 from '/assets/images/products/img-09.png'

const shopCartData = [
  {
    id: 1,
    image: product4,
    category: 'Fashion',
    name: 'Crop top Sweater Clothing',
    price: 29.49,
    discount: 0.25,
    colors: ['blue', 'gray', 'pink', 'green', 'red'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    count: 1,
  },
  {
    id: 2,
    image: product3,
    category: 'Footwear',
    name: 'Spar Men Black Running Shoes',
    price: 35.78,
    discount: 0,
    colors: ['gray', 'pink'],
    sizes: ['6', '7', '8', '9', '10'],
    count: 2,
  },
  {
    id: 3,
    image: product9,
    category: 'Fashion',
    name: 'Hoodie Jacket Letterman Sleeve Coat',
    price: 44.49,
    discount: 0,
    colors: ['blue'],
    sizes: ['M', 'L', 'XL'],
    count: 1,
  },
]
export default shopCartData
