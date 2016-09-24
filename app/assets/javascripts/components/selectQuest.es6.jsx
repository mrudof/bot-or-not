class SelectQuest extends React.Component {
  constructor () {
    super ()
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    var gameID = this.props.currentGame.id,
    roundID = this.props.currentRound.id;

    $.ajax({
      url: `/games/${gameID}/rounds/${roundID}/quests/new`,
      method: 'GET'
    }).done((response) => {
      this.setState({
        users: response
      })
    })
  }

  render () {
    return (
      <div>
        <SelectQuestSplits currentRound={this.props.currentRound} currentUser= {this.props.currentUser} users={this.state.users} />
      </div>
      )
  }
}

