import { toast } from "react-toastify";

 function successToast(message = "Successfull!")  {
  dismissToast();

  return toast.success(message);
};

 function warnToast(message = "Successfull!")  {
  dismissToast();

  return toast.warn(message);
};

 function errorToast(message = "Error!", data = {}) {
  dismissToast();
  return toast.error(message, data);
};
 function dismissToast() {
  return toast.dismiss();
};

export default {successToast, warnToast, errorToast, dismissToast};
