 #!/bin/bash

  # Read the current package.json version
  current_version=$(node -p "require('./package.json').version")
  echo "Current version: $current_version"

  # Increment the version number
  new_version=$(npm version --no-git-tag-version patch)
  echo "New version: $new_version"

  # Build the project
  $(npm run build)

  # Publish the project
  $(npm config set _authToken=$NPM_ACCESSTOKEN)
#   $(npm publish --access public)
  $(npm publish --@conveyio:registry=https://registry.npmjs.org)

  # Commit the changes
  git add .
  git commit -m "RELEASE (serif) : new release $new_version"
  git push origin main

  # Inform the user
  echo "Released $new_version"