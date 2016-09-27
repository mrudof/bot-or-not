class YouAreOnAQuest extends React.Component {

  constructor(){
    super()
    this.state = {
      show_button: true
    }
  }

  handleOnQuestVote(event){
    event.preventDefault
    // debugger
    const questID = this.props.currentQuest.id
    const memberID = this.props.memberID
    $.ajax({
      url: `/quests/${questID}/quest_members/${memberID}`,
      method: 'PUT',
      data: { vote: event.action }
    }).done((response) => {
      // this.props.updateGameStage("questVoteDone")
      this.setState({
        show_button: false
      })
    })
  }

  render () {
    // debugger
    // in order to hide button, check for this in whatever is returned:
    // if (this.state.show_button === true

    let questComplete
    if (this.state.show_button === true){
      questComplete =
        <div>
          <h4>Succeed or Fail Quest!</h4>
          <section>
              <input ref="Succeed" type="submit" value="Succeed" name="vote" onClick={this.handleOnQuestVote.bind(this, {action: "Succeed"})}/>
              <input ref="Failed" type="submit" value="Fail" name="vote" onClick={this.handleOnQuestVote.bind(this, {action: "Fail"})}/>
          </section>
        </div>
    } else {
      questComplete =
       <p>QUEST COMPLETED!</p>
    }

    return(
      <div>
        {questComplete}
      </div>
    )
  }
}
