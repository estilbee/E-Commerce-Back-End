const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
    // DONE: find all categories
  const categoryData = await Category.findAll().catch((err) => {
    res.json(err);
  });
  res.json(categoryData);
  // TODO: be sure to include its associated Products

});
  
router.get('/:id', async (req, res) => {
  // DONE: find one category by its `id` value
  try {
    const categoryData = await Category.findByPk(req.params.id)
      res.status(200).json(categoryData)
    }
    catch(err) {
      res.status(400).json(err)
    }
    //TODO: be sure to include its associated Products
    });
  

router.post('/', async (req, res) => {
// create a new category
  try {
    const categoryData = await Category.create(req.body);
    // 200 status code = request is successful
    res.status(200).json(categoryData);
  } catch (err) {
    // 400 status code = server could not understand the request
    res.status(400).json(err);
  }
});
  
router.put('/:id', async (req, res) => {
  // DONE: update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    }) 
    res.status(200).json(categoryData)
  }
  catch(err) {
    res.status(400).json(err)
  }
  });
  

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    }) 
    res.status(200).json(categoryData)
  }
  catch(err) {
    res.status(400).json(err)
  }
  });

module.exports = router;
