import delay from './delay';

const showLoader = async (ms) => {
  document.body.innerHTML += `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;
  await delay(ms);
  document.querySelector('.lds-ring').remove();
};

export default showLoader;
