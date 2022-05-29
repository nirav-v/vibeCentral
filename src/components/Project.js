
function Project({ title, imageSrc, imageAlt, link, description }) {
  const styles = {
    card: {
      width: "18rem",
      padding: 20,
      marginTop: 60,
    },
  };
  return (
    <div className="card" style={styles.card}>
        <img src = {imageSrc}
        className="card-img-top" alt={imageAlt}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary">
          Github
        </a>
      </div>
    </div>
  );
}

export default Project;
