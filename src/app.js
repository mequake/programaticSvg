// This app is often used to demonstrate examples that include animations, and so all changes
// to the UI are called "transitions".
import Transitions from './collections/transitionCollection';
// If this example doesn't include animations, just know that these "transitions" are responsible
// for all visible changes to the UI (adding, removing, modifying elements) and all dependent
// tasks (api calls for content, etc).
export default class App {
  Start() {
    // Create a new instance of the transitions class.
    this.Transitions = new Transitions();
    // Run the transition(s) needed to see the example in the browser:
    this.Transitions.ShowCircles();
  }
}
// View "./collections/transitionCollection.js" for additional info.
