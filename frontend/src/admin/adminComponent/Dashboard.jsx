import { Box, Center, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Chart from "react-apexcharts";

const Dashboard = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });
  const [donutChart, setDonutChart] = useState({
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ["A", "B", "C", "D", "E"],
  });

  return (
    <>
      <Box
        w="100%"
        h="30%"
        paddingTop="10px"
        display="grid"
        gridTemplateColumns={{
          lg: "repeat(3,1fr)",
          md: "repeat(3,1fr)",
          sm: "repeat(2,1fr)",
          base: "repeat(1,1fr)",
        }}
        gap="20px"
      >
        <Box
          h="50%"
          borderRadius="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="tomato"
          color="white"
        >
          <Text as="b" fontSize={20}>
            Products : 2000
          </Text>
        </Box>
        <Box
          h="50%"
          borderRadius="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="tomato"
          color="white"
        >
          <Text as="b" fontSize={20}>
            Users : 6000
          </Text>
        </Box>
        <Box
          h="50%"
          borderRadius="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="tomato"
          color="white"
        >
          <Text as="b" fontSize={20}>
            Orders : 500
          </Text>
        </Box>
        <Box
          h="50%"
          borderRadius="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="tomato"
          color="white"
        >
          <Text as="b" fontSize={20}>
            Feedback: 500
          </Text>
        </Box>
        <Box
          h="50%"
          borderRadius="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="tomato"
          color="white"
        >
          <Text as="b" fontSize={20}>
            Dispatched : 200
          </Text>
        </Box>
      </Box>

      <Box
        w="100%"
        h="60%"
        display="flex"
        flexDirection={{ lg: "row", md: "column", base: "column" }}
        gap="100px"
      >
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          width="300"
        />

        <Chart
          options={donutChart.options}
          series={donutChart.series}
          type="donut"
          width="300"
        />
      </Box>
    </>
  );
};

export default Dashboard;
