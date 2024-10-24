// src/components/RuleList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/RuleList.css'

const RuleList = () => {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    
    const fetchRules = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/rules');
        setRules(response.data);
      } catch (error) {
        console.error('Error fetching rules:', error);
      }
    };

    fetchRules();
  }, []);

  return (
    <div className="rule-list-container">
      <h2>Existing Rules</h2>
      {rules.length === 0 ? (
        <p>No rules available.</p>
      ) : (
        <ul className="rule-list">
          {rules.map((rule, index) => (
            <li key={index} className="rule-item">
              <strong>Rule:</strong> {rule.ruleString}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RuleList;
