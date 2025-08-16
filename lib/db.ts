import { MongoClient } from 'mongodb';

// Check for MongoDB URI in environment variables
if (!process.env.MONGODB_URI && process.env.NODE_ENV !== 'production') {
  console.warn('MongoDB URI not found in environment variables. Some features may not work.');
}

console.log('MongoDB initialization starting...');

const uri = process.env.MONGODB_URI || '';
const options = {
  connectTimeoutMS: 10000, // 10 seconds
  socketTimeoutMS: 45000,  // 45 seconds
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Only initialize MongoDB connection if URI is available
if (uri) {
  try {
    if (process.env.NODE_ENV === 'development') {
      // In development mode, use a global variable so that the value
      // is preserved across module reloads caused by HMR (Hot Module Replacement).
      let globalWithMongo = global as typeof globalThis & {
        _mongoClientPromise?: Promise<MongoClient>;
      };

      if (!globalWithMongo._mongoClientPromise) {
        console.log('Creating new MongoDB client connection in development');
        client = new MongoClient(uri, options);
        globalWithMongo._mongoClientPromise = client.connect()
          .then((client) => {
            console.log('MongoDB connected successfully in development');
            return client;
          })
          .catch(err => {
            console.error('MongoDB connection error in development:', err);
            throw err;
          });
      }
      clientPromise = globalWithMongo._mongoClientPromise;
    } else {
      // In production mode, it's best to not use a global variable.
      console.log('Creating new MongoDB client connection in production');
      client = new MongoClient(uri, options);
      clientPromise = client.connect()
        .then((client) => {
          console.log('MongoDB connected successfully in production');
          return client;
        })
        .catch(err => {
          console.error('MongoDB connection error in production:', err);
          throw err;
        });
    }
  } catch (error) {
    console.error('MongoDB initialization error:', error);
    throw error;
  }
} else {
  console.warn('MongoDB URI not provided, database features will not work');
  // Create a mock promise that rejects
  clientPromise = Promise.reject(new Error('MongoDB URI not configured'));
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;