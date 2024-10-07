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
    <div className="p-4 flex flex-col ~/sm:~gap-4/6 placeholder:text-white text-white text-sm border-2 border-white rounded-xl font-medium backdrop-blur-[50] bg-white/20">
      <h1 className="~/sm:~text-3xl/4xl">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4">
        {dataItems.map(item => (
          <div key={item.label}>
            <p className="text-2xl">{item.label}</p>
            <p className="px-1 text-xl">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryPageSingleComp;
