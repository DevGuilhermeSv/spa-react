import logo from './logo.svg';
import './App.css';
import Article from './components/Article';
import React, { Component } from 'react';
import $ from 'jquery';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      elements: []

    };
  }

  componentDidMount() {
    $.get("https://localhost:5001/api/Articles/")
      //.then(res => res.statusText())
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
    const { error, isLoaded, items, elements } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      for (let index = 0; index < items.length; index++) {
        const element = items[index];
        elements.push(
          <Article Titulo="Teste" img={element.imageUrl} Descricao=""></Article>
        )
       
      }
      return ( <div className="article-list row">  {elements}</div>);

    }
  }
}
export default App;
