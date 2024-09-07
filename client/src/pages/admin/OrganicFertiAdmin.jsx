import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminMenu from "../../components/AdminMenu";
import { MdOutlineDelete } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function OrganicFertiAdmin() {
  const [fertilizers, setFertilizers] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  //   get all fertilizer step
  const getAllOrganicFerti = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/organicFerti/get-organicFerti"
      );
      if (data.success) {
        setFertilizers(data.ferti);
        toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while fetching organic fertilizers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllOrganicFerti();
  }, []);

  //   create
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var { data } = await axios.post(
        "http://localhost:8080/api/v1/organicFerti/create-organicFerti",
        { name, description }
      );
      if (data.success) {
        toast.success(data.message);
        getAllOrganicFerti();
        setName("");
        setDescription("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(`something went wrong ${data.message}`);
    }
  };

  //   delete
  const handleDelete = async (fid) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8080/api/v1/organicFerti/delete-organicFerti/${fid}`
      );
      if (data.success) {
        toast.success(`organic ferti is deleted`);
        getAllOrganicFerti(); // Refresh the list after deletion
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while deleting category");
    }
  };

  return (
    <>
      <div className="w-[100%] flex flex-col gap-6 lg:flex-row p-5 lg:px-10 h-screen">
        <div className="lg:w-1/6 w-full">
          <AdminMenu />
        </div>
        <div className="w-full flex flex-col h-full overflow-auto lg:w-5/6">
          <div className="flex gap-3 items-center">
            <Link to="/dashboard/admin">
              <IoMdArrowRoundBack size={22} />
            </Link>
            <h2 className="text-xl text-emerald-500 font-bold border-b-4 w-fit">
            जैविक खाद बनाने का चरण
            </h2>
          </div>
          {/* form */}
          <div className="flex flex-col space-y-2">
            <form className="mt-4 flex flex-col gap-4">
              <input
                type="text"
                className="block w-full rounded-md border py-3 px-2 text-[14px] text-gray-900 shadow-sm placeholder:text-gray-400 "
                placeholder="चरण दर्ज करें"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <textarea
                name=""
                id=""
                rows="6"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="विवरण"
                className="block w-full rounded-md border py-3 px-2 text-[14px] text-gray-900 shadow-sm placeholder:text-gray-400 resize-none"
              ></textarea>

              <button
                className="flex w-fit justify-center rounded-md bg-emerald-500 py-3 lg:py-2 px-2  font-semibold leading-6 text-white shadow-sm hover:bg-emerald-400 "
                onClick={handleSubmit}
              >
                जोड़ें
              </button>
            </form>
          </div>

          {/* show steps */}
          <div className="overflow-x-auto mt-5  rounded-md border">
            <table className="min-w-full divide-y">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium">
                    Steps
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y ">
                {fertilizers.map((f) => (
                  <tr key={f._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium">{f.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium">{f.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => {
                            if (window.confirm("Are you sure to delete?")) {
                              handleDelete(f._id);
                            }
                          }}
                        >
                          <MdOutlineDelete
                            size={20}
                            className="text-red-500 cursor-pointer"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
