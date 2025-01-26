import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "61e670b9fe5a451bad5d7a86915e1219",
  },
});
