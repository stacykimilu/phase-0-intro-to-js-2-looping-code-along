// Code your solutions in this file
function writeCards(names) {
  let thankYouMessages = [];
  for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    thankYouMessages.push(message); // Changed from messages to thankYouMessages
  }
  return thankYouMessages; // Changed from messages to thankYouMessages
}

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

countDown(10);

