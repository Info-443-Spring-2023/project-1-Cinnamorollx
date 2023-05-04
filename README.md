# INFO443 Project 1 Full Report: OurFamily Application

## Codebase description

This code base is for a website application called OurFamily, an app made to bring
families closer together with features including a virtual cookbook, a gallery of photo albums,
and an interactive calendar. This prototype was submitted as in INFO340 project in March 2023.
This software is formally a React application.

Checkout the hosted application here: https://family-app-7c595.web.app/

The original coders were Efra Ahsan, Kush Bhatia, Carl Searle, and Yusuf Farah.

The current repo editors are Efra Ahsan (eahsan@uw.edu) & Yuhang Liu (yliu34@uw.edu).

## Code Structure Analysis

### 1. Code-level architectural elements of the system

some content here

<img src="images/draft-UML-component-diagram.png" alt="draft-UML-diagram">

Figure 1: UML Component Diagram of OurFamily Website

Caption here: asdasda

### 2. Code's Process Flow

Since the system is designed for a family, which means there might be multiple users to use the application, the first thing in the code process flow is to ask user to choose a user. When the user first open the website, the app will call the component ProfileSelect to render the 4 different usernames that a user could choose. And whenever a username is clicked, ProfileSelect will run `handleLogin()` function to set `currentProfile` value in App to be the name of the username and then navigate to Calendar page. 

After navigating to Calendar page, the app will render a family calendar on the screen. Also the app will render a header with the value of `currentProfile`, which is the user's username and a footer. In the calendar component, a `handleSubmit()` function will be called when a user press the addEvent button. The calendar page uses a external library called 'revo-calendar' to generate the calendar. When user click a specific date on the calender, the calendar page will call a function `fetchEvents()` to get event information stored on that date. If there's no data stored, it will automatically render text "No events for this day".

Other than Calendar function, another flow is for Albums component. Whenever the nav item of Album is clicked, the page will be redirect to Album page with a hyperlink. Similarly, the page will redirect to Cookbook Page if the nav item of Cookbook is clicked.

<img src="images/draft-UML-sequence-diagram.png" alt="draft UML sequence diagram">

Figure 2: UML Sequence Diagram of OurFamily Website

Caption here: asdasdsad


## Architectural Assessment

### Code Smell

## Automated Test


## How to run our tests

First, run the following command:
`npm install --save-dev jest --force`

Next, run `Npm test` followed by typing `a` into the terminal and hitting enter to run all of the tests.

If you'd like to run each test file individually, hit ^C to exit out of the Watch Usage interface back onto the regular terminal, and
run `Npm test footer` to see Footer.test.js *or* `Npm test profile` to see ProfileSelect.test.js *or* `Npm test cookbook` to see CookbookFilter.test.js.

You can also run `npm run test:coverage` to see the generated coverage report, as shown below.


## Automated test coverage

<img src="images/test-coverage.png" alt="automated test coverage">

So the three main functionalities we tested in our automated test is the interaction with Footer, interaction with ProfileSelect component and the functionality of Cookbook Filter. These three components got 100% coverage.
