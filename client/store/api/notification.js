import http from "../../services/http";
import { handleErrors } from "../../helpers/error";
// const authToken = useSelector((state) => state.auth.token);
const path = "/cms/notification";

export const loadNotification = ({
  body = {},
  onSuccess,
  onError,
  onEnd,
} = {}) => {
  return async (dispatch, getState) => {
    try {
        const store = getState();
      const { auth } = store;
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
