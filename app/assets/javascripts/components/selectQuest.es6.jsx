class SelectQuest extends React.Component {
  constructor () {
    super ()
    this.state = {
      users: [],
      quest: []
    }
  }
  componentWillMount() {
    var gameID = this.props.currentGame.id,
    roundID = this.props.currentRound.id;
    //gets the users
    $.ajax({
      url: `/games/${gameID}/rounds/${roundID}/quests/new`,
      method: 'GET'
    }).done((response) => {
      this.setState({
        users: response
      })
    })
    //creates the quest
    var gameID = this.props.currentGame.id,
    roundID = this.props.currentRound.id;
    $.ajax({
      url: `/games/${gameID}/rounds/${roundID}/quests`,
      method: 'Post'
    }).done((response) => {
      this.setState({
        quest: response
      })
    })

  }

  render () {
    return (
      <div>
        <SelectQuestSplits currentQuest={this.state.quest} currentGame={this.props.currentGame} currentRound={this.props.currentRound} currentUser= {this.props.currentUser} users={this.state.users} />
      </div>
      )
  }
}

