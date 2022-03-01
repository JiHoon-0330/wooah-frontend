import { Fragment } from "react";
import useCustomQuery from "../../../hooks/useCustomQuery";
import useLastPostObserver from "../../../hooks/useLastPostObserver";
import getArtistNameByWeverseId from "../../../services/artist/artistName";
import Loading from "../../Atoms/Loading/Loading";
import Message from "../../Atoms/Message/Message";
import WeversePost from "../../Modules/WeversePost/WeversePost";
import styles from "./Weverse.module.css";

const Weverse = () => {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useCustomQuery({
    api: "GET WEVERSE_POST /weverse",
  });

  const { ref } = useLastPostObserver(
    isLoading,
    data?.pageParams as any[],
    hasNextPage!,
    fetchNextPage,
  );

  const list = new Set<string>();

  const isCurLoading = isLoading || isFetchingNextPage;

  return (
    <>
      {!!data?.pages?.length &&
        data?.pages?.map((page) => (
          <Fragment key={page.lastId}>
            {page?.data?.length &&
              page?.data?.map(({ artistId, contentsId, ...props }, index) => {
                const isLast = page.data.length === index + 1;
                if (list.has(contentsId)) {
                  if (!isLast) return null;
                  return (
                    <div
                      className={`${styles.empty} ${styles.post}`}
                      key={props.createdAt}
                      ref={ref}
                    />
                  );
                }
                list.add(contentsId);
                const artistName = getArtistNameByWeverseId(artistId);
                return (
                  <div
                    className={styles.post}
                    key={props.createdAt}
                    ref={isLast ? ref : null}
                  >
                    <WeversePost
                      artistName={artistName}
                      {...{ ...props, artistId, contentsId }}
                    />
                  </div>
                );
              })}
          </Fragment>
        ))}
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

export default Weverse;
