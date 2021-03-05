# App Journey #1

Hi! 👋  
I'm Pablo, in this repository i'm going to record my entire process of creating a web app for the start2impact node.js project, follow me in this journey! 

### Table of Contents

- [Description](#description)
- [Rules](#rules)
- [The Project](#the-project)
- [Day Zero](#day-0)
- [About Me](#about-me)


## Rules

I'll try to commit every day with more data possibile, like hours spent, which source i've used, how far the code went and etcetera etcetera. 

## The Project

The project is pretty simple, i have to build a Node.js app which helps to report polluted place near your geolocalization. Isn't required a UI, but is required to build APIs, make possible photo upload to show the pollution and upload the coords.

---

### Day 0

**Date:** 03 March
The first day of working, just planning and looking source around. Just try to sketch the app and his function

<img src="READMEimg/51.jpg" alt="First day notes" height="450" />

*Hours Spent:* 2

### Day 1

**Date:** 04 March
i've started to lay down a plan for the app, initialized folder, installed some packages and made a basic routing. 

I've studied how to *design schemas* in MongoDB and i leave you two usefull resource:  
[📝 - 6 Thumb Rules for Schema Design](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-1)  
[📺 - Mongo DB Best Practice](https://www.youtube.com/watch?v=leNCfU5SYR8&t=2715s)  


<img src="READMEimg/52.jpg" alt="Note About Schema Design" height="450" />  
<img src="READMEimg/53.jpg" alt="Note About Making Schema" height="450" />  


Then i sketched out the first sample of schemas that you can find in sample.js and i've searched how to find the nearest location in using the coords of cites and photos, stackoverflow gave me an [hint!](https://stackoverflow.com/questions/36534879/how-to-find-data-of-nearest-location-from-mongodb-collection-using-mongoose)

*Hours Spent:* 3

### Day 2  

**Date:** 05 March

Today i've tried to bring in my code a little more *consistency*, this morning i wasn't very productive so i need a way too better evaluate my effort. So i've searched a common way to build RESTful App with Node.js and guess what?  

🥁🥁🥁  

No rules, no common ways, everyone have his personal method to build it. But after a while i've found @rwieruch and his series of tutorial. I've really enjoied that tuts because he's not explain a walktrought, as everyone else, but he's explay the entire system, so give a look to these tuts! 

[1 - The minimal Node.js with Babel and Nodemon](https://www.robinwieruch.de/minimal-node-js-babel-setup/)  
[2 - Setup Express.js](https://www.robinwieruch.de/node-js-express-tutorial/)  
[3 - Create REST APIs](https://www.robinwieruch.de/node-express-server-rest-api/)  
[4 - Setup the DB with MongoDB](https://www.robinwieruch.de/mongodb-express-setup-tutorial/)  
[5 - Node, Express and MongoDB](https://www.robinwieruch.de/mongodb-express-node-rest-api)  

This series of tuts was what i needed, a *fil rouge* between everything. As you can see in the first two days, working by myself, I didn't work smart and this morning i've felt this, so reading *Robin Wieruch* gave my work more consistency, and you can clarily see how i've shifted my code. So now the plan for the next daysss:  

* Implementing better routing
* Implementing modular routing
* Connecting MongoDB 

**What I've learned today:** Using babbel is useful for implmenting ECMAScript that aren't support with Node, deepen the routing process with express, first approach wirh curl & deepen CRUD request. 

See ya tomorrow!

*Hours Spent:* 4

---


## About Me

- Instagram - [@pablomicheletti](https://www.instagram.com/pablomicheletti/)
- Website - [PabloMicheletti](http://pablomicheletti.it)
