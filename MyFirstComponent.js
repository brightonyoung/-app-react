// MyFirstComponent.js


// because React is a library we have to call the functionality of it we want to use.
// To do this we will always have to write the following line at the top of our .js file:
import React from 'react';

// simply write a function in ES6+ then pass in the keyword props to access this special object
const myFirstComponent = (props) => {
  // every component in React MUST return something...
  return (
    <button>
      Was button clicked? {props.wasClicked}
    </button>
  )
}

// Then, because we want to compose our web pages with composable elements, we have to export the code in the file. Always write this line at the end of your .js files:
export default myFirstComponent