import Image from "next/image";

const Picture = ({ x, y, image, alt, width = 500, height = 300 }) => {
  return (
    <div className="w-fit h-fit">
      <Image
        style={{ boxShadow: `${x}px ${y}px 0px 0px #7B3F00` }}
        src={image}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Picture;
