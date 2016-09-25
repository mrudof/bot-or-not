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


  render () {
    let startQuestSelection
      var currentUserID = this.props.currentUser.id
      if (currentUserID === this.state.questPicker.id) {
        // numberOnQuest hardcoded for now
        startQuestSelection = <CreateQuest questPicker={this.state.questPicker} numberOnQuest={1} currentRound={this.props.currentRound} currentGame= {this.props.currentGame} currentUser= {this.props.currentUser} users={this.props.users}/>
      }
      else {
        startQuestSelection = <p> waiting.. </p>
        // <QuestWait numberOnQuest={1}/>
      }
    return (
      <div>
        {startQuestSelection}
      </div>
      )
  }
}
