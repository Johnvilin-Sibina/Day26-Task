import Card from "./Card";
function Fullstack({ articles }) {
  let datas = articles.slice(0, 9);
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

export default Fullstack;
