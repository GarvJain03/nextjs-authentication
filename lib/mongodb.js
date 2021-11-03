import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

// check the mongodb URI
if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not set");
}

// check the mongodb database
if (!MONGODB_DB) {
  throw new Error("MONGODB_DB is not set");
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  // check the cached.
  if (cachedClient && cachedDb) {
    // load from cache
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  // set the connection options
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  // Connect to cluster
  let client = new MongoClient(MONGODB_URI, opts);
  await client.connect();
  let db = client.db(MONGODB_DB);

  // set cache
  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
}
