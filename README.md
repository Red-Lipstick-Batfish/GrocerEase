# GrocerEase

Meal prepping app that picks recipes for you, makes a grocery list, and helps you save favorite meals - based on your dedicated user profile.
Excalidraw: https://excalidraw.com/#room=dd3e59dc64626b5fe0c4,uFSQUn1gRVI2ioMQMLm_XQ

Features:
User sign-up
User login
Complete user signup page with allergens/preferences selection
Search recipe page

## Front End

React/Redux was used on the front-end to have a single store of truth (state). React router was used to route between user authentication page and main page.

## Login/Auth Backend

When users attempted to sign up, they would first be routed to the createUser middleware inside the userController. It hashes the password and then stores the username, password and the dietary restrictions in our user database (MongoDB)

Next middleware starts a session based on the user id.

Last middleware checks to make sure the session has not expired yet and sets the user id as an ssid cookie in the browser.

Verify user middleware checks for the user in the database. If not found, reroutes user to sign up page.
If user was found, start a session, and reroute to the homepage.

## Blocks

Rerouting of the login page was not being sent to the homepage.

The React components on the homepage were not fully fleshed out. Specifically, the React component to display the recipe that was received was not written yet.

## Stretch Features

Tinder for recipes, where the user is able to like or dislike through a list of recipes that will save the recipe to a database when liked where it can then be accessed by the user

Creating a single grocery list based on the ingredients of all liked recipes or selected recipes so the user could print a list and take it to the grocery store. 
