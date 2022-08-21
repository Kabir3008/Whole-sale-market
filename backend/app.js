const express = require('express'); //Express provides methods to specify ( GET , POST , SET , etc.) and URL pattern er khetre ("Route")
const app = express();
const cookieParser = require('cookie-parser')//parses cookies attached to the client request object.

const errorMiddleware = require('./middlewares/errors')//different type er error hadle er kaj

app.use(express.json());//express. json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. amra normally sb kisu json objct ei code e likhechi postman e
app.use(cookieParser())

const products = require('./routes/product');//product ta kottheke antesi
const auth = require('./routes/auth');
const order = require('./routes/order');

app.use('/api/v1', products)//akhn akta route diye dicchi for postman
app.use('/api/v1', auth)
app.use('/api/v1', order)

//Middleware to handle errors
app.use(errorMiddleware);

module.exports = app
