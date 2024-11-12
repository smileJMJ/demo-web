"use client"; // Nextjs에서 use client를 사용하지 않을 경우 서버 컴포넌트로 인식하여 에러가 발생함

import ReactFoldCalendarModule from "react-fold-calendar/module";
import "react-fold-calendar/css";

const ReactFoldCalendar = ({ options = {} }: { options?: any }) => {
  return <ReactFoldCalendarModule options={options} />;
};

export default ReactFoldCalendar;
