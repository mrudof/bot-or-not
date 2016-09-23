class SelectQuest extends React.Component {

//the nextUp method returns the id of the user who chooses the next quest
//I still need to define the user array
nextUp() {
  var arr = [];
  var min = ssers[0].quests_chosen;
  for (i=0; i < users.length; i++) {
    if (users[i].quests_chosen < min) {
      min = users[i].quests_chosen
    }
  }
  for (i=0; i < users.length; i++) {
    if (users[i].quests_chosen === min) {
      arr.push(users[i]);
    }
  }
  var minRank = arr[0]
  for (i=0; i < arr.length; i++) {
    if (arr[i].order < minRank.order) {
      minRank = arr[i]
    }
  }
  return minRank
}



  render () {
    return (



      )
  }
}

