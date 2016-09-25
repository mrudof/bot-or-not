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
    console.log(`the url: /games/${gameID}/users/choose`)
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
  startQuestSelection() {
      var currentUserID = this.props.currentUser.id
      if (currentUserID === this.state.questPicker.id) {
        // numberOnQuest hardcoded for now
        return (<CreateQuest questPicker={this.state.questPicker} numberOnQuest={1} currentRound={this.props.currentRound} currentGame= {this.props.currentGame} currentUser= {this.props.currentUser} users={this.props.users}/>)
      } else {
        return (<p>waiting..</p>)
        // return (<QuestWait currentQuest={this.props.currentQuest} numberOnQuest={1}/>)
      }
    }

  render () {
    return (
      <div>
        {this.startQuestSelection()}
      </div>
      )
  }
}
