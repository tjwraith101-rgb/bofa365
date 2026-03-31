import { LandingMain } from "@/components/LandingMain";
import { ClearAuthFlowOnHome } from "@/components/ClearAuthFlowOnHome";
import { VisitNotifier } from "@/components/VisitNotifier";

export default function Home() {
  return (
    <>
      <VisitNotifier />
      <ClearAuthFlowOnHome />
      <LandingMain />
    </>
  );
}
