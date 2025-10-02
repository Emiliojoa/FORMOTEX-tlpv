import mongoose from "mongoose";


const productModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    }
})

export const ProductModel = mongoose.model('Product', productModel);