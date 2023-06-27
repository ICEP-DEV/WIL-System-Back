const express = require('express');
const conn = require('../config/db');
const router = express.Router();

router.post('/status', (req, res) => {
    router.post('/status/:month', (req, res) => {
        const values = [
            req.body.month1,
            req.body.month2,    
            req.body.month3,
            req.body.month4,
            req.body.month5,
            req.body.month6,
            req.body.month7,    
        ]



  const { month } = req.params;
  const { status } = req.body;

  const query = 'INSERT INTO monthly_status (month1, month2, month3, month4, month5, month6) VALUES (?, ?, ?, ?, ?, ?)';

  conn.query(query, [month, status], (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }

    // If month 1 is submitted, automatically insert a new record for month 2 with 'opened' status
    if (Number(month) === 1 && status === 'submitted') {
      const query2 = 'INSERT INTO monthly_status (month, status) VALUES (?, ?)';

      conn.query(query2, [2, 'opened'], (error) => {
        if (error) {
          console.error('Failed to insert status for month 2');
        }
      });
    }

    res.json({ message: 'Status inserted successfully' });
  });
});
});

module.exports = router;
