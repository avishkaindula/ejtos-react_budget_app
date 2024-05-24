import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  const buttonStyle = {
    padding: "5px 10px",
    margin: "0 5px",
    border: "none",
    borderRadius: "100px",
    cursor: "pointer",
  };

  const increaseButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#28a745",
    color: "white",
  };

  const increaseButtonHoverStyle = {
    ...increaseButtonStyle,
    backgroundColor: "#218838",
  };

  const decreaseButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#dc3545",
    color: "white",
  };

  const decreaseButtonHoverStyle = {
    ...decreaseButtonStyle,
    backgroundColor: "#c82333",
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency} {props.cost}
      </td>
      <td>
        <button
          style={increaseButtonStyle}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor =
              increaseButtonHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor =
              increaseButtonStyle.backgroundColor)
          }
          onClick={() => increaseAllocation(props.name)}
        >
          +
        </button>
      </td>
      <td>
        <button
          style={decreaseButtonStyle}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor =
              decreaseButtonHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor =
              decreaseButtonStyle.backgroundColor)
          }
          onClick={() => decreaseAllocation(props.name)}
        >
          -
        </button>
      </td>
      <td>
        <TiDelete
          size="1.5em"
          onClick={handleDeleteExpense}
          style={{ cursor: "pointer" }}
        />
      </td>
    </tr>
  );
};

export default ExpenseItem;
