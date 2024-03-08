import styled from "styled-components";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
} from "recharts";
import historyData from "../../apis/historyJson.json";
import { convertDatetime } from "../../utils/utils";

export default function CharHistory() {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <TooltipContainer>
          <div>{label}</div>
          <div className="label">{`Lv. ${payload[0].value.toFixed(2)}`}</div>
        </TooltipContainer>
      );
    }

    return null;
  };

  // const values = historyData?.item_level.map(item => item.v);

  return (
    <HistoryContainer>
      <ResponsiveContainer maxWidth={500} maxHeight={500}>
        <LineChart
          data={historyData.item_level.map((item) => ({
            ...item,
            t: convertDatetime(item.t),
          }))}
          margin={{
            top: 50,
            right: 30,
            left: 10,
            bottom: 20,
          }}
        >
          <CartesianGrid stroke="#e5e5e5" strokeDasharray="3 3" />
          <XAxis
            dataKey="t"
            fontSize="12px"
            fontWeight="500"
            padding={{ left: 10, right: 10 }}
            angle={310}
            height={60}
            textAnchor="end"
          />
          <YAxis
            type="number"
            domain={["auto", "auto"]} // 자동으로 범위 설정
            // domain={[Math.floor(Math.min(...values) / 10) * 10, Math.ceil(Math.max(...values) / 10) * 10]}
            // allowDataOverflow={true} // 데이터를 벗어나는 경우 허용
            // min={Math.floor(Math.min(...values) / 10) * 10} // 최소값 설정
            // max={Math.ceil(Math.max(...values) / 10) * 10} // 최대값 설정
          />
          <Tooltip content={<CustomTooltip />} />
          {/* <Tooltip/> */}
          <Line
            type="linear"
            isAnimationActive={true}
            animationDuration={1000}
            dataKey="v"
            stroke="#6698FC"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </HistoryContainer>
  );
}

const HistoryContainer = styled.div`
  margin: auto;
  height: 55vh;
  font-size: 15px;

  border: 2px solid #666;
  border-radius: 10px;
`;

const TooltipContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: fit-content;
  height: 36px;
  padding: 8px;
  background-color: #fff;
  opacity: 0.85;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
  .label {
    color: blue;
  }
`;
