const { withDrawMoney, buyCinemaTicket, goInsideCinema } = require('./index5');

async function watchMovie(amount) {
    try {
      const money = await withDrawMoney(amount);
      const ticket = await buyCinemaTicket(money);
      const result = await goInsideCinema(ticket);
  
      return result;
    } catch (error) {
      throw error;
    }
  }
  
watchMovie(10)
    .then((result) => console.log(`from index7 = ${result}`)) // enjoy the movie
    .catch((error) => console.log(`from index7 = ${error.message}`));

watchMovie(5)
    .then((result) => console.log(`from index7 = ${result}`))
    .catch((error) => console.log(`from index7 = ${error.message}`)); // not enough money to buy ticket