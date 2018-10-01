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
        required: false,
        type: Number
    },
    body: {
        required: true,
        type: String
    },
    weakness: {
        required: false,
        type: Array
    },
    echoes: {
        required: false,
        type: Number
    },
    drops: {
        required: false,
        type: String
    },
    gates: {
        required: false,
        type: Array
    }
});

module.exports = mongoose.model("Boss", schema);