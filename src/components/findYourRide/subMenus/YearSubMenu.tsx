import React from "react";

type YearSubMenuProps = {
  year: number[];
  setYear: (year: number[]) => void;
};

const YearSubMenu = ({ year, setYear }: YearSubMenuProps) => {
  const min = 1998,
    max = 2024;
  const yearSettingHandler = (minYear: number, maxYear: number) => {
    if (minYear < min) minYear = min;
    if (maxYear > max) maxYear = max;
    if (minYear > maxYear) minYear = maxYear;
    if (maxYear < minYear) maxYear = minYear;

    setYear([minYear, maxYear]);
  };
  return (
    <>
      <div className="flex flex-col gap-2 px-2">
        <div className="flex items-end gap-2 ~text-xs/base font-bold">
          <div className="flex flex-col items-center gap-1">
            <span>Min</span>
            <input
              type="number"
              value={year[0]}
              min={min}
              max={max}
              onChange={e => yearSettingHandler(+e.target.value, year[1])}
              className="~w-12/24 text-center px-1 py-0.5 border-[0.5px] border-white bg-white/30 rounded-md"
            />
          </div>
          <span className="pb-1">To</span>
          <div className="flex flex-col items-center gap-1">
            <span>Max</span>
            <input
              type="number"
              value={year[1]}
              min={min}
              max={max}
              onChange={e => yearSettingHandler(year[0], +e.target.value)}
              className="~w-12/24 text-center px-1 py-0.5 border-[0.5px] border-white bg-white/30 rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default YearSubMenu;
