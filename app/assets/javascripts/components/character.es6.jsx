class Character extends React.Component {
  render () {
    // console.log("this.props for Character are ", this.props)
    // console.log("this.props.currentUser.good for Character is ", this.props.currentUser.good)
    // replace isGood with current_user.good

    const isGood = this.props.currentUser.good

    let characterCard
    if (isGood) {
      characterCard = <GoodCard currentUser={this.props.currentUser} users={this.props.users}/>
    } else {
      characterCard = <EvilCard currentUser={this.props.currentUser} users={this.props.users}/>
    }

    totalUsers = this.props.users.length
    function isRobot(user) {
      return user.good === false;
    }
    totalRobots = this.props.users.filter(isRobot).length

    return(
      <div className="jumbotron">
        <h2>{this.props.currentUser.name}</h2>
        {characterCard}
         <p><strong>You are playing with {totalUsers} total players. There are {totalRobots} robots among you.</strong></p>
        <div className="btn-group">
          <button type="button" className="btn btn-success">OK</button>
        </div>

      </div>
    )
  }
}
