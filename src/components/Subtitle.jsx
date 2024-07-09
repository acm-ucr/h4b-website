const Subtitle = ({ color, text }) => {
  return (
    <div className={`font-bold font-Shrikhand text-[83px] ${color}`}>
      {text}
    </div>
  );
};

export default Subtitle;
