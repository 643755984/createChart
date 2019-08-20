import chartData from './chartData.js'


function Option (data) {
    this.data = data;
}

Option.prototype.init = function(type) {
    this.data = chartData[type];
}

Option.prototype.setItemData = function(itemName, str, data) {
    for(var item in this.data){
        if(item == itemName){
            this.data[item][str] = data;
            break
        }
    }
}

Option.prototype.setAllData = function(data){
    this.setQualifiedData(data)
    this.data = data;
}

Option.prototype.setSeriesData = function(data) {

    this.data.xAxis.data = getLineData(data[0]);
    // console.log('xAxis.data-->', getLineData(data[0]))

    this.data.series = getSeriesData(data);
    // console.log(this.data.series)

    this.data.legend.data = getLegendData(data)
    // console.log('legend-->', getLegendData(data))
    // console.log(this.data)
}

// 获取合格的表格数据
function getSeriesData(data) {
    var arr = [];

    for(var i=1; i<=data.length; i++){

        if(data[i].name == ''){
            break;
        }
        let obj = {}
        // console.log(data[i].name)
        obj.name = data[i].name;
        obj.data = getLineData( data[i])
        obj.type = 'line'
        arr.push(obj)
    }
    return arr;
}

// 获取一行中排除第一个的非空数据
function getLineData(data) {
    var arr = [];
    for(let key in data){
        if((data[key] == '' && key != 'name') || (data[key] == null && key != 'name')){
            break;
        }
        arr.push(data[key])
    }
    arr.shift()
    return arr;
}

function getLegendData(data) {

    let arr = []
    for(var i=0; i<data.length;i++){
        if(data[i].name){
            arr.push(data[i].name)
        }
    }
    return arr
}

export default new Option();

