import Link from "next/link";

const Button = ({ text, link }) => {
  return (
    <>
      <Link
        href={link}
        target="_blank"
        className="w-fit bg-biscuits-pinkish text-biscuits-textColor font-inika py-2 px-10 md:py-3 md:px-12 rounded-full font-bold text-3xl duration-300 hover:opacity-80"
      >
        {text}
      </Link>
    </>
  );
};
export default Button;
