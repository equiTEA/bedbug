import childProcess from 'child_process'

export const generatePrismaClient = () => {
  console.log('Introspecting database...')
  childProcess.execSync(
    'dotenv -e ./.env.ci npx prisma db pull --schema=./schema.prisma',
    {
      stdio: 'inherit',
      encoding: 'utf-8',
      cwd: './tests/database',
    },
  )

  console.log('Generating Prisma client...')
  childProcess.execSync(
    'dotenv -e ./.env.ci npx prisma generate --schema=./schema.prisma',
    {
      stdio: 'inherit',
      encoding: 'utf-8',
      cwd: './tests/database',
    },
  )
}
