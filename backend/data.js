import bcrypt from 'bcryptjs'

const data = {
  users: [{
    name:'Basir',
    email:'admin@example.com',
    password: bcrypt.hashSync('1234', 8),
    isAdmin: true
  },
  {
    name:'Basir22',
    email:'user@example.com',
    password: bcrypt.hashSync('1234', 8),
    isAdmin: false
  }],
  products: [
    {
      name: 'Nike Shirt',
      category: 'Shirts',
      image: '/p1.jpg',
      price: 120,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      countInStock:10,
      description: 'high quality product'
    },
    {
      name: 'Nike Shirt',
      category: 'Shirts',
      image: '/p1.jpg',
      price: 120,
      brand: 'Nike',
      rating: 5,
      numReviews: 10,
      countInStock:0,
      description: 'high quality product'
    },
    {
      name: 'Nike Shirt',
      category: 'Shirts',
      image: '/p1.jpg',
      price: 120,
      brand: 'Nike',
      rating: 4,
      numReviews: 10,
      countInStock:100,
      description: 'high quality product'
    },
    {
      name: 'Nike Shirt',
      category: 'Shirts',
      image: '/p1.jpg',
      price: 120,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      countInStock:10,
      description: 'high quality product'
    },
    {
      name: 'Nike Shirt',
      category: 'Shirts',
      image: '/p1.jpg',
      price: 125,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      countInStock:0,
      description: 'high quality product'
    }
  ]
}

export default data
