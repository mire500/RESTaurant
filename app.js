const express = require("express");
const Companies = require("./companies");
const Locations = require("./locations");
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

// create a new menu
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



// extension++

// Get a specific menu by its id
app.get('/companies/:id/menus/:menuid', async(req, res) =>{
    console.log(req.param.menuid)
const menu = await Menus.findByPk(req.param.menuid)
return res.status(200).json(menu)
});


// // Delete a menu
// app.delete('/menus/:id', async(req, res) =>{
// const menu = await Menus.findByPk(req.param.id)
// await menu.destroy()
// res.status(200)
// });



// // Replace a specific company
// app.put("/companies/:id", async (req, res) => {
//     const company = await Companies.findByPk(req.params.id);
//     if (!company) {
//         return res.sendStatus(404);
//     }
//     await company.update(req.body);
//     res.sendStatus(200);
// });


// // Create a new location 
// app.post('/companies/:id?menus', async(req, res) =>{
//     const {name,capacity, manager} = req.body;
//     await Location.create({name,capacity, manager})
//     res.sendStatus(201)
// })


// // Delete a location
// app.delete('/locations/:id', async(req, res) =>{
//     const location = await Locations.findByPk(req.param.id)
//     await locations.destroy()
//     res.status(200)
//     });
    
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});