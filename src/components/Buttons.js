import React from "react";

function Buttons(props) {
  const orqaga = () => {
    props.func(props.search, props.page - 1);
  };
  const oldinga = () => {
    props.func(props.search, props.page + 1);
  };
  return (
    <div className="buttons">
      <button onClick={orqaga} className="prev_btn positive ui button">
        Previous
      </button>
      <button onClick={oldinga} className="next_btn negative ui button">
        Next
      </button>
    </div>
  );
}

export default Buttons;
