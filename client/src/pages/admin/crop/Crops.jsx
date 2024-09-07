import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import AdminMenu from "../../../components/AdminMenu";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BsPencil } from "react-icons/bs";

const Crops = () => {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    getAllCrops();
  }, []);

  const getAllCrops = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/crops/get-crop"
      );
      setCrops(data.getCrops);
    } catch (error) {
      console.error("Error fetching crops:", error);
      toast.error("Something went wrong while fetching crops");
    }
  };

  return (
    <div className="flex flex-col gap-6 lg:flex-row p-5 lg:px-10 h-screen">
      <div className="lg:w-1/6 w-full">
        <AdminMenu />
      </div>
      <div className="w-full lg:h-full overflow-auto lg:w-5/6">
        <div className="flex items-center gap-3">
          <Link to="/dashboard/admin">
            <IoMdArrowRoundBack size={22} />
          </Link>
          <h2 className="text-xl text-emerald-500 font-bold border-b-4">
            सभी फसलें
          </h2>
        </div>

        <div className="overflow-x-auto mt-5  rounded-md border">
          <table className="min-w-full divide-y">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium">फसल</th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  शीर्षक
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  विवरण
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium">
                  कार्रवाई
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {crops.map((c) => (
                <tr key={c._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">{c.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {c.description.map((desc, index) => (
                      <div
                        key={index}
                        className="leading-7 text-sm font-medium"
                      >
                        {desc.title}
                      </div>
                    ))}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {c.description.map((desc, index) => (
                      <div
                        key={index}
                        className=" leading-7 text-sm font-medium"
                      >
                        {desc.content}
                      </div>
                    ))}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center gap-4">
                      <Link
                        to={`/dashboard/admin/crops/updateCrop/${c.slug}`}
                        className="text-emerald-600 hover:text-emerald-900"
                      >
                        <BsPencil />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Crops;
