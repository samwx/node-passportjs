const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    req.logout();
    res.send('Logging out...');
    res.redirect('/');
});

module.exports = router;
