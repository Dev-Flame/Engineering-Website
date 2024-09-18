const express = require('express');
const app = express();

app.use(express.json());

let workOrders = [];

app.post('/api/workorders', (req, res) => {
  const { name, projectDetails } = req.body;
  const newOrder = { id: workOrders.length + 1, name, projectDetails, status: 'Pending' };
  workOrders.push(newOrder);
  res.status(201).json(newOrder);
});

app.get('/api/workorders', (req, res) => {
  res.json(workOrders);
});

app.listen(3000, () => console.log('Server running on port 3000'));
