import ColorCollection from './colorCollection';
import genericCircle from '../elements/genericCircle';

export default class elementCollection {
  constructor() {
    this.GenericCircle = genericCircle;
    this.ColorCollection = new ColorCollection();

    this.CircleOpal7 = new this.GenericCircle();
    this.CircleOpal7.setFill(this.ColorCollection.opal7);

    this.CircleOpal14 = new this.GenericCircle();
    this.CircleOpal14.setFill(this.ColorCollection.opal14);

    this.CircleOpal21 = new this.GenericCircle();
    this.CircleOpal21.setFill(this.ColorCollection.opal21);

    this.CircleOpal29 = new this.GenericCircle();
    this.CircleOpal29.setFill(this.ColorCollection.opal29);

    this.CircleOpal48 = new this.GenericCircle();
    this.CircleOpal48.setFill(this.ColorCollection.opal48);

    this.CircleOpal71 = new this.GenericCircle();
    this.CircleOpal71.setFill(this.ColorCollection.opal71);

    this.CircleOpal86 = new this.GenericCircle();
    this.CircleOpal86.setFill(this.ColorCollection.opal86);
    // THIS CIRCLE IS THE SAME COLOR AS THE BACKGROUND
    // SO IT HAS A BLACK OUTLINE FOR VISIBILITY
    // REMOVE THE FOLLOWING TWO LINES TO REMOVE THE OUTLINE
    this.CircleOpal86.svg.setAttribute('stroke', 'black');
    this.CircleOpal86.svg.setAttribute('stroke-width', '1');

    this.CircleOpal96 = new this.GenericCircle();
    this.CircleOpal96.setFill(this.ColorCollection.opal96);

    this.CircleOpal98 = new this.GenericCircle();
    this.CircleOpal98.setFill(this.ColorCollection.opal98);
  }

  getCircles() {
    return [
      this.CircleOpal7.svg,
      this.CircleOpal14.svg,
      this.CircleOpal21.svg,
      this.CircleOpal29.svg,
      this.CircleOpal48.svg,
      this.CircleOpal71.svg,
      this.CircleOpal86.svg,
      this.CircleOpal96.svg,
      this.CircleOpal98.svg,
    ];
  }
}
