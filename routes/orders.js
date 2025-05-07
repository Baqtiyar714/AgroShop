const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/guest', async (req, res) => {
  try {
    const { name, phone, shippingAddress, paymentMethod, cartItems } = req.body;
    if (!name || !phone || !cartItems || !cartItems.length) {
      return res.status(400).json({ message: 'Заполните все поля и добавьте товары в корзину' });
    }
    const order = new Order({ name, phone, shippingAddress, paymentMethod, cartItems });
    await order.save();
    res.status(201).json({ message: 'Заказ успешно создан!' });
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при создании заказа', error: error.message });
  }
});

module.exports = router; 