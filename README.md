# Sneakerhead?
Sneakerhead Trivia Game

This application was a personal project that I created for fun.
Test your wits against the sneakerhead trivia game, with over 7000 Jordans from all years to quiz yourself on. Do you really know your stuff?

### Description
[![HCkpQAQ.md.jpg](https://iili.io/HCkpQAQ.md.jpg)](https://freeimage.host/i/HCkpQAQ)  
An interactive application in which the premise is to guess the details of the shoe that is presented to you. This includes various fields, which are worth a different amount of points, including:
- Release Year: 300 points
- Name: 300 points
- Model: 300 points
- Gender: 100 points

Totaling 1000 points for 1 correctly guessed shoe. 
After 10 guesses, the game is over and a total score out of 10,000 points possible will be displayed for the user to revel in.  
[![HCkpboP.md.jpg](https://iili.io/HCkpboP.md.jpg)](https://freeimage.host/i/HCkpboP)

### How does it work?
A 3rd-party sneaker database API was used to extract, transform, and load each shoe into a MongoDB. The ETL process was performed by creating a loader file and running it within node.js. Mongoose-sequence was used to produce a sequential numerical labeling of each entry.
  
Upon load, an HTTP request is sent to the server, which randomly generates 10 IDs. These 10 IDs are used to query the database, and the data is sent back to the client.

## Play Components
All 10 play components are actually the same component, but re-rendered based on a state that keeps track of a given count. The count is also mapped to the current shoe.  
[![HCkptDB.md.jpg](https://iili.io/HCkptDB.md.jpg)](https://freeimage.host/i/HCkptDB)
[![HCkpZNV.md.jpg](https://iili.io/HCkpZNV.md.jpg)](https://freeimage.host/i/HCkpZNV)

## Score Component
Each input field has its own parsing function for scoring and is then compared with a normalized version of the actual database value for that specific field.  

For example, the database value for the shoe's "name" property has the words "Jordan" and "Retro" removed before scoring. Then, the user input string is split and checked against the normalized database value to see what percentage of words are found within the user input. This is then multiplied by 300 to produce the appropriate weighting.  
[![HCkpmV1.md.jpg](https://iili.io/HCkpmV1.md.jpg)](https://freeimage.host/i/HCkpmV1)

## Technologies
MongoDB, React, Javascript, Node.js, Express.js 
A third-party API was used to ETL the MongoDB with data for quick load time and cost reduction. 
ChakraUI was used for a significant majority of the styling. 



