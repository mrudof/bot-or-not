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

    return(
      <div className="jumbotron">
        <h2>{this.props.currentUser.name}</h2>
        {characterCard}
        <div className="btn-group">
          <button type="button" className="btn btn-success">OK</button>
        </div>

      </div>
    )
  }
}
