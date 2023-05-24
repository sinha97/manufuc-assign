# Wine Dataset Statistical Analysis

This React application performs statistical analysis on the wine dataset. It calculates the class-wise mean, median, and mode of the "Flavanoids" attribute, as well as the class-wise mean, median, and mode of the derived property "Gamma". The results are displayed in tabular format using React components.

## Features

- Calculates class-wise statistics for the "Flavanoids" attribute
- Calculates class-wise statistics for the "Gamma" derived property
- Displays the calculated statistics in separate tables
- Rounds off the calculated values to 3 decimal places

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Prerequisites

- Node.js (v14 or higher) and npm (v6 or higher) installed on your machine.

## Usage
Place the wine dataset JSON file in the project directory. You can either import it directly or fetch it from a server.

Modify the React components and utility functions as needed to customize the statistical calculations or the way the results are displayed.

### Start the development server:

npm start
Open a web browser and visit http://localhost:3000 to see the rendered page with the statistical measures.

### Customization
To change the wine dataset JSON file:

Place the JSON file in the project directory.
Update the file path in the relevant component or utility function where the data is fetched or imported.
To customize the statistical calculations or the way the results are displayed:

Modify the utility functions in the utils.js file.
Update the React components in the FlavanoidsTable.js and GammaTable.js files.
  
![plot](/home/htd/Desktop/Screenshot at 2023-05-24 09-58-01.png)
