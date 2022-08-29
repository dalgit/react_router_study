import Card from "../../components/Card/Card";
import "./Monster.scss";
import { Link,useParams } from "react-router-dom";
import { useState, useEffect }  from "react";

function Monster() {
  const [monster, setMonster] = useState({});
  const params = useParams();
  const userId = params.id;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((result) => setMonster(result));
  }, [userId]);

  return (
    <article className="monster">
      <div className="btnWrapper">
        <Link to="/">
          <button >Back to Monsters List</button>
        </Link>
      </div>
      <Card {...monster}/>
      <div className="btnWrapper">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </article>
  );
}

export default Monster;
