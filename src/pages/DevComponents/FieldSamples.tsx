import { useState } from 'react'
import { PasswordField } from '../../components/ui/PasswordField'
import { TextField } from '../../components/ui/TextField'
import { DevSection } from './DevSection'

export function FieldSamples() {
  const [username, setUsername] = useState('')
  return (
    <DevSection title="Form fields">
      <div className="grid max-w-xl gap-6">
        <TextField
          label="Username"
          helper="Use the demo username shared with you."
          leadingIcon="user"
          autoComplete="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <PasswordField label="Password" />
        <TextField label="Username" leadingIcon="user" error="Enter your username." />
      </div>
    </DevSection>
  )
}
