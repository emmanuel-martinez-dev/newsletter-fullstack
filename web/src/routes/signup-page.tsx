import { ChangeEventHandler, useState } from "react";

export const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const onEmailChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setEmail(target.value);
  };

  const onSignupClick = () => {
    if (!email) return;
    console.log("Signup Clicked!");
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
