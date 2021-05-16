// This app is often used to demonstrate examples that include animations, and so all changes
// to the UI are called "transitions".
//
// If this example doesn't include animations, just know that these "transitions" are responsible
// for all visible changes to the UI (adding, removing, modifying elements) and all dependent
// tasks (api calls for content, etc).
//
// "elementCollection", imported here, contains all pre-initialized document elements needed
// for the example, so they don't have to be created within transition functions.
import Elements from './elementCollection';

export default class TransitionCollection {
  constructor() {
    // Create a new instance of the elements collection
    this.Elements = new Elements();
  }

  // ---------------------------------------------------------------
  // Transition Functions (Needed For Example) Below Here
  // ---------------------------------------------------------------
  ShowCircles() {
    this.Elements.getCircles().forEach((circle) => document.body.appendChild(circle));
  }
}
// View "./collections/elementCollection.js" for more info.
