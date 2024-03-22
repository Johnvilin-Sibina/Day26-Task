import Card from "./Card";
import Cardcareer from "./Cardcareer";
function All({ articles }) {
  return (
    <div className="container">
      <div className="row">
          {articles.map((article, index) =>(
            article.course ? 
            <Cardcareer key={index} article={article} /> :
           <Card key={index} article={article} />
          ))}
      </div>
    </div>
  );
}
export default All;
