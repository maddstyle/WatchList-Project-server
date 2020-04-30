const File = require("../Models/File");

class FileController {
  async store(req, res) {
    const file = await File.create(req.body);
    return res.json(file);
  }
}

module.exports = new FileController();
