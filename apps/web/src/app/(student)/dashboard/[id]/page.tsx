import dynamic from "next/dynamic";
import { Suspense } from "react";

const DetailStatistic = dynamic(() =>
  import("@/components/student/detail-statistic").then(
    (comp) => comp.DetailStatistic
  )
);

export default function DetailStudentStatisticPage() {
  return (
    <div>
      <div>
        <Suspense>
          <DetailStatistic />
        </Suspense>
      </div>
    </div>
  );
}
