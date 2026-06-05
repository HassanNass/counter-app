# Counter App

A simple React-based counter application that allows users to increment, decrement, and reset a numerical value. The counter starts at 0 by default and updates dynamically in response to user interactions. To maintain valid values, the counter cannot be decremented below 0. The application includes three controls:

- Increment – increases the counter by 1.
- Decrement – decreases the counter by 1, with a minimum value of 0.
- Reset – returns the counter to its initial value of 0.

## What I learned

Through this project, I gained hands-on experience with React state management using the useState Hook. I learned how to update component state in response to user events, handle button click interactions, and implement conditional logic to enforce application rules such as preventing the counter from dropping below zero.

## Prerequisites

- Node.js (version 18 or later recommended)
- npm (included with Node.js)

## How to run it locally

To run this project on your local machine:

- Clone the repository:
	git clone https://github.com/HassanNass/counter-app.git

- Navigate to the project directory:
	cd counter-app

- Install dependencies:
	npm install

- Start the development server:

	npm run dev
	Open your browser and visit the URL displayed in the terminal (typically http://localhost:5173 for Vite projects).
