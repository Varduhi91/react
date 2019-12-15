import React, { PureComponent } from 'react';
import './App.css';
import Team from './Team'

export default class App extends PureComponent {
  minInterval;

  constructor() {
    super();

    this.state = {
      data: [
        { team1: new Team("Brazil"), team2: new Team("Germany") },
        { team1: new Team("Greece"), team2: new Team("Portug") },
        { team1: new Team("Italy"), team2: new Team("Spain") },
        { team1: new Team("Armenia"), team2: new Team("Russia") },
        { team1: new Team("Norvegia"), team2: new Team("Shvedia") },
        { team1: new Team("Gorgia"), team2: new Team("Armenia") },
        { team1: new Team("Macedonia"), team2: new Team("Austria") },
        { team1: new Team("England"), team2: new Team("USA") },
        { team1: new Team("Latvia"), team2: new Team("Litva") },
        { team1: new Team("Kanada"), team2: new Team("Makedonia") }
      ],
      minutes: 90,
      seconds: 0
    }
  }

  componentDidMount() {
    this.minInterval = setInterval(() => {
      let min = this.state.minutes;
      let sec = this.state.seconds;

      if (sec === 0) {
        sec = 59;
        min--;
      }
      else {
        sec--;
      }

      if (min === 0 && sec === 0) {
        clearInterval(this.minInterval);
      }

      this.setState({
        minutes: min,
        seconds: sec
      })
    }, 1000)
  }

  setScore(index, team) {
    this.setState((state) => {
      var newData = state.data.slice();
      newData[index][team].score++;
      return { data: newData };
    })
  }

  parse(num) {
    return num < 10 ? '0' + num : num;
  }

  render() {
    const elements = this.state.data.map(({ team1, team2 }, index) => {

      return (
        <div key={index}>
          <button
            onClick={() => this.setScore(index, "team1")}
            style={{ width: "100px", height: "25px" }}>
            {team1.name}
          </button>
          <span>{team1.score} - {team2.score}</span>
          <button
            onClick={() => this.setScore(index, "team2")}
            style={{ width: "100px", height: "25px" }}>
            {team2.name}
          </button>

        </div>
      )
    })

    return <div>
      <p>
        <span>{this.parse(this.state.minutes)}:</span>
        <span>{this.parse(this.state.seconds)}</span>
      </p>
      {elements}
    </div>
  }
}
