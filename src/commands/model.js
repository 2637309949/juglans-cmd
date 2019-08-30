const {Command, flags} = require('@oclif/command')

class ModelCommand extends Command {
  async run() {
    const {flags} = this.parse(ModelCommand)
    const name = flags.name || 'world'
    this.log(`model ${name} from ./src/commands/model.js`)
  }
}

ModelCommand.description = `Describe the command here
...
Extra documentation goes here
`

ModelCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = ModelCommand
