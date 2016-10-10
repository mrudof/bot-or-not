class SelectQuestSplits extends React.Component {
  constructor () {
    super ()
    this.state = {
      questPicker: []
    }
  }


  componentWillMount() {
    const gameID = this.props.currentGame.id

    // returns the user whose turn it is to pick the quest
    // const gameID = this.props.currentGame.id
    // console.log(`the url: /games/${gameID}/users/choose`)

    $.ajax({
          url: `/games/${gameID}/users/choose`,
          method: 'get'
        })
        .done((response) => {
          this.setState({
          questPicker: response
          })
        })
  }


  render () {
    let startQuestSelection
    let currentUserID = this.props.currentUser.id
      if (currentUserID === this.state.questPicker.id) {
        // numberOnQuest hardcoded for now
        startQuestSelection = <CreateQuest questPicker={this.state.questPicker} currentRound={this.props.currentRound} currentGame= {this.props.currentGame} currentUser= {this.props.currentUser} users={this.props.users}/>
      }
      else {
        startQuestSelection =
        // startQuestSelection = <p>Waiting for {this.state.questPicker.name} to select the members of the quest.</p>
        <WaitForQuestCreation currentRound={this.props.currentRound} currentGame= {this.props.currentGame} currentUser= {this.props.currentUser} users={this.props.users} questPicker={this.state.questPicker} />
      }
    return (
      <div>
        {startQuestSelection}
      </div>
      )
  }
}
