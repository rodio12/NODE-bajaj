// Import necessary modules
const express = require("express");
const bodyParser = require("body-parser");

// Create an Express application
const app = express();

// Use bodyParser middleware to parse JSON bodies
app.use(bodyParser.json());

// Define the POST route
app.post("/bfhl", (req, res) => {
  // Retrieve data from the POST request
  const data = req.body.data || [];

  // Define user details
  const user_id = "john_doe_17091999";
  const email = "john@xyz.com";
  const roll_number = "ABCD123";

  // Process the data to separate even numbers, odd numbers, and alphabets
  const even_numbers = data.filter(
    (item) => !isNaN(item) && parseInt(item) % 2 === 0,
  );
  const odd_numbers = data.filter(
    (item) => !isNaN(item) && parseInt(item) % 2 !== 0,
  );
  const alphabets = data
    .filter((item) => isNaN(item))
    .map((item) => item.toUpperCase());

  // Construct the response object
  const response = {
    is_success: true,
    user_id: user_id,
    email: email,
    roll_number: roll_number,
    odd_numbers: odd_numbers,
    even_numbers: even_numbers,
    alphabets: alphabets,
  };

  // Return the response as JSON
  res.json(response);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
