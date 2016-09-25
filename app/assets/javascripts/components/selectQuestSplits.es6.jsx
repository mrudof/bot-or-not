class SelectQuestSplits extends React.Component {
  constructor () {
    super ()
    this.state = {
      quest: "",
      questPicker: []
    }
  }

  componentWillMount() {
    //creates the quest
    const gameID = this.props.currentGame.id
    const roundID = this.props.currentRound.id
    $.ajax({
      url: `/games/${gameID}/rounds/${roundID}/quests`,
      method: 'POST'
    }).done((response) => {
      this.setState({
        quest: response
      })
    })
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
        return (<SelectQuestForm currentQuest={this.state.quest} numberOnQuest={1} currentRound={this.props.currentRound} currentUser= {this.props.currentUser} users={this.props.users}/>)
      } else {
        return (<p>waiting for quest</p>)
        // return (<QuestWait currentQuest={this.props.currentQuest} numberOnQuest={27}/>)
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
