# INFO443 AA - P1 checkpoint #1: code base proposal
Efra Ahsan (eahsan@uw.edu) & Yuhang Liu (Yliu34@uw.edu)

This code base is for a website application called OurFamily, an app made to bring
families closer together with features including a virtual cookbook, a gallery of photo albums,
and an interactive calendar. This prototype was submitted as in INFO340 project in March 2023.
This software is formally a React application.

Checkout the hosted application here: https://family-app-7c595.web.app/

The original coders were Efra Ahsan, Kush Bhatia, Carl Searle, and Yusuf Farah.

## UML Component Diagram of OurFamily Website

<img src="images/draft-UML-component-diagram.png" alt="draft-UML-diagram">

## UML Sequence Diagram of OurFamily Website

<img src="images/draft-UML-sequence-diagram.png" alt="draft UML sequence diagram">


## How to run our tests

First, run the following command:
`npm install --save-dev jest --force`

Next, run `Npm test` followed by typing `a` into the terminal and hitting enter to run all of the tests.

If you'd like to run each test file individually, hit ^C to exit out of the Watch Usage interface back onto the regular terminal, and
run `Npm test footer` to see Footer.test.js *or* `Npm test profile` to see ProfileSelect.test.js *or* `Npm test cookbook` to see CookbookFilter.test.js.

You can also run `npm run test:coverage` to see the generated coverage report, as shown below.


## Our automated test coverage

<img src="images/test-coverage.png" alt="automated test coverage">

So the three main functionalities we tested in our automated test is the interaction with Footer, interaction with ProfileSelect component and the functionality of Cookbook Filter. These three components got 100% coverage.
