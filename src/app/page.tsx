"use client";

import DemoItem from "@components/DemoItem";
import Code from "@components/Code";
import ReactFoldCalendar from "@components/ReactFoldCalendar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <DemoItem
          title="Basic usage"
          description="
This is basic usage. You can configure react-fold-calendar without any additional options."
        >
          <ReactFoldCalendar />
          <Code>
            {`import ReactFoldCalendar from "react-fold-calendar";
import "react-fold-calendar/css";

const App = () => {
  return <ReactFoldCalendar />;
};`}
          </Code>
        </DemoItem>
        <DemoItem
          title="Option usage"
          description="This is a usage with additional options."
        >
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
