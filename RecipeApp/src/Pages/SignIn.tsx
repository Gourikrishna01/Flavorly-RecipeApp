import { Link } from "react-router-dom";


const SignIn = () => {
  return (
    <div className="min-h-screen bg-black grid grid-cols-1 md:grid-cols-2">
      
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center md:items-start px-6 md:px-16 py-10">
        <img
          src="/flavorly.png"
          alt="Flavorly Icon"
          className="w-40 md:w-64 mb-6"
        />

        <h1 className="text-4xl md:text-5xl font-bold text-red-500 uppercase mb-4 text-center md:text-left">
          Flavorly
        </h1>

        <h2 className="text-2xl md:text-3xl text-white font-semibold mb-3 text-center md:text-left">
          Discover, Cook, Share.
        </h2>

        <p className="text-gray-400 text-center md:text-left max-w-md">
          Where Recipes Come to Life.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center px-6 py-10">
        <div className="bg-zinc-900 p-6 md:p-8 rounded-xl w-full max-w-md shadow-lg">
          
          <h2 className="text-2xl text-white font-bold mb-6 text-center">
            Sign In
          </h2>

          <form className="space-y-4">
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

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 transition py-3 rounded-lg text-white font-semibold"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-gray-400 mt-4">
            Don't have an account?{" "}
            <Link to="/">
            <span className="text-red-500 cursor-pointer hover:underline">
              Register
            </span>
            </Link>
          </p>
        </div>
      </div>

    </div>
  );
};




export default SignIn