import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return <select>
        <option value = "sehr wichtig">Sehr wichtig</option>
        <option value = "wichtig">wichtig</option>
        <option selected value = "mittelwichtig">mittelwichtig</option>
        <option value = "nicht wichtig">nicht wichtig</option>
    </select>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));