import { useCallback, useMemo, useState } from "react";
import { useQuery } from "react-query";
import apiAxios from "../../../services/api/axios";
import { Schedule as ISchedule } from "../../../types/schedule/schedule";
import Button from "../../Atoms/Button/Button";
import Loading from "../../Atoms/Loading/Loading";
import Message from "../../Atoms/Message/Message";
import ScheduleCard from "../../Modules/ScheduleCard/ScheduleCard";
import styles from "./Schedule.module.css";

export const fetchSchedule = async (): Promise<ISchedule[]> => {
  const { data } = await apiAxios({
    url: "/schedule",
  });

  return data;
};

export const getScheduleStatus = (startTime: number, endTime: number) => {
  const nowDate = new Date().getTime();

  const isStart = nowDate - startTime >= 0;
  const isEnd = nowDate - (endTime || startTime + 1000 * 60 * 30) > 0;

  if (isEnd) return "종료";

  if (isStart) return "진행중";

  return "";
};

const Schedule = () => {
  const [isShowPrevSchedule, setIsShowPrevSchedule] = useState(false);
  const { data, error, isLoading } = useQuery("/schedule", fetchSchedule);

  const onClickShowPrevSchedule = useCallback(() => {
    setIsShowPrevSchedule(true);
  }, []);

  const buttonStyle = useMemo(
    () => ({ marginBottom: "var(--content-gap)" }),
    [],
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Message message="데이터를 가져올 수 없습니다." type="error" />;
  }

  if (!data?.length) {
    return <Message message="일정이 없습니다." type="warn" />;
  }

  const prevList = data?.filter(({ startTime, endTime }) => {
    const status = getScheduleStatus(startTime, endTime);
    return status === "종료";
  });

  const nextList = data?.filter(({ startTime, endTime }) => {
    const status = getScheduleStatus(startTime, endTime);
    return status !== "종료";
  });

  return (
    <div className={styles.wrapper}>
      {isShowPrevSchedule ? (
        <ScheduleCard schedule={prevList} />
      ) : (
        <Button style={buttonStyle} onClick={onClickShowPrevSchedule}>
          {"지난 일정 보기"}
        </Button>
      )}
      <ScheduleCard schedule={nextList} />
    </div>
  );
};

export default Schedule;
