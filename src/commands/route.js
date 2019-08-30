const {Command, flags} = require('@oclif/command')

class RouteCommand extends Command {
  async run() {
    const {flags} = this.parse(RouteCommand)
    const name = flags.name || 'world'
    this.log(`route ${name} from ./src/commands/route.js`)
  }
}

RouteCommand.description = `Describe the command here
...
Extra documentation goes here
`

RouteCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = RouteCommand
