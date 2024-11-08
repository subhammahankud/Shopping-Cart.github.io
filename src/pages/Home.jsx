import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Product from "../components/Product"


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false);

  async function fetchData(){
    setLoading(true);
    try{
      const rel= await fetch(API_URL);
      const out= await rel.json();
      setPosts(out);
    }
    catch(e){
      console.log("Error Found");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div>
      {
        loading ? <Loading/> : posts.length>0 ? (
          <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] pt-14 -z-10">
            {posts.map((post)=>{
              return <Product key={post.id} post={post}/>
            })}
          </div>
        ):(<div className="flex justify-center items-center">No Data Found</div>)
      }
    </div>
  );
};

export default Home;
