import React from 'react';
import ContentListOverview from './ContentListOverview';
import PropTypes from 'prop-types';
import {v4} from 'uuid';
import {Collection} from 'react-materialize';

function ContentList(props){
  return(
    <div>
      <Collection>
        {Object.keys(props.contentInfoList).map((contentInfoId) => {
          let contentInfo = props.contentInfoList[contentInfoId];
          return(
            <ContentListOverview
              name={contentInfo.name}
              contentId={contentInfo.id}
              key={v4()}/>
          )
        })}
      </Collection>
    </div>
  )
}

ContentList.propTypes = {
  contentInfoList: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    devs: PropTypes.arrayOf(PropTypes.string).isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default ContentList;
