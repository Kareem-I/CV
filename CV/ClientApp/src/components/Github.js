import React, { Component } from 'react';

export class Github extends Component {
    static displayName = Github.name;

    numberofRepos = 0;

    constructor() {
        super();
        this.state = {
            numberofRepos: 0
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/users/Kareem-I/repos')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    numberofRepos: json.length
                })
            });
    }

    render() {
        return (
            <div>
                <h1>Hello Kitty!</h1>
                <p>Antalet Repos i min Github just nu: {this.state.numberofRepos}</p>
            </div>
        );
    }
}

