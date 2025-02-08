import dynamic from "next/dynamic";
import { Suspense } from "react";

const DetailStudentStatistic = dynamic(() =>
  import("@/components/admin/detail-student-statistic").then(
    (comp) => comp.DetailStudentStatistic
  )
);

export default function DetailLStudentStatisticPage() {
  return (
    <div>
      <div>
        <Suspense>
          <DetailStudentStatistic />
        </Suspense>
      </div>
    </div>
  );
}
