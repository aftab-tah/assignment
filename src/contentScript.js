const connectAllProfiles = () => {
  console.log('Running connectAllProfiles');
  const connectButtons = document.querySelectorAll('button');
  const connectBtnArray = Array.from(connectButtons).filter((btn) =>
    btn.textContent.includes('Connect')
  );

  console.log('Found Connect buttons:', connectBtnArray.length);

  let index = 0;

  const clickNextButton = () => {
    if (index < connectBtnArray.length) {
      console.log(`Clicking button ${index + 1} of ${connectBtnArray.length}`);
      connectBtnArray[index].click();
      index++;
      setTimeout(clickNextButton, Math.random() * 2000 + 1000); // 1-3 seconds delay
    } else {
      console.log('Finished clicking all connect buttons');
    }
  };

  if (connectBtnArray.length > 0) {
    clickNextButton();
  } else {
    console.log('No connectable profiles found!');
    alert('No connectable profiles found!');
  }
};

const createConnectAllButton = () => {
  console.log('Creating Connect All button');
  const existingButton = document.querySelector('#connect-all-btn');
  if (existingButton) return; // Prevent duplicate buttons

  const button = document.createElement('button');
  button.id = 'connect-all-btn';
  button.textContent = 'Connect with All';
  button.style.position = 'fixed';
  button.style.bottom = '10px';
  button.style.right = '10px';
  button.style.padding = '10px';
  button.style.backgroundColor = '#0073b1';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.cursor = 'pointer';
  button.style.display = 'block';  // Ensure button is displayed
  button.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)'; // Add some shadow for better visibility
  button.style.zIndex = '10000'; // Ensure button is on top
  document.body.appendChild(button);

  button.addEventListener('click', connectAllProfiles);
};

// Use MutationObserver to check for dynamically loaded elements
const observeDOM = (callback) => {
  const observer = new MutationObserver(callback);
  observer.observe(document.body, { childList: true, subtree: true });
};

// Ensure the button is created on page load
window.onload = () => {
  createConnectAllButton();
  observeDOM(createConnectAllButton);
};
