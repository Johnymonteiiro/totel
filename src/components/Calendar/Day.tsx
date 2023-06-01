'use client'

import { useState } from 'react';
import { DatePicker,DatePickerProps} from 'antd';
import  { Dayjs } from 'dayjs';
import styles from "./styles.module.scss"

interface CalendarProps {
  type:string;
}
export function Day({type}: CalendarProps) {
  const [value, SetValeu] = useState<Dayjs | null>();
  

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
     SetValeu(date)
  };

    return(
     <div className={styles.calendar_container}>
      <p>{type}</p>
       <DatePicker
       placement={'bottomRight'} 
       format="DD/MM/YYYY"
       value={value}
       onChange={onChange}
       placeholder={'DD/MM/YYYY'}
       allowClear={false}
       showToday={false}
       className={styles.calendar}
      />
     </div>
    )
}