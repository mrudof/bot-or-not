class CreateQuest extends React.Component {
  constructor () {
    super ()
    this.state = {
      quest: "",
      numberOnQuest: ""
    }
     this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
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

    $.ajax({
      url: `/games/${gameID}/rounds/${roundID}`,
      method: 'GET'
    }).done((response) => {
      this.setState({
        numberOnQuest: response
      })
    })
   }

  render () {
    // do we really need to have the create quest button, or can we show the select quest form directly?
    let showButton
      if (this.state.quest === "") {
        showButton =
        <div>
          <br/>
          <form className="hide-at-end" onSubmit={this.handleSubmit}>
            <input value="Create Quest" type="submit" className="btn btn-success"/>
          </form>
        </div>
      } else {
        showButton =
        <SelectQuestForm updateGameStage={this.props.updateGameStage} currentGame={this.props.currentGame} currentQuest={this.state.quest} numberOnQuest={this.state.numberOnQuest} currentRound={this.props.currentRound} currentUser= {this.props.currentUser} users={this.props.users}/>

      }
    return (
      <div>
        {showButton}
      </div>
      )
  }
}
