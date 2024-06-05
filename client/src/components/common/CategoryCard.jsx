export default function CategoryCard(props) {
  let mouseDownTime = 0;
  const mouseUpHandle = () => {
    const mouseUpTime = Date.now();
    const clickDuration = mouseUpTime - mouseDownTime;

    if (clickDuration < 200) {
      console.log(props.title);
    }
  };
  return (
    <div
      onMouseDown={() => (mouseDownTime = Date.now())}
      onMouseUp={() => mouseUpHandle()}
      className="group relative flex aspect-square h-fit w-full min-w-[152px] max-w-[152px] cursor-pointer select-none items-center justify-center overflow-hidden rounded-lg bg-black bg-opacity-30"
    >
      <img
        className="absolute -z-10 h-full w-full object-cover transition duration-200 group-hover:scale-105"
        src={props.image}
        alt="category image"
      />
      <h1 className="font-semibold text-bg drop-shadow-md">{props.title}</h1>
    </div>
  );
}
