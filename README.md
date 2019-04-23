The content below is an example project proposal / requirements document. Replace the text below the lines marked "__TODO__" with details specific to your project. Remove the "TODO" lines.

(___TODO__: your project name_)

MaliExpress


## Overview

(___TODO__: a brief one or two paragraph, high-level description of your project_)

Creating a website that allows individuals to create their own online stores, and sell their own products.
All products can be found within a centralized market place that allows the user to search for the desired product he/she is looking for. Products are filtered based on what type of product it is,and what country it is being sold from.


## Data Model

(___TODO__: a description of your application's data and their relationships to each other_) 

The application will store Users, the stores they've created, and the products within those stores.
The stores will store the country they are made in.
The product objects will store the tags associated with them to allow for easy filtering.


(___TODO__: sample documents_)

An Example User:

```javascript
{
    title : String,
    stores: //array of stores
    rating:  //average user rating
    reviews : //array of reviews,
    password: String,
    username: String,
    email: String
}
```

An Example Store:

```javascript
{
    storename: String,
    items: //array of products
    location: String,
    rating: Number //rating of the store and its products
    reviews: //array of reviews
    tags: [String] //?possible? array of tags to identify store
}
```

An Example product:

```javascript
{

    name : String,
    quantity : Number,
    price : Number,
    pricecurrency : String, //dollars or euros and francs, used to determine conversion rates for different users*might not implement this*
    tags: [String] //array of tags this product identifies us
    location: String //taken from store's location
}
```

An Example Review:
```javascript
  {
    rating: Number, //1-10 rating
    review: String, //String representation of what the review says
    username: String, //name of the user making the review  

    
  }
  //might separate reviews into UserReviews, StoreReviews, and ProductReviews, with  different attributes for each

```



## [Link to Commented First Draft Schema](db.js) 

(___TODO__: create a first draft of your Schemas in db.js and link to it_)

## Wireframes

(___TODO__: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc._)

/homepage - homepage of website

![list](documentation/homepage.jpg)

/products - page for showing all products

![list](documentation/product-lists.jpg)

/store - page for showing a user's store

![list](documentation/store_page.jpg)

## Site map

(___TODO__: draw out a site map that shows how pages are related to each other_)

(documentation/Sitemap.jpg)

## User Stories or Use Cases

(___TODO__: write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format) and / or [use cases](https://www.mongodb.com/download-center?jmp=docs&_ga=1.47552679.1838903181.1489282706#previous)_)

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can create my own store
4. as a user, I can create product listings that I can sell ony my own store
5. as a user, the products I create on my store will be findable on the centralized marketplace
6. as a user, I can categorized my product listings anyway I like, and I can arrange how my store looks like under a template


## Research Topics

(___TODO__: the research topics that you're planning on working on along with their point values... and the total points of research topics listed_)

* (4 points) Add user templating
    * Allow user to create own page on website, and edit variables on chosen template to create their own page with their own product listings
* (2 points) Implement bootstrap(Perhaps use react to create this)
    * Implement bootstrap
* (4 points) Impelement payment system
    * Implement payment system using some API
* (4 points) Impelement mobile configuration with bootstrap
    * Implement mobile configuration with bootstrap


8 points total out of 8 required points (___TODO__: addtional points will __not__ count for extra credit_)


## [Link to Initial Main Project File](app.js) 

[Main project file, app.js](app.js)

## Annotations / References Used

(___TODO__: list any tutorials/references/etc. that you've based your code off of_)

1. [Sample code for adding mongoose model mongoose files from external folder](app.js#L14)
Source: https://github.com/madhums/node-express-mongoose-demo/blob/master/server.js 
