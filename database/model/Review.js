import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  // Textual content of the review
  content: {
    type: String,
    required: true
  },

  // Can include an array of image/video URLs for attachments
  attachments: [
    {
      type: String
    }
  ]
},
{ timestamps: true })

const Review = mongoose.models.Review || mongoose.model('Review', reviewSchema)
export default Review