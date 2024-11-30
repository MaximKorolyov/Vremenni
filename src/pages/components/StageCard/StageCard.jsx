import './StageCard.scss'
const StageCard = ({ stageNumber, title, dates, desc }) => (
    <div className="info-block__stage-card stage-card">
      <div className="stage-card__red-line"><br /></div>
      <img src={stageNumber} alt="" className="stage-card__stage-number" />
      <h2 className="stage-card__title">{title}</h2>
      <h3 className="stage-card__dates">{dates}</h3>
      <p className="stage-card__desc">{desc}</p>
    </div>
  );

  export default StageCard