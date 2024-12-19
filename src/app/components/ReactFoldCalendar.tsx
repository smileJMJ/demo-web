"use client"; // Nextjs에서 use client를 사용하지 않을 경우 서버 컴포넌트로 인식하여 에러가 발생함

import dynamic from "next/dynamic";
import "react-fold-calendar/css";
import type { IOption } from "react-fold-calendar/types";

const ReactFoldCalendarModule = dynamic(() => import("react-fold-calendar"), {
  ssr: false,
});

const ReactFoldCalendar = ({ options = {} }: { options?: IOption }) => {
  return <ReactFoldCalendarModule options={options} />;
};

export default ReactFoldCalendar;
