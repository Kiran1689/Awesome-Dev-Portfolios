import { UserAuthLoginForm } from "./user-auth-form-login";

function Login() {
  return (
    <div className="container relative grid flex-col items-center justify-center min-h-screen lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative flex-col h-full p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          A W E S O M E
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Welcome back! Please log in to access your account and continue your journey with us.&rdquo;
            </p>
            <footer className="text-sm">Admin</footer>
          </blockquote>
        </div>
      </div>
      <div className="relative flex-col h-full p-3 bg-white dark:border-r lg:flex">
        <div className="lg:p-3">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Login to Your Account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your credentials to access the platform
              </p>
            </div>
            <UserAuthLoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;