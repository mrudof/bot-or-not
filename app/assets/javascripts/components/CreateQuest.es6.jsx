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
    let checkCard
    if (this.props.countGameQuests === 0) {
      checkCard = <p><strong> Please remember to check your card! </strong></p>
    } else {
      checkCard = <p></p>
    }
    let showButton
      if (this.state.quest === "") {
        showButton =
        <div>
          {checkCard}
          <br/>
          <form className="hide-at-end pushed_left_less" onSubmit={this.handleSubmit}>
            <input value="Create Mission" type="submit" className="btn btn-success btn-robot"/>
          </form>
        </div>
      } else {
        showButton =
        <SelectQuestForm currentGame={this.props.currentGame} currentQuest={this.state.quest} numberOnQuest={this.state.numberOnQuest} currentRound={this.props.currentRound} currentUser= {this.props.currentUser} users={this.props.users} countRounds={this.props.countRounds}/>

      }
    return (
      <div>
        {showButton}
      </div>
      )
  }
}
