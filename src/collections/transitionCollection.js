import Elements from './elementCollection';

export default class transitionCollection {
  constructor(args) {
    this.args = args;
    this.elements = new Elements();
  }

  ShowCircles() {
    this.elements.getCircles().forEach((circle) => document.body.appendChild(circle));
  }
}
