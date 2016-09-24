class SelectQuestSplits extends React.Component {
  constructor () {
    super ()
    this.state = {
      questPicker: []
    }
  }

  nextUp() {
    //method to determine which user goes next
    var users = this.props.users,
    quest = this.props.currentQuest;
    if (users.length > 0 && [quest].length > 0) {
      questID = 1
      $.ajax({
        url: `/quests/${questID}/users`,
        method: 'get'
      }).done((response) => {
        this.setState({
        questPicker: response
        })
      })
      currentUserID = this.props.currentUser.id;
      if (currentUserID === this.state.questPicker.id) {
        return (<SelectQuestForm currentQuest={this.props.currentQuest} numberOnQuest={1} currentRound={this.props.currentRound} currentUser= {this.props.currentUser} users={this.props.users}/>)
      } else {
        return (<QuestWait currentQuest={this.props.currentQuest} numberOnQuest={27}/>)
      }
    }
  }

  render () {
    return (
      <div>
        {this.nextUp()}
      </div>
      )
  }
}

