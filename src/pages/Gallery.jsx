function Gallery() {
  const items = ['Arce Japonés', 'Pino Negro', 'Ficus Retusa', 'Olmo Chino', 'Enebro', 'Azalea']

  return (
    <section className="page-section">
      <h1 className="page-section__title">Nuestra Colección</h1>
      <p className="page-section__intro">
        Un vistazo a algunos de los ejemplares en los que hemos trabajado.
        Cada árbol cuenta una historia de tiempo y paciencia.
      </p>
      <div className="gallery-grid">
        {items.map((name) => (
          <div key={name} className="gallery-card">
            <div className="gallery-card__img-placeholder" />
            <p className="gallery-card__name">{name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery