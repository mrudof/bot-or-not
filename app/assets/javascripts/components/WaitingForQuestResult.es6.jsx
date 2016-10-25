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
              function isNull(item) {return item != null}
              const notNullResponse = response.filter(isNull)
              console.log(`${this.props.members}`, `${notNullResponse}`)
            that.setState({
              results : notNullResponse
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
       timeForResults = <QuestResults currentGame={this.props.currentGame} currentQuest={this.props.currentQuest} members={this.props.members} currentUser={this.props.currentUser} users={this.props.users} countRounds={this.props.countRounds}/>
    } else {
      timeForResults =
      <div>
        <h3 className="welcome">The proposed mission was approved!</h3>
        <p className="pink_letters">Now we wait.</p>
      </div>
    }
    return(
      <div>{timeForResults}</div>
    )
  }
}
