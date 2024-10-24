# Rule Engine with Abstract Syntax Tree (AST)

## Overview
The Rule Engine project is designed to evaluate user eligibility based on specified attributes such as age, department, income, and experience. It uses an Abstract Syntax Tree (AST) to represent conditional rules, allowing dynamic creation, combination, and modification of rules.

## Features
- Create dynamic rules using an AST structure.
- Combine multiple rules into a single AST.
- Evaluate rules against provided datasets.
- Manage rules via a simple REST API.

## Project Structure

rule-engine/ ├── Backend/ │   ├── index.js               # Entry point of the backend server │   ├── models/                # Database models for rules │   ├── Routes/                # API endpoints for rule management │   ├── utils/                 # Utility functions ├── Frontend/                  # Contains user interface (optional, if implemented)

## Technologies Used
- Node.js for backend development
- Express.js for handling HTTP requests
- MongoDB for database management
- Mongoose as an ORM for MongoDB
- dotenv for managing environment variables

## Installation

### Prerequisites
- Node.js installed on your machine.
- MongoDB running locally or on a cloud service (e.g., MongoDB Atlas).

### Steps

1. Clone the Repository:
  
   git clone <[repository-url](https://github.com/vignesh18D/Rule-Engine)>

2. Navigate to the Backend Directory:

cd rule-engine/Backend


3. Install Dependencies:

npm install


4. Configure Environment Variables: Create a .env file in the Backend directory with the following values:

PORT=5000
MONGO_URI=mongodb://localhost:27017/rule-engine


5. Start the Backend Server:

npm start


6. API Endpoints:

POST /create_rule: Creates a new rule and returns its AST representation.

POST /combine_rules: Combines multiple rules into a single AST.

POST /evaluate_rule: Evaluates a given dataset against the rule.




API Usage

Example Payload for evaluate_rule:

{
  "age": 35,
  "department": "Sales",
  "salary": 60000,
}

Future Improvements

Add support for rule modification and user-defined functions.

Implement frontend for user-friendly rule management.


---

