function DefaultButton(props) {
  if (props.btnStroke === true) {
    return (
      <button
        onClick={props.onClick}
        className={`border-primary text-primary outline-primary rounded-full border-[1px] bg-transparent px-4 py-1 font-medium transition-all hover:outline hover:outline-[2px] active:scale-95 ${props.className}`}
      >
        {props.name}
      </button>
    );
  }
  return (
    <>
      <button
        onClick={props.onClick}
        className={`border-primary text-bg bg-primary outline-primary rounded-full border-[1px] px-4 py-1 font-medium transition-all hover:bg-opacity-90 hover:outline hover:outline-[2px] active:scale-95 ${props.className}`}
      >
        {props.name}
      </button>
    </>
  );
}
export default DefaultButton;
