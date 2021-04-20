import delay from './delay';

const showMessage = async (success, message) => {
  const instructions = document.createElement('div');
  instructions.className = 'instructions';
  instructions.textContent = message;
  if (!success) instructions.classList.add('lose');

  document.body.append(instructions);
  await delay(5000);
  instructions.remove();
};

export default showMessage;
