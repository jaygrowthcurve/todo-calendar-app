const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
