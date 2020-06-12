import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Posts from '../../containers/Posts';

import Loading from '../../components/Loading';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [users, setUsers] = useState({})
  const [posts, setPosts] = useState([])
  const [stories, setStories] = useState([])
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  useEffect(() => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories')
      .then(res => res.json())
      .then(data => setStories(data))
  }, [])

  useEffect(() => {
    if (index === users.length) {
      setLoading(false)
      return
    }

    if (index <= users.length) {
      fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[index].id}/posts`)
      .then(res => res.json())
      .then(data => {
        setPosts([...posts, ...data])
        setIndex(index + 1)
      })
    }
  }, [index, users, posts])
  
  const getUserHandler = id => users.find(user => user.id === id)

  return (
    <div data-testid="feed-route">
      {(users && stories) && (<Stories stories={stories} getUserHandler={getUserHandler} />)}
      {loading
        ? <Loading/>
        : (users && posts) && <Posts posts={posts} getUserHandler={getUserHandler}/>
      }
    </div>
  );
};

export default FeedRoute;
