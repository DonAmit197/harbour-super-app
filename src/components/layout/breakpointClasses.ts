export type DesktopBreakpoint = 'lg' | 'xl'

// Full class names so Tailwind can find them.
export const showFrom: Record<DesktopBreakpoint, string> = { lg: 'hidden lg:block', xl: 'hidden xl:block' }
export const hideFrom: Record<DesktopBreakpoint, string> = { lg: 'lg:hidden', xl: 'xl:hidden' }
