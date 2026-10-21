import { useEffect, useId, useRef, useState } from 'react'
import { headerLabels } from '../../content/navigation'
import { demoMember } from '../../content/demoMember'
import { FutureLink } from '../ui/FutureLink'
import { Icon } from '../ui/Icon'

type ProfileMenuProps = { onLogOut: () => void }

export function ProfileMenu({ onLogOut }: ProfileMenuProps) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      buttonRef.current?.focus()
    }
    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  const itemClass = 'flex min-h-11 w-full cursor-pointer items-center gap-3 rounded-input px-3 text-body-m text-ink hover:bg-mist'

  return (
    <div ref={wrapperRef} className="relative hidden xl:block">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${headerLabels.accountMenu} ${demoMember.fullName}`}
        onClick={() => setOpen((current) => !current)}
        className="flex min-h-11 cursor-pointer items-center gap-3 rounded-pill pr-2 pl-1 hover:bg-mist"
      >
        <span aria-hidden="true" className="flex size-9 items-center justify-center rounded-pill bg-lagoon-50 text-body-s-strong text-teal-900">
          {demoMember.initials}
        </span>
        <span className="text-body-s-strong text-ink">{demoMember.fullName}</span>
        <Icon name="chevron-down" className={open ? 'rotate-180 text-slate' : 'text-slate'} />
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="absolute top-full right-0 mt-2 w-56 rounded-tile border border-line bg-white p-2 shadow-overlay"
      >
        <FutureLink className={itemClass}>
          <Icon name="user" className="text-slate" />
          {headerLabels.yourProfile}
        </FutureLink>
        <button type="button" onClick={onLogOut} className={itemClass}>
          <Icon name="log-out" className="text-slate" />
          {headerLabels.logOut}
        </button>
      </div>
    </div>
  )
}
