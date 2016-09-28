class WaitingForQuestResult extends React.Component {
  // constructor () {
  //   super ()
  //   this.state = {
  //     votes: [],
  //     done: false
  //   }
  // }
  render(){
    // debugger
    return(
        <QuestResults  memberID={this.props.memberID} currentGame={this.props.currentGame} currentQuest={this.props.currentQuest} members={this.props.members} currentUser={this.props.currentUser} users={this.props.users}/>
    )
  }
}
