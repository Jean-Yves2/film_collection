const path =require('path')
const dotenv =require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../.env') })


const { Client }=require('pg');
const client=new Client(
    {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        ssl: {
            rejectUnauthorized: false
        }}
)


client.connect()
    .then(console.log("✅ CONNECTE A LA DB !"))
    .catch((error) => {
        console.log("🚨 :", error)
    })


module.exports = client; 