/**
|--------------------------------------------------
| Wills Media Server
| main.js
| by wsngamerz
|--------------------------------------------------
*/

import express from "express"
import bodyParser from "body-parser"
import graphqlHTTP from "express-graphql"
import mongoose from "mongoose"

import GraphQLSchema from "./graphql/schema"
import GraphQLResolvers from "./graphql/resolvers"


// Express app
const app = express()

app.use(bodyParser.json())

// GraphQL Middleware
app.use("/api", graphqlHTTP({
    schema: GraphQLSchema,
    rootValue: GraphQLResolvers,
    graphiql: true
}))

app.get("/", (req, res, next) => res.send("Hello World"))

mongoose.connect("mongodb://localhost:27017/willsmediaserver", { useNewUrlParser: true }).then(() => {
    // Listen on port
    app.listen(3000)
}).catch((error) => {
    console.log(error)
})

