// ColorCollection contains color data from scss styles in a javascript class object.
// so ugly color references don't gunk up the code. It is imported here.
import ColorCollection from './colorCollection';
// !"genericCircle" is unique to this example. use new() to generate a javascript class object
// containing an svg node element, ready to be be modified and added to the page. Imported here:
import genericCircle from '../elements/genericCircle';

export default class elementCollection {
  constructor() {
    // bind generic circle to the class
    this.GenericCircle = genericCircle;
    // initialize new instance of color collection
    this.ColorCollection = new ColorCollection();
    // create circle1
    this.CircleOpal7 = new this.GenericCircle();
    // change circle1's color.
    this.CircleOpal7.setFill(this.ColorCollection.opal7);
    // create circle2
    this.CircleOpal14 = new this.GenericCircle();
    // change circle2's color.
    this.CircleOpal14.setFill(this.ColorCollection.opal14);
    // create circle 3
    this.CircleOpal21 = new this.GenericCircle();
    // change circle3's color
    this.CircleOpal21.setFill(this.ColorCollection.opal21);
    // create circle4
    this.CircleOpal29 = new this.GenericCircle();
    // change circle4's color
    this.CircleOpal29.setFill(this.ColorCollection.opal29);
    // create circle5
    this.CircleOpal48 = new this.GenericCircle();
    // change circle5's color
    this.CircleOpal48.setFill(this.ColorCollection.opal48);
    // create circle6
    this.CircleOpal71 = new this.GenericCircle();
    // change circle6's color
    this.CircleOpal71.setFill(this.ColorCollection.opal71);
    // create circle7
    this.CircleOpal86 = new this.GenericCircle();
    // change circle7's color
    this.CircleOpal86.setFill(this.ColorCollection.opal86);
    // create circle8
    this.CircleOpal96 = new this.GenericCircle();
    // change circle9's color
    this.CircleOpal96.setFill(this.ColorCollection.opal96);
    // create circle9
    this.CircleOpal98 = new this.GenericCircle();
    // change circle9's color
    this.CircleOpal98.setFill(this.ColorCollection.opal98);
  }

  // get an array of all the created svg node objects (the 9 circles).
  getCircles() {
    return [
      this.CircleOpal7.container,
      this.CircleOpal14.container,
      this.CircleOpal21.container,
      this.CircleOpal29.container,
      this.CircleOpal48.container,
      this.CircleOpal71.container,
      this.CircleOpal86.container,
      this.CircleOpal96.container,
      this.CircleOpal98.container,
    ];
  }
}
