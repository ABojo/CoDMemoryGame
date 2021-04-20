import delay from './delay';

const showMessage = async (success, message) => {
  const instructions = document.createElement('div');
  instructions.className = 'instructions';

  if (success) {
    instructions.textContent = message;
  } else {
    instructions.classList.add('lose');
    instructions.textContent = message;
  }
  document.body.append(instructions);
  await delay(5000);
  instructions.remove();
};

export default showMessage;
