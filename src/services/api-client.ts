import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4cf1c620c4474c94a08e699e72a7a2aa",
  },
});
