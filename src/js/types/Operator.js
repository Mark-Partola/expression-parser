import SummOperator from './SummOperator';
import DiffOperator from './DiffOperator';

export default class Operator {

  constructor (type) {
      this._type = type;
  }

  getOperator () {
    if (this._type === '+') {
      return SummOperator;
    } else if (this._type === '-') {
      return DiffOperator;
    }
  }

  static get type () {
    return 'O_OPERATOR';
  }

  static get pattern () {
    return /[+\-\/*]+/;
  }

  result () {
    return this._calculate();
  }

}
