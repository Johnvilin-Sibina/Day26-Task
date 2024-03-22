import Card from "./Card";
function Data({ articles }) {
  let datas = articles.slice(9, 18);
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

export default Data;
