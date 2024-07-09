import Link from "next/link";
const Connect = ({ name, icon, link }) => {
  return (
    <div className="flex flex-col items-center text-8xl text-biscuits-purple-200">
      <Link href={link}>{icon}</Link>
      <div className="text-xl">{name}</div>
    </div>
  );
};

export default Connect;
