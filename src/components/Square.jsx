const Square = ({ winnerLine, value, id, onClick }) => {
  return (
    <button
      className={
        winnerLine && winnerLine.line.includes(id)
          ? "square winner-line"
          : "square"
      }
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
