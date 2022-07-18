import * as mongoose from 'mongoose';
const MONGODB_URI = 'mongodb+srv://debanil:debanil1996@mongopractice.4stoo.mongodb.net/Restaurants?retryWrites=true&w=majority';
declare global{
    var mongoosed:any;
}
globalThis.mongoosed=mongoose;
let cached = globalThis.mongoosed

if (!cached) {
  cached = global.mongoosed = { conn: null, promise: null }
}

async function dbConnect () {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
    cached.conn= await mongoose.connect(MONGODB_URI);
    return cached.conn
  }
  cached.conn = await cached.promise
  return cached.conn;
}

export default dbConnect