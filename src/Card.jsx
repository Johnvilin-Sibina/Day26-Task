function Card({ article }) {
  return (
    <div className="col-md-4 mt-5">
      <div className="card" style={{ width: "18rem", height: "350px"}}>
        <img src={article.image} style={{height: "150px"}} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            <b>{article.description}</b>
          </p>
          <p className="card-text">{article.author}</p>
          <div className="d-flex justify-content-between">
          <span className="card-text">{article.date}</span>
          <span className="card-text">{article.duriation}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
