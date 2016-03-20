import Operator from './Operator';

export default class SummOperator {

  constructor () {
      this.priority = 0;
      this.leftOperand = null;
      this.rightOperand = null;
  }

  static get type () {
    return 'O_SUMM';
  }

  _calculate () {
    return parseInt(this.leftOperand) + parseInt(this.rightOperand);
  }

  getResult () {
    return this._calculate();
  }

}
