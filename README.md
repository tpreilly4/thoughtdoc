# thoughtdoc
A place to store, organize, and analyze your thoughts - with an emphasis on mental health introspection.
To be built with **Node, Express, React, Postgres, Axios**, and more.


### Setup
It's all local in the current state. You must be running a Postgres Database on port 5432.
First, `npm install` followed by `npm run frontend-install`.
From the root folder:
* `npm run dev` runs the whole app.
* `npm run backend` runs the server side only.
* `npm run frontend` runs the client side only.


# Use Cases
* As a user, I want somewhere to store some thoughts that I'm having.
* As a user, I want to categorize my thoughts by the mood that I'm in when I record a thought.
* As a user, I want to organize my thoughts by the date and time they were recorded.
* As a user, I want to have my own account with a username and password.
* (Stretch goal) As a user, I want features that will make it easier to analyze the words I use in my thoughts. (ie. wordclouds, machine learning)


### MVP
The user should be able to:
*   Sign in/out
*   Store thoughts into a database with their corresponding data (mood, date/time, id)
*   Delete thoughts
*   Edit thoughts
*   Sort by date/time
*   Sort by mood


### Stretch Goals / Ideas for the future
*   Build and display wordclouds pertaining to certain moods, allowing users to better analyze their thoughts on a more comprehensive scale.
*   Allow users to set and track goals for personal improvement.
*   (Mobile) Send push notifications to users to ask them how they're feeling/prompt them to record a thought.
*   Run words through a machine learning algorithm to make suggestions to the user on how to improve their mood.
*   Give the users access to motivational resources (ie. quotes, videos, "motivation of the day", etc.) 


# Database Schema (rough mockup)
*   User(<span style="text-decoration:underline;">id</span>, username, password)
*   Thought(<span style="text-decoration:underline;">id</span>, content, mood, date/time)


# API Routes
<table>
  <tr>
   <td><strong>Name/path</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Method</strong>
   </td>
   <td><strong>Input</strong>
   </td>
   <td><strong>Output</strong>
   </td>
  </tr>
  <tr>
   <td>/thoughts
   </td>
   <td>Add a thought to the DB
   </td>
   <td>POST
   </td>
   <td>content, mood
   </td>
   <td>success
   </td>
  </tr>
  <tr>
   <td>/thoughts/:id
   </td>
   <td>Remove a thought from DB
   </td>
   <td>DELETE
   </td>
   <td>id
   </td>
   <td>success
   </td>
  </tr>
  <tr>
   <td>/thoughts
   </td>
   <td>Display all thoughts
   </td>
   <td>GET
   </td>
   <td>N/A
   </td>
   <td>All thoughts
   </td>
  </tr>
  <tr>
   <td>/thoughts/:id
   </td>
   <td>Display a single thought 
   </td>
   <td>GET
   </td>
   <td>id
   </td>
   <td>Thought with corresponding id
   </td>
  </tr>
</table>

[First attempt at a Trello Board](https://trello.com/b/C7Mz7siT/thoughtdoc)
