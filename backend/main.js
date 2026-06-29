const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('<h1>LigHub v2.0 - NEXUS Sovereign System</h1><p>Status: Operational</p>');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});