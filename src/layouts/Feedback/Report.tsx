import React, { useEffect, useState } from "react";
import { groupCount, useApiRequest } from "../../helpers/utils";
import BarChart from "../../components/Charts/BarChart";
import PieChart from "../../components/Charts/PieChart";
import DataGridDevExtreme from "../../components/DataGridDevExtreme";
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import { ResponsiveContainer } from "recharts";
import ButtonAppBar from "../../components/Navbars/ButtonAppBar";
import Loading from "../../components/Loading";
import { GLOBAL } from "../../config";
import "../../assets/css/feedback.css";

interface IChartProps {
  series: undefined | never[];
  labels: undefined | string[];
}

const Report = () => {
  const [issueType, setIssueType] = useState<IChartProps>({
    series: undefined,
    labels: undefined,
  });
  const [feedbackType, setFeedbackType] = useState<IChartProps>({
    series: undefined,
    labels: undefined,
  });
  const [loadProgress, setLoadProgress] = useState(0);
  const { data, isLoading, error, percentage } = useApiRequest(
    `${GLOBAL.API_URL}feedback`
  );

  useEffect(() => {
    async function groupData() {
      const feedbackTypeObj = groupCount(data, "feedbackType");
      const issueTypeObj = groupCount(data, "issueType");
      setFeedbackType({
        series: Object.values(feedbackTypeObj),
        labels: Object.keys(feedbackTypeObj),
      });
      setIssueType({
        series: Object.values(issueTypeObj),
        labels: Object.keys(issueTypeObj),
      });
    }
    if (data !== undefined) groupData();
    setLoadProgress(percentage);
  }, [data, percentage]);

  return (
    <>
      <ButtonAppBar label="Feedback Report" loadProgress={loadProgress} />
      {/* <div className="my-5 pb-5 feedbackPage"> */}
      <div className="feedbackPage">
        {isLoading && <Loading />}
        {error && (
          <Box margin={3}>
            <Typography>
              Something went wrong... Please Connect VPN or contact IT.
            </Typography>
          </Box>
        )}
        {feedbackType.series && issueType.series && (
          <Container>
            <Box margin={3}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <ResponsiveContainer width="100%" height={300}>
                    <Paper>
                      <PieChart
                        data={feedbackType.series}
                        labels={feedbackType.labels}
                      />
                    </Paper>
                  </ResponsiveContainer>
                </Grid>
                <Grid item xs={12} md={6}>
                  <ResponsiveContainer width="100%" height={300}>
                    <Paper>
                      <BarChart
                        data={issueType.series}
                        labels={issueType.labels}
                      />
                    </Paper>
                  </ResponsiveContainer>
                </Grid>
                <Grid item xs={12} md={12}>
                  <ResponsiveContainer width="100%">
                    <Paper>
                      {!isLoading && !error && (
                        <DataGridDevExtreme data={data} />
                      )}
                    </Paper>
                  </ResponsiveContainer>
                </Grid>
              </Grid>
            </Box>
          </Container>
        )}
      </div>
    </>
  );
};

export default Report;
