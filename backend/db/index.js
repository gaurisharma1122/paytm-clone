const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://gaurisharma1122:gauri%40123@paytm.ckdj24r.mongodb.net/?retryWrites=true&w=majority&appName=paytm');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 4,
    maxLength: 30,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minLength: 8
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50
  }
});
  
const AccountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  balance: {
    type: Number,
    required: true
  }
})

const User = mongoose.model('User', UserSchema);
const Account = mongoose.model('Account', AccountSchema);
module.exports={ User, Account };