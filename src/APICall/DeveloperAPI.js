import { publicRequest } from "../requestMethods";

export const getAllDevelopers = async (pageNum) => {
  let res;
  await publicRequest
    .get(`/developer?page=${pageNum}`)
    .then(function (response) {
      res = response;
    })
    .catch(function (error) {
      res = error.response;
    });
  return res;
};
