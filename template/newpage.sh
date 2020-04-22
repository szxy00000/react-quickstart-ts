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
cp $path/template/template.tsx $path/src/pages/$CompName/$CompName.tsx
sed -i "" "s/template/$compName/g" $path/src/pages/$CompName/$CompName.tsx
sed -i "" "s/Template/$CompName/g" $path/src/pages/$CompName/$CompName.tsx
cp $path/template/index.ts $path/src/pages/$CompName/index.ts
sed -i "" "s/template/$compName/g" $path/src/pages/$CompName/index.ts
cp $path/template/template.less $path/src/pages/$compName/$compName.less
sed -i "" "s/template/$compName/g" $path/src/pages/$compName/$compName.less
cp $path/template/templateAction.ts $path/src/actions/$compName.ts
sed -i "" "s/template/$compName/g" $path/src/actions/$compName.ts
touch $path/src/pures/$compName.ts
node $path/template/nodeCommand.js $compName $CompName

