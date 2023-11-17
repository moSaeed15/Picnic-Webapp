import { Box, Button, Flex, Heading, Select, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { Calendar, DateObject } from 'react-multi-date-picker';
import { useToastReact } from '../ToastProvider';
import { json } from 'react-router-dom';

const Manage = () => {
  const cookies = new Cookies();
  const token = cookies.get('token');
  const [units, setUnits] = useState();
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedDates, setSelectedDates] = useState([]);
  const [finalDates, setFinalDates] = useState([]);
  const showToast = useToastReact();

  const handleChange = value => {
    const newDates = [];
    value.forEach(date => {
      if (date.length === 2) {
        let startDate = new Date(
          date[0].year,
          date[0].month.number - 1,
          date[0].day + 1
        );
        let endDate = new Date(
          date[1].year,
          date[1].month.number - 1,
          date[1].day + 1
        );
        if (startDate > endDate) {
          // If startDate is after endDate, swap them
          [startDate, endDate] = [endDate, startDate];
        }
        newDates.push([startDate.toISOString(), endDate.toISOString()]);
      }
    });
    setFinalDates(newDates);
    setSelectedDates(value);
  };

  const handleSendDates = async () => {
    if (selectedValue === '') {
      showToast({
        description: `Select a Unit from the dropdown`,
        title: 'Select a unit',
        status: 'error',
      });
      return;
    }
    if (finalDates.length === 0) {
      showToast({
        description: `Choose a date to book`,
        title: 'Choose a date',
        status: 'error',
      });
      return;
    }
    const DatesToBeSent = finalDates.map(date => {
      return {
        recurring_times: 0,
        interval_days: 0,
        start_date: date[0],
        end_date: date[1],
      };
    });
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BASE_API_PATH
        }/api/v1/owner/units/${selectedValue}/blocked_dates`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(DatesToBeSent),
        }
      );
      if (response.status === 200)
        showToast({
          description: `Dates booked successfully`,
          title: 'Dates booked success',
          status: 'success',
        });
    } catch (error) {
      console.error('Error sending dates:', error);
    }
  };

  const handleSelectChange = event => {
    setFinalDates([]);
    setSelectedDates([]);
    const selectedUnitDates = units.find(
      unit => unit._id === event.target.value
    ).blocked_list;
    const dates = selectedUnitDates.map(date => {
      return [new DateObject(date.start_date), new DateObject(date.end_date)];
    });
    setSelectedDates(prevDates => {
      return [...prevDates, ...dates];
    });
    setSelectedValue(event.target.value);
  };

  const getData = async () => {
    const response = await fetch(
      `${
        import.meta.env.VITE_BASE_API_PATH
      }/api/v1/owner/units/all?page=1&limit=100`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const ownerUnit = await response.json();
    setUnits(
      ownerUnit.data.filter(
        unit => unit.approval_logs[0].approval_status === 'approved'
      )
    );
  };
  useEffect(() => {
    console.log(selectedDates);
  }, [selectedDates]);
  useEffect(() => {
    getData();
  }, [location.pathname, selectedValue]);

  return (
    <Box className=" mt-12 rounded-xl flex flex-col mx-24 ">
      <Heading className="text-secondaryColor font-bold text-2xl mb-5">
        Manage Your units
      </Heading>
      {units && (
        <Select
          placeholder="Select Unit"
          w="50%"
          onChange={handleSelectChange}
          value={selectedValue}
          mb="20px"
        >
          {units.map(unit => {
            return (
              <option key={unit._id} value={unit._id}>
                {unit.name}
              </option>
            );
          })}
        </Select>
      )}

      <Flex gap="50px">
        <Box>
          <Heading size="md" className="text-secondaryColor mb-3">
            Choose new booked dates:
          </Heading>
          <Text fontSize="12px" opacity="0.5" mb="5px">
            To select a single day double click
          </Text>
          <Calendar
            multiple
            range
            onChange={handleChange}
            value={selectedDates}
          />
        </Box>
      </Flex>
      <Button
        onClick={handleSendDates}
        width="50%"
        colorScheme="teal"
        mt="20px"
      >
        Send Dates
      </Button>
    </Box>
  );
};

export default Manage;
