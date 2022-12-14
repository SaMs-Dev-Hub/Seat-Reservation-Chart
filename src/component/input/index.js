import { useState } from "react";
import { maxSeatAllowed, seatSpecification } from "../../constant";

const InputSeat = (props) => {
  const { setInput } = props;
  const [error, setError] = useState("");
  const [requiredSeats, setRequiredSeats] = useState("");

  const onChanegHandle = (e) => {
    if (e.target.value === "") {
      setError("");
      setRequiredSeats(e.target.value);
    } else {
      const temp = Number(e.target.value.trim());
      if (temp === 0) {
        setError("Please Select atleast 1 Seat");
        setRequiredSeats(temp);
      } else if (temp > seatSpecification.maxSeatAllowed) {
        setError(
          `Maximum ${seatSpecification.maxSeatAllowed} can be selected at once`
        );
        setRequiredSeats(temp);
      }else if (temp<0){
        setRequiredSeats('');
      }
       else {
        setError("");
        setRequiredSeats(temp);
      }
    }
  };

  const onClickHandle = () => {
    if (!error && requiredSeats) {
      setInput(requiredSeats);
      setRequiredSeats("");
    }
  };
  return (
    <div>
      <div className="input">
        <input
          type="number"
          onChange={onChanegHandle}
          placeholder="Enter the number of seats..."
          value={requiredSeats}
        ></input>
        <span
          className={!error && requiredSeats ? "active" : "de-active"}
          onClick={onClickHandle}
        >
          BookSeat
        </span>
      </div>
      <p style={{ color: "coral", margin: "20px 0px" }}>{error && error}</p>
    </div>
  );
};
export default InputSeat;
