import React from "react";

type PriceSubMenuProps = {
  price: number[];
  setPrice: (price: number[]) => void;
};

const PriceSubMenu = ({ price, setPrice }: PriceSubMenuProps) => {
  const min = 0,
    max = 100000;
  const priceSettingHandler = (minPrice: number, maxPrice: number) => {
    if (minPrice < min) minPrice = min;
    if (maxPrice > max) maxPrice = max;
    if (minPrice > maxPrice) minPrice = maxPrice;
    if (maxPrice < minPrice) maxPrice = minPrice;

    setPrice([minPrice, maxPrice]);
  };
  return (
    <>
      <div className="flex flex-col gap-2 px-2">
        <div className="flex items-end gap-2 ~text-xs/base font-bold">
          <div className="flex flex-col items-center gap-1">
            <span>Min ($)</span>
            <input
              type="number"
              value={price[0]}
              min={min}
              max={max}
              onChange={e => priceSettingHandler(+e.target.value, price[1])}
              className="~w-12/24 text-center px-1 py-0.5 border-[0.5px] border-black bg-white/80 rounded-md"
            />
          </div>
          <span className="pb-1">To</span>
          <div className="flex flex-col items-center gap-1">
            <span>Max ($)</span>
            <input
              type="number"
              value={price[1]}
              min={min}
              max={max}
              onChange={e => priceSettingHandler(price[0], +e.target.value)}
              className="~w-12/24 text-center px-1 py-0.5 border-[0.5px] border-black bg-white/80 rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceSubMenu;
