import jwt from "jsonwebtoken";

const authMiddlerwer =  (req, res, next) => {
   const authHeader = req.headers.authorization

   if(!authHeader || !authHeader.startsWith("Bearer")){
     return res.status(401).json({ msg: "No token, authorization denied" });
   }

    const token = authHeader.split(" ")[1];

    try {
       const decoded = jwt.verify(token, process.env.JWT_SECRET)
       req.user = decoded.userId;
       next()

    } catch (error) {
        res.status(401).json({ msg: "Token is not valid" });
    }
    

}

export default authMiddlerwer;