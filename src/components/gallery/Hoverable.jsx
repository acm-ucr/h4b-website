import Image from "next/image";
import Link from "next/link";

const Hoverable = ({ text, link, image }) => {
  return (
    <Link href={link} target="_blank">
      <div className="group relative flex justify-center items-center justify-self-center">
        <div className="absolute opacity-0 group-hover:opacity-100 text-white z-10 font-semibold text-2xl md:text-4xl duration-150">
          {text}
        </div>
        <div className="opacity-0 group-hover:opacity-50 bg-gray-900 w-full h-full absolute duration-150" />
        <Image
          src={image}
          alt="gallery image"
          className="aspect-[3/2] object-cover"
        />
      </div>
    </Link>
  );
};

export default Hoverable;
