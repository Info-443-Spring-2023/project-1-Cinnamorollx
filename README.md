# INFO443 Project 1 Full Report: OurFamily Application

## Codebase description

This code base is for a website application called OurFamily, an app made to bring
families closer together with features including a virtual cookbook, a gallery of photo albums,
and an interactive calendar. This prototype was submitted as in INFO340 project in March 2023.
This software is formally a React application.

Checkout the hosted application here: https://family-app-7c595.web.app/

The original coders were Efra Ahsan, Kush Bhatia, Carl Searle, and Yusuf Farah.

The current repo editors are Efra Ahsan (eahsan@uw.edu) & Yuhang Liu (yliu34@uw.edu).

## Codebase Context

This application, OurFamily, is a prototype meant to be used by individuals of the same family to exist
as a communication and archival platform. The features include a shared calendar feature,
where family members can communicate their schedules and other events in one collective
area, as well as photo album and cookbook features that enable the family to store
chapters of their memories and family traditions in one shared spot.

## Mission of the Application

The mission of the application is to bring families closer together, both in terms of communication and over
shared nostalgia.

The goal of the application is to actively ease communication between members of a family in a fun and digitized way, because in the hecticness of family life it becomes difficult to remember all of the small
details of life events, especially while everyone wants to make their own plans. Therefore, easing communication in a virtual way could be convenient for any average family.

The other goal of OurFamily is to digitally archive some memories that often might get forgotten, such as photo albums of
specific times one might share with their family, and recipes that one might have created and/or grown up with. This
brings the family closer in a more long-term fashion because families can use OurFamily to grow their memory collections and
family bonds.

## Code Structure Analysis

### Architectural Elements
This project was built using React.js for front-end functionality, Firebase for back-end functionality, and an open-sourced React component that was imported as a library. We've abstracted an architectural analysis to consider each of the individual React components below. Additionally, Figure 1 illustrates each React component and their relationships.

#### Components in Project

##### OurFamily app
Renders all content in the project. The app instantiates all of the other components, but begins by directing users to the
ProfileSelect component on first render.

##### ProfileSelect
Commands user to select an avatar out of four options, and thereby directs them to the primary app content where the avatar
name will be reflected back to them.  

##### Navbar
Upon being directed to the app, the Navbar exists on every page and enables directing users to the different pages of the site, which is how users can access each of the features or switch avatar. The Navbar also contains a one-click Logout capability to release the avatar the user may have initially selected, thereby putting them in Guest mode.

##### Calendar Page
Renders and displays the interactive calendar upon which users can view, add, or delete events. Other interactivity includes
the ability to click on different days, months, and years.

##### Cookbook Page
Renders and displays any existing recipes on the account, and renders the CookbookFilter component. The page also enables searching for a recipe by name using a non-complex search bar, as well as a button to add a new recipe within a form upon an on-screen modal that can be submitted or cancelled out of.

##### CookbookFilter
Renders only on the Cookbook Page, this component allows the user to filter the Cookbook recipes being displayed using different checkboxes to guide their search.

##### PhotoAlbum Page
Renders and displays the existing photo albums on the account, and enables the user to search for an album by name using a non-complex search bar. The PhotoGallery component can only be accessed by clicking on a displayed album on this page.

##### PhotoGallery
Renders and displays the individual images in a formatted gallery for users to look through. Also contains a button that
enables users to add images from their local server unto this gallery.

##### Footer
Contains copyright information.

<img src="images/draft-UML-component-diagram.png" alt="draft-UML-diagram">

_Figure 1 - UML Component Diagram of OurFamily Website_

This figure illustrates how elements interact with each other in the project.

In Figure 1, we listed our main components in the app with their attributes and key functions. OurFamily app is constructed with 4 key components: ProfileSelect, Cookbook Page, Calendar Page and PhotoAlbum page. In each components, there are sub components like CookBook Filter and photoGallery to help support the key components works. 

### 2. Code's Process Flow

Since the system is designed for a family, which means there might be multiple users to use the application, the first thing in the code process flow is to ask user to choose an avatar. When the user first open the website, the app will call the component ProfileSelect to render the 4 different avatars that a user could choose. And whenever an avatar is clicked, ProfileSelect will run `handleLogin()` function to set `currentProfile` value in App to be the name of the username and then navigate to Calendar page.

After navigating to Calendar page, the app will render a family calendar on the screen. Also the app will render a header with the value of `currentProfile`, which is the user's username and a footer. In the calendar component, a `handleSubmit()` function will be called when a user press the addEvent button. The calendar page uses a external library called 'revo-calendar' to generate the calendar. When user click a specific date on the calender, the calendar page will call a function `fetchEvents()` to get event information stored on that date. If there's no data stored, it will automatically render text "No events for this day".

Other than Calendar function, another flow in the app is about PhotoAlbums component. Whenever the nav item of Album is clicked, the page will be redirect to Album page with a hyperlink. Similarly, the page will redirect to Cookbook Page if the nav item of Cookbook is clicked.

After navigating to PhotoAlbums Page, the page pass a props to the function `Jumbotron(props)` in Header component. In that case, the jumbotron will display different illustration image under the navbar. `Jumbotron(props)` will display different content based on the props that tell which page the app is current on. For PhotoAlbum page, there will be displaiyng 3 different cards: "All Image","Kids Album" and "vacation Album" which represent 3 different album of photos. Whenever a card is clicked, the PhotoAlbum page will call `PhotoGallery()` to query the stored photo. Also, `PhotoGallery()` handle with uploading and storing new uploaded image.

