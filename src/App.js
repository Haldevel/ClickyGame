import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import pics from "./pics.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    pics,
    score: 0
  };

  countClicks = (id) => {
    console.log("clickedPic: " + id);
    var clickedElementIndex = (this.state.pics.findIndex((elem, ind) => {
      /* if(elem.id === id) {
        console.log("we found the element in the array" + );
      } */
      return (elem.id === id)
      
    }))
    if(pics[clickedElementIndex].click === 0){
      pics[clickedElementIndex].click++;
      this.setState({score : this.state.score + 1}, function() { console.log("score now for " + clickedElementIndex + " = " + this.state.score);});
      this.state.pics.sort(() => Math.random() - 0.5);
      } 
      else{
        console.log("The picture was clicked already");
        this.setState({score : this.state.score-1}, function() { console.log("score now for " + clickedElementIndex + " = " + this.state.score);});
        this.state.pics.sort(() => Math.random() - 0.5);

      }
    
      //console.log("we found the element in the array " + clickedElement.id + " " + clickedElement.click + " " + ind);
      console.log("we found the index in the element " + clickedElementIndex);
      /* if([i].count === 0){
        cards[i].count = cards[i].count + 1;
        this.setState({score : this.state.score + 1}, function(){
          console.log(this.state.score);
        }); */
  }

 /*  removeCard = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const pics = this.state.pics.filter(pic => pic.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ pics });
  }; */

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
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
    );
  }
}

export default App;
