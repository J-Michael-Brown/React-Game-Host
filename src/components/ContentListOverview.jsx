import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { Col, Card } from 'react-materialize';

function ContentListOverview(props){
  return(
    <div>
      <Col m={6} s={12}>
      <Link to={`/view/${props.contentId}`}>
        <Card className='blue-grey darken-1' textClassName='white-text' title={props.name}>
        </Card>
        </Link>
      </Col>
    </div>
  )
}

ContentListOverview.propTypes = {
  contentId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default ContentListOverview;
