import { UserAuthSignUpForm } from "../components/signupCard";
import { UserAuthLoginForm } from "../components/loginCard";
import { useState } from "react";
function SignUp() {
  const [register, setRegister] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const method = searchParams.get("method")
  // console.log("method", method);
  // if (method) {
  //   setRegister(true);
  // } else {
  //   setRegister(false);
  // }
  return (
    <>
      <div className="container grid relative min-h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative  h-full flex-col  p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            A W E S O M E
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Hello there! Thanks for visiting this page. Please signup
                or login for adding your portfolio and for accessing beautiful
                features. Thanks&rdquo;
              </p>
              <footer className="text-sm">Kiran Naragund</footer>
            </blockquote>
          </div>
        </div>
        <div className="relative  h-[100vh] flex-col bg-white p-3 dark:border-r lg:flex">
          <div className="lg:p-3 flex h-full">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[500px]">
              <div className="flex flex-col space-y-2 ">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Create an account
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter your email below to create your account
                </p>
              </div>
              {register ? <UserAuthSignUpForm /> : <UserAuthLoginForm />}
              <div className="w-full flex justify-center">
                {register ? (
                  <div className="flex items-center gap-1 ">
                    <p className="text-sm text-muted-foreground">
                      Already have an account?
                    </p>
                    <button
                      className="text-sm font-medium text-blue-500 hover:underline"
                      onClick={() => setRegister(false)}
                    >
                      Login
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <p className="text-sm text-muted-foreground">
                      Don&apos;t have an account?
                    </p>
                    <button
                      className="text-sm font-medium text-blue-500 hover:underline"
                      onClick={() => setRegister(true)}
                    >
                      Sign Up
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
