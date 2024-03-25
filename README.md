# Exam Online Application

The Exam Online Application is a web application designed to organize and manage online exams. The application allows users to create tests, add questions, and manage test-takers as well as the results of the exams.

## 1. Getting Started
This guide will walk you through how to install and use the Exam Online application on your computer.

## 2. Requirements
- Node.js
- MySQL

## 3. Installation
#### 3.1. Clone the Repository: You can clone the project from the GitHub repository using the following command:
git clone git@github.com:huyphat0707/exam.git

#### 3.2. Install Dependencies: Navigate to the root directory of the project and run the following command to install the necessary dependencies:
- npm install
- cp .env.example .env
- cp config/config_default.js config/config.js

#### 3.3. Configure the Database: Make sure you have configured the database before running the application. Create a .env file in the root directory of the project and provide the necessary configuration information (e.g., database URL, username, password).

#### 3.4. Run the Application: After installation and configuration, you can run the application using the following command:
- npm run dev

#### 3.5. Access the Application: Open a web browser and navigate to http://localhost:3000 to start using the application.

## 4. Usage
- Create a New Exam: You can create a new exam by accessing the exam management page and clicking on the "Create New Exam" button. Fill in the necessary information for the exam such as name, time, description, etc.

- Join an Exam: Test-takers can join an exam by logging into the application and selecting the exam they wish to participate in. They will complete the exam within the specified time and then submit it to view the results.

## 5. Technologies Used
- Frontend: HTML, CSS, JavaScript, React.js
- Backend: Node.js, Express.js
- Database: MySQL

## 6. Author
Golazo

## 7. License
This project is licensed under the MIT License - see the LICENSE file for details.

## 8. Support
If you have any questions or encounter any issues while using the application, please contact us via email at haphat0707@gmail.com.