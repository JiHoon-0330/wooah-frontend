import { Fragment } from "react";
import useCustomQuery from "../../../hooks/useCustomQuery";
import useLastPostObserver from "../../../hooks/useLastPostObserver";
import ReelsPost from "../../Modules/ReelsPost/ReelsPost";
import styles from "./Reels.module.css";

const Reels = () => {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useCustomQuery({
    api: "GET REELS_POST /instagram/reels",
    options: {
      getNextPageParam: (lastPage) =>
        lastPage.more_available ? lastPage.max_id : false,
    },
  });

  const { ref } = useLastPostObserver(
    isLoading,
    data?.pageParams as any[],
    hasNextPage!,
    fetchNextPage,
  );

  const isCurLoading = isLoading || isFetchingNextPage;

  return (
    <>
      {!!data?.pages?.length &&
        data?.pages?.map((page) => (
          <Fragment>
            {page?.data?.length &&
              page?.data?.map((value, index) => {
                const isLast = page.data.length === index + 1;
                return (
                  <div
                    className={styles.post}
                    ref={isLast ? ref : null}
                    key={value.createdAt}
                  >
                    <ReelsPost {...value} />
                  </div>
                );
              })}
          </Fragment>
        ))}
    </>
  );
};

export default Reels;
