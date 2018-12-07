#!/bin/bash
set -euxo pipefail

case "$1" in
  "database")
    docker-compose exec database mysql
    ;;
  "api")
    docker-compose exec api bash
    ;;
  *)
    echo "No such service."
    exit 1
    ;;
esac
