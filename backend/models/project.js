const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
