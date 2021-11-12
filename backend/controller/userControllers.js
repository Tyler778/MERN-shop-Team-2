const User = require("../models/User");

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server Error" });
  }
};

const createNewUser = (req, res) => {
  try {
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server Error" });
  };
}


const checkPassword = async (email, password, callback) => {
  User.findOne({ email: email }).exec(function (error, user) {
    if (error) {
      callback({ error: "error when finding user" })
    } else if (!user) {
      callback({ error: "user not found" })
    } else {
      user.comparePassword(password, function (matchError, isMatch) {
        if (matchError) {
          callback({ error: "error matching" })
        } else if (!isMatch) {
          callback({ error: "bad password" })
        } else {
          callback({ success: "success!" })
        }
      })
    }
  })
}


module.exports = {
  getUserById,
  createNewUser,
  checkPassword,
};

