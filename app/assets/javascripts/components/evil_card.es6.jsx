class EvilCard extends React.Component {

  render () {
    showPic = <img src={`/${this.props.currentUser.character}.jpg`} className="img-responsive" />
    showName = <p>You are {this.props.currentUser.character}!</p>
    return(
      <div>
        {showPic}
        {showName}
        <h2>Secretly a robot.</h2>
        <p>Other robots:</p>
        {
          this.props.users.map((user ,i) => {
            if (user.good === false && this.props.currentUser.id != user.id) {
              return (<p key={i}>{user.name}</p>)
            }
          })
        }
      </div>
    )
  }
}
