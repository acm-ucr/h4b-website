const Subtitle = ({ color, text }) => {
  return (
    <div className={`font-bold font-shrikhand text-7xl text-center ${color}`}>
      {text}
    </div>
  );
};

export default Subtitle;
