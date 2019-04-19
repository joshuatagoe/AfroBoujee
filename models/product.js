const productSchema = new mongoose.Schema({
    name : String,
    quantity : String,
    store: storeSchema,
    price : Number,
    pricecurrency : String, //dollars or euros and francs, used to determine conversion rates for different users
    properties : [String]

})