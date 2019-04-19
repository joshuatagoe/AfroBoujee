const storeSchema = new mongoose.Schema({
    user: userSchema,
    items: [productSchema],
    location: String,
    rating: Number //rating of the store and its products
})
