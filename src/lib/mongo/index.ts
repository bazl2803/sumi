import { MongoClient, Db, MongoClientOptions } from "mongodb"

if (!process.env.MONGODB_URI) {
    throw new Error('Por favor, define la variable de entorno MONGODB_URI')
}

const uri = process.env.MONGODB_URI
const options: MongoClientOptions = {
    connectTimeoutMS: 5000
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

interface GlobalMongo {
    _mongoClientPromise: Promise<MongoClient>
}

if (process.env.NODE_ENV !== 'development') {
    let globalWithMongo = global as typeof global & GlobalMongo
    if (!globalWithMongo._mongoClientPromise) {
        client = new MongoClient(uri, options)
        globalWithMongo._mongoClientPromise = client.connect()
    }
    clientPromise = globalWithMongo._mongoClientPromise
} else {
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
}

export async function getDb(): Promise<Db> {
    const connection = await clientPromise
    return connection.db('sumi-ecommerce')
}

export default clientPromise