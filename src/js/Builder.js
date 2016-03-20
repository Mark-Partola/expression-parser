import Operator from './types/Operator';

export default class Builder {

  constructor (typeList) {
    this._list = typeList;
    this._tree = [];
    this._stripSpaces();
    this._setOperands();
    this._compute(this._tree);
  }

  _setOperands () {
    this._list.forEach( (literal, index) => {
      if (literal.type === 'O_OPERATOR') {
        this._tree.push({
          left: this._list[index - 1],
          operator: literal,
          right: this._list[index + 1]
        });
        if (this._tree[this._tree.length - 2]) {
          this._tree[this._tree.length - 1].wait = 'left';
        }
      }
    });
  }

  _compute (tree) {

    let operationResult;

    tree.every( (command, index) => {

      let leftNode = tree[index - 1],
          rightNode = tree[index + 1];

      if (! command.wait ) {
        operationResult = this._getOperationResult(command);

        if (leftNode && leftNode.wait === 'right') {
          delete tree[index - 1].wait;
          tree[index - 1].right.value = operationResult;
        } else if (rightNode && rightNode.wait === 'left') {
          delete tree[index + 1].wait;
          tree[index + 1].left.value = operationResult;
        }

        tree = tree.filter( (node, indexNode) => {
          return indexNode !== index;
        });

        return false;
      }
    });

    if (tree.length >= 1) {
      this._compute(tree);
    } else {
      console.log(operationResult);
      return tree;
    }

  }

  _getOperationResult (command) {
    let TypedOperator = new Operator(command.operator.value).getOperator();
    let operator = new TypedOperator();
    operator.leftOperand = command.left.value;
    operator.rightOperand = command.right.value;
    return operator.getResult();
  }

  _stripSpaces () {
    this._list = this._list.filter( (literal) => {
      return literal.type !== 'T_SPACE';
    });
  }

}
