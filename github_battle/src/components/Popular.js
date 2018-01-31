import React,{Component} from 'react';
import '../index.css'

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
    var languages = ["All", "Java", "JavaScript", "Ruby", "CSS"];
    return(
      <ul className="languages">
        {languages.map((lang) => {
          return(
            <li
              style= {lang === this.state.selectedLanguage ? {color: '#d0021b'}: null}
              onClick= {this.updateLanguage.bind(null,lang)}
              key={lang}>
              {lang}
            </li>
          );
        })
      }
      </ul>
    )
  }
}

export default Popular;
