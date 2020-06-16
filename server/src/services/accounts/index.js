import { ApolloServer } from 'apollo-server'
import { buildFederatedSchema } from '@apollo/federation'
import typeDefs from './typeDefs'
import resolvers from './resolvers'


(async () => {
    const port = process.env.ACCOUNTS_SERVICE_PORT

    const server = new ApolloServer({
        schema: buildFederatedSchema([{typeDefs, resolvers}])
    })

    const { url } = await server.listen({ port })
    console.log(`Accounts service ready @ ${url}`)
})()