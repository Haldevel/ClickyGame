import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import pics from "./pics.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    pics
  };

  removeCard = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const pics = this.state.pics.filter(pic => pic.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ pics });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
       <Title name="Clicky Game!" details="Click on an image to earn points, but don't click on any more than once!" />
        {this.state.pics.map(pic => (
          <MemoryCard
            removeCard={this.removeCard}
            id={pic.id}
            key={pic.id}
            image={pic.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
