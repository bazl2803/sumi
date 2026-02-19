'use server'

import { getDb } from '@/lib/mongo'

export const getAllCategories = async () => {
    const db = await getDb()
    const categories = await db.collection('category').find().toArray()
    return categories
}