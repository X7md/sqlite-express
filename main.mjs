import express from 'express';
import sequelize from './database.mjs';
import User from './User.mjs';

const app = express();
app.use(express.json());
await sequelize.sync({ force: true })
console.log('db is ready')

app.post('/users', async (req, res) => {
    await User.create(req.body);
    res.send("success");
  })

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.send(users);
})

app.listen(8080, function(e){
    console.log("server listen at port: " + "8080")
});