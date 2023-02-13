import http from "../../services/http";
import { handleErrors } from "../../helpers/error";
import { setStats, loadingStats, deleteStats } from "../../store/cms/studyMaterial";

const path = "/cms/quiz_bank_qa";
const path2="/cms/quiz_bank"
const path3="/cms/quiz_bank_qa/primary"
const path4 = "/cms/quiz_bank_qa/all";
const path5="/cms/quiz_bank_qa/csv";
const path6 ="/cms/quiz_bank_qa/mcqs";


export const getonemcq = ({ id = "", mcq="", onSuccess, onError, onEnd } = {}) => {
  return async (dispatch, getState) => {
    const storeState = getState();
    const { token } = storeState.auth;
    dispatch(loadingStats(true));
   
    try {
      //showing loader on ui
      const res = await http.get({ url: path6 + `?mcq=${mcq}&id=${id}` ,

      headers: {
        "x-auth-token": token,
      },});
      const { data } = res.data;


      dispatch(setStats(data));

      //onSuccess event firing
      if (onSuccess) onSuccess(res);
      console.log("quiz ali=====-=-=-=->>",res)
 

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



export const editMCQS = ({
  id = "",
  body = {},
  onSuccess,
  onError,
  onEnd,
} = {}) => {
  return async (dispatch, getState) => {
    dispatch(loadingStats(true));
    try {
      //showing loader on ui
      if (!id) throw new Error("Id is required");
      const storeState = getState();
      const { token } = storeState.auth;
      const res = await http.put({
        url: path + `/${id}`,
        body,
        headers: {
          "x-auth-token": token,
        },
      });

      //onSuccess event firing
      if (onSuccess) onSuccess(res);
      console.log("sdasdsad==",res)
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
export const createMCQs = ({ id = "", body = {}, onSuccess, onError, onEnd } = {}) => {
  return async (dispatch, getState) => {
    const storeState = getState();
    const { token } = storeState.auth;
    try {
      //showing loader on ui
      const res = await http.post({
        url: path6 + `/${id}`,
        body,
        headers: {
          "x-auth-token": token,
        },
      });

      const { data } = res.data;
      console.log("card", data);
      //onSuccess event firing
      if (onSuccess) onSuccess(res);
      console.log("card", res)
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
export const loadMcqs = ({ id = "", body = {}, onSuccess, onError, onEnd } = {}) => {
  return async (dispatch, getState) => {
    const storeState = getState();
    const { token } = storeState.auth;
    dispatch(loadingStats(true));
    try {
      //showing loader on ui
      const res = await http.get({ url: path + `/${id}` , headers: {
        "x-auth-token": token,
      },});
      const { data } = res.data;


      dispatch(setStats(data));

      //onSuccess event firing
      if (onSuccess) onSuccess(res);
      console.log("quiz ali=====-=-=-=->>",res)
 

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

export const createCsv = ({ id = "", body = {}, onSuccess, onError, onEnd } = {}) => {
  return async (dispatch, getState) => {
    const storeState = getState();
    const { token } = storeState.auth;
    try {
      //showing loader on ui
      const res = await http.post({
        url: path5 + `/${id}`,
        body,
        headers: {
          "x-auth-token": token,
        },
      });

      const { data } = res.data;
      console.log("card", data);
      //onSuccess event firing
      if (onSuccess) onSuccess(res);
      console.log("card", res)
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
export const loadStats = ({ id = "", body = {}, onSuccess, onError, onEnd } = {}) => {
  return async (dispatch, getState) => {
    const storeState = getState();
    const { token } = storeState.auth;
    dispatch(loadingStats(true));
    try {
      //showing loader on ui
      const res = await http.get({ url: path4 + `/${id}` , headers: {
        "x-auth-token": token,
      },});
      const { data } = res.data;


      dispatch(setStats(data));

      //onSuccess event firing
      if (onSuccess) onSuccess(res);
// window.location.reload();

      console.log("quiz ali=====-=-=-=->>",res)
 

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

export const createStat = ({ id = "", body = {}, onSuccess, onError, onEnd } = {}) => {
  return async (dispatch, getState) => {
    const storeState = getState();
    const { token } = storeState.auth;
    try {
      //showing loader on ui
      const res = await http.post({
        url: path + `/${id}`,
        body,
        headers: {
          "x-auth-token": token,
        },
      });

      const { data } = res.data;
      console.log("card", data);
      //onSuccess event firing
      if (onSuccess) onSuccess(res);
      console.log("card", res)
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
export const editSliderImage = ({
  id = "",
  key = "",
  body = {},
  onSuccess,
  onError,
  onEnd,
} = {}) => {
  return async (dispatch, getState) => {
    try {
      const storeState = getState();
      const { token } = storeState.auth;

      const formData = new FormData();
      for (let objectItem in body)
        formData.append(objectItem, body[objectItem]);

      const res = await http.put({
        url: `${path}/${id}/`,
        body: formData,
        headers: {
          "x-auth-token": token,
        },
      });

      if (onSuccess) onSuccess(res);
    } catch (err) {
      console.log("Error => ", err);
      if (onError) onError(err);
      else handleErrors(err);
    } finally {
      if (onEnd) onEnd();
    }
  };
};
export const editStat = ({
  id = "",
  body = {},
  onSuccess,
  onError,
  onEnd,
} = {}) => {
  return async (dispatch, getState) => {
    dispatch(loadingStats(true));
    try {
      //showing loader on ui
      if (!id) throw new Error("Id is required");
      const storeState = getState();
      const { token } = storeState.auth;
      const res = await http.put({
        url: path3 + `/${id}`,
        body,
        headers: {
          "x-auth-token": token,
        },
      });

      //onSuccess event firing
      if (onSuccess) onSuccess(res);
      console.log("sdasdsad==",res)
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

export const rearrangeStats = ({
  body = {},
  onSuccess,
  onError,
  onEnd,
} = {}) => {
  return async (dispatch, getState) => {
    const storeState = getState();
    const { token } = storeState.auth;
    try {
      //showing loader on ui
      dispatch(loadingStats(true));
      const res = await http.put({
        url: path + "/rearrange",
        body,
        headers: {
          "x-auth-token": token,
        },
      });

      //onSuccess event firing
      if (onSuccess) onSuccess(res);
    } catch (err) {
      //onError event firing
      if (onError) onError(err);
      else handleErrors(err);
    } finally {
      if (onEnd) onEnd();
      dispatch(loadingStats(false));
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
