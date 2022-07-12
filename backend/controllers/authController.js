const User = require("../models/user");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
// const sendToken = require("../utils/jwtToken");
// const sendEmail = require("../utils/sendEmail");

// const crypto = require("crypto");


// Register a user   => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    // const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
    //     folder: "avatars",
    //     width: 150,
    //     crop: "scale",
    // });

    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: "This is a sample",
            url: "grg",
        },
    });

    // sendToken(user, 200, res);
    res.status(201).json({
        success: true,
        user
    })
});

