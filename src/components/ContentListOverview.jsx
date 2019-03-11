import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function ContentListOverview(props){
  return(
    <div>
      <Link to={`/play/${props.contentId}`}>{props.name}</Link>
    </div>
  )
}

ContentListOverview.propTypes = {
  contentId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default ContentListOverview;
