import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";

const getAllPostsURL = "http://localhost:8080/post/alldesc"

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
              Dialogue
            </td>
            <td>
              Time Posted
            </td>
          </tr>
        </thead>
        <tbody>
          {post.map((post, index) => (
            <tr key={index.id}>
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
              {moment(post.date_time).format('MMMM Do YYYY, h:mm:ss a')}
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
