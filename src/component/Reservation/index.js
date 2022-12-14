const Reservation = (props) => {
  const { seat } = props;
  return (
    <table>
      <tbody>
        {seat.map((i, index) => {
          return (
            <tr key={index}>
              {i.map((j, idex) => {
                return (
                  <td key={idex} className="seat-wrapper">
                    <div
                      className={`seat ${
                       j.isAvilable ? "avilable" : "occupied"
                      }`}
                    ></div>
                    <div>{j.name}</div>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Reservation;
