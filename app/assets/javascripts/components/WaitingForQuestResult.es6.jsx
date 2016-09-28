class WaitingForQuestResult extends React.Component {
  constructor () {
    super ()
    this.state = {
      results: [],
      done: false
    }
  }

  componentWillMount() {
    var questID = this.props.currentQuest.id
    var that = this
    var yourFinalTimer = setInterval(() => {
      if (that.state.results.length < that.props.members.length) {
        $.ajax({
            url: `/quests/${questID}/quest_members/results`,
            method: 'get'
          }).done((response) => {
            if (response[0] != null) {
            that.setState({
              results : response
            })
          }
          }.bind(this))
        } else {
            that.setState({
              done: true
            })
          clearInterval(yourFinalTimer);
        }
      }, 1000);
  }


  render(){
    let timeForResults
    if (this.state.done) {
       timeForResults = <QuestResults currentGame={this.props.currentGame} currentQuest={this.props.currentQuest} members={this.props.members} currentUser={this.props.currentUser} users={this.props.users}/>
    } else {
      timeForResults = <p> Waiting for ALL results of quest </p>
    }
    // debugger
    return(
      <div>{timeForResults}</div>
    )
  }
}
