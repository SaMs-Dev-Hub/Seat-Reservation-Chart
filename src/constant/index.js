export const seatSpecification = {
  totalSeat: 80,
  rowLength: 7,
  maxSeatAllowed: 7,
};

export const seatArrangement = (totalSeat, rowLength) => {
  let arrangedSeat = [];
  let temp = [];
  for (let a = 1; a <= totalSeat; a++) {
    if (temp.length < rowLength) {
      temp.push({ name: a, isAvilable : true });
    } else {
      arrangedSeat.push(temp);
      temp = [];
      --a;
    }
    if (a == totalSeat) {
      arrangedSeat.push(temp);
    }
  }
  return arrangedSeat;
};

const checkAlilability = (row) => {
  return row.filter((i) => {
    return i.isAvilable ;
  }).length;
};

export const arrangeSeat = ([...allSeat], input, rowlength) => {
  let index;
  let lowest = rowlength + 1;
  let found = false;
  for (let a = 0; a < allSeat.length; a++) {
    let free = checkAlilability(allSeat[a]);

    if (free === input) {
      found = true;
      index = a;
      break;
    } else if (free > input) {
      if (free < lowest) {
        lowest = free;
        index = a;
        found = true;
      }
    }
  }
  if (found) {
    console.log("yes");
    return bookSeat(index, input, allSeat);
  }

  return bookMultiple(input, allSeat);
};

const bookMultiple = (input, allSeat) => {
  let inputTemp = input;
  let allSeatTemp = [...allSeat];
  for (let a = 0; a < allSeatTemp.length; a++) {
    for (let b = 0; b < allSeatTemp[a].length; b++) {
      if (allSeatTemp[a][b].isAvilable  === true) {
        allSeatTemp[a][b].isAvilable  = false;
        --inputTemp;
        if (inputTemp === 0) {
          return [...allSeatTemp];
        }
      }
    }
  }
  return [];
};
const bookSeat = (index, input, [...allSeat]) => {
  let arr = [];
  let temp = input;
  for (let a = 0; a < allSeat[index].length; a++) {
    if (temp == 0) {
      break;
    }
    if (allSeat[index][a].isAvilable ) {
      allSeat[index][a].isAvilable  = false;
      --temp;
    }
  }
  return allSeat;
};
