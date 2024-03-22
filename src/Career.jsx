import Cardcareer from "./Cardcareer";
function Career({ articles }) {
  let datas = articles.slice(25);
  return (
    <div className="container">
      <div className="row">
        {datas.map((article, index) => {
          return <Cardcareer key={index} article={article} />;
        })}
      </div>
    </div>
  );
}

export default Career;
