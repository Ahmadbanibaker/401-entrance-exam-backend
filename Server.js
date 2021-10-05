'use strict';
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app= express();
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PORT = process.env.PORT;


const ProductSchema = new Schema({
 
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    },
    description: {
        type: String,
        required: true
      },
      priceinUSD: {
        type: String,
        required: true
      },
    order: {
      type: Schema.Types.ObjectId,
      ref: "Order"
    }
  });

  
  const Product = mongoose.model("Product", ProductSchema);

  module.exports = Product;