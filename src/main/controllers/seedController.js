const Watch = require('../Models/Watch')
const ProductsArray = require('../../bin/seeds')

class SeedController {
  async store(req, res) {
    try {
      const watches = await ProductsArray.map((product) => {
        Watch.create(product)
      })
      res.json(watches)
    } catch (err) {
      res.json({ err: 'Unexpected Error' })
    }
  }
}

module.exports = new SeedController()

