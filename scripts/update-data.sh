#!/bin/bash
rm -rf src/data/
mkdir -p src/data/

curl https://raw.githubusercontent.com/UIUC-DDDG-AR/data/master/Capability/capability_information.json --compressed -o src/data/capability_information.json
curl https://raw.githubusercontent.com/UIUC-DDDG-AR/data/master/Hardware/hardware_capability.json --compressed -o src/data/hardware_capability.json
curl https://raw.githubusercontent.com/UIUC-DDDG-AR/data/master/Hardware/hardware_documentation.json --compressed -o src/data/hardware_documentation.json
curl https://raw.githubusercontent.com/UIUC-DDDG-AR/data/master/Software/software_capability.json --compressed -o src/data/software_capability.json
curl https://raw.githubusercontent.com/UIUC-DDDG-AR/data/master/Software/software_documentation.json --compressed -o src/data/software_documentation.json

echo "The local data directory ./data now contains up-to-date datasets from https://github.com/UIUC-DDDG-AR/data/"