#!/bin/bash
if  [ ! -n "$1" ] ;then
    echo "输入页面名"
    exit 0
fi
shellpath=$(dirname $0)
path=${shellpath%/template}
compName=$1
CompName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"
cp $path/template/templateReducer.ts $path/src/reducers/$compName.ts
sed -i "" "s/template/$compName/g" $path/src/reducers/$compName.ts
mkdir $path/src/pages/$CompName
cp $path/template/template.tsx $path/src/page/$CompName/CompName.tsx
sed -i "" "s/template/$compName/g" $path/src/page/$CompName/CompName.tsx
cp $path/template/index.ts $path/src/page/$CompName/index.ts
sed -i "" "s/template/$compName/g" $path/src/page/$CompName/index.ts
cp $path/template/template.scss $path/src/page/$compName/index.scss
sed -i "" "s/template/$compName/g" $path/src/page/$compName/index.scss
cp $path/template/templateAction.ts $path/src/actions/$compName.ts
sed -i "" "s/template/$compName/g" $path/src/actons/$compName.ts

