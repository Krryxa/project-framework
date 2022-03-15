/* eslint-disable */
const chalk = require('chalk')
/* eslint-disable */
const args = require('minimist')(process.argv.slice(2))
const msgPath = args['name']
/* eslint-disable */
const msg = require('fs')
  .readFileSync(msgPath, 'utf-8')
  .trim()

const commitRE = /^(revert: )?(feat|fix|polish|docs|style|refactor|perf|test|workflow|ci|chore|types|build)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.log()
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
      `invalid commit message format.`
    )}\n\n` +
      chalk.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
      ) +
      `    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
      `    ${chalk.green(
        `fix(v-model): handle events on blur (close #28)`
      )}\n\n` +
      chalk.red(`  See .gitlab/COMMIT_CONVENTION.md for more details.\n`) +
      chalk.red(
        `  You can also use ${chalk.cyan(
          `git cz`
        )} to interactively generate a commit message.\n`
      )
  )
  /* eslint-disable */
  process.exit(1)
}
