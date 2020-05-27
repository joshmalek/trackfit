const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.send.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () =>{
    //use backticks (`) to allow variable printing
    console.log(`Server is running on port ${port}`);
})