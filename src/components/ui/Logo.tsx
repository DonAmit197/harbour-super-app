const logoFiles = {
  full: { file: 'brand/logo.svg', width: 173, height: 40 },
  reverse: { file: 'brand/logo-reverse.svg', width: 173, height: 40 },
  mark: { file: 'brand/mark.svg', width: 64, height: 40 },
} as const

export type LogoVariant = keyof typeof logoFiles

type LogoProps = {
  variant?: LogoVariant
  // Use alt="" when the logo sits inside a link that already has an accessible name.
  alt?: string
  className?: string
}

export function Logo({ variant = 'full', alt = 'Harbour Super', className = '' }: LogoProps) {
  const { file, width, height } = logoFiles[variant]
  return (
    <img
      src={`${import.meta.env.BASE_URL}${file}`}
      width={width}
      height={height}
      alt={alt}
      className={`h-auto ${className}`}
    />
  )
}
