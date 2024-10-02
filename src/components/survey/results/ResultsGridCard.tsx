import React from "react";
import TipsCard from "./TipsCard";

const personalizedtips = [
  {
    heading: "Budgeting Tip",
    description:
      "Create a monthly budget and stick to it. Track all your income and expenses meticulously. This will help you identify unnecessary expenses and stay on track with your financial goals.",
  },
  {
    heading: "Budgeting Tip",
    description:
      "Always set aside money for an emergency fund. Aim for at least 3 to 6 months' worth of living expenses. This provides a cushion for unexpected financial difficulties like medical bills or job loss.",
  },
  {
    heading: "Budgeting Tip",
    description:
      "Before making a purchase, ask yourself if it is a need or a want. Waiting 24 hours before buying anything non-essential can help curb impulse buying and save money.",
  },
];

const financialfurneytips = [
  {
    heading: "Budgeting Tip",
    description:
      "Set up automatic transfers to your savings account. This ensures that you consistently save a portion of your income, helping you build wealth without having to think about it each month.",
  },
  {
    heading: "Budgeting Tip",
    description:
      "Focus on paying off high-interest debts first. Consolidate your debts if possible, and try to make extra payments to reduce the overall interest paid and become debt-free sooner.",
  },
  {
    heading: "Budgeting Tip",
    description:
      "Keep track of your daily spending to understand where your money is going. Small purchases can add up, so monitoring them will help you make adjustments to stay within your budget.",
  },
  {
    heading: "Budgeting Tip",
    description:
      "Define clear financial goals, both short-term and long-term. Whether it’s saving for a vacation, a new car, or retirement, having a goal will motivate you to stick to your budget.",
  },
];

const ResultsGridCard = () => {
  return (
    <div className="bg-white opacity-85 w-full p-4 rounded-lg flex flex-col gap-10">
      <div className="flex flex-col gap-7 ">
        <h1 className="text-customRed text-3xl sm:text-5xl font-extrabold">
          Personalised Insights
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {personalizedtips.map((tip, index) => {
            return (
              <TipsCard title={tip.heading} description={tip.description} />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-7 ">
        <h1 className="text-customRed text-3xl sm:text-5xl font-extrabold">
          Go Financial Furney start now
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {financialfurneytips.map((tip, index) => {
            return (
              <TipsCard title={tip.heading} description={tip.description} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultsGridCard;
