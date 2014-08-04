#!/usr/bin/sh
# Script to generate host list and check for dead hosts

echo "Generating supported host list..."
sed -n 's/.*case "\(.*\)":.*/\1/p' HandyImage.user.js | sort | uniq > supported-host-list.txt

echo "Checking broken hosts..."
while read URL; do
	RESULT=$(curl -s -o /dev/null --connect-timeout 2 -w%{http_code} ${URL})
	echo "[${RESULT}] ${URL}"
done < supported-host-list.txt | sort > broken-host-list.txt
echo "Done."

exit 0
