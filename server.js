const express = require("express");
const app = express();
const PORT = 5000;
const userData = require("./MOCK_DATA.json");

app.get("/rest/getAllUsers", (req, res) => {
    res.send(userData)
   });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});