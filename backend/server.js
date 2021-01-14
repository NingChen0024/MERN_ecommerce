import express from 'express' 
// add type module in package.js
import data from './data.js'
const app = express()

app.get('/', (req, res) => {
  res.send('server is ready')
})

app.get('/api/products', (req, res) => {
  res.send(data.products)
})

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id)
  console.log(product)
  if (product) {
    res.send(product)
  } else {
    res.status(404).send({ message: 'Product not Found'})
  }
})

const prot = process.env.PORT || 5000
app.listen( prot, () => {
  console.log(`Server at local host ${prot}`)
})

