import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


function PlayerPreview(props){
  return(
    <div>
      <div className='column'>
        <img
          className="avatar"
          src={props.avatar}
          alt={'Avatar for '+props.username}
        />
        <h2 className="username">@{props.username}</h2>
      </div>
      <button
        className="reset"
        onClick={props.onReset.bind(null, props.id)}>
        Reset
      </button>
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}


class PlayerInput extends Component{
  constructor(props){
    super(props);
    this.state={
      username:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    var value = event.target.value;
    this.setState(function(){
      return{
        username: value
      }
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.props.id, this.state.username);
  }

  render(){
    return(
      <form className='column' onSubmit={this.handleSubmit}>
        <label className='header' htmlFor='username'>
          {this.props.label}
        </label>
        <input
          id="username"
          placeholder="Github username"
          type="text"
          autoComplete='off'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button
          className='button'
          type='submit'
          disabled={!this.state.username}>
            Submit
        </button>
      </form>

    )
  }
}

class Battle extends Component{
  constructor(props){
    super(props);
      this.state = {
        playerOneName:'',
        playerTwoName:'',
        playerOneImage: null,
        playerTwoImage: null
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, username){
    this.setState(function(){
      var newState={};
      newState[id+'Name'] = username
      newState[id+'Image'] = 'https://github.com/'+username+'.png?size=200';
      return newState;
    });
  }

  handleReset(id){
    this.setState(function(){
      var newState = {};
      newState[id+'Name'] = '';
      newState[id+'Image'] = null;
      return newState;
    });
  }

  render(){
    var match = this.props.match;
    var playerOneName = this.state.playerOneName;
    var playerTwoName = this.state.playerTwoName;
    var playerOneImage = this.state.playerOneImage;
    var playerTwoImage = this.state.playerTwoImage;

    return(
      <div>
        <div className='row'>
          {!playerOneName &&
            <PlayerInput
              id="playerOne"
              label="Player One"
              onSubmit={this.handleSubmit}
          />}

          {playerOneImage !== null &&
            <PlayerPreview
              avatar={playerOneImage}
              username={playerOneName}
              id='playerOne'
              onReset={this.handleReset}
            />
          }

          {!playerTwoName &&
            <PlayerInput
              id="playerTwo"
              label="Player Two"
              onSubmit={this.handleSubmit}
          />}

          {playerTwoImage !== null &&
            <PlayerPreview
              avatar={playerTwoImage}
              username={playerTwoName}
              id='playerTwo'
              onReset={this.handleReset}
            />
          }

        </div>

        {playerOneImage !== null && playerTwoImage !== null &&
          <Link
            className='button'
            to={{
              pathname: match.url+ '/results',
              search: '?playerOneName='+playerOneName+'&playerTwoName='+playerTwoName
            }}>
              Battle
          </Link>
        }



      </div>
    )
  }
}

export default Battle;
