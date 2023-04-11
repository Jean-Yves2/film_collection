const path =require('path')
const dotenv =require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../.env') })


const { Client }=require('pg');
const client=new Client(process.env.PG_URI)


client.connect()
    .then(console.log("✅ CONNECTE A LA DB !"))
    .catch((error) => {
        console.log("🚨 :", error)
    })


module.exports = client; 