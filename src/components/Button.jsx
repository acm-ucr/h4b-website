import Link from "next/link";
import useView from "./useView";

const Button = ({ text, link }) => {
  const [inView, ref] = useView();
  return (
    <div
      className={`${
        inView
          ? `animate-fade-up animate-once animate-duration-[300ms] animate-ease-linear`
          : ""
      }`}
    >
      <Link
        href={link}
        target="_blank"
        className="w-fit bg-biscuits-pinkish text-biscuits-textColor font-inika py-1.5 px-8 md:py-2 md:px-12 rounded-full font-bold text-xl md:text-3xl hover:opacity-75 duration-100"
        ref={ref}
      >
        {text}
      </Link>
    </div>
  );
};
export default Button;
