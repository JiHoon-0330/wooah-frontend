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
        data?.pages?.map((page, pageIndex) => {
          return (
            <Fragment key={page.cursor}>
              {page?.data?.length &&
                page?.data?.map((value, index) => {
                  const isLast = page.data.length === index + 1;

                  if ("0" in value) {
                    return (
                      <div
                        className={styles.post}
                        key={page.cursor + pageIndex + index}
                      >
                        {Object.values(value).map((v, i) => {
                          if (typeof v === "string") return null;

                          return (
                            <div
                              ref={isLast ? ref : null}
                              key={v.id + pageIndex + index}
                            >
                              <TwitterPost key={v.id + i} {...v} />
                              {!!v?.quoted && <TwitterPost {...v.quoted} />}
                            </div>
                          );
                        })}
                      </div>
                    );
                  }

                  return (
                    <div
                      ref={isLast ? ref : null}
                      key={value.id + pageIndex + index}
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
