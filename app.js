let express = require("express");
let app = express();

require("./models/db");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
