import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import * as Styles from './styles';

interface DatePickerInputProps {
  setShowDatePicker: React.Dispatch<React.SetStateAction<boolean>>;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  showDatePicker: Boolean;
  date: Date;
  placeholder: String;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({
  setShowDatePicker,
  setDate,
  showDatePicker,
  date,
  placeholder,
}) => {
  const handleDatePickerShow = React.useCallback(() => {
    setShowDatePicker((state) => !state);
  }, [setShowDatePicker]);

  const handleDateFormater = React.useCallback(
    ({ nativeEvent }) => {
      handleDatePickerShow();
      setDate(new Date(nativeEvent.timestamp));
    },
    [handleDatePickerShow, setDate],
  );

  return (
    <>
      <Styles.DateInput onPress={handleDatePickerShow}>
        <Styles.TextDateInput>
          {placeholder}: {date.toLocaleDateString()}
        </Styles.TextDateInput>
      </Styles.DateInput>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateFormater}
        />
      )}
    </>
  );
};

export default DatePickerInput;