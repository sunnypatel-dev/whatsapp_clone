import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  const catchDuplication = await User.findOne({ email });

  if (catchDuplication) {
    return res.status(400).json({ message: "User already exists" });
    // console.log("duplication not allowed");
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    // next(error);
    res.status(404).json({ message: "error happned" });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // find user in db by email
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return res.status(400).json({ error: "User does not exist" });
    }

    // check if password is correct
    const validPassword = await bcryptjs.compare(password, validUser.password);

    if (!validPassword) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    // // Step 4: Exclude password from user data
    const { password: hashedPassword, ...rest } = validUser._doc;

    const token = jwt.sign(rest, process.env.TOKEN_SECRET);

    res
      .cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      })
      .status(200)
      .json(rest);
    ///
  } catch (error) {
    console.error("Signin error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const google = async (req, res) => {
  try {
    // find user in db by email
    const validUser = await User.findOne({ email: req.body.email });

    if (validUser) {
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

      const { password: hashedPassword, ...rest } = validUser._doc;

      res
        .cookie("token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword = Math.random().toString(36).slice(-8);

      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);

      const newUser = new User({
        username:
          req.body.name.split(" ").join("").toLowerCase() +
          Math.floor(Math.random() * 10000),
        email: req.body.email,
        password: hashedPassword,
        profilePicture: req.body.photo,
      });

      await newUser.save();

      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

      const { password: hashedPassword2, ...rest } = newUser._doc;

      res
        .cookie("token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
