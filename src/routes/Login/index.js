import { useState } from "react";
import Login from "../../components/Login";
import AuthService from "../../services/AuthService";
import AuthStore from "../../store/AuthStore";
import { apiStatus } from "../../constants/ApiStatusConstants";
import { setUserId } from "../../utils/StorageUtils";
import { showBottomCenterToast } from "../../utils/ToastUtils";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const authService = new AuthService();
  const authStore = new AuthStore();

  const [loginApiStatus, setLoginApiStatus] = useState(apiStatus.API_INITIAL);

  const [loginApiError, setLoginApiError] = useState(apiStatus.API_INITIAL);

  const [registerApiStatus, setRegisterApiStatus] = useState(
    apiStatus.API_INITIAL
  );

  const [registerApiError, setRegisterApiError] = useState(
    apiStatus.API_INITIAL
  );

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };


  const setApiResponse = (response) => {
    setUserId(response.userid);
    authStore.setUserId(response.userid);
    goToHomePage();
  };

  const loginApi = (requestObject) => {
    setLoginApiStatus(apiStatus.API_FETCHING);
    authService.login(
      requestObject,
      (response) => {
        setApiResponse(response);
        setLoginApiStatus(apiStatus.API_SUCCESS);
      },
      (error) => {
        setLoginApiError(error);
        showBottomCenterToast(error);
        setLoginApiStatus(apiStatus.API_FAILURE);
      }
    );
  };

  const registerApi = (requestObject) => {
    setRegisterApiStatus(apiStatus.API_FETCHING);
    authService.register(
      requestObject,
      (response) => {
        setApiResponse(response);
        setRegisterApiStatus(apiStatus.API_SUCCESS);
      },
      (error) => {
        setRegisterApiError(error);
        showBottomCenterToast(error);
        setRegisterApiStatus(apiStatus.API_FAILURE);
      }
    );
  };

  const onClickLogin = (requestObject) => {
    loginApi(requestObject);
  };

  const onClickRegister = (requestObject) => {
    registerApi(requestObject);
  };

  return (
    <Login
      onClickRegister={onClickRegister}
      onClickLogin={onClickLogin}
      loginApiStatus={loginApiStatus}
      registerApiStatus={registerApiStatus}
      loginApiError={loginApiError}
      registerApiError={registerApiError}
    />
  );
};

export default LoginPage;
