let mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    location: {
        required: true,
        type: String
    },
    health: {
        required: true,
        type: Number
    },
    beast: {
        required: true,
        type: Boolean
    },
    kin: {
        required: true,
        type: Boolean
    },
    weakness: {
        required: true,
        type: Array
    },
    echoes: {
        required: true,
        type: Number
    },
    drops: {
        required: true,
        type: String
    },
    gates: {
        type: Array
    }
});

module.exports = mongoose.model("Boss", schema);