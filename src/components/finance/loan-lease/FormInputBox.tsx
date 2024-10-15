import React from "react";

type FormInputBoxProps = {
  label: string;
  value: string;
  name: string;
  type: string;
  idHtmlFor: string;
  inputHandler: (name: string, value: string) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  error?: string | undefined;
};

const FormInputBox = ({
  label,
  value,
  name,
  type,
  idHtmlFor,
  inputHandler = () => {},
  placeholder = "",
  className = "",
  required = true,
  error,
}: FormInputBoxProps) => {
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    inputHandler(name, e.target.value);
  };

  return (
    <>
      <div className={`${className} flex flex-col gap-2.5 lg:~lg:~gap-2.5`}>
        <label htmlFor={idHtmlFor} className="font-bold lg:~lg:~text-md/lg">
          {label} {required && <span className="text-accent1">*</span>}
        </label>
        {type === "text"|| type === "password" || type === "email" || type === "tel" ? (
          <input
            type={type}
            id={idHtmlFor}
            value={value}
            name={name}
            required={required}
            placeholder={placeholder}
            onChange={onChangeHandler}
            className="px-4 py-3 text-sm lg:~lg:~text-sm/lg border placeholder:text-black border-black rounded font-medium backdrop-blur-[50] bg-white/30"
          />
        ) : type === "textarea" ? (
          <textarea
            id={idHtmlFor}
            value={value}
            name={name}
            required={required}
            placeholder={placeholder}
            onChange={onChangeHandler}
            rows={4}
            className="p-4 text-sm border border-black/50 rounded font-medium"
          />
        ) : null}
        {error && (
          <p className="text-red-500 text-sm">
            <span>{error}</span>
          </p>
        )}
      </div>
    </>
  );
};

export default FormInputBox;
