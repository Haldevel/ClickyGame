import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import pics from "./pics.json";
import Nav from "./components/Nav";

class App extends Component {
  // Setting this.state using pics.json array and setting the default values for the variables
  // containing current score, top score and the instructions for a user
  state = {
    pics,
    score: 0,
    topscore: 0,
    result: "Click an image to begin the game!"
  };

  //finding out what is the index of the element of the pics array which card was clicked (var clickedElementIndex)
  countClicks = (id) => {
    console.log("clickedPic: " + id);
    var clickedElementIndex = (this.state.pics.findIndex((elem, ind) => {
      return (elem.id === id)
    }));

    //if the click property of the object representing the card is 0, it was not clicked yet
    //so we set the click property to 1
    if (pics[clickedElementIndex].click === 0) {
      pics[clickedElementIndex].click++;
      //increase the score property
      this.setState({ score: this.state.score + 1 });
      this.setState({ topscore: this.state.topscore + 1 });
      this.setState({ result: "You guessed correctly!" });
      this.state.pics.sort(() => Math.random() - 0.5);
    }
    else {
      console.log("The picture was clicked already");
      this.setState({ score: 0}, function () { console.log("score now for " + clickedElementIndex + " = " + this.state.score); });
      this.setState({ result: "You guessed incorrectly!"});
      this.state.pics.sort(() => Math.random() - 0.5);
      //we will need to reset 

    }
  }


  // Map over this.state.pics and render a memoryCard component for each object
  render() {
    return (
      <div>
        <Nav score={this.state.score}  topscore={this.state.topscore} result={this.state.result}/>
        <Wrapper>
          <Title name="Clicky Game!" details="Click on an image to earn points, but don't click on any more than once!" />
          {this.state.pics.map(pic => (
            <MemoryCard
              id={pic.id}
              key={pic.id}
              image={pic.image}
              countClicks={this.countClicks}
            />
          ))}
    </Wrapper>
      </div>
    )
  }
}


export default App;
