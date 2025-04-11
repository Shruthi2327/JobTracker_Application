// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb+srv://shruthibudidha2327:shruthi123@cluster0.awowmtf.mongodb.net/student?retryWrites=true&w=majority&appName=Cluster0', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });
  

// const Job = mongoose.model('Job', new mongoose.Schema({
//   company: String,
//   role: String,
//   status: String,
//   date: Date,
//   link: String
// }));

// app.get('/api/jobs', async (req, res) => {
//   const jobs = await Job.find();
//   res.json(jobs);
// });

// app.get('/api/jobs/:id', async (req, res) => {
//   const job = await Job.findById(req.params.id);
//   res.json(job);
// });

// app.post('/api/jobs', async (req, res) => {
//   const job = new Job(req.body);
//   await job.save();
//   res.status(201).json(job);
// });

// app.put('/api/jobs/:id', async (req, res) => {
//   const updated = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(updated);
// });

// app.delete('/api/jobs/:id', async (req, res) => {
//   await Job.findByIdAndDelete(req.params.id);
//   res.status(204).end();
// });

// app.listen(5000, () => console.log('Server running on port 5000'));
// //mongodb+srv://atlas-sample-dataset-load-67f78f0729cbe45d5994abbc:shruthi123@cluster0.awowmtf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://shruthibudidha2327:shruthi123@cluster0.awowmtf.mongodb.net/student?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Define Schema and Model
const Job = mongoose.model('Job', new mongoose.Schema({
  company: String,
  role: String,
  status: String,
  date: Date,
  link: String
}));

// ✅ API Routes
app.get('/api/jobs', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

app.get('/api/jobs/:id', async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.json(job);
});

app.post('/api/jobs', async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.status(201).json(job);
});

app.put('/api/jobs/:id', async (req, res) => {
  const updated = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

app.delete('/api/jobs/:id', async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

// ✅ Start the server
app.listen(5000, () => console.log('🚀 Server running on port 5000'));
