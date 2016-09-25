class SelectQuest extends React.Component {
  constructor () {
    super ()
    this.state = {
      users: []
    }
  }

// purpose of this page: get the users and create a quest
  componentWillMount() {
    // const $ = require ('jquery')
    const gameID = this.props.currentGame.id
    const roundID = this.props.currentRound.id
    //gets the users
    $.ajax({
      url: `/games/${gameID}/rounds/${roundID}/quests/new`,
      method: 'GET'
    }).done((response) => {
      this.setState({
        users: response
      })
      console.log("the players of the game are:", this.state.users )
    })
  }

  render () {
    return (
      <div>
        <SelectQuestSplits updateGameStage={this.props.updateGameStage} currentGame={this.props.currentGame} currentRound={this.props.currentRound} currentUser= {this.props.currentUser} users={this.state.users} />
      </div>
      )
  }
}
