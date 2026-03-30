import { Component } from "react";
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
                {
                    id: 1,
                    name: "John Shepard",
                    increase: false,
                    rise: false,
                    salary: 800,
                },
                {
                    id: 2,
                    name: "Egor Gorelik",
                    increase: true,
                    rise: true,
                    salary: 1200,
                },
                {
                    id: 3,
                    name: "Eren Yeager",
                    increase: false,
                    rise: false,
                    salary: 500,
                },
            ],
        };
        this.nextId = 4;
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
            id: this.nextId++,
            name,
            salary,
            increase: false,
            rise: false,
        };

        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            };
        });
    };

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            }),
        }));
    };

    render() {
        const { data } = this.state;
        const increased = data.filter((item) => item.increase);

        return (
            <div className="app">
                <AppInfo employees={data.length} increased={increased.length} />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList
                    data={data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeeAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
