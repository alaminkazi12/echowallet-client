import { Link } from "react-router-dom";

const Signup = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const pin = e.target.pin.value;

    const userInfo = {
      name: name,
      phone: phone,
      email: email,
      pin: pin,
    };

    console.log(userInfo);
  };

  return (
    <div className="border-2 rounded-xl p-4  md:p-12 flex flex-col items-center justify-center">
      <h1 className=" text-xl md:text-4xl  font-bold uppercase text-center">
        New to <span className="text-green-600">echowallet</span> Please create
        an account
      </h1>
      <form
        onSubmit={handleSignUp}
        className="flex flex-col items-center justify-center mt-10 border-2 p-12 md:w-1/2 rounded-xl gap-6"
      >
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text-alt text-lg">Enter Your Full Name</span>
          </div>
          <input
            name="name"
            type="text"
            required
            placeholder="Enter Your Full Name"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text-alt text-lg">
              Enter Your Email Name
            </span>
          </div>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter Your Email Name"
            className="input input-bordered w-full"
          />
        </label>
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
            SignUP
          </button>
        </div>
        <p className=" md:text-xl">
          Already have an account?
          <Link className="text-green-700 font-bold" to="/auth">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
