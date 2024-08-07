const Subtitle = ({ color, text }) => {
  return (
    <div
      className={`my-2 font-bold font-shrikhand text-center text-4xl md:text-7xl ${color}`}
    >
      {text}
    </div>
  );
};

export default Subtitle;
