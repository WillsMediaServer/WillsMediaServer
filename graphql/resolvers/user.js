/**
|--------------------------------------------------
| Wills Media Server
| graphql/resolvers/user.js
| by wsngamerz
|--------------------------------------------------
*/

import bcrypt from "bcryptjs"

import User from "../../models/user"


export function getUserById(id) {
    return User.findById(id)
}


export default {
    users: async () => {
        try {
            const users = await User.find({})
            
            return users.map(user => {
                return { ...user._doc }
            })
        } catch(error) {
            throw error
        }
    },
    
    createUser: async (args) => {
        try {
            const testUser = await User.findOne({ $or: [{ email: args.userInput.email }, { username: args.userInput.username }] })
            if (testUser) {
                throw new Error("User already exists!")
            }

            const hashedPassword = await bcrypt.hash(args.userInput.password, 12)
            const newUser = new User({
                username: args.userInput.username,
                password: hashedPassword,
                firstName: args.userInput.firstName,
                lastName: args.userInput.lastName,
                email: args.userInput.email
            })

            const result = await newUser.save()

            return {
                ...result._doc,
                password: null
            }
        } catch(error) {
            throw error
        }
    },
}
