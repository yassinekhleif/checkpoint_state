import React, { Component } from 'react';
import image from './img/me.png';

class App extends Component {
  state = {
    person: {
      fullName: "Yassin Khleif",
      bio: "17yo high schooler",
      imgSrc: image,
      profession: "Front-End Developer",
    },
    show: false,
    interval: 0
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ interval: this.state.interval + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <button onClick={() => this.setState({show: !this.state.show})}>Toggle</button>
        {this.state.show &&
          <div>
            <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <p>{this.state.person.profession}</p>
          </div>
        }
        <p>Interval: {this.state.interval} seconds</p>
      </div>
    );
  }
}

export default App;
