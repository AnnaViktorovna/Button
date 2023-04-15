import React from "react";

const App = () => (
    <div className="place_order">
        <ReactBootstrap.Button bsClass="custom-btn" type="submit">
            Place Order
        </ReactBootstrap.Button>
    </div>
);

ReactDOM.render(<App />, document.getElementById("react"));
