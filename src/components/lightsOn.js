import React, { Component } from 'react';

import * as math from 'mathjs'
import * as testStyle from "../styles/test2.module.scss"

import styled from 'styled-components'

// This is useful because 'document' is not loaded in when injected into mdx
if (typeof document !== `undefined`) {
  
    // Do something with the document
    // Call your modules and libraries

    
//n defines the dimensions of the grid
var n = 3;
var mat = math.randomInt([n,n],0,3);

//this generates my squares using my matrix
var k = 0;
var arrayDiv = [];

for (var i = 0; i < n; i++) {
  for(var j=0 ; j < n; j++) {
    arrayDiv[k] = document.createElement('div');
    arrayDiv[k].id = mat[i][j];
    arrayDiv[k].i = i;
    arrayDiv[k].j = j;
    k = k+1;
  }
}
}

//A styled div to style my grid
const Grid = styled.div`
margin:0px;
padding:0px;
display: grid;
grid-template-columns: repeat(${props => props.n}, 50px);
grid-template-rows: repeat(${props => props.n}, 50px);
grid-gap: 5px;`

class LightsOn extends Component {

  //I choose a constructor to render&update using states from matrix mat
  constructor(props) {
    super(props);
    this.state = {
      game: mat,
      input: n,
      array: arrayDiv,
    };
  }
  
  //Handles onClick event for cells
  IncrementCell = (i,j) => {
    //Increment at location
    this.setState({ game: mat[i][j] = (mat[i][j] + 1) % 3});
    //Check Right
    if(j+1 < n){
      this.setState({ game: mat[i][j+1] = (mat[i][j+1] + 1) % 3});
    }
    //Check Left
    if(j > 0){
      this.setState({ game: mat[i][j-1] = (mat[i][j-1] + 1) % 3});
    }
    //Check Down
    if(i+1 < n){
      this.setState({ game: mat[i+1][j] = (mat[i+1][j] + 1) % 3});
    }
    //Check Up
    if(i > 0){
      this.setState({ game: mat[i-1][j] = (mat[i-1][j] + 1) % 3});
    }
  }

  //Handles input event for input button (creates new matrix; updates state/constructor)
  handleInput = event => {

    this.setState({ input: n = event.target.value });

    var k = 0;
    var newDiv = [];

    this.setState({game : mat = math.randomInt([n,n],0,3)});
    for (var i = 0; i < n; i++) {
      for(var j=0 ; j < n; j++) {
        newDiv[k] = document.createElement('div');
        newDiv[k].id = mat[i][j];
        newDiv[k].i = i;
        newDiv[k].j = j;
        k = k+1;
      }
    }

    this.setState({array: newDiv});
  };

  render() {
    return (
      <div>
        <input 
        type= "number"
        name="dimInput"
        value={this.state.input}
        onChange={this.handleInput}
        max={69}
        min={1}
        />
      <div>
        <div className = {testStyle.container}>
          <Grid n = {n}>
          {this.state.array.map(item => <div className={testStyle.cell} onClick={() => this.IncrementCell(item.i,item.j)} aria-hidden="true"> {mat[item.i][item.j]} </div>)}
          </Grid>
        </div>
      </div>
    </div>
    );
  }
}

export default LightsOn;