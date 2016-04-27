import eyes from 'eyes'

const styles = Object.assign({}, eyes.defaults.styles, {
  all:      'yellow',
  string:   'cyan',
  label:    'underline',
  key :     'bold',
  bool:     'green',
  regexp:   'magenta',
})

const inspect = eyes.inspector({ styles })

export default function log(...args) {
  inspect(...args.reverse())
}
