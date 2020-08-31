import React, { useState, Fragment } from "react";

import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';
import './Charts.scss';

const Charts = (props) => {

    const [title, setTitle] = useState('Charts');
    const data = {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    };

    const dataForBarChart = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#42A5F5',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                backgroundColor: '#9CCC65',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    const multiAxisData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: [
                '#EC407A',
                '#AB47BC',
                '#42A5F5',
                '#7E57C2',
                '#66BB6A',
                '#FFCA28',
                '#26A69A'
            ],
            yAxisID: 'y-axis-1',
            data: [65, 59, 80, 81, 56, 55, 10]
        }, {
            label: 'Dataset 2',
            backgroundColor: '#78909C',
            yAxisID: 'y-axis-2',
            data: [28, 48, 40, 19, 86, 27, 90]
        }]
    };

    const multiAxisOptions = {
        responsive: true,
        tooltips: {
            mode: 'index',
            intersect: true
        },
        scales: {
            yAxes: [{
                type: 'linear',
                display: true,
                position: 'left',
                id: 'y-axis-1',
                ticks: {
                    min: 0,
                    max: 100
                }
            },
            {
                type: 'linear',
                display: true,
                position: 'right',
                id: 'y-axis-2',
                gridLines: {
                    drawOnChartArea: false
                },
                ticks: {
                    min: 0,
                    max: 100
                }
            }]
        }
    }

    const stackedData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            type: 'bar',
            label: 'Dataset 1',
            backgroundColor: '#66BB6A',
            data: [
                50,
                25,
                12,
                48,
                90,
                76,
                42
            ]
        }, {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: '#FFCA28',
            data: [
                21,
                84,
                24,
                75,
                37,
                65,
                34
            ]
        }, {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: '#42A5F5',
            data: [
                41,
                52,
                24,
                74,
                23,
                21,
                32
            ]
        }]
    };

    const stackedOptions = {
        tooltips: {
            mode: 'index',
            intersect: false
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true
            }]
        }
    };


    return (
        <Fragment>
            <div className="charts">
                <h1>{title}</h1>
                <section className="charts-container">
                    <Card title="Pie Chart" >
                        <Chart type="pie" data={data} />
                    </Card>
                    <Card title="Line Chart" >
                        <Chart type="line" data={data} />
                    </Card>
                    <Card title="Donut Chart" >
                        <Chart type="doughnut" data={data} />
                    </Card>
                    <Card title="Vertical Bar Chart" >
                        <Chart type="bar" data={dataForBarChart} />
                    </Card>

                    <Card title="Horizontal Bar Chart" >
                        <Chart type="horizontalBar" data={dataForBarChart} />
                    </Card>

                    <Card title="Multi Axis Bar Chart" >
                        <Chart type="bar" data={multiAxisData} options={multiAxisOptions} />
                    </Card>

                    <Card title="Stacked Bar Chart" >
                        <Chart type="bar" data={stackedData} options={stackedOptions} />
                    </Card>
                </section>
                <section className="charts-container">
                    
                </section>
            </div>
        </Fragment>
    );
}

export default Charts;