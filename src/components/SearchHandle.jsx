import Table from "react-bootstrap/Table";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as useParams } from "react-router-dom";
import { HandleSearch, SearchButton } from "./SearchButton";



export default function SearchHandle(){
  
  const [post, setPost] = useState([]);

  // const { handle } = useParams();
  
  const getAllPostsByHandleURL = `http://localhost:8080/post/searchHandle/${HandleSearch}`
  useEffect(() => {
    getAllPosts(); 
  }, []);

  const getAllPosts = async () => {
    const response = await axios.get(getAllPostsByHandleURL)
    setPost(response.data)
    console.log(response.data);
    // console.log(Handle());
  };

  //if(!post) return null;

  return (
   <div className="container">
    <div className="py-4">
      <table className="table border">
        <thead>
          <tr>
            <td>
              Name
            </td>
            <td>
              Alleyname
            </td>
            <td>
              Dialogue
            </td>
            <td>
              Time Posted
            </td>
          </tr>
        </thead>
        <tbody>
          {post.map((post) => (
            <tr key={post.id}>
              <td>
                {post.first_name}
              </td>
              <td>
                {post.handle}
              </td>
              <td>
                {post.message}
              </td>
              <td>
                {post.date_time}
              </td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
   </div>
  )
}