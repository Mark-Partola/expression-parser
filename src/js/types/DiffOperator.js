import Operator from './Operator';

export default class DiffOperator {

  constructor () {
      this.priority = 0;
      this.leftOperand = null;
      this.rightOperand = null;
  }

  static get type () {
    return 'O_DIFF';
  }

  _calculate () {
    return this.leftOperand - this.rightOperand;
  }

  getResult () {
    return this._calculate();
  }

}
