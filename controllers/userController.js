import User from "../models/user-models.js"


//Get user 
export const getUser = async (req, res) =>{
    try {
        const woner = await User.findById(req.user).select("-password")
        res.json({woner: woner})
    } catch (error) {
          res.status(500).json({ msg: "Something went wrong" });
          console.log(error);
    }
} 

//Update password

export const updatePassword = async (req, res) => {
    const {oldPassword, newPassword} = req.body
    try {
        const woner = User.findById(req.user);
         const isMatch = await bcrypt.compare(oldPassword, woner.password);
         if (!isMatch) return res.status(400).json({ msg: "Old password is incorrect" });

    woner.password = await bcrypt.hash(newPassword, 10);
    await woner.save();
    res.json({ msg: "Password updated successfully" });

    } catch (error) {
          res.status(500).json({ msg: "Error updating password" });
    }
}

export const logoutUser = (req, res) => {
  res.json({ msg: "Logout by deleting token on client" });
};