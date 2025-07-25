const ProjectsCard = ({
  title,
  notas,
  url,
  cardImage,
  urlRepo,
  altImage,
  languages,
}) => {
  return (
    <>
      <div className="list__projects--cards">
        <h3>{title}</h3>
        {notas && <p className="notas">{notas}</p>}
        <div className="container__imagesProjects">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="container__images--link"
          >
            <img src={cardImage} alt={altImage} className="imagesProjects" />
          </a>
          <div className="list__projects--languages">
            <p>Lenguajes Usados</p>
            {languages.map((language) => (
              <div key={language}>
                <p>{language}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container__repo--links">
          <a
            href={urlRepo}
            target="_blank"
            rel="noreferrer"
            className="repo__links"
          >
            GitHub
          </a>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="repo__links"
            >
              Web
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