Lastly, there is a process flow for Cookbook component. Figure 2 illustrates a flow from user's view of using Cookbook to add a new recipe in the app. User could add a new recipe form in cookpage by clicking "add a recipe" button, then inputing new recipe information and then saving. In code process side, when navigating to cookbook page, the app will render the current cards of recipes. Cookbook page uses Firebase to store the recipe cards. The default filter value is an empty array, which means that every recipe cards will be rendered. Whenever a checkbox in Cookbook filter is clicked, the filter array would add the name of the checkbox to the array, and page will rerender new recipe cards after filtering with the filter array. Beside, when the "add a recipe" button is pressed, a function `handleModalShow` will be called to change the style of a form of adding recipe to visible which creates a pop up in browser. When "save changes" button in the form is pressed, the input in the form will be saved to firebase database.

<img src="images/draft-UML-sequence-diagram.png" alt="draft UML sequence diagram">

_Figure 2 - UML Sequence Diagram of OurFamily Website_

A seuqence flow of a user trying to add a new recipe in Cookbook Page.

## Architecture Assessment

### Element Selection
The focus of our report will include the following aspects: the interaction with Footer, interaction with ProfileSelect component, and the functionality of Cookbook Filter.

### Architectural Deficiencies
Assessing the overall functionality and structure of these selected elements, there were several aspects that called for improvement. For report, we've assessed the Code Smells, Documentation/Readability Concerns, and Design Quality Deficiencies below.

#### Code Smells
The first code smell we detected was that of **duplicate code** in both the CookbookFilter component as well as the ProfileSelect component. We saw that instead of writing repeated chunks of code into reusable function with paramaters, the code was duplicated to produce the desired outcome, even in situations where the only difference between chunks was a single word.

_**Refactoring:**_ In Cookbook Filter, these are couple of duplicated lines for creating the checkbox in the filter with. In previous code, we manually create 10 Forms for the checkboxs. In our refactoring, we create a new function `createForm(name,type)` that could create a form with the parameter "name" and "type". By doing so, we don't need to write a long line of a form element when we want to add a new checkbox, instead, we could just call `createForm()` with the name we want and the type to create a checkbox.

Here is the refactor code:

```

function createForm(name, type) {
    return(
      <Form.Check
            inline
            label= {name.charAt(0).toUpperCase() + name.slice(1)}
            type={type}
            name = {name}
            onClick={props.clickHandle} //clickHandle is passed through the props
       />

    )
  }

```

The second code smell we detected was that there were **zero comments**. This is concerning because specifically for one of our elements of concern, the ProfileSelect component, a comment explaining one of the state functionalities that was passed
parent to child would have been really helpful because the process of switching users is not the most intuitive. It's especially worth commenting what the initial state value is because that information is difficult to find for anyone who did not write the original version of code. Additionally, within the CookbookFilter component, comments would have been helpful to indicate what the nature of the click handler function is, since it's passed in as a prop.

_**Refactoring:**_ We add some neccessary comment in ProfileSeelct. Actually when a new person read the code, they might not know where the props is from in PorfileSelect. Thus, we add some short comments to explain the father component that passes the props to ProfileSelect.

A third code smell was that of **speculative generality** within the CookbookFilter component, because the function
is tracking units such as the "id" and "name" of each of the checkboxes despite this information never being used. The
function already tracks the "label" property of each of the checkboxes, which is how other coupled functions are able
to use the information to filter the cookbook to the users' selections, so the "id" and "name" properties can be discarded.

_**Refactoring:**_ We removed the unused value and unused library in ProfileSelect, Footer and CookbookFilter. With linter's help, the unused value is marked with underline. we removed the unused "id" property of forms in our cookbook filter.

A fourth code smell is that the ProfileSelect component includes a commented-out button to "Edit Profile", which is a **non-existing affordance of the software**. It's important to remove code like this entirely because it doesn't fit the affordances
of the application and is simply confusing to leave documented within the program.

_**Refactoring:**_ The part of commented-out code is previously kept just for testing. This part of code is totally unnecessary in the app, so we removed the commented-out code to make the comment more clear and less confusing.

an example of commented-out code we removed is this:

```

  {/* <div className='calendar-error-resolve'>

      {/* <div className='calendar-error-resolve'>Calendar is only visible on larger screens!</div> */}
      
```

A fifth code smell we generally saw across the code was that of **long functions**. Although this goes in hand with the first smell of *duplicate code* being written across the software, the issue with long functions definitely needs to be resolved
because the software loses its articulation and readability when it's long and unorganized.

_**Refactoring:**_ Refactoring a long functions is time-consuming and risky. We make some slight changes to make the functions more breif. Also we include some comments in long functions to help others understand what the function is doing.

#### Documentation/Readability Concerns


#### Design Quality Deficiencies


## Unit/Integration Tests


### Testing Overview


### Testing Breakdown


## Testing Instruction

- All of our test file is located in src/components/tests directory.

- To start testing, first, run the following command:
`npm install --save-dev jest --force`

- Next, run `Npm test` followed by typing `a` into the terminal and hitting enter to run all of the tests.

If you'd like to run each test file individually, hit ^C to exit out of the Watch Usage interface back onto the regular terminal, and
run `Npm test footer` to see Footer.test.js *or* `Npm test profile` to see ProfileSelect.test.js *or* `Npm test cookbook` to see CookbookFilter.test.js.

- You can also run `npm run test:coverage` to see the generated coverage report, as shown below.

## Automated test coverage

<img src="images/test-coverage.png" alt="automated test coverage">

_Figure 3 - testing coverage_

The three main functionalities we tested in our automated test is the interaction with Footer, interaction with ProfileSelect component and the functionality of Cookbook Filter. These three components got 100% coverage.

