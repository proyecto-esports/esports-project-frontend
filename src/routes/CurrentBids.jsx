import React, { useEffect, useState } from 'react';

import { useAuth } from '../hooks/AuthContext';
import { API } from '../services/Api.js';

const CurrentBids = () => {
  const { user } = useAuth();
  const [currentBids, setCurrentBids] = useState();

  useEffect(() => {
    API.get('/bids').then((res) => {
      const { data } = res.data.info;
      const bids = data.map((bid) => bid.user === user._id.toString());
      setCurrentBids(bids);
    });
  }, []);

  return <div>CurrentBids</div>;
};

export default CurrentBids;
