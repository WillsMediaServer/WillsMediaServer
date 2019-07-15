/**
|--------------------------------------------------
| Wills Media Server
| models/user.js
| by wsngamerz
|--------------------------------------------------
*/

import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

export default mongoose.model("User", userSchema, "users")
