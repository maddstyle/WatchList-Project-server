const Watch = require("../Models/Watch");

// ALL MONGOOSE METHODS WILL BE DONE IN CONTROLLERS,
// find, findbyid,findOne, findandupdate will be in contollers

class WatchController {
  //here index is get request which finds all the watches in the database
  async index(req, res) {
    try {
      const watches = await Watch.find();
      return res.json(watches);
    } catch (err) {
      return res.json("Unexpected error.");
    }
  }

  // STORE BY DEFAULT IS TO CREATE AN ITEM, IN THIS CASE A WATCH
  async store(req, res) {
    try {
      const { brand, model, price, material, description, picture } = req.body;
      console.log(req.body);
      const watch = await Watch.create({
        brand,
        model,
        price,
        material,
        description,
        picture
      });
      return res.json(watch);
    } catch (err) {
      return res.json(err);
    }
  }
  // THIS IS WHERE WE UPDATE THE WATCH MODEL
  async update(req, res) {
    try {
      const watch = await Watch.findById(req.params.id);
      await watch.update(req.body);
      // res.json(watch);

      return res.json("Watch sucessfully updated.");
    } catch {
      return res.json("Unexpected error.");
    }
  }
  // THIS IS WHERE WE DELETE THE WATCH
  async delete(req, res) {
    try {
      const watch = await Watch.findById(req.params.id);
      await watch.delete();
      return res.json("Watch sucessfully deleted.");
    } catch (err) {
      return res.json("Unexpected error.");
    }
  }
}

module.exports = new WatchController();
