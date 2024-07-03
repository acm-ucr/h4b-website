import Link from "next/link";

const Button = ({ color, text }) => {
  return (
    <>
      <Link href="https://example.com/">
        {" "}
        <a
          style={{ backgroundColor: "pink" }}
          className="inline-block bg-black text-black py-2.4 px-8 rounded-full font-bold text-lg duration-300 hover:opacity-80"
        >
          Sign Up
        </a>
      </Link>
    </>
  );
};
export default Button;
