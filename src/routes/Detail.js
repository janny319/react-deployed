import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
  const [loading, setLoading] = useState(true);
  const [details, setDetail] = useState([]);
  const {id} = useParams()
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.details);
    setLoading(false);
    console.log(json)
  }
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {
        loading ?
        <h1>Detail Loading...</h1> :
        <div>
          <h2>{details.data.title}</h2>
          <p>{details.data.summary}</p>
        </div>
      }
    </div>
  );
}

export default Detail; 