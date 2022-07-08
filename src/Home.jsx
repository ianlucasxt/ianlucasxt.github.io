import { useEffect, useState } from "react"
import React  from 'react'
import axios from "axios"
import {CircularProgress} from "@material-ui/core"
import CommentCard from "./CommentCard"
import Header from "./Header"


function Home() {
  const [comment,setComment] = useState();

     useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/comments')
       .then((res)=>{
        const commentData = res.data
        setComment(commentData);
       })
     }, [])
     return ( 
      comment ? (
        <div style={{
          display:"flex",
          flexDirection:"row",
          flexWrap: "wrap",
          alignItems:"center",
          justifyContent:"center"
        }}>
          <Header />
          {comment.map((comments) => (
            
            <CommentCard key={comments.id} comments={comments} />
          ))}
        </div>
           
      )
       :
       (
       <CircularProgress/>)

  )
}

export default Home