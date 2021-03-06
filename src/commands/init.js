const {Command, flags} = require('@oclif/command')

class InitCommand extends Command {
  async run() {
    const {flags} = this.parse(InitCommand)
    const name = flags.name || 'world'
    this.log(`init ${name} from ./src/commands/init.js`)
  }
}

InitCommand.description = `Describe the command here
...
Extra documentation goes here
`

InitCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = InitCommand
