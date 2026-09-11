export default function SectionHeading({ number, eyebrow, title, children }) {
  return (
    <div className="section-heading mb-5">
      <div className="eyebrow text-uppercase mb-3">
        <span>{number}</span>
        {eyebrow}
      </div>
      <h2 className="mb-3">{title}</h2>
      {children && <p className="mb-0">{children}</p>}
    </div>
  )
}