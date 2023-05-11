import { Fragment } from "react";
import useCustomQuery from "../../../hooks/useCustomQuery";
import useLastPostObserver from "../../../hooks/useLastPostObserver";
import Loading from "../../Atoms/Loading/Loading";
import Message from "../../Atoms/Message/Message";
import TwitterPost from "../../Modules/TwitterPost/TwitterPost";
import styles from "./Twitter.module.css";

const Twitter = () => {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useCustomQuery({
    api: "GET TWITTER_POST /twitter",
    options: {
      getNextPageParam: (lastPage) => lastPage.cursor ?? false,
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
        data?.pages?.map((page) => {
          return (
            <Fragment key={page.cursor}>
              {page?.data?.length &&
                page?.data?.map((value, index) => {
                  const isLast = page.data.length === index + 1;

                  if ("0" in value) {
                    return (
                      <div
                        ref={isLast ? ref : null}
                        key={value.sortIndex + index}
                        className={styles.post}
                      >
                        {Object.values(value).map((v, i) => {
                          if (typeof v === "string") return null;

                          return (
                            <>
                              <TwitterPost
                                key={v.sortIndex + i}
                                {...v}
                                sortIndex={`${value}-${i < 10 ? `0${i}` : i}`}
                              />
                              {!!v?.quoted && <TwitterPost {...v.quoted} />}
                            </>
                          );
                        })}
                      </div>
                    );
                  }

                  return (
                    <div
                      ref={isLast ? ref : null}
                      key={value.sortIndex}
                      className={styles.post}
                    >
                      <TwitterPost {...value} />
                      {!!value?.quoted && <TwitterPost {...value.quoted} />}
                    </div>
                  );
                })}
            </Fragment>
          );
        })}
      {isCurLoading && <Loading />}
      {!isCurLoading && error && (
        <Message type="warn" message="데이터를 가져오지 못했습니다." />
      )}
      {!isCurLoading && !error && !hasNextPage && (
        <Message type="warn" message="데이터가 없습니다." />
      )}
    </>
  );
};

export default Twitter;
