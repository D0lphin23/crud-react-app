import { Component } from "react";
import nextId from "react-id-generator";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeeAddForm from "../employees-add-form/employees-add-form";
import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, name: "John Shepard", salary: 800 },
                { id: 2, name: "Egor Gorelik", salary: 1200 },
                { id: 3, name: "Eren Yeager", salary: 500 },
            ],
        };
        this.nextId = nextId;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter((item) => item.id !== id),
            };
        });
    };

    addItem = (name, salary) => {
        const newItem = {
            id: this.nextId(),
            name,
            salary,
        };

        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            };
        });
    };

    render() {
        const { data } = this.state;

        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList data={data} onDelete={this.deleteItem} />
                <EmployeeAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
