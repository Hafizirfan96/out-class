import http from "../../services/http";
import { handleErrors } from "../../helpers/error";
import { setStats, loadingStats, deleteStats } from "../../store/cms/notification";

const path = "/cms/notification";
const path1 = "/cms/notification/all";

export const loadStats = ({ body = {}, onSuccess, onError, onEnd } = {}) => {
  return async (dispatch, getState) => {
    dispatch(loadingStats(true));
    const storeState = getState();
   
    const { token } = storeState.auth;
   
    try {
      //showing loader on ui
      const res = await http.get({ url: path1 ,
        headers: {
            "x-auth-token": token,
          },
    });
      const { data } = res.data;
console.log("response", res.data)
      dispatch(setStats(data));

      //onSuccess event firing
      if (onSuccess) onSuccess(res);
    } catch (err) {
      //onError event firing
      console.log("Error => ", err);
      if (onError) onError(err);
      else handleErrors(err);
    } finally {
      if (onEnd) onEnd();
      dispatch(loadingStats(false));
    }
  };
};

export const getStat = ({ id = "", onSuccess, onError, onEnd } = {}) => {
  return async (dispatch, getState) => {
    dispatch(loadingStats(true));
    try {
      //showing loader on ui
      if (!id) throw new Error("Id is required");
      const res = await http.get({ url: path + `/${id}` });

      //onSuccess event firing
      if (onSuccess) onSuccess(res);
    } catch (err) {
      //onError event firing
      console.log("Error => ", err);
      if (onError) onError(err);
      else handleErrors(err);
    } finally {
      if (onEnd) onEnd();
      dispatch(loadingStats(false));
    }
  };
};

export const createStat = ({ body = {}, onSuccess, onError, onEnd } = {}) => {
  return async (dispatch, getState) => {
    const storeState = getState();
    const { token } = storeState.auth;
    try {
      //showing loader on ui
      const res = await http.post({
        url: path,
        body,
        headers: {
          "x-auth-token": token,
        },
      });

      const { data } = res.data;
      console.log("NAVBAR", data);
      //onSuccess event firing
      if (onSuccess) onSuccess(res);
    } catch (err) {
      //onError event firing
      console.log("Error => ", err);
      if (onError) onError(err);
      else handleErrors(err);
    } finally {
      if (onEnd) onEnd();
    }
  };
};


export const removeStats = ({ id = "", onSuccess, onError, onEnd } = {}) => {
  return async (dispatch, getState) => {
    dispatch(loadingStats(true));
    const storeState = getState();
    const { token } = storeState.auth;
    try {
      //showing loader on ui
      if (!id) throw new Error("Id is required");
      const res = await http.delete({
        url: path + `/${id}`,
        headers: {
          "x-auth-token": token,
        },
      });
      dispatch(deleteStats(id));
      //onSuccess event firing
      if (onSuccess) onSuccess(res);
    } catch (err) {
      //onError event firing
      console.log("Error => ", err);
      if (onError) onError(err);
      else handleErrors(err);
    } finally {
      if (onEnd) onEnd();
      dispatch(loadingStats(false));
    }
  };
};
