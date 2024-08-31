import Link from "next/link";

const Button = ({ text, link }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="w-fit bg-biscuits-pinkish text-biscuits-textColor font-inika py-1.5 px-8 md:py-2 md:px-12 rounded-full font-bold text-xl md:text-3xl hover:opacity-75 duration-100"
    >
      {text}
    </Link>
  );
};
export default Button;
