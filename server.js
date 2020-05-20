const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());
app.use(express.json());
app.get("/", async function (_, res) {
  const { data, error } = await axios.get(
    "https://www.cronista.com/MercadosOnline/json/getValoresCalculadora.html",
    {
      headers: {
        Origin: "https://www.cronista.com/",
      },
    }
  );

  if (data) {
    res.json(data);
  } else {
    throw new Error(error);
  }
});
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Api running on port: ${PORT}`);
});
