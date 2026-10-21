import { useEffect, useRef, useState, type FormEvent } from 'react'
import { loginContent } from '../../content/loginContent'
import { useAuth } from '../../features/auth/authContext'

type FieldErrors = { username?: string; password?: string }

// Validates on submit. On success RedirectIfSignedIn takes the member to the dashboard.
export function useLoginForm() {
  const { logIn } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [failedAttempts, setFailedAttempts] = useState(0)
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const summaryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (failedAttempts > 0) summaryRef.current?.focus()
  }, [failedAttempts])

  const submit = (event: FormEvent) => {
    event.preventDefault()
    const errors: FieldErrors = {
      username: username.trim() ? undefined : loginContent.username.empty,
      password: password ? undefined : loginContent.password.empty,
    }
    setFieldErrors(errors)
    if (errors.username || errors.password) {
      setFailedAttempts(0)
      ;(errors.username ? usernameRef : passwordRef).current?.focus()
      return
    }
    if (!logIn(username, password)) setFailedAttempts((count) => count + 1)
  }

  return {
    username,
    password,
    setUsername,
    setPassword,
    fieldErrors,
    showSummary: failedAttempts > 0,
    refs: { usernameRef, passwordRef, summaryRef },
    submit,
  }
}
