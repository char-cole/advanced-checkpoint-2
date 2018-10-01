let express = require("express");
const router = express.Router();
let {list,show,create,remove,edit} = require("../controllers/Boss");

router.get("/bosses", list);
router.get("/bosses/:id", show);
router.post("/bosses", create);
router.delete("/bosses", remove);
// router.put("/bosses", edit);

module.exports = router;