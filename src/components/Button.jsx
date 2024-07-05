import Link from "next/link";

const Button = ({ text, link }) => {
  return (
    <>
      <Link
        href={link}
        target="_blank"
        className="w-fit bg-biscuits-pinkish text-biscuits-textColor font-inika py-2.4 px-8 rounded-full font-bold text-2xl duration-300 hover:opacity-80"
      >
        {text}
      </Link>
    </>
  );
};
export default Button;
