import React, { Component } from "react";
import { data } from "./mock";
export default class App extends Component {
  state = {
    search: "",
    list: data,
  };

  render() {
    const onSearch = (e) => {
      // this.setState({ search: e.target.value });
      const newData = data.filter((value) => {
        value.name.includes(e.target.value);
        let list = value.name.toLocaleLowerCase();
        return list.includes(e.target.value.toLocaleLowerCase());
      });

      this.setState({ list: newData });
    };
    return (
      <div calassName="wrapper">
        <input type="text" onChange={onSearch} />
        <select calassName="vazifa">
          <option value="">Id</option>
          <option value="">Name</option>
          <option value="">Status</option>
        </select>
        <table
          border="1"
          style={{ borderCollapse: "collapse", width: "400px" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((value) => (
              <tr>
                <td>{value.id} </td>
                <td>{value.name} </td>
                <td>{value.status} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
