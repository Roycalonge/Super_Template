export default function ComponentRenderer({ type, data }) {
    const components = {
      heading: ({ text }) => <h1>{text}</h1>,
      paragraph: ({ text }) => <p>{text}</p>,
      image: ({ url, alt }) => <img src={url} alt={alt} className="content-image" />,
      video: ({ url }) => <div className="video-wrapper">{url && <iframe src={url} />}</div>,
      columns: ({ content }) => (
        <div className="columns-container">
          {content.map((col, i) => (
            <div key={i} className="column">{col}</div>
          ))}
        </div>
      ),
      divider: () => <hr className="content-divider" />,
      button: ({ text, url }) => <a href={url} className="content-button">{text}</a>,
      social: ({ platforms }) => (
        <div className="social-icons">
          {platforms.map(p => (
            <SocialIcon key={p} platform={p} />
          ))}
        </div>
      )
    };
  
    const Component = components[type] || (() => null);
    
    return (
      <div className={`content-component ${type}`}>
        <Component {...data} />
        <div className="component-toolbar">
          <button>Editar</button>
          <button>Eliminar</button>
        </div>
      </div>
    );
  }