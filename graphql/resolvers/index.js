/**
|--------------------------------------------------
| Wills Media Server
| graphql/resolvers/index.js
| by wsngamerz
|--------------------------------------------------
*/

import albumResolvers from "./album"
import artistResolvers from "./artist"
import musicCoverResolvers from "./musicCover"
import musicGenreResolvers from "./musicGenre"
import musicResourceResolvers from "./musicResource"
import songResolvers from "./song"
import userResolvers from "./user"


export default {
    ...albumResolvers,
    ...artistResolvers,
    ...musicCoverResolvers,
    ...musicGenreResolvers,
    ...musicResourceResolvers,
    ...songResolvers,
    ...userResolvers
}
