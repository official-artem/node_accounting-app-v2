'use strict';

const express = require('express');
const expenseController = require('../controllers/expenses');

const router = express.Router();

router.get('/', expenseController.getExpenses);

router.get('/:id', expenseController.getExpense);

router.post('/', expenseController.createExpense);

router.delete('/:id', expenseController.removeExpense);

router.patch('/:id', expenseController.updateExpense);

module.exports.expenseRouter = router;