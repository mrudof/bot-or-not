class QuestWait extends React.Component {
  constructor () {
    super ()
    this.state = {
      members: [],
      done: false
    }
  }

  componentWillMount() {
    questID = this.props.currentQuest.id
    var that = this
    var myTimer = setInterval(() => {
      if (that.state.members.length < that.props.numberOnQuest) {
        $.ajax({
            url: `/quests/${questID}/quest_members`,
            method: 'get'
          }).done((response) => {
            that.setState({
              members: response
            })
          }.bind(this))
        } else {
            that.setState({
              done: true
            })
          clearInterval(myTimer);
        }
      }, 2000);
  }

  render () {
    let toDo
    if (this.state.done === true) {
      toDo = <QuestVote currentGame={this.props.currentGame} currentQuest={this.props.currentQuest} members={this.state.members} currentUser={this.props.currentUser} users={this.props.users} countRounds={this.props.countRounds}/>
      // (<QuestVote/>)
    }
    else {
      toDo =
      <div>
        <br/>
        <p className="welcome current_players_text">We are waiting for {this.props.questPicker.name} to pick the mission.</p>
      </div>
    }
    return (
      <div>
        {toDo}
      </div>
      )
  }
}
