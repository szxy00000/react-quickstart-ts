/**
 * 图标
 */
import * as React from "react";
import * as echarts from "echarts";
// import { Loading } from "antd";
import "./chart.scss";

export type ChartOptions = echarts.EChartOption;

export interface ChartProps {
  options: ChartOptions | any;
  style?: any;
  loading?: boolean;
  error?: Error | null;
  height?: number | string;
  width?: number | string;
  getData?: (data) => void;
}

// 渐变色
export const ChartColor = {
  linearGreen: new echarts.graphic.LinearGradient(
    0,
    0,
    0,
    1,
    [
      { offset: 0, color: "#93D98F" },
      { offset: 1, color: "#5BB357" },
    ],
    false
  ),
  green: "#93D98F",
  darkGreen: "#5BB357",
  red: "#E78F96",
  darkRed: "#C95D63",
  gray: "#D8D8D8",
  tooltip: "#243c60",
};

// tooltip基础配置
export const ChartTooltipConfig: any = {
  backgroundColor: ChartColor.tooltip,
  padding: [4, 12],
  textStyle: {
    color: "white",
    fontSize: 14,
    fontWeight: "100",
    lineHeight: 24,
  },
};

export const Chart: React.SFC<ChartProps> = (props) => {
  const {
    options,
    style = {},
    loading = false,
    error = null,
    height,
    getData,
  } = props;

  const ref = React.useRef<HTMLDivElement>(null);
  const [chart, setChart] = React.useState<echarts.ECharts>();

  function init() {
    if (!ref.current) return;
    if (chart) chart.dispose();

    const _chart = echarts.init(ref.current);
    setChart(_chart);

    _chart.setOption(options);

    return _chart;
  }

  React.useEffect(() => {
    init();

    window.addEventListener("resize", init);
    return () => {
      if (chart) chart.dispose();
      window.removeEventListener("resize", init);
    };
  }, []);

  React.useEffect(() => {
    if (!chart) return;
    chart.setOption(options);
    chart.resize();
  }, [JSON.stringify(options)]);

  React.useEffect(() => {
    if (chart) chart.resize();
  }, [height]);

  React.useEffect(() => {
    if (!chart) return;
    getData && getData(chart);
  }, [getData]);

  return (
    <div
      className="chart"
      style={{ ...style, height, width: props.width || "100%" }}
    >
      <div
        ref={ref}
        className="chart-cont"
        style={{ width: props.width || "100%" }}
      />
      {/* {loading && <Loading />} */}
      {error && (
        <div className="chart-error">
          <p>error</p>
        </div>
      )}
    </div>
  );
};
