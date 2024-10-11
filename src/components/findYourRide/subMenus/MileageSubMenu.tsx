import React from "react";

type MileageSubMenuProps = {
  mileage: number[];
  setMileage: (mileage: number[]) => void;
};

const MileageSubMenu = ({ mileage, setMileage }: MileageSubMenuProps) => {
  const min = 4,
    max = 50;
  const mileageSettingHandler = (minMileage: number, maxMileage: number) => {
    if (minMileage < min) minMileage = min;
    if (maxMileage > max) maxMileage = max;
    if (minMileage > maxMileage) minMileage = maxMileage;
    if (maxMileage < minMileage) maxMileage = minMileage;

    setMileage([minMileage, maxMileage]);
  };
  return (
    <>
      <div className="flex flex-col gap-2 px-2">
        <div className="flex items-end gap-2 ~text-xs/sm font-bold">
          <div className="flex flex-col items-center gap-1">
            <span>Min</span>
            <input
              type="number"
              value={mileage[0]}
              min={min}
              max={max}
              onChange={e => mileageSettingHandler(+e.target.value, mileage[1])}
              className="~w-12/18 text-center px-1 py-0.5 border-[0.5px] border-black bg-white/80 rounded-md"
            />
          </div>
          <span className="pb-1">To</span>
          <div className="flex flex-col items-center gap-1">
            <span>Max</span>
            <input
              type="number"
              value={mileage[1]}
              min={min}
              max={max}
              onChange={e => mileageSettingHandler(mileage[0], +e.target.value)}
              className="~w-12/18 text-center px-1 py-0.5 border-[0.5px] border-black bg-white/80 rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MileageSubMenu;
