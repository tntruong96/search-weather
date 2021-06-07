import "./round.css";
const Round = ({ place, cel, status, color }) => {
  return (
    <article className="round" style={{ backgroundColor: color }}>
      <div>
        <h3>{status}</h3>
        <p>
          {cel} | {place}
        </p>
      </div>
    </article>
  );
};

export default Round;
