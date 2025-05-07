require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const ordersRouter = require('./routes/orders');

const app = express();
app.use(express.json());

// Подключение к MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/agroshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Подключение роутов для заказов
app.use('/api/orders', ordersRouter);

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
}); 