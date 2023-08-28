import { addEmojiToString } from "../utils/emoji";

export const ParticipantsSectionChartConfig = {
  chart: {
    height: 350,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
      borderRadiusApplication: "around",
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  tooltip: {
    custom: function ({
      series,
      seriesIndex,
      dataPointIndex,
    }: {
      series: any;
      seriesIndex: number;
      dataPointIndex: number;
      w: any;
    }) {
      return (
        '<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px"><div><b>' +
        series[seriesIndex][dataPointIndex] +
        "</b> Signups" +
        "</div>" +
        "<p style='font-size:12px'>Current Week</p>" +
        "</div>"
      );
    },
  },
  fill: {
    colors: ["#d9c814"],
  },
  grid: {
    show: false,
  },
};

export const LeaderboardSectionChartConfig1 = {
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
      borderRadiusApplication: "around",
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: true,
    textAnchor: "start",
    style: {
      colors: ["#000"],
    },
    formatter: function (_: any, opt: any) {
      return opt.w.globals.labels[opt.dataPointIndex];
    },
    offsetX: 0,
    offsetY: 0,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    categories: [
      addEmojiToString("", "🌍 United states"),
      addEmojiToString("", "🌍 Germany"),
      addEmojiToString("", "🌍 Netherlands"),
      addEmojiToString("", "🌍 India"),
      addEmojiToString("", "🌍 Japan"),
      addEmojiToString("", "🌍 Other"),
    ],
  },
  yaxis: {
    labels: {
      show: false,
    },
    max: 50000,
    axisBorder: {
      show: false,
    },
  },
  tooltip: {},
  fill: {
    colors: ["#d9c814"],
    opacity: 0.3,
  },
  grid: {
    show: false,
  },
};

export const LeaderboardSectionChartConfig2 = {
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
      borderRadiusApplication: "around",
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: true,
    textAnchor: "start",
    style: {
      colors: ["#000"],
    },
    formatter: function (_: any, opt: any) {
      return opt.w.globals.labels[opt.dataPointIndex];
    },
    offsetX: 0,
    offsetY: 0,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    categories: [
      "🌍 United states",
      "🌍 Germany",
      "🌍 Netherlands",
      "🌍 India",
      "🌍 Japan",
      "🌍 Other",
    ],
  },
  yaxis: {
    labels: {
      show: false,
    },
    max: 50000,
    axisBorder: {
      show: false,
    },
  },
  tooltip: {},
  fill: {
    colors: ["#d9c814"],
    opacity: 0.3,
  },
  grid: {
    show: false,
  },
};

export const LeaderboardSectionChartConfig3 = {
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
      borderRadiusApplication: "around",
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: true,
    textAnchor: "start",
    style: {
      colors: ["#000"],
    },
    formatter: function (_: any, opt: any) {
      return opt.w.globals.labels[opt.dataPointIndex];
    },
    offsetX: 0,
    offsetY: 0,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    categories: [
      "🌍 United states",
      "🌍 Germany",
      "🌍 Netherlands",
      "🌍 India",
      "🌍 Japan",
      "🌍 Other",
    ],
  },
  yaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    max: 50000,
  },
  tooltip: {},
  fill: {
    colors: ["#d9c814"],
    opacity: 0.3,
  },
  grid: {
    show: false,
  },
};
