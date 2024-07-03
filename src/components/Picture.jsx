import Image from "next/image";

const Picture = ({ x, y, image }) => {
  return (
    <div className="w-fit h-fit">
      <Image
        style={{ boxShadow: `${x}px ${y}px 0px 0px background: #7B3F00` }}
        src={image}
      />
    </div>
  );
};

export default Picture;
