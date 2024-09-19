"use client";
import { title } from "@/components/primitives";
import TestCard from "@/components/testCard";
import courses from "@/contants/course";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>Courses</h1>
      <div className="flex my-4 flex-wrap items-center justify-center">
        {courses.map((item, _) => {
          return (
            <TestCard
              key={item.id}
              desc={item.description}
              highlights={item.highlights}
              id={item.id}
              imgUrl={item.imgUrl}
              small={item.small}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
}
