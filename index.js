const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');
const { options } = config;
async function executeTest(){
    let resultInfo = {}
    let resultInfoTotal = []
    const folders = [2, 1];
    let folderName ="./vrt/Scenario";
    let imageName ="/Scenario"
    for(let folderindex = 0 ; folderindex < folders.length; folderindex++){
        for(let imageIndex = 1 ; imageIndex <= folders[folderindex]; imageIndex++ ){
            const data = await compareImages(
                fs.readFileSync(folderName + (folderindex +1) + imageName + imageIndex + '_V3-'+ imageIndex +'.png'),
                fs.readFileSync(folderName + (folderindex +1) + imageName + imageIndex + '_V4-'+ imageIndex +'.png'),
                options
            );
            resultInfo[imageIndex] = {
                isSameDimensions: data.isSameDimensions,
                dimensionDifference: data.dimensionDifference,
                rawMisMatchPercentage: data.rawMisMatchPercentage,
                misMatchPercentage: data.misMatchPercentage,
                diffBounds: data.diffBounds,
                analysisTime: data.analysisTime
            }
            fs.writeFileSync(folderName + (folderindex +1) +'/'+ imageName + imageIndex + 'Compare-' + imageIndex +'.png', data.getBuffer());
        }
        resultInfoTotal.push(resultInfo);
    }
    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfoTotal;
}
(async ()=>console.log(await executeTest()))();