import Card from "../../components/Card/Card";
import "./Monster.scss";
import { Link,useParams, useNavigate } from "react-router-dom";
import { useState, useEffect }  from "react";

function Monster() {
  const [monster, setMonster] = useState({});
  const params = useParams();
  const userId = params.id;
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((result) => setMonster(result));
  }, [userId]);

function previousIdSet(){
  navigate(`/detail/${Number(userId)-1}`)
}

function NextIdSet(){
  navigate(`/detail/${Number(userId)+1}`)
}
  return (
    <article className="monster">
      <div className="btnWrapper">
        <Link to="/">
          <button >Back to Monsters List</button>
        </Link>
      </div>
      <Card {...monster}/>
      <div className="btnWrapper">
        <button onClick={previousIdSet}>Previous</button>
        <button onClick={NextIdSet}>Next</button>
      </div>
    </article>
  );
}

export default Monster;
