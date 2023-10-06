import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  SliderMark,
} from '@chakra-ui/react';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const SliderC = ({ setMonthValue }) => {
  const [sliderValue, setSliderValue] = useState(0);

  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'md',
  };

  return (
    <Box w="100%" px="170px">
      <Slider
        aria-label="slider-ex-6"
        onChange={val => {
          setSliderValue(val);

          if (val === 0) setMonthValue('monthly');
          if (val === 50) setMonthValue('biyearly');
          if (val === 100) setMonthValue('yearly');
        }}
        defaultValue={sliderValue}
        min={0}
        max={100}
        step={50}
      >
        <SliderMark value={1} {...labelStyles}>
          1
        </SliderMark>
        <SliderMark value={50.5} {...labelStyles}>
          6
        </SliderMark>
        <SliderMark value={100.5} {...labelStyles}>
          12
        </SliderMark>

        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};

export default SliderC;
