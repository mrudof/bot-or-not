class SucceedQuest extends React.Component {
  constructor(){
    super()
    this.state ={
      votes: []
    }
  }


  componentWillMount(){
    const gameID = this.props.currentGame.id

    var questID = this.props.currentQuest.id
    var questMemberID = this.props.currentUser.id
    $.ajax({
      method: 'get',
      url: `/quests/${questID}/quest_memebers/${questMemberID}`
    }).done((response) => {
      this.setState({
        votes: response
      })
    }.bind(this))

    


  }







  render () {
    return(
      <div>
        <h1>Shows quest members succeed or fail button. (or waiting screen) component</h1>
      </div>
    )
  }
}
