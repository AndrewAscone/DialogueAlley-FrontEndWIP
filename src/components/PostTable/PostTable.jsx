import Table from "react-bootstrap/Table";
import axios from "axios";
import React, { useEffect, useState } from "react";

const getAllPostsURL = "http://localhost:8080/post/all"

export default function PostTable(){
  
  const [post, setPost] = useState([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    const response = await axios.get(getAllPostsURL)
    setPost(response.data)
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
              Message
            </td>
            <td>
              Time Posted
            </td>
          </tr>
        </thead>
        <tbody>
          {post.map((post, index) => (
            <tr>
              <td>
                {post.assoc_account.first_name}
              </td>
              <td>
                {post.assoc_account.handle}
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

//export default PostTable;
