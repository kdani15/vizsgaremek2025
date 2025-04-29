import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import ButtonLoadingSpinner from "../components/ButtonLoadingSpinner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regUsername, setRegUsername] = useState("");
  const [regFirstname, setRegFirstname] = useState("");
  const [regLastname, setRegLastname] = useState("");
  const [password, setPassword] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [error, setError] = useState("");
  const [regError, setRegError] = useState("");
  const navigate = useNavigate();
  const [isLoginLoading, setIsLoginLoading] = useState<boolean>(false);
  const [isRegLoading, setIsRegLoading] = useState<boolean>(false);

  const handleLogin = async (
    e?: any,
    regEmail?: string,
    regPassword?: string
  ) => {
    clearLocalstorage();
    setIsLoginLoading(true);
    e && e.preventDefault();
    const loginEmail = regEmail ? regEmail : email;
    const loginPassword = regPassword ? regPassword : password;
    try {
      const res = await api.post("/login", {
        email: loginEmail,
        password: loginPassword,
      });
      localStorage.setItem("jwt", res.data.access_token);
      localStorage.setItem("refresh_jwt", res.data.refreshToken);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/movies");
    } catch (err) {
      setError("Invalid login");
    } finally {
      setIsLoginLoading(false);
    }
  };

  const clearLocalstorage = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("refresh_jwt");
    localStorage.removeItem("user");
  };

  const checkPasswordMatch = (confirmationPassword: string) => {
    if (confirmationPassword !== regPassword) {
      setRegError("The passwords are not matching.");
    } else {
      setRegError("");
    }
  };

  const handleSignup = async (e: any) => {
    setIsRegLoading(true);
    e.preventDefault();
    try {
      await api.post("/users", {
        username: regUsername,
        email: regEmail,
        password: regPassword,
        firstName: regFirstname,
        lastName: regLastname,
      });

      handleLogin(null, regEmail, regPassword);
    } catch (err) {
      setError("Invalid login");
    } finally {
      setIsRegLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-5 max-w-[1440px]">
      <img
        alt="Your Company"
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
        className="mx-auto h-10 w-auto"
      />
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full max-w-md">
            <h2 className="mt-10 text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full max-w-md">
            <form onSubmit={handleLogin} className="flex flex-col gap-2">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-3">
                <button
                  type="submit"
                  disabled={isLoginLoading}
                  className="flex w-full justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:disabled:bg-gray-300"
                >
                  {isLoginLoading && <ButtonLoadingSpinner />}
                  Sign in
                </button>
              </div>
            </form>

            {error && <p>{error}</p>}
          </div>
        </div>
        <div className="flex flex-col px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full max-w-md">
            <h2 className="mt-10 text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
              Not a member? Sign up here.
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full max-w-md">
            <form onSubmit={handleSignup} className="flex flex-col gap-2">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="reg_email"
                    name="reg_email"
                    type="email"
                    value={regEmail}
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    onChange={(e) => setRegEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="reg_username"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="reg_username"
                    name="reg_username"
                    type="text"
                    value={regUsername}
                    required
                    autoComplete="username"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    onChange={(e) => setRegUsername(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="reg_firstname"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      id="reg_firstname"
                      name="reg_firstname"
                      type="text"
                      value={regFirstname}
                      required
                      autoComplete="firstname"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      onChange={(e) => setRegFirstname(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="reg_lastname"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      id="reg_lastname"
                      name="reg_lastname"
                      type="text"
                      value={regLastname}
                      required
                      autoComplete="firstname"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      onChange={(e) => setRegLastname(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="reg_password"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2 mb-2">
                  <input
                    id="reg_password"
                    name="reg_password"
                    type="password"
                    value={regPassword}
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    onChange={(e) => setRegPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="reg_password"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    onChange={(e) => checkPasswordMatch(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-3">
                <button
                  type="submit"
                  disabled={!!regError || isRegLoading}
                  className="flex w-full justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:disabled:bg-gray-300"
                >
                  {isRegLoading && <ButtonLoadingSpinner />}
                  Sign up
                </button>
              </div>
            </form>

            {regError && <p className="text-red-400 mt-2">{regError}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
