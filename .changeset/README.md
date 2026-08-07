# Changesets

This directory is used by [Changesets](https://github.com/changesets/changesets) to manage releases.

## Releasing a new version

1. After making changes, run: `npm run changeset`
2. Follow the prompts to describe your changes and bump type (major/minor/patch)
3. Commit the generated changeset file
4. On merge to main, the CI release workflow will apply the version bump, update CHANGELOG.md, and publish to the registry
