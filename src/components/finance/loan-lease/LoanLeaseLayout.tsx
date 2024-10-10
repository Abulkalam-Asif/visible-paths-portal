"use client";
import React, { useEffect } from "react";
import LineComp from "./LineComp";
import StepNodeComp from "./StepNodeComp";
import { useRouter, useSearchParams } from "next/navigation";
import FormInputBox from "./FormInputBox";
import { FcGoogle } from "react-icons/fc";

type Props = {
  children: React.ReactNode;
};

const stepJson = [
  {
    node_number: 1,
    node_title: "Personal Info",
  },
  {
    node_number: 2,
    node_title: "Residence",
  },
  {
    node_number: 3,
    node_title: "Employment",
  },
  {
    node_number: 4,
    node_title: "Verification",
  },
  {
    node_number: 5,
    node_title: "Summary",
  },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}

const defaultFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
};

const LoanLeaseLayout = ({ children }: Props) => {
  const router = useRouter();
  const params = useSearchParams();
  const myParams = new URLSearchParams(params);
  const [formData, setFormData] = React.useState<FormData>(defaultFormData);

  const [currentPage, setCurrentPage] = React.useState(
    Number(params.get("page")) || 1,
  );

  const inputHandler = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    setCurrentPage(Number(params.get("page")) || 1);
  }, [myParams.get("page")]);

  const handleNextFunction = () => {
    myParams.set("page", "5");
    router.push("/finance/loan-lease?" + myParams.toString());
  };

  const titleArray = [
    "",
    "Pre Qualify in Minutes to Check the Financial Rates!",
    "Hi JP! Let us know About your Current Residance.",
    "Next, Tell Us About your Employment Status.",
    "Now, we just Need a Little More Information to See if you Pre-Qualify.",
    "Let's Double-Check Everything.",
  ];

  return (
    <div>
      {myParams.get("page") === "signup" ? (
        <div className="bg-white/80 border-customRed border-2 pb-2 rounded-2xl ~/lg:~px-4/12 max-w-lg mx-auto">
          <div className=" py-2 flex flex-col items-center w-full ~/sm:~gap-7/14">
            <h1 className="text-black text-center pt-2 ~/sm:~text-xl/3xl font-bold">
              Create Your Free Account
            </h1>
            <div className="w-full flex flex-col justify-center items-between ~/sm:~gap-4/8">
              <div className="grid ~/sm:~gap-4/8 grid-cols-1 sm:grid-cols-2">
                <FormInputBox
                  type="text"
                  label="First Name"
                  name="firstName"
                  idHtmlFor="firstName"
                  value={formData.firstName}
                  placeholder="JP"
                  required={true}
                  inputHandler={inputHandler}
                />
                <FormInputBox
                  type="text"
                  label="Last Name"
                  name="lastName"
                  idHtmlFor="lastName"
                  value={formData.lastName}
                  placeholder="Smith"
                  required={true}
                  inputHandler={inputHandler}
                />
              </div>
              <FormInputBox
                type="email"
                label="Email"
                name="email"
                idHtmlFor="email"
                value={formData.email}
                placeholder="jpsmith@visibalpathportal.com"
                required={true}
                inputHandler={inputHandler}
              />
              <FormInputBox
                type="email"
                label="Verify Email"
                name="confirmEmail"
                idHtmlFor="confirmEmail"
                value={formData.confirmEmail}
                placeholder="jpsmith@visibalpathportal.com"
                required={true}
                inputHandler={inputHandler}
              />
              <div className="grid ~/sm:~gap-4/8 grid-cols-1 sm:grid-cols-2">
                <FormInputBox
                  type="password"
                  label="Password"
                  name="password"
                  idHtmlFor="password"
                  value={formData.password}
                  placeholder="Password"
                  required={true}
                  inputHandler={inputHandler}
                />
                <FormInputBox
                  type="password"
                  label="Confirm Password"
                  name="confirmPassword"
                  idHtmlFor="confirmPassword"
                  value={formData.confirmPassword}
                  placeholder="Confirm Password"
                  required={true}
                  inputHandler={inputHandler}
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <button
                onClick={handleNextFunction}
                className="bg-customRed ~/sm:~text-md/xl text-white font-bold w-full p-3 rounded-md">
                CREATE ACCOUNT
              </button>
              <button className="bg-transparent border-2 flex items-center justify-center gap-4 border-black text-black font-bold w-full p-3 rounded-md">
                <FcGoogle className="~/sm:~text-xl/2xl" />
                <p className="~/sm:~text-md/xl">Continue With Google</p>
              </button>
              <p className="text-center px-2 font-bold">
                By signing up, you agree to our{" "}
                <span className="text-customRed">Terms</span> of Service and{" "}
                <span className="text-customRed">Privacy Policy</span>
              </p>
              <p className="text-center px-2 font-bold">
                Already have an account?{" "}
                <span
                  className="text-customRed cursor-pointer"
                  onClick={() => router.push("/login")}>
                  Sign in
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white/80 border-customRed border-2 pt-7 pb-2 rounded-2xl ~/lg:~px-4/12">
          <div className="flex flex-col justify-between items-center gap-8">
            <div className="w-full flex justify-center items-center">
              <h1 className="text-black font-bold ~/sm:~text-xl/3xl">
                {titleArray[currentPage]}
              </h1>
            </div>
            <div className="flex justify-center w-full items-center ">
              {stepJson.map((step, index) => (
                <div key={index} className="flex items-center max-w-full">
                  <StepNodeComp
                    nodeNumber={step.node_number}
                    title={step.node_title}
                    isHighlighted={
                      currentPage > step.node_number ||
                      currentPage === step.node_number
                    }
                  />
                  {index !== stepJson.length - 1 && (
                    <LineComp
                      width="~/lg:~w-4/32"
                      isHighlighted={
                        currentPage !== 1 && currentPage > step.node_number
                      }
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">{children}</div>
        </div>
      )}
    </div>
  );
};

export default LoanLeaseLayout;
