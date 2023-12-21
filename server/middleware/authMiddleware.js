import jwt from "jsonwebtoken"

export const tokenDecode = (req,res,next) => {
    try {
        const token = req.headers("Authorization")
        if(!token) return res.status(404).json({
            massage : "Accesses Denied"
        });
        if(token.startWith("Bearer ")){
            token = token.splice(7,token.length).trimLeft()
        }
        const verified = jwt.verify(token,process.env.Token);
        req.user = verified;
        next();
    } catch (error) {
        res.status(500).json({
            error : error.massage
        })
    }
}