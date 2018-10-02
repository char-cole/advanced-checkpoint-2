import React from "react";

class CreateBoss extends React.Component {
  constructor() {
    super();
    this.state = {
      boss: {
        name: "",
        location: "",
        body: ""
      }
    };
  }
  render() {
    return (
      <div>
        <div>
          <h1>Have you witnessed a boss not listed?</h1>
          <h2>Share your insight, and add them to the list</h2>
          <p><em>Making contact with eldritch wisdom is a blessing, for even if it drives one mad, it allows one to serve a grander purpose, for posterity.</em></p>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createBoss) {
              this.props.createBoss(this.state.boss);
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
              What manner of creature?: 
              <select onChange={(e) => {
                const boss = {body: e.target.value};
                this.setState({
                  boss: Object.assign(this.state.boss,boss)
                });
              }}>
                <option value="unspecific">unspecific</option>
                <option value="beast">beast</option>
                <option value="kin">kin</option>
              </select>
            </div>
            <button type="submit">Add Boss</button> 
          </form>
        </div>       
      </div>  
    );
  }
}
export default CreateBoss;
