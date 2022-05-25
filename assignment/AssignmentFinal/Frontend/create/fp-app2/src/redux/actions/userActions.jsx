import UserService from "../../services/UserService";
import { GET_ALL_USER, GET_USER_BY_ID } from "./userTypes";
import { toast } from "react-toastify";

export const createUser = (key, firstName, lastName) => async (dispatch) => {
  try {
    await UserService.create({ key, firstName, lastName });

    dispatch(getUsers());
    toast.success("Created successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (err) {
    toast.error(`Created failed - ${err.response.data.errorMsg}!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    const res = await UserService.getAll();

    dispatch({
      type: GET_ALL_USER,
      payload: res.data,
    });
  } catch (err) {
    toast.error(`Fetch data failed - ${err.response.data.errorMsg}!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export const updateUser = (id, data) => async (dispatch) => {
  try {
    await UserService.update(id, data);

    dispatch(getUsers());
    toast.success("Updated successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (err) {
    toast.error(`Updated failed!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await UserService.remove(id);

    dispatch(getUsers());
    toast.success("Deleted successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (err) {
    toast.error(`Deleted failed!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export const getUserById = (id) => async (dispatch) => {
  try {
    const res = await UserService.getById(id);

    dispatch({
      type: GET_USER_BY_ID,
      payload: res.data,
    });
  } catch (err) {
    toast.error(`Fetch data failed!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
