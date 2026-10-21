import { useEffect, useRef, type MouseEvent, type ReactNode, type RefObject } from 'react'
import { headerLabels } from '../../content/navigation'
import { useLenis } from '../../features/scroll/smoothScrollContext'
import { Icon } from '../ui/Icon'
import { Logo } from '../ui/Logo'
import { keepFocusInside } from './focusTrap'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
  returnFocusRef: RefObject<HTMLButtonElement | null>
  children: ReactNode
}

export function MobileMenu({ open, onClose, returnFocusRef, children }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const lenis = useLenis()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) {
      dialog.showModal()
      lenis?.stop()
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open, lenis])

  // The menu can unmount while open (for example on log out), so always restart scrolling.
  useEffect(() => () => lenis?.start(), [lenis])

  const handleClose = () => {
    lenis?.start()
    onClose()
    returnFocusRef.current?.focus()
  }

  // Following a link inside the menu closes it.
  const closeOnLinkClick = (event: MouseEvent) => {
    if ((event.target as HTMLElement).closest('a')) dialogRef.current?.close()
  }

  return (
    <dialog
      ref={dialogRef}
      aria-label={headerLabels.menuTitle}
      onClose={handleClose}
      onKeyDown={(event) => keepFocusInside(event, dialogRef.current)}
      onClick={closeOnLinkClick}
      className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-white p-0 text-ink backdrop:bg-ink/40 md:ml-auto md:max-w-md md:shadow-overlay"
    >
      <div className="flex h-16 items-center justify-between border-b border-line px-4">
        <Logo alt="Harbour Super" className="w-36" />
        <button
          type="button"
          aria-label={headerLabels.closeMenu}
          onClick={() => dialogRef.current?.close()}
          className="-mr-2 flex size-11 cursor-pointer items-center justify-center rounded-pill hover:bg-mist"
        >
          <Icon name="x" size="nav" />
        </button>
      </div>
      <div className="flex flex-col gap-6 px-4 py-6">{children}</div>
    </dialog>
  )
}
