import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {comment: '', username: '', commentsList: [], numberOfComments: 0}

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachList => {
        if (eachList.id === id) {
          return {...eachList, isLiked: !eachList.isLiked}
        }
        return eachList
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()

    const {username, comment} = this.state

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      username,
      comment,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      username: '',
      comment: '',
      numberOfComments: prevState.numberOfComments + 1,
    }))
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const filteredComment = commentsList.filter(
      eachComment => eachComment.id !== id,
    )

    this.setState({commentsList: filteredComment})
  }

  render() {
    const {comment, username, commentsList, numberOfComments} = this.state
    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="add-comment-container">
            <h1 className="heading">Comments</h1>

            <p className="message">Say something about 4.0 Technologies</p>
            <form
              className="add-comment-container"
              onSubmit={this.onAddComment}
            >
              <input
                type="text"
                className="input-bar"
                placeholder="Your Name"
                value={username}
                onChange={this.onChangeUserName}
              />
              <textarea
                type="text"
                placeholder="Your Comment"
                cols="300"
                rows="8"
                className="text-area"
                value={comment}
                onChange={this.onChangeComment}
              ></textarea>
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comment-img"
          />
        </div>

        <div className="comments-count-container">
          <div className="number-of-comments">{numberOfComments}</div>
          <p className="comment">Comments</p>
        </div>
        <ul className="comment-list-container">
          {commentsList.map(eachComment => (
            <CommentItem
              eachComment={eachComment}
              key={eachComment.id}
              deleteComment={this.deleteComment}
              toggleIsLiked={this.toggleIsLiked}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
