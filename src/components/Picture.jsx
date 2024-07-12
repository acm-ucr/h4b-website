import Image from "next/image";

const Picture = ({ x, y, image, alt }) => {
  return (
    <div className="w-fit h-fit">
      <Image
        style={{ boxShadow: `${x}px ${y}px 0px 0px #7B3F00` }}
        src={image}
        alt={alt}
      />
    </div>
  );
};

export default Picture;
