import { Link } from "react-router-dom";

const Auth = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const pin = e.target.pin.value;
  };

  return (
    <div className="border-2 rounded-xl p-4  md:p-12 flex flex-col items-center justify-center">
      <h1 className=" text-xl md:text-4xl  font-bold uppercase text-center">
        Please Login your <span className="text-green-600">echowallet</span>{" "}
        Account
      </h1>
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center justify-center mt-10 border-2 p-12 md:w-1/2 rounded-xl gap-6"
      >
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text-alt text-lg">
              Enter Your Phone Number
            </span>
          </div>
          <input
            name="phone"
            type="number"
            required
            placeholder="Enter Your Phone Number"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text-alt text-lg">
              Enter Your 5 Digit Pin
            </span>
          </div>
          <input
            type="number"
            name="pin"
            required
            placeholder="Enter Your 5 Digit Pin"
            className="input input-bordered w-full"
          />
        </label>
        <div className="flex w-full">
          <button className="btn btn-outline flex w-full text-xl uppercase border-green-700 text-green-700 hover:bg-green-700 hover:text-white">
            {" "}
            Login
          </button>
        </div>
        <p>
          New here? Please{" "}
          <Link className="text-green-700 font-bold" to="/signup">
            create an account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Auth;
