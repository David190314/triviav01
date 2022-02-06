import { httpRequest } from "../Request/url";
import { requestGenerico } from "../Request/ApiUrl";

export const getData = () => {
  return new Promise((resolve, reject) => {
    requestGenerico.get(httpRequest).then((response) => {
      resolve(response);
    });
  });
};
