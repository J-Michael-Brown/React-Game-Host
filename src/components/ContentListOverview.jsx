import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {CollectionItem} from 'react-materialize';

function ContentListOverview(props){
  return(
    <div>
      <Link to={`/view/${props.contentId}`}><CollectionItem href='#'>{props.name}</CollectionItem></Link>
    </div>
  )
}

ContentListOverview.propTypes = {
  contentId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default ContentListOverview;
