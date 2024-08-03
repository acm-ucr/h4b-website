const Subtitle = ({ color, text }) => {
  return (
    <div
      className={`font-bold font-shrikhand text-center text-4xl md:text-7xl ${color}`}
    >
      {text}
    </div>
  );
};

export default Subtitle;
