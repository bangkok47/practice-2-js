import runRover from './task-4';
import boundingRect from './task-3';

function getExpeditionsTargets(commandSeries) {
  return commandSeries.map((el) => runRover(el));
}

export default function boundingRover(commandSeries) {
  const commands = getExpeditionsTargets(commandSeries);
  const result = boundingRect(commands);

  return result;
}
