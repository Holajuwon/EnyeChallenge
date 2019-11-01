_Technical Education • Social Innovation • Developing Countries_

# Coding Challenge 3

Cohort 3

## Overview

Amazing, you have successfully completed the Redux with Hooks challenge, now for the final step. We want you to build a fully serverless applications, however, there are operations that are best handled by a backend services (i.e. database operations, expensive operations, etc.). For this challenge, you will use functions to complete your application.

## Challenge - Intermediate

1. Leverage [Firebase Functions](https://firebase.google.com/docs/functions/get-started) in order to persist the user details in the Realtime Database.
2. [Listen to the on create Firebase event](https://firebase.google.com/docs/functions/get-started), then generate a random [uuid V5](https://www.npmjs.com/package/uuid). Update the user data with the uuid and store in the database.
   - If you are unfamiliar with firebase functions or listeners, take the time to review the resources below.

## Requirements

- Create a new feature branch off of your Redux with Hooks branch
- The branch name should match the following pattern

  - feature-{Your Name}-{feature being added}
  - For example: feature-uche-add-firebase-functions

- Create a new git repo for your firebase functions
  - Use [npm cors](https://www.npmjs.com/package/cors) - to handle cross origin errors
- Use [Redux-Sagas](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html) to handle the async requests to firebase functions
    - Make sure that the user details in the Realtime Database is automatically updated in the redux store.
    - Hint - you must use redux eventChannels to emit that a change has happened on the firebase database then update the store
    - If confused, leverage the [Firebase and Redux Sagas can be Friends](https://madewithlove.be/firebase-and-redux-saga-can-be-friends/) resource below.

- The generated uuid V5 should show up in the user table as User Id
- Deploy both the feature branch and the firebase functions

## Resources

- [Write and Deploy Your First Function](https://firebase.google.com/docs/functions/get-started)
- [Getting Started with Firebase Functions](https://dev.to/bogdaaamn/getting-started-with-google-cloud-functions-on-firebase-3g29)
- [Getting started with Redux](https://madewithlove.be/firebase-and-redux-saga-can-be-friends/)

## Submission

<span style='color: red'>Applications must be completed and submitted 3 days after you receive the challenge. Use the link below to submit your application. All the above requirements must be met before you are invited for an interview with the Enye team.
<span/>

- [Submission link](https://airtable.com/shrmNgx90r3jNOxxI)
