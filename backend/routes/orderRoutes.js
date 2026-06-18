const express = require("express");

const Order = require("../models/Order");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/* Create Order */

router.post(
  "/",
  authMiddleware,
  async (req, res) => {

    try {

      const order =
        await Order.create({
          ...req.body,
          user: req.user.id
        });

      res.status(201).json(order);

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }
  }
);

/* My Orders */

router.get(
  "/myorders",
  authMiddleware,
  async (req, res) => {

    try {

      const orders =
        await Order.find({
          user: req.user.id
        });

      res.json(orders);

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }
  }
);

module.exports = router;
