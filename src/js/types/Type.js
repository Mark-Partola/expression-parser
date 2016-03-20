export default class Operator {

  constructor () {}

  result () {
    return this._value();
  }

  static get type () {
    return 'T_TYPE';
  }

}
