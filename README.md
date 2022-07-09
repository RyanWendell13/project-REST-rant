# Project REST-Rant

REST-Rant is an app where users can review restaurants.

Method | Path | Purpose
---|---|---
GET              | /                |Home Page
GET           | /places              |Places index
POST        |   /places              |Create new place
GET       |   /places/new            |Form page for creating a new place
GET       |   /places/:id            |Details about particular place
PUT      |    /places/:id            |Update a particular place
GET      |  /places/:id/edit         |Form page for editing an exitisng place
DELETE   |    /places/:id            |Delete a particular place
POST    |   /places/:id/rant         |Create a rant (comment) about a particular place
DELETE | /places/:id/rant/:rantId    |Delete a rant (comment) about a particular place
GET    |           *                 |404 page (matches any route not defined above)

