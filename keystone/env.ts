import { config as dotenv } from 'dotenv'

const verifyEnv = () => {

  dotenv({ path: '../.env'})

  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL not set in environment variables')
  }

  if (!process.env.COOKIE_SECRET) {
    throw new Error('COOKIE_SECRET not set in environment variables')
  }

  return {
    DATABASE_URL: process.env.DATABASE_URL,
    COOKIE_SECRET: process.env.COOKIE_SECRET,
  }
}

export const env = verifyEnv()



