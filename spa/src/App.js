import logo from './logo.svg';
import './App.css';
import Article from './components/Article/Article';
import React, { Component } from 'react';
import $ from 'jquery';

export function setAPP(search,mount) {
  
  a.getArticles(search,mount)
}
var a;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      search: ""


    };
    //setAPP =setAPP.bind(this);
    a = this;
  }

  componentDidMount() {
    this.getArticles("");
  }
  getArticles(title,mount) {
    debugger
    $.ajax({
      url: "https://localhost:5001/api/Articles",
      data: {
        title: title,
        _limit : mount
      }
    })
      .then(
        (result) => {

          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Nota: É importante lidar com os erros aqui
        // em vez de um bloco catch() para não recebermos
        // exceções de erros dos componentes.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      var elements=[];
      for (let index = 0; index < items.length; index++) {
        const element = items[index];
        elements.push(
          <Article noticia={element.url} Titulo={element.title} img={element.imageUrl} ></Article>
        )

      }
      return (<div className="article-list row">  {elements}</div>);

    }
  }
}
export default App;
