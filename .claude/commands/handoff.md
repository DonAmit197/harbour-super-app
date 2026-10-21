---
description: Archive old progress files, write a timestamped progress file for the next session, then stop work
---

Hand off this session so the next one can continue without re-reading everything.

1. Stop starting new work. Finish only the edit you are in the middle of, or revert it if it is half done.
2. Run quickly and note the results: `npm run lint`, `npx tsc --noEmit`, `npm run test`, `npm run build`.
   If the project is not scaffolded yet, say so instead.
3. Get the timestamp from the shell (local time) in the format `YYYY-MM-DD_HHmm`.
4. Archive older progress files so only the newest one stays at the top of `progress/`:
   - Create `progress/archived/` if it does not exist.
   - Move every `progress/*_Progress.md` into `progress/archived/` (keep their names). Never delete them.
   - Read the most recent archived file first if you need its history for the new file.
5. Write `progress/<timestamp>_Progress.md` with exactly these sections:

```
# Progress · <date and time>

## Task status
| Task | Status | Notes |
(all 13 tasks from .claude/docs/07-tasks.md; status = Done, In progress, Not started or Blocked)

## Done this session
- short bullets, with file paths

## In progress
- what is half done, and the exact next edit

## Next steps
1. numbered, in order, first one small enough to start immediately

## Check results
- lint / type check / unit tests / build / e2e: pass, fail (with the error) or not run

## Decisions and open questions
- choices made this session and anything waiting on the user

## Manual checks for a person
- e.g. screen reader checklist items, visual comparisons not yet signed off

## How to resume
- commands to run first, and the page to open

## Previous handoffs
- links to the files in progress/archived/, newest first
```

6. Confirm `progress/` now holds exactly one `*_Progress.md` file (the new one) plus the `archived/` folder.
7. Commit the work with a short message ending in "(handoff)" if a git repository exists and the user has allowed commits.
8. Reply with the progress file path and a three-line summary, then stop.
   Tell the user they can now close the session (for example with /exit) and that the next session will start from this file.
