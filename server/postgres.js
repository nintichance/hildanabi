const { Pool, Client} = require('pg')
const connectionString = 'postgresql://postgres:hanabi@localhost:3001/hildanabi'

const client = new Client({
  connectionString: connectionString,
})

client.connect()

// client.query('SELECT * from games', async(err,res)=>{
//   await console.log(err,res)
//   client.end()
// })