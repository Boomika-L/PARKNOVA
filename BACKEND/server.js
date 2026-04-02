const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const parkingRoutes = require("./routes/parkingRoutes");
app.use("/api",parkingRoutes);

app.listen(5000,()=>{
    console.log("Server running on port 5000");
})