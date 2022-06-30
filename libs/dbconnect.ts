import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://debanil:debanil1996@mongopractice.4stoo.mongodb.net/?retryWrites=true&w=majority';
declare global{
    var mongoosed:any;
    var mongodb:mongoose.Connection
}
globalThis.mongoosed= mongoose;
let cached = globalThis.mongoosed

if (!cached) {
  cached = globalThis.mongoosed = { conn: null, promise: null }
}

async function dbConnect () {
    try{

        if (cached.conn) {
          return cached.conn
        }
      
        if (!cached.promise) {
          const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
          }
          
          cached.promise = mongoosed.connect(MONGODB_URI,opts).then((mongoose:any) => {
            return mongoose;
          })
        }
        cached.conn = await cached.promise
        return cached.conn
    }catch(err){
        console.error(err);
    }
}

export default dbConnect