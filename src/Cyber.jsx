import Card from "./Card";
function Cyber({ articles }) {
  let datas = articles.slice(18,25);
  return (
    <div className="container">
      <div className="row">
        {datas.map((article, index) => {
          return <Card key={index} article={article} />;
        })}
      </div>
    </div>
  );
}

export default Cyber;
