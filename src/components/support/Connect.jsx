import Link from "next/link";

const Connect = ({ name, icon, link }) => {
  return (
    <Link
      href={link}
      className="flex flex-col items-center text-8xl text-biscuits-purple-200"
      target="_blank"
    >
      <span className="transition ease-in-out hover:scale-110">{icon}</span>
      <div className="text-xl font-shrikhand">{name}</div>
    </Link>
  );
};

export default Connect;
