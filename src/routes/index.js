const { Router } = require('express');
const router = Router();
const {Mutation, Stats} = require('../controllers/index.js');


router.post("/mutation", Mutation)
router.get("/stats", Stats)

module.exports = router;