import Transitions from './collections/transitionCollection';

export default class app {
  constructor(args) {
    this.args = args;
  }

  Start() {
    this.Transitions = new Transitions(this.args);

    // TRANSITION CIRCLES COLLECTIONS ONTO PAGE:
    this.Transitions.ShowCircles();
  }
}
