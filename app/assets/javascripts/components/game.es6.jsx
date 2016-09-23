class Game extends React.Component {
  render () {
    return(
      <div>
        <Character />
        <Board />
        <Rules />
        <SelectQuest />
        <VoteQuest />
        <SucceedQuest />
        <QuestResults/>
        <GameOver />
      </div>
    )
  }
}
