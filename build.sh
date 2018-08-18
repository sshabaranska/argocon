#!/bin/bash
conf=$1
outfile=web-trading-app-$conf.zip
ng build -c $conf
cd dist
rm $outfile
zip -r $outfile web-trading-app
scp $outfile aivushkin@devlin:.
cd ..

