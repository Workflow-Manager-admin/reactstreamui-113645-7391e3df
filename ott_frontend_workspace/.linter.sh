#!/bin/bash
cd /home/kavia/workspace/code-generation/reactstreamui-113645-7391e3df/ott_frontend_workspace/ott_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

