var SomeData;
var root;
export function CreatePieChart(Data) {
    am5.ready(function () {
        root.container.children.clear();

        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        var chart = root.container.children.push(
            am5percent.PieChart.new(root, {
                endAngle: 270
            })
        );

        var series = chart.series.push(
            am5percent.PieSeries.new(root, {
                valueField: "Value",
                categoryField: "Country",
                endAngle: 270
            })
        );

        series.states.create("hidden", {
            endAngle: -90
        });

        series.data.setAll(
            JSON.parse(Data)
        );

        series.appear(1000, 100);
        SomeData = series;

        var legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.percent(50),
            x: am5.percent(50),
            layout: root.horizontalLayout
        }));

        legend.data.setAll(series.dataItems);

    });

}

export function UpdatePieChart(Data) {
    am5.ready(function () {
        SomeData.data.setAll(
            JSON.parse(Data)
        );
    });
}

export function CreateRoot() {
    am5.ready(function () { root = am5.Root.new("chartdiv"); });
}