import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeeAddForm from "../employees-add-form/employees-add-form";
import "./app.css";

function App() {
    const data = [
        { id: 1, name: "John Shepard", salary: 800, increase: false },
        { id: 2, name: "Egor Gorelik", salary: 1200, increase: true },
        { id: 3, name: "Eren Yeager", salary: 500, increase: false },
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList data={data} />
            <EmployeeAddForm />
        </div>
    );
}

export default App;
