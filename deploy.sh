#!/bin/bash

npm run build
scp -r dist/* beer:/home/ubuntu/tools
