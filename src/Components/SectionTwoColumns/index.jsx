import './SectionTwoColumns.css';

const SectionTwoColumns = ({
  title,
  leftContent,
  rightContent,
  alignTitle = 'left',
  reverse = false
}) => (
  <section className="stc-section">
    <h2 className={`stc-title align-${alignTitle}`}>{title}</h2>
    <div className={`stc-content ${reverse ? 'reverse' : ''}`}>
      <div className="stc-col">{leftContent}</div>
      <div className="stc-col">{rightContent}</div>
    </div>
  </section>
);

export default SectionTwoColumns;
