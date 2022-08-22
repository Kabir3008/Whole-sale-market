const app = require('./app');//imported the app of app.js
// const cloudinary = require("cloudinary");

const connectDatabase = require('./config/database')

const dotenv = require('dotenv');//port j 4000 diyechi oita jante parar jonno



// const { $where } = require('./models/product');

//Handle uncaught exception
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down the server due to Uncaught exception');

    process.exit(1)
})






//setting up config file

dotenv.config({ path: "backend/config/config.env" })   //config file e access er jonno

//connecting to database
connectDatabase();


//Handle unhandle promise rejection

process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('shutting down the server due to Unhandled promise rejection');
    server.close(() => {
        process.exit(1)
    })
})

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})//need a call back function

