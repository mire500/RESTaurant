const express = require("express");
const Companies = require("./companies");
const Menus = require("./menus")
const setupDb = require("./setupDb");
const port = 7000
const app = express();

app.use(express.json());
setupDb();
// get all companies 
app.get('/companies', async(req, res) => {
    const companies = await Companies.findAll() 
    return res.status(200).json(companies)
})

// get specific company 

app.get('/companies/:id', async(req, res) => {
    const id = req.params.id
    const company = await Companies.findByPk(id)
    console.log(company)
    return;
});

//get all menus
app.get('/companies/:id/menus', async(req, res) =>{
    const id = req.params.id
    const company = await Companies.findByPk(id)
    const menus = company.getMenus();

    console.log(menus)
});




//post new company

app.post('/companies', async(req, res) => {
    const {name, logoUrl} = req.body; 
    await Companies.create({ name, logoUrl})
      res.sendStatus(201)
})


app.post('/companies/:id/menus', async(req, res) => {
    const {Title} = req.body; 
    await Menus.create({Title})
      res.sendStatus(201)
})



// delete company


  app.delete('/companies/:id', async(req, res) => {
    const id = req.params.id
    const company = await Companies.findByPk(id)
    await company.destroy()
    res.status(200)
});


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});