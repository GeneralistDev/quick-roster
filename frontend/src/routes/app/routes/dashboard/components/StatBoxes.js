import React from 'react';
import ReactEcharts from 'components/ReactECharts';
import CHARTCONFIG from 'constants/ChartConfig';

// Small line charts
const smline1 = {};
const smline2 = {};
const smline3 = {};
const smline4 = {};
smline1.options = {
    tooltip: {
        show: false,
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: CHARTCONFIG.color.gray
            }
        }
    }, 
    grid: {
        x: 1,
        y: 1,
        x2: 1,
        y2: 1,
        borderWidth: 0
    },            
    xAxis : [
        {
            type : 'category',
            show: false,
            boundaryGap : false,
            data : [1,2,3,4,5,6,7]
        }
    ],
    yAxis : [
        {
            type : 'value',
            show: false,
            axisLabel : {
                formatter: '{value} °C'
            }
        }
    ],
    series : [
        {
            name:'*',
            type:'line',
            symbol: 'none',
            data:[11, 12, 9, 10, 14, 12, 13],
            itemStyle: {
                normal: {
                    color: CHARTCONFIG.color.success
                }
            }                    
        }
    ]
};
smline2.options = {
    tooltip: {
        show: false,
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: CHARTCONFIG.color.gray
            }
        }
    }, 
    grid: {
        x: 1,
        y: 1,
        x2: 1,
        y2: 1,
        borderWidth: 0
    },            
    xAxis : [
        {
            type : 'category',
            show: false,
            boundaryGap : false,
            data : [1,2,3,4,5,6,7]
        }
    ],
    yAxis : [
        {
            type : 'value',
            show: false,
            axisLabel : {
                formatter: '{value} °C'
            }
        }
    ],
    series : [
        {
            name:'*',
            type:'line',
            symbol: 'none',
            data:[11, 10, 14, 12, 13, 11, 12],
            itemStyle: {
                normal: {
                    color: CHARTCONFIG.color.info
                }
            }                     
        }
    ]
};
smline3.options = {
    tooltip: {
        show: false,
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: CHARTCONFIG.color.gray
            }
        }
    }, 
    grid: {
        x: 1,
        y: 1,
        x2: 1,
        y2: 1,
        borderWidth: 0
    },            
    xAxis : [
        {
            type : 'category',
            show: false,
            boundaryGap : false,
            data : [1,2,3,4,5,6,7]
        }
    ],
    yAxis : [
        {
            type : 'value',
            show: false,
            axisLabel : {
                formatter: '{value} °C'
            }
        }
    ],
    series : [
        {
            name:'*',
            type:'line',
            symbol: 'none',
            data:[11, 10, 15, 13, 12, 13, 10],
            itemStyle: {
                normal: {
                    color: CHARTCONFIG.color.danger
                }
            }                 
        }
    ]
};
smline4.options = {
    tooltip: {
        show: false,
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: CHARTCONFIG.color.gray
            }
        }
    }, 
    grid: {
        x: 1,
        y: 1,
        x2: 1,
        y2: 1,
        borderWidth: 0
    },            
    xAxis : [
        {
            type : 'category',
            show: false,
            boundaryGap : false,
            data : [1,2,3,4,5,6,7]
        }
    ],
    yAxis : [
        {
            type : 'value',
            show: false,
            axisLabel : {
                formatter: '{value} °C'
            }
        }
    ],
    series : [
        {
            name:'*',
            type:'line',
            symbol: 'none',
            data:[11, 12, 15, 12, 13, 12, 11],
            itemStyle: {
                normal: {
                    color: CHARTCONFIG.color.warning
                }
            }
        }
    ]
};

const Statboxes = () => {
    return(
        <div className="row">
            <div className="col-xl-3 col-sm-6">
                <div className="box box-default">
                    <div className="box-top">
                        <span>35<span className="size-h5">%</span></span>
                    </div>
                    <div className="box-info">
                        <span><i className="material-icons">airplanemode_active</i> Growth</span>
                    </div>
                    <div className="box-bottom">
                        <ReactEcharts height={80} option={smline1.options} showLoading={false}/>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6">
                <div className="box box-default">
                    <div className="box-top">
                        <span>42<span className="size-h5">%</span></span>
                    </div>
                    <div className="box-info">
                        <span><i className="material-icons">supervisor_account</i> New Users</span>
                    </div>
                    <div className="box-bottom">
                        <ReactEcharts height={80} option={smline2.options} showLoading={false}/>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6">
                <div className="box box-default">
                    <div className="box-top">
                        <span>37<span className="size-h5">k</span></span>
                    </div>
                    <div className="box-info">
                        <span><i className="material-icons">attach_money</i> Profit</span>
                    </div>
                    <div className="box-bottom">
                        <ReactEcharts height={80} option={smline3.options} showLoading={false}/>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6">
                <div className="box box-default">
                    <div className="box-top">
                        <span>25<span className="size-h5">k</span></span>
                    </div>
                    <div className="box-info">
                        <span><i className="material-icons">shopping_cart</i> Sales</span>
                    </div>
                    <div className="box-bottom">
                        <ReactEcharts height={80} option={smline4.options} showLoading={false}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

module.exports = Statboxes;
