import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form
          class="ui form"
          style={{ width: "50%", border: "2px solid blue", padding: "10px" }}
        >
          <input type="text" name="details" placeholder="Details:"/>
          <input type="number" name="amount" placeholder="Amount:" />
          <input type="date" name="date" placeholder="Date:" />
          <select type="" name="type" size="4">
            <option value="groceries">Groceries</option>
            <option value="entertainment">Entertainment</option>
            <option value="utility">Utility</option>
            <option value="travel">Travel</option>
            <option value="misc">Misc</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
