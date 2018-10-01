import React from "react";

class CreateBoss extends React.Component {
  constructor() {
    super();
    this.state = {
      boss: {
        name: "",
        location: "",
        health: 0,
        beast: false,
        kin: false,
        weakness: [],
        echoes: 0,
        drops: "",
        gates: []
      }
    };
  }
  render() {
    return (
      <div>
        <div>
          <h1>Boss</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.CreateBoss) {
              this.props.CreateBoss(this.state.boss);
            }
          }}>
            <div>
              Name: <input onChange={(e) => {
                const boss = {name: e.target.value};
                this.setState({
                  boss: Object.assign(this.state.boss,boss)
                });
              }} />
            </div>
            <div>
              Location: <input onChange={(e) => {
                const boss = {location: e.target.value};
                this.setState({
                  boss: Object.assign(this.state.boss,boss)
                });
              }} />
            </div>
            <div>
              Health: <input type="number" onChange={(e) => {
                const boss = {health: e.target.value};
                this.setState({
                  boss: Object.assign(this.state.boss,boss)
                });
              }} />
            </div>
            <div>
              Beast?: <input type="checkbox" onChange={(e) => {
                const check = {beast: e.target.value};
                this.setState({
                  boss: Object.assign(this.state.boss,check)
                });
              }} />
            </div>
            <div>
              Kin?: <input type="checkbox" onChange={(e) => {
                const check = {kin: e.target.value};
                this.setState({
                  boss: Object.assign(this.state.boss,check)
                });
              }} />
            </div>
            <div>
              Blood Echoes: <input type="number" onChange={(e) => {
                const boss = {echoes: e.target.value};
                this.setState({
                  boss: Object.assign(this.state.boss,boss)
                });
              }} />
            </div>
            <button type="submit">Create</button> 
          </form>
        </div>       
      </div>  
    );
  }
}
export default CreateBoss;
