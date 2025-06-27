import React from "react";
import plusSvg from "../assets/plus.svg";
import requestArray from "../assets/requestArray";
import greenDotSvg from "../assets/green_dot.svg";
import redDotSvg from "../assets/red_dot.svg";

const Request = () => {
  return (
    <div className="w-full my-11  border-1 rounded-xl border-[#F2F2F2]">
      <div className="py-4 px-3 flex justify-between items-center">
        <h4 className="text-gray-900 text-xl font-bold">Your Requests</h4>
        <button className="flex items-center gap-1 text-sm text-[#344054] px-2 py-1 border-1 border-gray-300 rounded-lg">
          <img src={plusSvg} alt="" />
          <p>New Request</p>
        </button>
      </div>
      <table className="min-w-full text-left text-xs border-1 border-[#EFF1F4] rounded-lg">
        <thead className=" border-1 border-[#EAECF0] bg-[#FAFBFB] rounded-xl text-[#4D4D4D] ">
          <tr>
            <th className="py-3 px-6">Type</th>
            <th className="py-3 px-6">Details</th>
            <th className="py-3 px-6">Approver</th>
            <th className="py-3 px-6">Status</th>
            <th className="py-3 px-6">Date requested</th>
          </tr>
        </thead>
        <tbody>
          {requestArray.map((req) => (
            <tr className="border-b-1 border-[#EFF1F4] rounded-xl" key={req.id}>
              <td className="py-4 px-6 text-gray-900 text-sm">{req.type}</td>
              <td className="my-4 mx-6 text-[#091E42] text-center  ">
                <p className="py-1 px-2 rounded-2xl bg-[#F5F6F7]">
                  {req.details}
                </p>
              </td>
              <td className="my-4 mx-6 text-[#091E42]  text-center text-sm">
                {req.approver}
              </td>
              <td className="py-4 px-6 text-[#091E42] text-center">
                <div
                  className={`flex items-center gap-1 px-2 py-1 w-fit rounded-2xl font-semibold ${
                    req.status === "Active"
                      ? "text-[#027A48] bg-[#ECFDF3]"
                      : "text-[#F15046] bg-[#FFF2EA]"
                  }`}
                >
                  <img
                    src={req.status === "Active" ? greenDotSvg : redDotSvg}
                    alt=""
                  />
                  <p>{req.status}</p>
                </div>
              </td>
              <td className="py-4 px-6 text-[#091E42] text-center">
                <div className="flex flex-col text-start">
                  <p className="text-sm text-[#42526D]">
                    {req.dateRequested.date}
                  </p>
                  <p className="text-xs text-[#B3B3B3">
                    {req.dateRequested.time}
                  </p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Request;
