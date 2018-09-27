const BossModel = require("../models/Boss");

module.exports.list = function list(req, res, next) {
    BossModel.find({}).exec()
    .then(boss => {
      return res.json(boss);
    });
}

module.exports.show = function show(req, res, next) {
    BossModel.findById(req.params.id).exec()
    .then(boss => {
        return res.json(boss);
      });
}

module.exports.create = function create(req, res, next) {
    const newBoss = new BossModel(req.body);
    newBoss.save()
    .then(boss => {
      res.json(boss);
    });
}

// module.exports.delete = function remove(req, res, next) {
//     BossModel.findByIdAndRemove(req.params.id).exec()
//     .then(boss => {
//       return res.json(boss);
//     });
// }

// module.exports.put = function edit(req, res, next) {
//     BossModel.findByIdAndUpdate(req.params.id).exec()
//     .then(boss => {
//       return res.json(boss);
//     });
// }

   