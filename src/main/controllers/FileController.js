const File = require('../Models/File')
​
class FileController {
  async store(req, res) {
    const { secure_url, fieldname } = req.file
    const file = await File.create({
      name: fieldname,
      imageUrl: secure_url,
    })
    return res.json(file)
  }
}
​
module.exports = new FileController()