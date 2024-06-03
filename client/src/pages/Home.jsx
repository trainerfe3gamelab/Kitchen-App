import React from "react";
import InputWbtn from "../components/common/InputWbtn";
import RoundedButton from "../components/common/RoundedButton";

export default function Home() {
  return (
    <>
      <div className="text-red-600">Home</div>
      <InputWbtn
        placeholder="Masukan.."
        iconify="material-symbols:chat-paste-go"
        className="w-96"
        onClick={(input) => console.log(input)}
        clearOnSubmit={true}
      />
      <RoundedButton name="Maaf" />
    </>
  );
}
