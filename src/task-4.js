export default function runRover(commandsList) {
  const commands = [...commandsList].sort((a, b) => a.order - b.order);

  const finalWay = {
    x: 0,
    y: 0,
  };

  let currentPath = 'y';
  let oldPath = '';
  let currentSign = 1;

  const filteredCommands = commands.map((el) => {
    const newObj = {};

    const [command, value] = el.command.split(' ');
    if (command === 'go' || command === 'turn') {
      newObj[command] = value;
    }
    return newObj;
  });

  function path(instruction, i) {
    if (instruction.turn && i === 0) {
      currentPath = currentPath === 'y' ? (currentPath = 'x') : (currentPath = 'y');
    } else if (instruction.go) {
      finalWay[currentPath] =
        currentPath === 'y'
          ? (finalWay.y += parseInt(instruction.go) * currentSign)
          : (finalWay.x += parseInt(instruction.go) * currentSign);
    } else if (instruction.turn === 'left') {
      oldPath = currentPath;
      currentPath = currentPath === 'x' ? (currentPath = 'y') : (currentPath = 'x');
      currentSign = oldPath === 'y' ? (currentSign = -currentSign) : currentSign;
    } else if (instruction.turn === 'right') {
      oldPath = currentPath;
      currentPath = currentPath === 'x' ? (currentPath = 'y') : (currentPath = 'x');
      currentSign = oldPath === 'x' ? (currentSign = -currentSign) : currentSign;
    }
    return finalWay;
  }
  filteredCommands.map(path);

  return finalWay;
}

/* 


*/
