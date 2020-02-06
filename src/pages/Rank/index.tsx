import React, {memo} from 'react';
import { getBannerRequest } from '../../api';

function Rank () {
  return (
    <div>
      <button onClick={() => {
        getBannerRequest()
      }}>点我</button>
    </div>
  )
}

export default memo(Rank);