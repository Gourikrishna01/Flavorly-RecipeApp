import { Link } from "react-router-dom";

const Registeration = () => {
  return (
    <div className="min-h-screen bg-black grid grid-cols-1 md:grid-cols-2">
      
      {/* Left Section */}
      <div className="flex flex-col justify-center px-6 md:px-20 py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-red-500 uppercase mb-6 text-center md:text-left">
          Flavorly
        </h1>

        <h2 className="text-2xl md:text-3xl text-white font-semibold mb-4 text-center md:text-left">
          Discover, Cook, Share.
        </h2>

        <p className="text-gray-400 mb-8 text-center md:text-left">
          Where Recipes Come to Life.
        </p>

        <ul className="space-y-4 text-gray-300 max-w-md mx-auto md:mx-0">
          <li>🍲 Share your favorite recipes with the community.</li>
          <li>👨‍🍳 Discover new dishes from food lovers worldwide.</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center px-6 py-10">
        <div className="bg-zinc-900 p-6 md:p-8 rounded-xl w-full max-w-md shadow-lg">
          
          <h2 className="text-2xl text-white font-bold mb-6 text-center">
            Create Account
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 rounded-lg bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-red-500"
            />

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 transition py-3 rounded-lg text-white font-semibold"
            >
              Register
            </button>

            <p className="text-white text-center">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-red-500 hover:underline"
              >
                Sign In
              </Link>
            </p>
          </form>

        </div>
      </div>

    </div>
  );
};

export default Registeration;