import React from "react";
import { signIn } from "next-auth/client";

function LoginForm() {
  return (
    <div className="flex justify-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none border-2 w-full focus:shadow-outline inline-flex"
            type="button"
            onClick={() =>
              signIn("google", { callbackUrl: process.env.NEXT_PUBLIC_URL })
            }
          >
            <svg
              style={{ width: "24px", height: "24px", marginRight: "10px" }}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"
              />
            </svg>
            Sign In with Google
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
