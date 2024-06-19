import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function InputWbtn(props) {
  const [input, setInput] = useState("");
  useEffect(() => {
    setInput(props.value);
  }, [props.value]);

  const handleClick = () => {
    props.onClick(input);
    if (props.clearOnSubmit === true) {
      setInput("");
    }
  };
  const handleChange = (e) => {
    let value = e.target.value;
    if (value.startsWith(" ")) {
      setInput(value.trimStart());
      return;
    }
    props.onChange && props.onChange(value);
    setInput(e.target.value);
  };

  return (
    <div
      className={`${props.className} flex h-10 min-w-40 items-center rounded-full bg-bg outline outline-[1.5px] outline-primary focus-within:outline-[2px] hover:outline-[2px]`}
    >
      <input
        className="h-10 w-full rounded-l-full bg-bg pl-4 pr-1 outline-none"
        type={props.type || "text"}
        placeholder={props.placeholder}
        value={input}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        required={props.required}
      />
      <button
        className="group flex h-full w-14 items-center justify-center rounded-r-full bg-primary text-bg"
        onClick={handleClick}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      >
        <Icon
          icon={props.iconify}
          className="text-[18px] transition-all group-hover:text-[20px] group-active:text-[18px]"
        />
      </button>
    </div>
  );
}

export default InputWbtn;
