import Link from "next/link";
const Connect = ({ name, icon, link }) => {
  return (
    <div className="text-6xl text-biscuits-purple-200">
      <Link href={link}>{icon}</Link>
      <div className="text-xs">{name}</div>
    </div>
  );
};

export default Connect;
