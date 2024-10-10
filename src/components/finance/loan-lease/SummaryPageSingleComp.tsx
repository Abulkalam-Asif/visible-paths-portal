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
    <div className="p-4 flex flex-col font-bold min-w-full ~/sm:~gap-4/6 placeholder:text-black text-black text-sm border border-black rounded-xl backdrop-blur-[50]">
      <h1 className="~/sm:~text-lg/2xl">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4">
        {dataItems.map(item => (
          <div key={item.label}>
            <p className="text-lg">{item.label}</p>
            <p className="text-md">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryPageSingleComp;
