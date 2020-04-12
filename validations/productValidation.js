const { check, validationResult } = require('express-validator');

const proValidate = () => {
  return [
    check('name').notEmpty().withMessage('Name is required'),
    check('category').notEmpty().withMessage('Category is required'),
    check('gender').notEmpty().withMessage('gender is required'),
    check('price')
      .notEmpty()
      .withMessage('price is required')
      .isNumeric()
      .withMessage('Price must be numeric'),
    check('quantity')
      .notEmpty()
      .withMessage('quantity is required')
      .isNumeric()
      .withMessage('Quantity must be numeric'),
    check('imagePaths').notEmpty().withMessage('imagePaths is required'),
  ];
};

module.exports = proValidate;
