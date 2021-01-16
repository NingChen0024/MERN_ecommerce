import express from 'express' 
// add type module in package.js
import data from './data.js'
import mongoose from 'mongoose'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
const app = express()
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/amazon', {
  useNewUrlParser: true,
  useUnifiedTopology:true,
  useCreateIndex: true
})

app.get('/', (req, res) => {
  res.send('server is ready')
})

// app.get('/api/products', (req, res) => {
//   res.send(data.products)
// })

app.use('/api/users', userRouter)

app.use('/api/products', productRouter)

// app.get('/api/products/:id', (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id)
//   if (product) {
//     res.send(product)
//   } else {
//     res.status(404).send({ message: 'Product not Found'})
//   }
// })

app.use((error, req, res, next) => {
  res.status(500).send({message: error.message})
})

const prot = process.env.PORT || 5000
app.listen( prot, () => {
  console.log(`Server at local host ${prot}`)
})

