const request = require('supertest')
const app = require('../app')

describe('Tests nodejs-docker-starter', () => {
  it('should return Hello World! from /', async () => {
    const response = await request(app).get('/')
    expect(response.text).toEqual('Hello World!')
  })
})
