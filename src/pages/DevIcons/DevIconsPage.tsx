import { Icon } from '../../components/ui/Icon'
import { iconNames } from '../../components/ui/iconNames'
import { Logo } from '../../components/ui/Logo'

const colourRows = ['text-ink', 'text-teal-700', 'text-sun', 'text-negative']

export function DevIconsPage() {
  return (
    <main id="main" className="mx-auto flex max-w-content flex-col gap-10 px-4 py-12 lg:px-20">
      <h1 className="text-display-l">Icons and logo</h1>
      <section className="flex flex-col gap-4">
        <h2 className="text-h3">Logo</h2>
        <div className="flex flex-wrap items-center gap-6">
          <Logo />
          <span className="rounded-tile bg-navy p-4">
            <Logo variant="reverse" />
          </span>
          <Logo variant="mark" />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-h3">Icons ({iconNames.length})</h2>
        <ul className="grid grid-cols-3 gap-3 md:grid-cols-6 lg:grid-cols-8">
          {iconNames.map((name) => (
            <li key={name} data-icon={name} className="flex flex-col items-center gap-2 rounded-tile border border-line p-3">
              <span className="flex gap-1">
                {colourRows.map((colour) => (
                  <Icon key={colour} name={name} size="nav" className={colour} />
                ))}
              </span>
              <span className="text-caption text-slate">{name}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
