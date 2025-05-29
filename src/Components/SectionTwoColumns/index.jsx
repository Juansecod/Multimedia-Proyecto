import './SectionTwoColumns.css';

const SectionTwoColumns = ({
  title,
  leftContent,
  rightContent,
  alignTitle = 'left',
  reverse = false,
  altImage
}) => {

  if(title=="Así empezó este parche") return (
    <section className="stc-section-flex">
      <div className={`stc-content ${reverse ? 'reverse' : ''}`}>
        <h2 className={`stc-title`}>{title}</h2>
        <div className="stc-col">{leftContent}</div>
      </div>
      <div className="stc-image">{rightContent}</div>
    </section>
  );

  if(title=="El grito que salió del barrio") return (
    <section className="stc-section">
      <h2 className={`stc-title`}>{title}</h2>
      <div className={`stc-content ${reverse ? 'reverse' : ''}`}>
        <div className="stc-col">{leftContent}</div>
        <div className="stc-col">{rightContent}</div>
      </div>
    </section>
  );

  return (
    <section className="stc-section-flex">
      {alignTitle=="left" && <div className="stc-image">{rightContent}</div>}
      <div className={`stc-content`}>
        <h2 className={`stc-title`}>{title}</h2>
        <div className="stc-col">{leftContent}</div>
      </div>
      {alignTitle=="right" && <div className="stc-image">{rightContent}</div>}
    </section>
  );

}

export default SectionTwoColumns;
