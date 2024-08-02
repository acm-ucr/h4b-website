import Link from "next/link";

const Connect = ({ name, icon, link }) => {
  return (
    <Link
      href={link}
      className="flex flex-col items-center text-8xl text-biscuits-purple-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <div className="text-xl">{name}</div>
    </Link>
  );
};

export default Connect;
