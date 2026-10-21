const sessionKey = 'harbour-super-demo-session'

// sessionStorage clears when the tab closes. Storage can be blocked, so failures mean "signed out".
export function readSignedIn() {
  try {
    return JSON.parse(sessionStorage.getItem(sessionKey) ?? '{}').signedIn === true
  } catch {
    return false
  }
}

export function writeSignedIn(signedIn: boolean) {
  try {
    if (signedIn) sessionStorage.setItem(sessionKey, JSON.stringify({ signedIn: true }))
    else sessionStorage.removeItem(sessionKey)
  } catch {
    // The demo still works for this page view without storage.
  }
}
