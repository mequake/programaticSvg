import cuid from 'cuid';
import { SVG } from '@svgdotjs/svg.js';

export default class GenericCircle {
  constructor() {
    this.id = cuid();
    this.container = document.createElement('div');
    this.container.style.width = '60px';
    this.container.style.height = '60px';
    this.container.classList.add('is-inline');
    this.rawSvg = '<svg width="60" height="60"><circle cx="30" cy="30" r="25" shape-rendering="geometricPrecision"></circle></svg>';
    this.draw = SVG(this.container);
    this.store = this.draw.svg(this.rawSvg);
  }

  // change the fill color of this circle
  setFill(color) {
    const obj = this.draw.get(0).children(0);
    obj.attr('fill', color);
  }
}
