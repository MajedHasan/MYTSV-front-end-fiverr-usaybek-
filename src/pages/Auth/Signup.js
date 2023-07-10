import { BsArrowLeft, BsGoogle, BsTwitter } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="min-h-screen h-full w-full bg-[#E3EAFF]">
        <div className="container mx-auto px-2 md:px-0 py-5 flex flex-col min-h-screen gap-5">
          <div className="flex justify-between items-center gap-5">
            <BsArrowLeft
              className="text-5xl text-[#C60C0D] cursor-pointer"
              onClick={() => navigate(-1)}
            />
            <Link to="/">
              <img src={require("../../assets/img/logo.png")} alt="" />
            </Link>
            <span></span>
          </div>
          <div className="flex-1 bg-white md:rounded-3xl rounded-xl flex">
            <div className="flex-1 flex items-center justify-center md:py-5 py-1 md:px-7 px-2">
              <div className="flex flex-col gap-3">
                <h2 className="text-center md:text-4xl text-2xl font-bold text-[#C60C0D]">
                  Create a account
                </h2>
                <div className="flex gap-3 justify-center">
                  <button className="border-[1px] border-[#0A2A8D] rounded-full md:w-10 w-7 md:h-10 h-7 flex items-center justify-center">
                    <BsGoogle className="text-[#C60C0D] md:text-2xl text-md" />
                  </button>
                  <button className="border-[1px] border-[#0A2A8D] rounded-full md:w-10 w-7 md:h-10 h-7 flex items-center justify-center">
                    <FaFacebookF className="text-[#C60C0D] md:text-2xl text-md" />
                  </button>
                  <button className="border-[1px] border-[#0A2A8D] rounded-full md:w-10 w-7 md:h-10 h-7 flex items-center justify-center">
                    <BsTwitter className="text-[#C60C0D] md:text-2xl text-md" />
                  </button>
                  <button className="border-[1px] border-[#0A2A8D] rounded-full md:w-10 w-7 md:h-10 h-7 flex items-center justify-center">
                    <AiFillInstagram className="text-[#C60C0D] md:text-2xl text-md" />
                  </button>
                </div>
                <p className="text-center md:text-md text-xs">
                  or use your email for registration:
                </p>
                <div className="flex flex-col gap-3 md:w-[400px] w-full">
                  <input
                    type="text"
                    className="rounded-full border-[1px] border-[#0A2A8D52] bg-[#E3EAFF52] outline-none py-2 md:px-4 px-2 md:text-md text-xs w-full"
                    placeholder="Channel Name"
                  />
                  <input
                    type="text"
                    className="rounded-full border-[1px] border-[#0A2A8D52] bg-[#E3EAFF52] outline-none py-2 md:px-4 px-2 md:text-md text-xs w-full"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    className="rounded-full border-[1px] border-[#0A2A8D52] bg-[#E3EAFF52] outline-none py-2 md:px-4 px-2 md:text-md text-xs w-full"
                    placeholder="Email"
                  />
                  <div className="flex gap-3 md:flex-row flex-col">
                    <input
                      type="password"
                      className="rounded-full border-[1px] border-[#0A2A8D52] bg-[#E3EAFF52] outline-none py-2 md:px-4 px-2 md:text-md text-xs w-full"
                      placeholder="Password"
                    />
                    <input
                      type="number"
                      className="rounded-full border-[1px] border-[#0A2A8D52] bg-[#E3EAFF52] outline-none py-2 md:px-4 px-2 md:text-md text-xs w-full"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="flex gap-1">
                    <input type="checkbox" name="" id="checkbox" />
                    <label htmlFor="checkbox" className="md:text-md text-xs">
                      I agree to Terms and{" "}
                      <span className="text-[#C60C0D]">Privacy.</span>
                    </label>
                  </div>
                  <button className="w-full md:py-3 py-2 md:px-4 px-2 md:text-md text-sm rounded-full bg-[#C60C0D] text-white font-semibold">
                    Sign Up
                  </button>
                  <span className="md:text-md text-xs">
                    Already have an account?{" "}
                    <Link to="/signin" className="text-[#C60C0D] font-semibold">
                      Login here.
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-5/12 w-3/12">
              <img
                src={require("../../assets/img/SignupBg.png")}
                alt=""
                className="w-full h-full max-h-[665px] max-w-full object-cover md:rounded-r-3xl rounded-r-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
