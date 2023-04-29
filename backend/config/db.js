const mongoose = require('mongoose')

const connectDB = () => {
    mongoose
      .connect(process.env.MONGO_URI, { useNewUrlParser: true })
      .then(() => console. log('\x1b[44m Database connected successfully \x1b[0m'))
      .catch((err) => console.log(err));
}

module.exports = connectDB
