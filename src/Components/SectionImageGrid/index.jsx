import './SectionImageGrid.css';

const SectionImageGrid = ({ title, text, images, alignTitle = 'left' }) => (
  <section className="sig-section">
    {title && <h2 className={`sig-title align-${alignTitle}`}>{title}</h2>}
    {text && <div className="sig-text">{text}</div>}
    <div className="sig-grid">
      {images.map((img, i) => (
        <div className="sig-item" key={i}>
          <img src={img.src} alt={img.alt} className="sig-img" />
        </div>
      ))}
    </div>
  </section>
);

export default SectionImageGrid;
