import { v4 as uuid } from 'uuid'

export const testUser = {
  username: `automated-test-user-${uuid()}`,
  email: `automated-${uuid()}@gmail.com`,
  password: 'password123',
}
