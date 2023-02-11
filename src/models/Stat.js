const { Schema, model } = require('mongoose');

const Stat = new Schema(
  {
    passed: {
      type: Number,
    },
    failed: {
      type: Number,
    },
    openVacancies: {
      type: Number,
    },
    closedVacancies: {
      type: Number,
    },
    applications: {
      type: Number,
    },
    average: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = model('Stat', Stat);
