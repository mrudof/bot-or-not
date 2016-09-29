class CountdownTimer extends React.Component {
  constructor(){
    super()
    this.state = {
      secondsRemaining: 0
    }
    this.tick = this.tick.bind(this)
  }

  tick() {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1})
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval)
    }
  }

  componentDidMount() {
    this.setState({ secondsRemaining: this.props.secondsRemaining })
    this.interval = setInterval(this.tick, 1000)
    setTimeout(() => {
      location.reload()
    }, 10000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <span>New mission will start in {this.state.secondsRemaining} seconds</span>
    );
  }
}
