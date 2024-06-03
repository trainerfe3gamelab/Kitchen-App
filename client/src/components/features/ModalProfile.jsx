function ModalProfile() {
  return (
    <div className="absolute right-0 top-0 z-30 h-svh w-full cursor-default border bg-bg bg-opacity-30 shadow backdrop-blur-[2px]">
      <div className="mx-auto mt-20 h-7 w-[380px] sm:w-full sm:px-10 lg:max-w-[1080px] lg:px-0">
        <div className="ml-auto flex h-fit w-36 flex-col items-start gap-2 rounded-md border bg-bg p-5 shadow">
          <button className="flex w-full justify-start text-primary hover:text-opacity-60 lg:hidden">
            Menu
          </button>
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
  );
}

export default ModalProfile;
