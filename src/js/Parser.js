import Operator from './types/Operator';
import IntegerType from './types/IntegerType';

export default class Parser {

	constructor (expression) {
    this.expr = expression;
    this._literalTypes = {
      [IntegerType.type]: IntegerType.pattern,
      [Operator.type]: Operator.pattern,
      T_SPACE: /[\s]+/
    };

    this.result = this._parse();
  }

  _parse () {
    let literals = [];

    while (this.expr.length) {
      try {
        literals.push(this._defineLiteral());
      } catch (e) {
        console.log(e.getMessage());
        break;
      }
    }

   	return literals;
  }

  _defineLiteral () {
    let literalTypes = this._literalTypes,
        nextType = null,
        found = null;

    for (let type in literalTypes) {
      found = literalTypes[type].exec(this.expr[0]);
      if (found) {
        nextType = type;
        break;
      } else {
        nextType = null;
      }
    }

    if (! nextType) {
      throw new Error(`Parse Error: Unexpected symbol "${this.expr[0]}"`);
    }

    found = literalTypes[nextType].exec(this.expr)[0];

    if (found) {
      this.expr = this.expr.slice(found.length);

      return {
        type: nextType,
        value: found
      };
    }
  }

  getResult () {
  	return this.result;
  }

}
