<p>
<a  href=""  rel="noopener">
</p>
<h2>Winter Hack: Search App</h2>

</p>

![Working](https://media.giphy.com/media/S8TsC0rUwf9xGA3Hx7/giphy.gif)


## 📝 Contents

  

-  [About](#about)

-  [Built Using](#built_using)

-  [Demo / Working](#demo)

-  [How it works](#working)

-  [Set Up and Run the App](#usage)

-  [Deployment](#deployment)

-  [Author](#author)
<br/>


## 🌻 About <a name = "about"></a>

A website that helps in seamless search of hotels, temporary accommodation according to location.
This web application showcases Geo-Spatial and Atlas Search using one of the MongoDB public data-sets: sample_airbnb.

<br/>


## ⛏️ Built Using <a name = "built_using"></a>

  

-  [React.js](https://reactjs.org/) - React is a Javascript library makes it easy to create interactive UIs.

-  [Material UI](https://mui.com/) - React UI Library to build components for faster web development.

-  [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine.

-  [Express](https://github.com/aria2/aria2) - a flexible Node.js web application framework that provides a robust set of features for web/mobile applications and APIs.

-  [MongoDB Atlas](https://www.mongodb.com/atlas/database) - Fully-managed cloud database that handles all the complexity of deploying, managing, and healing your deployments on the cloud service provider of your choice

-  [MongoDB Realm](https://www.mongodb.com/realm) - MongoDB Realm’s edge-to-cloud sync and fully-managed back-end services help you deliver best-in-class web/mobile apps.

-  [Heroku](https://www.heroku.com/) - SaaS hosting platform

-  And, our good old HTML and CSS

<br/>

## 🎥 Demo / Working <a name = "demo"></a>

This is a tiny demo of the working:

![SearchIt](https://user-images.githubusercontent.com/59119265/150637316-4bbeb18a-250a-4a4c-beb8-fbcc5311af47.gif)


<br/>

## 💭 How it works <a name = "working"></a>

  
  

I have used MongoDB Realm Starter App to start writing my frontend, which came with a custom SignUp, Login, Authentication with GraphQL backend. After successful signup and login, one gets to search for preferred accomodation or hotel type which searches by the name of AirBnb listing.


It has the feature of searching on a location with Atlas Search and Geospatial Operators. It uses Atlas Search and the compound operator to search based on text entered and within a certain geographical area. For the text entered, it uses the autocomplete operator, and for the geospatial component, it uses the geoWithin operator. This logic is written in the backend Node.js Expess App that creates the Search API which searches across a radius of 10000 meters from the latitude and longitude. Now, since the sample database most probably won't have the data for your location's latitude longitude co-ordinates, so the frontend has the facility of choosing from a dropdown list of countries available in the databse which further helps in smooth search.

When you are searching, you will get a list of records of hotels or apartments with price, facilities, details of host as well as reviews. 


I also got some stats of the database from MongoDB Charts.
The entire website is written in MERN Stack and with MongoDB features like Atlas, Realm and Charts.

<br/>


## 🎈 Set Up and Run the App <a name = "usage"></a>

### 💬 Prerequisites:

- **Node.js** :  v16.13.1
- **npm** :  v8.1.2
- **React**: This project was bootstrapped with Create React App 



### 💬 Getting Started:
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. To run the app locally, install its dependencies and then call the run script:
```
npm install
```
```
npm run start
```
<br/>



## 🚀 Where is it deployed ?<a name = "deployment"></a>
The frontend is built and deployed using MongoDB Realm. I have used MongoDB Starter template to get started and then built my site leveraging that.
Get started on MongoDB Realm: [Docs](https://www.mongodb.com/realm)

![Working](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcic7i1ESNfuiofdNk1nfy3IXpkFxlKVtGnLge62Btj-JXaQ0Gc4nfZzSjG1Y-W4Wyrw&usqp=CAU)




The backend is a Node.js Expess App deployed on Heroku
For backend visit repository: [WinterHack-Backend](https://github.com/Ayushi673/WinterHack-Backend)
![Working](https://shehan95.files.wordpress.com/2018/11/093a1-1me9erphfmybx5emo9-f9ng.png?w=320&h=135)

<br/>


  ## ✨ Contributing

Found a Bug ? Create an [Issue](https://github.com/Ayushi673/WinterHack/issues).

<br/>

## 💖 Like this project ?

Leave a ⭐ If you think this project is cool.

<br/>

## ✍️ Author <a name = "author"></a>
[@Ayushi673](https://github.com/Ayushi673)