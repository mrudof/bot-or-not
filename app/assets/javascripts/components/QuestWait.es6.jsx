class QuestWait extends React.Component {
  constructor () {
    super ()
    this.state = {
      members: [],
      done: false
    }
  }
  componentDidMount() {
    //need to reset later to this.props.currentQuest.id;
    questID = 1
    var that = this
    var myTimer = setInterval(() => {
      if (that.state.members.length < that.props.numberOnQuest) {
        $.ajax({
            url: `/quests/${questID}/quest_members`,
            method: 'get'
          }).done((response) => {
            this.setState({
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
  toDo(){
    if (this.state.done === true) {
      return(<QuestVote/>)
    }
  }


  render () {
    return (
      <div>
        {this.toDo()}
      </div>
      )
  }
}

