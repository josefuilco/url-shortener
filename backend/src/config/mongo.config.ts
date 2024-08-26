import { MongoClient } from 'mongodb'
import Link from '../models/Link'

const url = String(process.env.MONGO_URL)
const client = new MongoClient(url)

const dbName = String(process.env.MONGO_DATABASE)
const collectionName = String(process.env.MONGO_COLLECTION)

// Methods Privated
const open = async () => await client.connect()
const close = async () => await client.close()
const getCollection = () => {
	const db = client.db(dbName)
	return db.collection(collectionName)
}

// Methods Public
export async function insertLink(document: object): Promise<void> {
	try {
		await open()
		const collection = getCollection()
		const insertResult = await collection.insertOne(document)
		console.info(`insert mongodb: ${insertResult}`)
	} catch (error) {
		console.error(error)
		throw new Error('MongoDB.InsertDocument.NoInsert')
	} finally {
		await close()
	}
}

export async function findById(id: string): Promise<any> {
	try {
		await open()
		const collection = getCollection();
		const _id: any = id
		const findResult = await collection.findOne({ _id })
		return findResult
	} catch (error) {
		console.error(error)
		throw new Error('MongoDB.FindDocument.NotFound')
	} finally {
		await close()
	}
}

export async function findByWebsite(website: string): Promise<any> {
	try {
		await open()
		const collection = getCollection();
		const findResult = await collection.findOne({ website })
		return findResult
	} catch (error) {
		console.error(error)
		throw new Error('MongoDB.FindDocument.NotFound')
	} finally {
		await close()
	}
}

export async function listLinks(): Promise<Array<Link>> {
	try {
		await open()
		const collection = getCollection();
		const findResult = await collection.find({}).toArray()
		return findResult as unknown as Array<Link>
	} catch (error) {
		console.error(error)
		throw new Error('MongoDB.FindDocuments.NotFound')
	} finally {
		await close()
	}
}
