const {Sequelize}= require('sequelize');

const database = process.env.POSTGRES_DATABASE;
const username = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const host = process.env.POSTGRES_HOST;
const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host,
        dialect:'postgres'
    }
);

const dbConnect=async()=>{
    try {
        await sequelize.authenticate();
        console.log("DB is connected");
    } catch (e) {
        console.log('POSTGRES: Error connection ',e);
    }
}

module.exports= {
    sequelize,
    dbConnect
}
