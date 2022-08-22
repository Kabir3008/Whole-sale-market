//used to connect


const mongoose = require('mongoose');

const connectDatabase = () => {
    //to avoid warnings
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        // useCreateIndex:true
    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`) //server start hole jeno console e msg dekha jay
    })
}

module.exports = connectDatabase