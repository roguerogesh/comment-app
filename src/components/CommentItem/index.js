// Write your code here
import './index.css'

const CommentItem = props => {
  const {eachComment, deleteComment, toggleIsLiked} = props
  const {id, username, comment, date, isLiked, initialClassName} = eachComment
  const onDeleteComment = () => {
    deleteComment(id)
  }

  const isLikedImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const onToggleIsLiked = () => {
    toggleIsLiked(id)
  }

  return (
    <li className="list-item">
      <div className="top-container">
        <div className={`profile-letter ${initialClassName}`}>
          {username[0]}
        </div>
        <h1 className="user-name">{username}</h1>
        <p className="date">{date}</p>
      </div>
      <p className="comments">{comment}</p>
      <div className="like-and-delete">
        <img
          src={isLikedImg}
          className="liked-img"
          alt="like"
          onClick={onToggleIsLiked}
        />
        <button data-testid="delete" onClick={onDeleteComment}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
