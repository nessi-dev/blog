#!/bin/bash

# Get repository information
REPO="nessi-dev/blog"

# Get GitHub Pages settings
echo "=== GitHub Pages Settings ==="
curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/$REPO/pages" | jq

# Get the latest workflow run
echo -e "\n=== Latest Workflow Run ==="
WORKFLOW_RUN=$(curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/$REPO/actions/runs?per_page=1" | jq '.workflow_runs[0]')
echo "Status: $(echo $WORKFLOW_RUN | jq -r '.status')"
echo "Conclusion: $(echo $WORKFLOW_RUN | jq -r '.conclusion')"
echo "HTML URL: $(echo $WORKFLOW_RUN | jq -r '.html_url')"

# Get gh-pages branch info
echo -e "\n=== gh-pages Branch ==="
curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/$REPO/branches/gh-pages" | jq

# Check if site is accessible
echo -e "\n=== Site Accessibility ==="
echo "Trying to access https://nessi-dev.github.io/blog/"
curl -I https://nessi-dev.github.io/blog/
