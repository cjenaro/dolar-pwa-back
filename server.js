const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.get("/", async function (_, res) {
  const { data, error } = await axios.get(
    "https://www.cronista.com/MercadosOnline/json/getValoresCalculadora.html"
  );

  if (data) {
    res.json(data);
  } else {
    throw new Error(error);
  }
});

app.use(cors());
app.use(express.json());
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Api running on port: ${PORT}`);
});
