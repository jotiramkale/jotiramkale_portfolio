import { iconMap } from '../../utils/iconMap'

/**
 * Renders a react-icons component looked up by string key.
 * Usage: <Icon name="python" className="h-5 w-5" />
 */
export default function Icon({ name, className = '', ...rest }) {
  const Component = iconMap[name]

  if (!Component) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.warn(`Icon "${name}" was not found in iconMap.`)
    }
    return null
  }

  return <Component className={className} {...rest} aria-hidden="true" />
}
