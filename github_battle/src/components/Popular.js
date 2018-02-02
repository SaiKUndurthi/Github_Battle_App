import React,{Component} from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import api from '../util/api';

function EachLanguage(props){
  return(
    <li
      style= {props.elang === props.selectedLanguage ? {color: '#d0021b'}: null}
      onClick= {props.onSelect.bind(null, props.elang)}
    >
      {props.elang}
    </li>
  )
}

function SelectedLanguage(props){
  var languages = ["All", "Java", "JavaScript", "Ruby", "CSS"];
  return(
    <ul className="languages">
      {languages.map((lang) => {
        return(
          <EachLanguage selectedLanguage={props.selectedLanguage} onSelect={props.onSelect} key={lang} elang={lang} />
        );
      })
    }
    </ul>
  )
}

function RepoGrid(props){
  return(
    <ul className='popular-list'>
      {props.repos.map(function(repo, index){
        return(
          <li key={repo.name} className="popular-item">
            <div className='popular-rank'>#{index+1}</div>
            <ul className='space-list-items'>
              <li>
                <img
                  className='avatar'
                  src={repo.owner.avatar_url}
                  alt={'Avatar for' + repo.owner.login}
                  />
                </li>
                <li><a href={repo.html_url}>{repo.name}</a></li>
                <li>@{repo.owner.login}</li>
                <li>{repo.stargazers_count} stars</li>
              </ul>
          </li>
        )
      })
    }
    </ul>
  )
}

SelectedLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount(){
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang){
    api.fetchPopularRepos(lang).then(function(response){
      this.setState(function(){
        console.log(this)
        return {
          selectedLanguage: lang,
          repos: response
        }
      })
    }.bind(this))
  }

  render(){
    return(
      <div>
        <SelectedLanguage
          onSelect={this.updateLanguage}
          selectedLanguage={this.state.selectedLanguage}
        />
        {!this.state.repos
          ? <p>LOADING</p>
          : <RepoGrid repos={this.state.repos} />
        }
      </div>
    )
  }
}

export default Popular;
