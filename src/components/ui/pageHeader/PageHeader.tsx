import { FC } from "react";

import PageHeading from "./PageHeading";

const PageHeader: FC = () => {
  return (
    <div className="sticky top-0 z-40 pt-2 backdrop-blur-md">
      <section className="flex w-full items-center justify-between rounded-l-xl bg-white/80 px-8 py-3">
        <PageHeading />
      </section>
    </div>
  );
};

export default PageHeader;
