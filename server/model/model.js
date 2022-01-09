import mongoose from 'mongoose';

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});
export default mongoose.model('User', User);
