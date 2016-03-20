import Type from './Type';

export default class IntegerType extends Type {

  constructor (value) {
      super();
      this._value = value;
  }

  static get pattern () {
    return /[0-9]+/;
  }

  static get type () {
    return 'T_INTEGER';
  }

}
