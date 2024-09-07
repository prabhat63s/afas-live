import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminMenu from "../../components/AdminMenu";
import { MdOutlineDelete } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function NewsAdmin() {
  const [news, setNews] = useState([]);
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch all news articles
  const getAllNews = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/news/get-news"
      );
      if (data.success) {
        setNews(data.news);
        toast.success(data.message);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      toast.error("Something went wrong while fetching news");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/news/create-news",
        {
          name,
          pic,
          description,
        }
      );
      if (data.success) {
        toast.success(data.message);
        getAllNews(); // Refresh news list after creating
        setName("");
        setPic("");
        setDescription("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error creating news:", error);
      toast.error("Something went wrong while creating news");
    }
  };

  const handleDelete = async (nid) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8080/api/v1/news/delete-news/${nid}`
      );
      if (data.success) {
        toast.success(data.message);
        getAllNews(); // Refresh news list after deletion
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error deleting news:", error);
      toast.error("Something went wrong while deleting news");
    }
  };

  return (
    <div className="w-full flex flex-col gap-6 overflow-auto lg:flex-row p-5 lg:px-10 h-screen">
      <div className="lg:w-1/6 w-full">
        <AdminMenu />
      </div>
      <div className="w-full flex flex-col h-full overflow-auto lg:w-5/6">
        <div className="flex gap-3 items-center">
          <Link to="/dashboard/admin">
            <IoMdArrowRoundBack size={22} />
          </Link>
          <h2 className="text-xl text-emerald-500 font-bold border-b-4 w-fit">
          समाचार
          </h2>
        </div>
        <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            className="block w-full rounded-md border py-3 px-2 text-[14px] text-gray-900 shadow-sm placeholder:text-gray-400"
            placeholder="नाम "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="block w-full rounded-md border py-3 px-2 text-[14px] text-gray-900 shadow-sm placeholder:text-gray-400"
            placeholder="लिंक"
            value={pic}
            onChange={(e) => setPic(e.target.value)}
          />
          <textarea
            rows="6"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="विवरण"
            className="block w-full rounded-md border py-3 px-2 text-[14px] text-gray-900 shadow-sm placeholder:text-gray-400 resize-none"
          ></textarea>
          <button
            type="submit"
            className="flex w-fit justify-center rounded-md bg-emerald-500 py-3 lg:py-2 px-2 font-semibold leading-6 text-white shadow-sm hover:bg-emerald-400"
          >
            जोड़ें
          </button>
        </form>

        <div className="overflow-x-auto mt-5  rounded-md border">
          <table className="min-w-full divide-y">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium">
                फ़ोटो
                </th>
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
            <tbody className="divide-y ">
              {news.map((n) => (
                <tr key={n._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={n.pic}
                      alt={n.title}
                      className="rounded-full h-10 w-10 border"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">{n.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">{n.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => {
                          if (window.confirm("Are you sure to delete?")) {
                            handleDelete(n._id);
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
  );
}
