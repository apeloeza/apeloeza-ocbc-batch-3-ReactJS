import http from "./http-common";

const getAll = () => {
  return http.get("/debug");
};

const getById = (id) => {
  return http.get(`/keys/${id}`);
};

const create = (data) => {
  return http.post("/keys", data);
};

const update = (id, data) => {
  return http.put(`/keys/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/keys/${id}`);
};

const UserService = {
  getAll,
  getById,
  create,
  update,
  remove,
};

export default UserService;
