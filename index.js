const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');
const { options } = config;
const folders = [12,12,12,10,9,10,18,15,19,29];
let dateTime = new Date().toLocaleString('es-CO')
let resultPath = "./vrt/results"

async function executeTest(){
    let resultInfo = {}
    let resultInfoTotal = []
    let imagePathV3 = ''
    let imagePathV4 = ''
    let compareImagePath = ''
    let folderName ="./vrt/Scenario";
    let imageName ="/Scenario"
    
    
    if (!fs.existsSync(resultPath)) {
        fs.mkdirSync(resultPath);
      }    
    for(let folderindex = 0 ; folderindex < (folders.length); folderindex++){     
        resultInfo = {}   
        for(let imageIndex = 0 ; imageIndex < folders[folderindex]; imageIndex++ ){     

            imagePathV3= folderName + (folderindex +1) + imageName + (folderindex+1) + '_V3-'+ (imageIndex+1) +'.png'
            imagePathV4= folderName + (folderindex +1) + imageName + (folderindex+1) + '_V4-'+ (imageIndex+1) +'.png'
            
            //console.log(imagePathV3)
            //console.log(imagePathV4)
            
            const data = await compareImages(
                fs.readFileSync(imagePathV3),
                fs.readFileSync(imagePathV4),
                options
            );

            compareImagePath = folderName + (folderindex +1) + imageName + (folderindex+1) + 'Compare-' + (imageIndex+1) +'.png'
            
            resultInfo[imageIndex+1] = {
                scenario: imageName + (folderindex+1),
                isSameDimensions: data.isSameDimensions,
                dimensionDifference: data.dimensionDifference,
                rawMisMatchPercentage: data.rawMisMatchPercentage,
                misMatchPercentage: data.misMatchPercentage,
                diffBounds: data.diffBounds,
                analysisTime: data.analysisTime,
                imagePath: '../'+ imageName + (folderindex +1) + imageName + (folderindex+1) + 'Compare-' + (imageIndex+1) +'.png'
            }            
            fs.writeFileSync(compareImagePath, data.getBuffer());
        }                
        resultInfoTotal.push(resultInfo);
    }        
    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfoTotal;
}



function reportScenarios(info){   
    console.log(info) 
    let htmlCode = ''
    let completeCode = '';
    info.forEach((element,index) => {
        htmlCode = ''
        htmlImageCode = ''
        Object.entries(element).forEach(([key, value]) => {            
            let htmlImageCode = `
            <div class="imgline">
              <div class="imgcontainer">
                <span class="imgname">Diff Step ${key}</span>
                <table>
                    <tr>
                        <th>rawMisMatchPercentage</th>
                        <th>misMatchPercentage</th>
                        <th>analysisTime</th>
                    </tr>
                    <tr>
                        <td>${value.rawMisMatchPercentage}</td>
                        <td>${value.misMatchPercentage}</td>
                        <td>${value.analysisTime}</td>
                </tr>                
                </table>                
                <img class="imgfull" src="${value.imagePath}" id="diffImage" label="Diff">
              </div>
            </div>`
            
            htmlCode = htmlCode + htmlImageCode
            
        })
        //console.log(htmlCode)
        let titleCode = `<div class=" browser" id="test0">
                            <div class=" btitle">
                                <h2>${info[index][1].scenario.substring(1)}</h2>                                
                            </div>    
                            ${htmlCode}
                        </div>`
        
        completeCode = completeCode + titleCode
         
    });        
        
  return completeCode
}

function createReport(datetime, resInfo){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${reportScenarios(resInfo)}
            </div>
        </body>
    </html>`
}

async function vrtTest(){
    console.log("Test Execution in progress...");
    let resultTest = await executeTest();    
    fs.writeFileSync(`${resultPath}/report.html`, createReport(dateTime, resultTest));
    fs.copyFileSync('./index.css', `${resultPath}/index.css`);

}

vrtTest();