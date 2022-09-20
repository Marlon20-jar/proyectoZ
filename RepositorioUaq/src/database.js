import mongoose, { connect } from "mongoose";

const URI= process.env.MONGOBDB_URI? 
process.env.MONGOBDB_URI
: 'mongodb://localhost/database';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: true,
    //useCreateIndex: true

  })
    .then(db => console.log('Database is connected'))
    .catch(error => console.log(error))