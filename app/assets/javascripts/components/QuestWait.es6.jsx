class QuestWait extends React.Component {
  constructor () {
    super ()
    this.state = {
      members: [],
      done: false
    }
  }

  componentWillMount() {
    //need to reset later to this.props.currentQuest.id !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
      }, 1000);
  } 

  render () {
    let toDo
    if (this.state.done === true) {
      toDo = <QuestVote currentGame={this.props.currentGame} currentQuest={this.props.currentQuest} members={this.state.members} currentUser={this.props.currentUser} users={this.props.users}/>
      // (<QuestVote/>)
    }
    else {
      toDo = <p>We are waiting for the questpicker to pick the quest.</p>
    }
    return (
      <div>
        {toDo}
      </div>
      )
  }
}
