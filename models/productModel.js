const mongoose = require('mongoose')
const { model, Schema } = mongoose

const productSchema = Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true
  },
  sku: {
    type: String,
    required: [true],
    default: 'SKU',
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    trim: true
  },
  quantity: {
    type: String,
    required: [true, 'Please add a quantity'],
    trim: true
  },
  price: {
    type: String,
    required: [true, 'Please add a price'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    trim: true
  },
  image: {
    type: Object,
    default: {}
  }
},
{
  timestamps: true
})

const Product = model('Product', productSchema)
module.exports = Product
