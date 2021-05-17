// This app is often used to demonstrate examples that include animations, and so all changes
// to the UI are called "transitions".
//
// If this example doesn't include animations, just know that these "transitions" are responsible
// for all visible changes to the UI (adding, removing, modifying elements) and all dependent
// tasks, if any (api calls for content, etc).
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
    // create and style containers, circles will be added next
    const box = document.createElement('div');
    box.classList.add('box', 'has-background-white');
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignContent = 'center';
    box.style.paddingTop = '30px';
    box.style.paddingBottom = '30px';
    box.style.paddingLeft = '60px';
    box.style.paddingRight = '60px';
    box.style.borderRadius = '18px';
    box.style.position = 'absolute';
    box.style.top = '50%';
    box.style.left = '50%';
    box.style.transform = 'translate(-50%, -50%)';
    box.style.overflow = 'hidden';
    container.classList.add('container');
    box.appendChild(container);
    // append circles to container
    this.Elements.getCircles().forEach((circle) => container.appendChild(circle));
    // append container to document body
    document.body.appendChild(box);
  }
}
// View "./collections/elementCollection.js" for more info.
