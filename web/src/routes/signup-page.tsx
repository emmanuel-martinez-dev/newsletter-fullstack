import { ChangeEventHandler, useState } from "react";
import { API_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

interface SignupSuccessPayload {
  message: string;
}
export const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const onEmailChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setEmail(target.value);
  };

  const onSignupClick = async () => {
    if (!email) return;
    console.log("Signup Clicked!");
    const body = JSON.stringify({
      email,
    });

    try {
      const response = await fetch(`${API_URL}/newsletter/signup`, {
        method: "POST",
        body,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const payload = (await response.json()) as SignupSuccessPayload;

      const isOkRequest = response.status === 200 || response.status === 201;
      if (!isOkRequest) {
        if (typeof payload === "string") {
          return setErrorMessage(payload);
        }
        return setErrorMessage("Invalid email, please try again");
      }
    } catch (error) {
      console.error(error);
      setEmail("");
    }
  };
  return (
    <div>
      <div className="m-4 mb-10 text-center text-3xl font-bold">
        <h1>
          Welcome to the {""}
          <span className="text-orange-600">Signup Page</span>
        </h1>
        <h2>Please signup below to be the first to get notified!</h2>
      </div>

      <div className="flex flex-col text-center justify-center">
        <div className="flex mt-1 justify-center items-end">
          <div className="flex flex-col">
            <span className="text-gray-500 text-sm text-start mb-1 text-opacity-70">
              Signup with your email address
            </span>
            <span className="text-red-700 text-sm text-start mb-1 text-opacity-70">
              {errorMessage}
            </span>
            <input
              value={email}
              placeholder="someuser@email.com..."
              onChange={onEmailChange}
              className="border p-2 rounded mr-4"
            />
          </div>
          <button
            onClick={onSignupClick}
            className="border rounded p-2 flex justify-center items-center"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};
