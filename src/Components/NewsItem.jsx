import image from '../assets/news.jpeg'; // ✅ Local fallback image

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3"
      style={{
        maxWidth: "360px",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
      }}
    >
      <img
        src={src ? src : image} // ✅ Uses local image if no URL image
        alt="news"
        style={{
          height: "200px",
          width: "100%",
          objectFit: "cover",
        }}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0, 50) : "No Title"}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "A custom news description can refer to a personalized summary or snippet of a news article."}
        </p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
