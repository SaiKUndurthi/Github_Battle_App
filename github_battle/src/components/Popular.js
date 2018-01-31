import React,{Component} from 'react';
import PropTypes from 'prop-types';
import '../index.css';

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

SelectedLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang){
    console.log(lang)
    this.setState(function(){
      return {
        selectedLanguage: lang,
      }
    });
  }

  render(){
    return(
      <div>
        <SelectedLanguage
          onSelect={this.updateLanguage}
          selectedLanguage={this.state.selectedLanguage}
        />
      </div>
    )
  }
}

export default Popular;
