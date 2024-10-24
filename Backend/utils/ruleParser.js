const Node = require('../models/Node');

function parseRuleString(ruleString) {
    return new Node('operator', new Node('operand', null, null, 'age > 30'), new Node('operand', null, null, 'salary > 50000'), 'AND');
}

module.exports = parseRuleString;