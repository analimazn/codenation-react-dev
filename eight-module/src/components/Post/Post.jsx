import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  const [follow, setFollow] = useState(false)
  const [like, setLike] = useState(false)
  
  const toggleFollow = () => {
    setFollow(!follow)
  }

  const toggleLike = () => {
    setLike(!like)
  }

  return (
    <article className="post" data-testid="post">
      {userInfo
        ? <>
            <header className="post__header">
              <div className="user">
                <Link to={`/users/${userInfo.username}`} className="user__thumb">
                  <img src={userInfo.avatar} alt={userInfo.name}/>
                </Link>
                <Link to={`/users/${userInfo.username}`} className="user__name">
                  {userInfo.name}
                </Link>
              </div>
              <button
                className="post__context"
                onClick={() => toggleFollow()}
              >
                { follow
                  ? <span className={"follow-btn is-following"}>Seguindo</span>
                  : <span className={`follow-btn`}>Seguir</span>
                }
              </button>
            </header>
            
            <figure className="post__figure">
              <img src={postInfo.imageUrl} alt={`post${postInfo.id}`}/>
            </figure>
            
            <nav className="post__controls">
              <button
                className="post__control"
                onClick={() => toggleLike()}
              >
                { like
                    ? <i className="fas fa-heart"/>
                    : <i className="far fa-heart"/>
                }
              </button>

              <div className="post__status">
                <div className="user">
                {(userInfo && postInfo.comments) &&
                  <span>curtido por
                    <Link to="/">
                      &nbsp;{postInfo.comments[0]?.name }
                    </Link>
                      &nbsp;e outra{(postInfo.comments.length - 1) > 1 && 's'}
                    <Link to="/">
                      &nbsp;{postInfo.comments.length - 1}
                      &nbsp;pessoa{(postInfo.comments.length - 1) > 1 && 's'}
                    </Link>
                  </span>
                }
                </div>
              </div>
            </nav>
          </>
        : <figure className="post__figure">
            <img src={postInfo.imageUrl} alt={`post${postInfo.id}`}/>
          </figure>
      }
    </article>
  );
};

export default Post;
