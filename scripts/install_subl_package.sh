#!/bin/bash

set -e

if [ $(uname) = 'Darwin' ]; then
    STP="$HOME/Library/Application Support/Sublime Text $SUBLIME_TEXT_VERSION/Packages"
else
    STP="$HOME/.config/sublime-text-$SUBLIME_TEXT_VERSION/Packages"
fi

InstallPackage() {
    PACKAGE="$1"
    echo "Installing Package: ${PACKAGE}"
    PKG_PATH="$STP/$PACKAGE"
    if [ "$SUBLIME_TEXT_VERSION" -eq 3 ] && [ ! -d "$PKG_PATH" ]; then

        PKG_URL="$2"
        PKG_TAG="$3"

        if [ -z $PKG_TAG ]; then
            # latest tag
            PKG_TAG=$(git ls-remote --tags "$PKG_URL" |
                  sed 's|.*/\(.*\)$|\1|' | grep -v '\^' |
                  sort -t. -k1,1nr -k2,2nr -k3,3nr | head -n1)
        fi

        echo "download tag: $PKG_TAG"
        echo $PKG_TAG "$PKG_URL" "$PKG_PATH"
        git clone --quiet --depth 1 --branch $PKG_TAG "$PKG_URL" "$PKG_PATH"
        git -C "$PKG_PATH" rev-parse HEAD
        echo
    fi
}

InstallPackage "$@"
