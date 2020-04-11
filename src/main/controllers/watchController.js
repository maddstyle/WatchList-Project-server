const Watch = require("../Models/Watch");

class WatchController {
  //this hopefully creates a watch
  async store(req, res) {
    try {
      const { brand, model, material, picture } = req.body;
      console.log(req.body);
      const watch = await Watch.create({
        brand, 
        model, 
        material,
        picture
      });

      return res.json(watch);
    } catch (err) {
      return res.json(err);
    }
  }
}

module.exports = new WatchController();