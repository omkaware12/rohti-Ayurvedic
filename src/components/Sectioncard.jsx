const SectionCard = ({ title, onClick }) => {
  return (
    <div className="section-card" onClick={onClick}>
      <h3>{title}</h3>
    </div>
  );
};

export default SectionCard;
