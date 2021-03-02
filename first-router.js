const opts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'number' }
        }
      }
    }
  }
}

async function routes(fastify) {
    fastify.get('/', opts, async (request, reply) => {
        return {hello: '56'}
    })
}

module.exports = routes