import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-2xl">
        <h2 className="mb-6 text-2xl font-semibold text-center text-blueBrand">Login to Click Talent</h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blueBrand"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blueBrand"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white transition rounded-lg bg-blueBrand hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="font-medium text-blueBrand hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
