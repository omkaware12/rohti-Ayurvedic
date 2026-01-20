const SectionCard = ({ title, description, icon, onClick }) => {
  return (
    <div className="section-card" onClick={onClick}>
      <div className="card-icon">{icon}</div>

      <div className="card-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SectionCard;
