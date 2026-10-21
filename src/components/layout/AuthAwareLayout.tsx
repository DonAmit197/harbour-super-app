import { useAuth } from '../../features/auth/authContext'
import { MemberLayout } from './MemberLayout'
import { PublicLayout } from './PublicLayout'

// Pages anyone can reach (such as the 404 page) keep signed-in members inside the member area.
export function AuthAwareLayout() {
  const { signedIn } = useAuth()
  return signedIn ? <MemberLayout /> : <PublicLayout />
}
