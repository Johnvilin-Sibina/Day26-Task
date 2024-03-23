function Cardcareer({article}) {
  return (
    <div className="col-md-4 mt-5">
      <div className="card" style={{ width: "16rem", height: "350px"}}>
        <img src={article.image} style={{height: "150px"}} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            <b>{article.course}</b>
          </p>
          <p className="card-text">{article.language}</p>
          <hr/>
          <p className="card-text">{article.support1}</p>
          <p className="card-text">{article.support2}</p>
          <p className="card-text">{article.support3}</p>          
        </div>
      </div>
    </div>
  )
}

export default Cardcareer