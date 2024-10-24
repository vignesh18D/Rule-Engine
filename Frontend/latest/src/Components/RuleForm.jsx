// src/components/RuleForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/RuleForm.css';

const RuleForm = () => {
  const [ruleString, setRuleString] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [evaluationData, setEvaluationData] = useState('');
  const [evaluationResult, setEvaluationResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/rules/create_rule', {
        ruleString,
      });
      setResponseMessage(`Rule created successfully! Server response: ${response.data}`);
      setRuleString('');
    } catch (error) {
      setResponseMessage(`Failed to create rule. Error: ${error.message}`);
    }
  };

  const handleEvaluate = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/rules/evaluate_rule', {
            evaluationData: JSON.parse(evaluationData),
        });
        setEvaluationResult(response.data.result ? 'Rule matches!' : 'Rule does not match.');
    } catch (error) {
        console.error('Error during evaluation:', error); 
        setEvaluationResult('Failed to evaluate rule.');
    }
};

  return (
    <div className="rule-form-container">
      <h2>Create a New Rule</h2>
      <form onSubmit={handleSubmit} className="rule-form">
        <input
          type="text"
          className="rule-input"
          placeholder="Enter rule string"
          value={ruleString}
          onChange={(e) => setRuleString(e.target.value)}
          required
        />
        <button type="submit" className="submit-button">Create Rule</button>
      </form>
      {responseMessage && <p className="response-message">{responseMessage}</p>}

      <h2>Evaluate a Rule</h2>
      <form onSubmit={handleEvaluate} className="evaluation-form">
        <textarea
          className="evaluation-input"
          placeholder='Enter evaluation data (e.g., {"age": 35, "department": "Sales"})'
          value={evaluationData}
          onChange={(e) => setEvaluationData(e.target.value)}
          required
        />
        <button type="submit" className="submit-button">Evaluate Rule</button>
      </form>
      {evaluationResult && <p className="evaluation-result">{evaluationResult}</p>}
    </div>
  );
};

export default RuleForm;
