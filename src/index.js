// Index.js is the app's entry point.
// It acts within the global scope, so little code is placed here.
// The "App" class is where user code will begin, it's imported here:
import App from './app';
// SCSS styles are also needed for many examples, so those are imported here:
import('./assets/css/mystyles.scss');
// Create a new instance of the app class:
const app = new App();
// And START it.
app.Start();
// View 'app.js' for further comments.
