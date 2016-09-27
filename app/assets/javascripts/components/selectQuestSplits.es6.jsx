class SelectQuestSplits extends React.Component {
  constructor () {
    super ()
    this.state = {
      questPicker: []
    }
  }



  render () {
    let startQuestSelection
    let currentUserID = this.props.currentUser.id
      if (currentUserID === this.state.questPicker.id) {
        // numberOnQuest hardcoded for now
        startQuestSelection = <CreateQuest updateGameStage={this.props.updateGameStage} questPicker={this.state.questPicker} numberOnQuest={1} currentRound={this.props.currentRound} currentGame= {this.props.currentGame} currentUser= {this.props.currentUser} users={this.props.users}/>
      }
      else {
        startQuestSelection =
        // startQuestSelection = <p>Waiting for {this.state.questPicker.name} to select the members of the quest.</p>
        <WaitForQuestCreation currentRound={this.props.currentRound} currentGame= {this.props.currentGame} currentUser= {this.props.currentUser} users={this.props.users} numberOnQuest={1}/>
      }
    return (
      <div>
        {startQuestSelection}
      </div>
      )
  }
}
