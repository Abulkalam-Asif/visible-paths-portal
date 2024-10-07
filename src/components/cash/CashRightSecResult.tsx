import React from "react";
import FinanceBudgetResult from "./FinanceBudgetResult";

type Props = {
  carValue: number;
};

const CashRightSecResult = ({ carValue }: Props) => {
  return (
    <div className="bg-customRed/95 w-full rounded-ss-[3rem_2rem] rounded-se-[3rem_2rem] rounded-es-[3rem_2rem] rounded-ee-[3rem_2rem] p-4">
      <FinanceBudgetResult carValue={carValue} />
    </div>
  );
};

export default CashRightSecResult;
