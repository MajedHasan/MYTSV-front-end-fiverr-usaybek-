import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(null);
  }, []);

  return (
    <>
      <section className="border-b-[1px] border-gray-600 py-2">
        <header className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <img
              src={require("../../assets/img/logo.png")}
              alt="Logo"
              className="w-[150px]"
            />
          </Link>

          <div>
            <div className="w-[400px] rounded-full border-[1px] border-slate-500 py-1 px-1">
              <input
                type="text"
                className="w-full outline-none border-none text-sm pl-2"
                placeholder="Search..."
              />
            </div>
          </div>

          {user ? (
            <>
              <div className="flex gap-4 items-center relative">
                <span>Icon</span>
                <span>Icon</span>

                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <div className="rounded-full w-8 h-8 flex items-center justify-center bg-blue-900">
                    <span className="text-white">U</span>
                  </div>
                  <span>^</span>
                </div>

                {showDropdown && (
                  <>
                    <div className="shadow rounded-lg py-4 px-2 absolute right-0 top-10 w-40 z-20 bg-white">
                      <span className="font-medium text-red-600">
                        James John
                      </span>
                      <hr className="my-2" />

                      <Link
                        to="/user/profile"
                        className="flex items-center gap-4 text-blue-900 text-sm mb-1"
                      >
                        <span className="text-red-600">P</span>
                        Profile
                      </Link>
                      <Link
                        to="/user/profile"
                        className="flex items-center gap-4 text-blue-900 text-sm mb-1"
                      >
                        <span className="text-red-600">S</span>
                        Sign Out
                      </Link>

                      <hr className="my-2" />

                      <Link
                        to="/user/myvideos"
                        className="flex items-center gap-4 text-blue-900 text-sm mb-1"
                      >
                        <span className="text-red-600">V</span>
                        My Videos
                      </Link>
                      <Link
                        to="/user/myvideos"
                        className="flex items-center gap-4 text-blue-900 text-sm mb-1"
                      >
                        <span className="text-red-600">A</span>
                        Video Analytics
                      </Link>
                      <Link
                        to="/user/myvideos"
                        className="flex items-center gap-4 text-blue-900 text-sm mb-1"
                      >
                        <span className="text-red-600">P</span>
                        Video Promotion
                      </Link>
                      <Link
                        to="/user/myvideos"
                        className="flex items-center gap-4 text-blue-900 text-sm mb-1"
                      >
                        <span className="text-red-600">S</span>
                        Settings
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-4 items-center">
                <Link
                  to="/signup"
                  className="bg-[#C60C0D] text-white text-sm px-7 py-2 rounded-full"
                >
                  Sign Up
                </Link>
                <Link
                  to="/signup"
                  className="text-[#0A2A8D] text-sm px-7 py-2 rounded-full border-[1px] border-[#CACACA]"
                >
                  Sign In
                </Link>
              </div>
            </>
          )}
        </header>
      </section>
    </>
  );
};

export default Header;
