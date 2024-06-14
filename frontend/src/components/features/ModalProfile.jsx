import { useState, createContext } from "react";

const ModalProfileContext = createContext();

function ModalProfileProvider({ children }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <ModalProfileContext.Provider value={{ toggle, setToggle }}>
      {children}
      <div
        id="container"
        className={`fixed right-0 top-0 z-50 h-svh w-full cursor-default bg-bg bg-opacity-30 opacity-0 backdrop-blur-[2px] transition-all ${toggle ? "opacity-100" : "invisible opacity-0"} `}
        onClick={() => handleToggle()}
      >
        <div
          id="wrapper"
          className="mx-auto mt-20 h-7 min-w-[360px] select-none px-10 lg:max-w-[1080px] lg:px-0"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="ml-auto flex h-fit w-36 flex-col items-start gap-2 rounded-md border bg-bg p-5 shadow">
            <button className="flex w-full justify-start text-primary hover:text-opacity-60">
              Resep
            </button>
            <button className="flex w-full justify-start text-primary hover:text-opacity-60">
              Disimpan
            </button>
            <hr className="w-full border-[1px] border-primary border-opacity-20" />
            <button className="flex w-full justify-start text-primary hover:text-opacity-60">
              Pengaturan
            </button>
            <button className="flex w-full justify-start text-accent-1 hover:text-opacity-60">
              Keluar
            </button>
          </div>
        </div>
      </div>
    </ModalProfileContext.Provider>
  );
}

export { ModalProfileProvider, ModalProfileContext };
