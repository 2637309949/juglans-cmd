const {Command, flags} = require('@oclif/command')

class PluginCommand extends Command {
  async run() {
    const {flags} = this.parse(PluginCommand)
    const name = flags.name || 'world'
    this.log(`plugin ${name} from ./src/commands/plugin.js`)
  }
}

PluginCommand.description = `Describe the command here
...
Extra documentation goes here
`

PluginCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = PluginCommand
