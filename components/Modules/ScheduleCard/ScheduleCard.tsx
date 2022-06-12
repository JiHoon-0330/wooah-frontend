import { CSSProperties } from "react";
import getBackgroundColorClass, {
  Name,
} from "../../../services/style/backgroundColor";
import { Schedule } from "../../../types/schedule/schedule";
import { getScheduleStatus } from "../../Templates/Schedule/Schedule";
import styles from "./ScheduleCard.module.css";

const DAY = ["일", "월", "화", "수", "목", "금", "토"] as const;

const OPACITY = "75";

const CATEGORY_COLOR: Record<string, string> = {
  기타: "#676a76",
  "공연/행사": "#7d66a0",
  라디오: "#6ab4ae",
  방송: "#f1b94f",
  생일: "#e67873",
};

const numberFormat = (value: number) => {
  return value < 10 ? `0${value}` : value;
};

const getTime = (time: number) => {
  const newDate = new Date(time);
  const h = newDate.getHours();
  const m = newDate.getMinutes();
  return `${numberFormat(h)}:${numberFormat(m)}`;
};

const getDate = (time: number, status: string) => {
  const nowDate = new Date();
  const newDate = new Date(time);
  const y = newDate.getFullYear();
  const m = newDate.getMonth() + 1;
  const d = newDate.getDate();
  const day = newDate.getDay();
  const newDate2 = new Date(
    `${numberFormat(y)}.${numberFormat(m)}.${numberFormat(d)}`,
  );

  const DDay = Math.ceil(
    (newDate2.getTime() - nowDate.getTime()) / (60 * 60 * 24 * 1000),
  );

  return `${
    status ? status + " " : `${DDay >= 0 ? `D-${DDay || "Day"} ` : ""}`
  }${numberFormat(y)}.${numberFormat(m)}.${numberFormat(d)} ${DAY[day]}요일`;
};

const getMember = (description: string) => {
  if (!description) return [];
  return description.replace(/,/g, " ").split(" ");
};

interface Props {
  schedule: Schedule[] | undefined;
}

const ScheduleCard = ({ schedule }: Props) => {
  if (!schedule?.length) return null;

  return (
    <>
      {schedule.map(
        ({ category, description, endTime, scheduleId, startTime, title }) => {
          const status = getScheduleStatus(startTime, endTime);
          const date = getDate(startTime, status);
          const sTime = getTime(startTime);
          const eTime = endTime ? getTime(endTime) : null;
          const members = getMember(description);
          const style: CSSProperties = {
            backgroundColor: CATEGORY_COLOR[category] + OPACITY,
          };

          return (
            <div className={styles.wrapper}>
              <div key={scheduleId} style={style} className={styles.card}>
                <div className={styles.title}>
                  <span>[{category}]</span>
                  <span>{title}</span>
                </div>
                <div className={styles.date}>{`${date} ${sTime} ~ ${
                  eTime ?? ""
                }`}</div>
              </div>
              <div className={styles.memberWrapper}>
                {members.map((member) => (
                  <div
                    key={member}
                    className={`${styles.member} ${getBackgroundColorClass(
                      member as Name,
                    )}`}
                  >
                    {member}
                  </div>
                ))}
              </div>
            </div>
          );
        },
      )}
    </>
  );
};

export default ScheduleCard;
