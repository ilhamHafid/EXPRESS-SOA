<!-- @format -->

# Service-Oriented Architecture Example

This project demonstrates a simplified service-oriented architecture (SOA) implemented in Node.js. It consists of two services (Order Service and Payment Service) and an API Gateway that routes requests between them.

## Project Structure

The project is organized into the following directories:

- \`order-service\`: The Order Service, responsible for managing orders.
- \`payment-service\`: The Payment Service, responsible for processing payments.
- \`api-gateway\`: The API Gateway, which routes requests to the appropriate service.

## Installation

1. **Clone the Repository:**

   \`\`\`bash
   git clone <repository-url>
   cd EXPRESS-SOA
   \`\`\`

2. **Install Dependencies:**

   Navigate to each service and the API Gateway directories and install the necessary dependencies using npm.

   \`\`\`bash
   cd Order-Service
   npm install

   cd ../Payment-Service
   npm install

   cd ../API-Gateway
   npm install
   \`\`\`

## Running the Services

1. **Start the Services:**

   Start each service and the API Gateway in separate terminal windows. Use the following commands to start each service:

   \`\`\`bash

   # Start the Order Service

   cd Order-Service
   node order-service.js

   # Start the Payment Service

   cd Payment-Service
   node payment-service.js

   # Start the API Gateway

   cd API-Gateway
   node api-gateway.js
   \`\`\`

2. **Testing the Application:**

   You can test the application by sending HTTP requests to the API Gateway at \`http://localhost:4000\`. Use tools like cURL or Postman to interact with the services.

## Service Endpoints

- Order Service:

  - Create a new order: \`POST http://localhost:4000/api/orders\`
  - Retrieve an order: \`GET http://localhost:4000/api/orders/:orderId\`

- Payment Service:
  - Process a payment: \`POST http://localhost:4000/api/payments\`
  - Retrieve a payment: \`GET http://localhost:4000/api/payments/:paymentId\`
