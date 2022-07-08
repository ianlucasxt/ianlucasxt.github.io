import React from 'react'
import './index.css';

function CommentCard(props) {
  const {comments} =props
  const {id,name,body,email} = comments;
  console.log(comments)
  return (
		<div className="card">
      <div className="name">
				{`${name}`}
				<i class="bi bi-person-circle"></i>
			</div>
			<div className="line"></div>
			<div className="body">{`${body}`}</div>
			<div className="email">{`~${email}`}</div>
		</div>
	);
}

export default CommentCard