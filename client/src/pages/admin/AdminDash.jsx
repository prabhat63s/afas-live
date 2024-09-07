import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";

export default function AdminDash() {
  const [auth, setAuth] = useAuth();
  // console.log(auth?.user?.role === 1);
  // console.log(auth?.user?.name);
  //handle logout
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout successfully");
    window.location = "/";
  };

  return (
    <>
      <div className="w-[100%] flex flex-col p-5 lg:px-10 h-screen mx-auto md:justify-between">
        <div className="flex flex-col ">
          <div className="flex justify-between">
            <h1 className="text-xl text-emerald-500 font-bold mb-4 border-b-4 w-fit">
              ऐडमिनि डैशबोर्ड
            </h1>
            <div className="flex gap-4">
              <NavLink
                to="/"
                className="text-xl text-emerald-500 font-bold mb-4 border-b-4 w-fit"
              >
                होम
              </NavLink>
              <button
                onClick={handleLogout}
                className="text-xl text-emerald-500 font-bold mb-4 border-b-4 w-fit"
              >
                लॉग आउट
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 mb-10 gap-6">
            <NavLink
              to={"/dashboard/admin/createCategory"}
              className="border h-32 flex items-center justify-center rounded-md bg-gray-50 hover:shadow-md hover:border-0"
            >
              विभिन्न ऋतुएँ
            </NavLink>
            <NavLink
              to={"/dashboard/admin/createCrop"}
              className="border h-32 flex items-center justify-center rounded-md bg-gray-50 hover:shadow-md hover:border-0"
            >
              {" "}
              फसल
            </NavLink>
            <NavLink
              to={"/dashboard/admin/crops"}
              className="border h-32 flex items-center justify-center rounded-md bg-gray-50 hover:shadow-md hover:border-0"
            >
              {" "}
              सभी फसलें
            </NavLink>
            <NavLink
              to={"/dashboard/admin/news"}
              className="border h-32 flex items-center justify-center rounded-md bg-gray-50 hover:shadow-md hover:border-0"
            >
              {" "}
              समाचार
            </NavLink>
            <NavLink
              to={"/dashboard/admin/organicFerti"}
              className="border h-32 flex items-center justify-center rounded-md bg-gray-50 hover:shadow-md hover:border-0"
            >
              {" "}
              जैविक खाद
            </NavLink>
            <NavLink
              to={"/dashboard/admin/greenhouse"}
              className="border h-32 flex items-center justify-center rounded-md bg-gray-50 hover:shadow-md hover:border-0"
            >
              {" "}
              ग्रीन हाउस
            </NavLink>
            <NavLink
              to={"/dashboard/admin/stubble"}
              className="border h-32 flex items-center justify-center rounded-md bg-gray-50 hover:shadow-md hover:border-0"
            >
              {" "}
              पराली
            </NavLink>
            <NavLink
              to={"/dashboard/admin/seed-store"}
              className="border h-32 flex items-center justify-center rounded-md bg-gray-50 hover:shadow-md hover:border-0"
            >
              {" "}
              बीज भंडारित करें
            </NavLink>
            <NavLink
              to={"/dashboard/admin/soil-testing"}
              className="border h-32 flex items-center justify-center rounded-md bg-gray-50 hover:shadow-md hover:border-0"
            >
              {" "}
              मिट्टी परीक्षण
            </NavLink>
            <NavLink
              to={"/dashboard/admin/advance-eqp"}
              className="border h-32 flex items-center justify-center rounded-md bg-gray-50 hover:shadow-md hover:border-0"
            >
              {" "}
              उन्नत उपकरण
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
