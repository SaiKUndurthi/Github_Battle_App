import React from 'react';
import PropTypes from 'prop-types';

var ShowList = function(props){
//class ShowList extends Component {
  //render(){
    return(
      <div>
      <ul>
      {props.list.filter(function(friend){
          return friend[0] === 'K';
        }).map(function(startwithK){
          return <li key={startwithK}>{startwithK}</li>;
        })
      }
      </ul>
      </div>
    )
  }
//}

ShowList.propTypes = {
  list: PropTypes.array.isRequired,
}


export default ShowList;
