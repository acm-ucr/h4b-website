import Image from "next/image";

const Demo = ({ name, major, pic }) => {
  return (
    <div className="bg-white w-1/3 h-fit">
      <Image src={pic} alt={name} width={200} height={200} />
      <div>{name}</div>
      <div>{major}</div>
    </div>
  );
};

export default Demo;
