const mongoose =    require('mongoose');
 



const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.log('MongoDB  hamada connection failed: ', error);
    }
  };


  module.exports = connectDB;
  