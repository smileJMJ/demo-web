"use client";

import dynamic from "next/dynamic";
import DemoItem from "@components/DemoItem";
import Code from "@components/Code";

const ReactFoldCalendar = dynamic(
  () => import("@components/ReactFoldCalendar"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <DemoItem title="기본 사용법" description="기본적인 사용법입니다.">
          <ReactFoldCalendar />
          <Code>
            {`import ReactFoldCalendarModule from "react-fold-calendar/module";
import "react-fold-calendar/css";

const ReactFoldCalendar = ({ options = {} }: { options?: any }) => {
  return <ReactFoldCalendarModule options={options} />;
};

export default ReactFoldCalendar;`}
          </Code>
        </DemoItem>
        <DemoItem title="옵션 사용법" description="옵션을 추가한 사용법입니다.">
          <ReactFoldCalendar
            options={{
              useInitWeekType: true,
              useShowContent: true,
              data: [
                {
                  startDate: new Date()?.getTime(),
                  endDate: new Date()?.getTime() + 1000 * 60 * 60 * 24,
                  period: 1,
                  title: "Regular Event",
                  description: "This is a regular event.",
                },
              ],
            }}
          />
          <Code>
            {`<ReactFoldCalendar
            options={{
              useInitWeekType: true,
              useShowContent: true,
              data: [
                {
                  startDate: new Date()?.getTime(),
                  endDate: new Date()?.getTime() + 1000 * 60 * 60 * 24,
                  period: 1,
                  title: "Regular Event",
                  description: "This is a regular event.",
                },
              ],
            }}
          />`}
          </Code>
        </DemoItem>
      </main>
    </div>
  );
}
