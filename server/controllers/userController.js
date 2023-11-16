import userModel from "../models/userModel.js";

export const register = async (req, res) => {
    const { name, email, password, answer } = req.body;
    console.log(req.body)
    try {
        if (!name || !email || !password || !answer) {
            return res.status(500).send({ message: "All Input Fields are required" })
        }

        //check exisiting user
        const exisitingUser = await userModel.findOne({ email });
        if (exisitingUser) {
            res.status(500).send({
                success: false,
                message: "Email Already exisit please login"
            })
        }

        const user = await new userModel({ name, email, password, answer }).save();
        res.status(200).send({
            success: true,
            message: "User Register Successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while doing register",
            error
        })
    }
}