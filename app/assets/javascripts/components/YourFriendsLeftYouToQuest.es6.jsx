class YourFriendsLeftYouToQuest extends React.Component {
  constructor(){
    super()
    this.state = {
      quest_members: []
    }
  }

  render(){
    return(
      <ul>{
        this.state.quest_members.map((member, idx) => {
          <li>member.name</li>
        })
      }</ul>
      <h2>Are all on a quest and didn't take you. =( </h2>
        // waiting for people to succeed or fail quest
        // taken to next component once all voting has been done
    )
  }
}
