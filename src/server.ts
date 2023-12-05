import path from "path"
import fastifyStatic from "@fastify/static"
import fastify, { FastifyInstance } from "fastify"
import { AddressInfo } from "net"

const fastifyInstance: FastifyInstance = fastify()
// Serve static files from the React app's build directory
fastifyInstance.register(fastifyStatic, {
  root: path.join(__dirname, "client/build"),
  prefix: "/", // optional: default '/'
})

// All GET requests are sent to the React app
// The React app will handle routing client side
fastifyInstance.get("*", (req, reply) => {
  reply.sendFile("index.html", path.join(__dirname, "client/build"))
})

const start = async () => {
  try {
    await fastifyInstance.listen({ port: 3000 })

    const port = (fastifyInstance.server.address() as AddressInfo)?.port

    fastifyInstance.log.info(`server listening on ${port}`)
  } catch (err) {
    fastifyInstance.log.error(err)
    process.exit(1)
  }
}
start()
