import Link from "next/link";

const Button = ({ text }) => {
  return (
    <>
      <Link
        href="https://example.com/"
        className="inline-block bg-biscuits-pinkish text-biscuits-textColor font-inika py-2.4 px-8 rounded-full font-bold text-lg duration-300 hover:opacity-80"
      >
        {text}
      </Link>
    </>
  );
};
export default Button;
