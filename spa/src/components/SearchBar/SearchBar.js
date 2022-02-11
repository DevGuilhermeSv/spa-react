
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import $ from 'jquery';
import App, { setAPP } from '../../App';
import './SearchBar.css'
export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };
    }
    componentDidMount() {
    }
    renderAPP(event) {
        const search = $('#search-bar').val();
        const mount = $('select').val();
        setAPP(search,mount);
    }

    render() {
        return (
            <div className="d-flex form-area">
                
                    <input id='search-bar' type={"text"} />
                
                
                <select  onChange={this.renderAPP} class="form-select" aria-label="amount itens">
                    <option selected value="10">10</option>
                    <option value="30">30</option>
                    <option value="100">100</option>
                </select>
                <button onClick={this.renderAPP} id="buscar-btn" className="btn btn-primary">Buscar</button>
                
                
            </div>
        )
    }
}


