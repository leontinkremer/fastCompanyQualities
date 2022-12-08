// http.service.js
import axios from "axios";
import logger from "./log.service";
import configData from "./configData.json";

axios.defaults.baseURL = configData.SERVER_URL;

/* (

Verwende die Methode interceptors von axios um die Responses abzufangen,
die noch vor then und catch ausgeführt werden.

) */
axios.interceptors.response.use(
  /* (
        // Diese (erste) Funktion wird ausgeführt,
        // wenn die Antwort im 2xx Bereich liegt
    ) */

  function (res) {
    console.log(res.data.status);
    return res;
  },

  /* (

    // Diese (zweite) Funktion wird ausgeführt,
    // wenn die Antwort außerhalb des 2xx Bereich liegt

    ) */
  function (error) {
    console.log(error.code);
    console.log(error.response);
    const expectedErrors =
      error.response && error.response.status >= 400 && error.response < 500;
    console.log(error.response);
    if (!expectedErrors) {
      /* (

      // Setze die Methode logger.log(error) ein.

    ) */
      logger.log(error);
      console.log("Unexpected error");
    } else {
      return Promise.reject(error);
    }
  }
);

const httpService = {
  get: axios.get,
  post: axios.put,
  put: axios.put,
  delete: axios.delete,
};

export default httpService;
