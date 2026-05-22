export default function ServicesGrid() {
  const services = [
    { icon: "fa-address-card", title: "Directorio Protocolar", desc: "Autoridades y representantes" },
    { icon: "fa-building", title: "Direcciones", desc: "Gestión administrativa" },
    { icon: "fa-users", title: "Secretarias", desc: "Coordinación de políticas" },
    { icon: "fa-university", title: "Institutos", desc: "Organismos autónomos" }
  ]
  return (
    <div className="services-grid">
      {services.map((s, i) => (
        <div key={i} className="service-item">
          <i className={`fas ${s.icon}`}></i>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  )
}