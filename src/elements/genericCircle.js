export default class GenericCircle {
  constructor() {
    // create the svg element
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    // set width and height
    this.svg.setAttribute('width', '60');
    this.svg.setAttribute('height', '60');

    // create a circle
    this.cir = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    this.cir.setAttribute('cx', '30');
    this.cir.setAttribute('cy', '30');
    this.cir.setAttribute('r', '25');
    this.cir.setAttribute('fill', 'red');
    this.cir.setAttribute('shape-rendering', 'geometricPrecision');

    // attach it to the container
    this.svg.appendChild(this.cir);
  }

  setFill(color) {
    this.cir.setAttribute('fill', color);
  }
}
