import React from "react";

type Props = {
  title: string;
  dataItems: {
    label: string;
    value: string;
  }[];
};

const SummaryPageSingleComp = ({ dataItems, title }: Props) => {
  return (
    <div className=" lg:~lg:~px-6/10 py-2 px-4 flex flex-col font-bold min-w-full ~/sm:~gap-4/6 placeholder:text-black text-black text-sm border border-black rounded-md backdrop-blur-[50]">
      <h1 className="~/sm:~text-lg/2xl lg:~lg:~text-2xl/3xl">{title}</h1>
      <div className="flex flex-col sm:flex-row sm:items-center">
        {dataItems.map(item => (
          <div key={item.label} className="w-full">
            <p className="text-xl font-bold">{item.label}</p>
            <p className="text-md font-normal">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryPageSingleComp;
