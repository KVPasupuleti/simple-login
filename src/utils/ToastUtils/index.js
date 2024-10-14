import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showBottomCenterToast = (message) => {
  console.log("HJell", message);
  toast.error(message, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce
  });
};
