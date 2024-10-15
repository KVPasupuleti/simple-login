import { apiResponseConstants } from "../../constants/BackendConstants";
import Config from "../../constants/EnvironmentConstants";

const backendBaseUrl = Config.BACKEND_BASE_URL;

class AuthService {
  login = async (requestObject, onSuccess, onFailure) => {
    try {
      const response = await fetch(`${backendBaseUrl}login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestObject)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.userid) {
        onSuccess(result);
      } else onFailure(result.respMessage);
    } catch (error) {
      onFailure(error.message);
    }
  };

  register = async (requestObject, onSuccess, onFailure) => {
    try {
      const response = await fetch(`${backendBaseUrl}signup`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestObject)
      });

      

      const result = await response.json();

      if (result.userid) {
        onSuccess(result);
      } else onFailure(result.respMessage);
    } catch (error) {
      onFailure(error.message);
    }
  };
}

export default AuthService;
