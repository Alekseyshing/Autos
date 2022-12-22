const axios = require('axios');

const performAction = async (action: string, args: string[]) => {
  switch (action) {
    case 'get':
      // Get a list of autos
      try {
        const response = await axios.get('http://localhost:3000/autos');
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
      break;
    case 'add':
      // Add a new auto
      try {
        const response = await axios.post('http://localhost:3000/autos', {
          id: args[0],
          model: args[1],
          brand: args[2],
          year: args[3],
          price: args[4],
          made: args[5]
        });
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
      break;
    case 'delete':
      // Delete an auto
      try {
        const response = await axios.delete(`http://localhost:3000/autos/${args[0]}`);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
      break;
    default:
      console.log('Invalid action');
  }
};

const command = process.argv[2];
const args = process.argv.slice(3);

performAction(command, args);
