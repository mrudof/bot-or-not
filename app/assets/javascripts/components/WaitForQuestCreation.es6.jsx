class WaitForQuestCreation extends React.Component {
  constructor () {
    super ()
    this.state = {
      members: ["not initialized"],
      latestQuest: [],
      done: false,
      numberOnQuest: 0
    }
  }
  componentWillMount() {
    var gameID = this.props.currentGame.id
    var roundID = this.props.currentRound.id
    $.ajax({
      url: `/games/${gameID}/rounds/${roundID}`,
      method: 'GET'
    }).done((response) => {
      this.setState({
        numberOnQuest: response
      })
    })
    var that = this
    var myLittleTimer = setInterval(() => {
      $.ajax({
            url: `/games/${gameID}/rounds/${roundID}/latest_quest`,
            method: 'get'
          })
          .done((response) => {

            that.setState({
            members: response["members"],
            latestQuest: response["quest"]
            })
          }.bind(this))
        if (that.state.members.length === 0) {
          that.setState({
            done: true
          })
          clearInterval(myLittleTimer)
        }
    }, 2000);

  }

  render () {
    let renderQuestWait;
    if (this.state.done) {
          renderQuestWait = <QuestWait questPicker={this.props.questPicker} currentQuest={this.state.latestQuest} currentRound={this.props.currentRound} currentGame= {this.props.currentGame} currentUser= {this.props.currentUser} users={this.props.users} numberOnQuest={this.state.numberOnQuest} countRounds={this.props.countRounds}/>
    } else {
      renderQuestWait =
      <div>
        <br/>
        <p className="hide-at-end"> We are waiting for {this.props.questPicker.name} to create a mission.</p>
      </div>
    }

    return (
      <div>
        {renderQuestWait}
      </div>
    )
  }
}
