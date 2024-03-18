// Import necessary modules and models
import db from '@/database/connection'
import Category from '@/database/model/Category'
import nc from 'next-connect'
import slugify from 'slugify'

const handler = nc()

db.connect()

// Create a new category
handler.post(async (req, res) => {
  try {
    const category = await Category.create({
      ...req.body,
      slug: slugify(req.body.name)
    })
    res.status(201).json(category)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
})

// Get all categories
handler.get(async (req, res) => {
  try {
    const categories = await Category.find().populate({
      path: 'children'
    })
    res.status(200).json(categories)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
})

export default handler
