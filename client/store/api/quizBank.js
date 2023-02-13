import http from "../../services/http";
import { handleErrors } from "../../helpers/error";

const path = "/cms/quiz_bank";
const path2 ="/cms/quiz_bank/full_quizbank_detail/";
const path3 ="/cms/quiz_bank_qa/full_qa_detail/";
const path4 ="/cms/quiz_bank_record";

export const postRecord = ({ body = {}, onSuccess, onError, onEnd }) => {
  return async (dispatch, getState) => {
    try {
      const res = await http.post({
        url: path4,
        body,
      });
      if (onSuccess) onSuccess(res);
    } catch (err) {
      //onError event firing
      if (onError) onError(err);
      else handleErrors(err);
    } finally {
      if (onEnd) onEnd();
    }
  };
};

export const loadQuizBank = ({
  body = {},
  onSuccess,
  onError,
  onEnd,
} = {}) => {
  return async (dispatch, getState) => {
    try {
        const store = getState();
        const { entities, auth } = store;
      //showing loader on ui
      const res = await http.get({ url: path ,

     headers: {
          "x-auth-token": auth.token,
        },
    });

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
export const loadQA = ({
  body = {},
  id = "",
  onSuccess,
  onError,
  onEnd,
} = {}) => {
  return async (dispatch, getState) => {
    try {
        const store = getState();
        const { entities, auth } = store;
      //showing loader on ui
      const res = await http.get({ url: path2 + id,

     headers: {
          "x-auth-token": auth.token,
        },
    });

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
export const loadQAMcqs = ({
  body = {},
  id = "",
  onSuccess,
  onError,
  onEnd,
} = {}) => {
  return async (dispatch, getState) => {
    try {
        const store = getState();
        const { entities, auth } = store;
      //showing loader on ui
      const res = await http.get({ url: path3 + id,

     headers: {
          "x-auth-token": auth.token,
        },
    });

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