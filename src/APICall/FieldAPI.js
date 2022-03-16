import { publicRequest } from "../requestMethods";

export const getFields = async (pageNum) => {
  let res;
  await publicRequest
    .get(`/fields?page=${pageNum}`)
    .then(function (response) {
      res = response;
    })
    .catch(function (error) {
      res = error.response;
    });
  return res;
};
