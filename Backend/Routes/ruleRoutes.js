// server/routes/ruleRoutes.js
const express = require('express');
const router = express.Router();
const Rule = require('../models/Rule');
const parseRuleString = require('../utils/ruleParser');

// Endpoint to create a rule
router.post('/create_rule', (req, res) => {
    const { ruleString } = req.body;
    try {
        // Parse the rule string to generate the AST
        const ast = parseRuleString(ruleString);
        // Create a new Rule object with the parsed AST
        const newRule = new Rule({ ruleString, ast });
        // Save the rule to the database
        newRule.save()
            .then(rule => res.json(rule))
            .catch(err => res.status(500).json({ error: 'Failed to create rule' }));
    } catch (error) {
        // Handle errors in rule parsing
        res.status(400).json({ error: 'Invalid rule format' });
    }
});

// Endpoint to get all rules
router.get('/', async(req, res) => {
    try {
        // Fetch all rules from the database
        const rules = await Rule.find();
        res.json(rules);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch rules' });
    }
});

// Endpoint to evaluate a rule
router.post('/evaluate_rule', async(req, res) => {
    const { evaluationData } = req.body;
    try {
        const result = Math.random() > 0.5; 
        res.json({ result });
    } catch (error) {
        res.status(500).json({ error: 'Failed to evaluate rule' });
    }
});

module.exports = router;