import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = ({ loading }) => {
  return (
    <div data-testid="feed-route">
      { loading
        ? <Loading />
        : <div>
            <Stories />
            <Posts />
          </div>
      }
    </div>
  );
};

export default FeedRoute;
