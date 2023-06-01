'use client'

import { useState } from 'react';
import { TimePicker,DatePickerProps} from 'antd';
import { Dayjs } from 'dayjs';
import styles from "./styles.module.scss"

interface CalendarProps {
  type:string;
}
export function Hour({type}: CalendarProps) {
  const [value, SetValeu] = useState<Dayjs | null>();

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
     SetValeu(date)
  };

    return(
     <div className={styles.calendar_container}>
      <p>{type}</p>
       <TimePicker
       placement={'bottomRight'} 
       format="hh:mm"
       value={value}
       onChange={onChange}
       placeholder={'12:00'}
       allowClear={false}
       showNow={false}
       className={styles.calendar}
      />
     </div>
    )
}