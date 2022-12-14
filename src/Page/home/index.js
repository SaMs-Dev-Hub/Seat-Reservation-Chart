import React, { useEffect, useState } from "react";
import InputSeat from "../../component/input";
import Reservation from "../../component/Reservation";
import {
  arrangeSeat,
  seatArrangement,
  seatSpecification,
} from "../../constant";

const Home = () => {
  const [seat, selectSeat] = useState([]);
  const handleSetInput = (i) => {
    const allSeats = arrangeSeat(seat, i, seatSpecification.rowLength);
    console.log(allSeats);
    if (allSeats.length != 0) {
      console.log(true);
      localStorage.setItem("seat", JSON.stringify(allSeats));
      selectSeat([...allSeats]);
    }
  };
  useEffect(() => {
    const allSeats =
      JSON.parse(localStorage.getItem("seat")) ||
      seatArrangement(seatSpecification.totalSeat, seatSpecification.rowLength);

    selectSeat(allSeats);
  }, []);

  return (
    <div className="main-wrapper">
      <h1>Seat Reservation Chart</h1>
      <InputSeat setInput={handleSetInput} />
      {seat.length != 0 && <Reservation seat={seat} />}
    </div>
  );
};
export default Home;
