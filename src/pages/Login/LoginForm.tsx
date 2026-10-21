import { Button } from '../../components/ui/Button'
import { FutureLink } from '../../components/ui/FutureLink'
import { Icon } from '../../components/ui/Icon'
import { PasswordField } from '../../components/ui/PasswordField'
import { TextField } from '../../components/ui/TextField'
import { loginContent } from '../../content/loginContent'
import { useLoginForm } from './useLoginForm'

export function LoginForm() {
  const form = useLoginForm()
  const { usernameRef, passwordRef, summaryRef } = form.refs

  return (
    <form noValidate onSubmit={form.submit} className="flex flex-col gap-5">
      {form.showSummary && (
        <div
          ref={summaryRef}
          role="alert"
          tabIndex={-1}
          className="flex items-start gap-3 rounded-input border-strong border-negative bg-white px-4 py-3 text-body-m-strong text-negative"
        >
          <Icon name="alert" className="mt-0.5" />
          <span>{loginContent.wrongDetails}</span>
        </div>
      )}
      <TextField
        ref={usernameRef}
        label={loginContent.username.label}
        helper={loginContent.username.helper}
        error={form.fieldErrors.username}
        leadingIcon="user"
        autoComplete="username"
        value={form.username}
        onChange={(event) => form.setUsername(event.target.value)}
      />
      <PasswordField
        ref={passwordRef}
        label={loginContent.password.label}
        error={form.fieldErrors.password}
        value={form.password}
        onChange={(event) => form.setPassword(event.target.value)}
      />
      <div className="flex flex-wrap items-center justify-between gap-2">
        <label className="flex min-h-11 cursor-pointer items-center gap-3 text-body-m text-ink">
          <input type="checkbox" className="size-5 cursor-pointer accent-teal-700" />
          {loginContent.rememberMe}
        </label>
        <FutureLink className="inline-flex min-h-11 items-center text-body-s-strong text-teal-700 underline underline-offset-4">
          {loginContent.forgotPassword}
        </FutureLink>
      </div>
      <Button type="submit" fullWidth>
        {loginContent.submit}
      </Button>
    </form>
  )
}
