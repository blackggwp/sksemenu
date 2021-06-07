import React, { useEffect, useState } from "react";
import { groupCount, useApiRequest } from "../../helpers/utils";
import BarChart from "../../components/Charts/BarChart";
import PieChart from "../../components/Charts/PieChart";
import DataGridDevExtreme from "../../components/DataGridDevExtreme";
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import { ResponsiveContainer } from "recharts";
// import { GLOBAL } from "../../config";
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
  // const { data, isLoading, error } = useApiRequest(`${GLOBAL.API_URL}feedback`);
  const { data, isLoading, error } = useApiRequest(
    `https://192.168.0.249/api/feedback`
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
  }, [data]);

  if (isLoading) return <p>...Loading</p>;
  if (error) return <p>error :(</p>;

  return (
    <Container>
      <Box margin={3}>
        <Typography variant="h4">Feedback Report</Typography>
      </Box>
      {feedbackType.series && issueType.series && (
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
                <BarChart data={issueType.series} labels={issueType.labels} />
              </Paper>
            </ResponsiveContainer>
          </Grid>
          <Grid item xs={12} md={12}>
            <ResponsiveContainer width="100%" height={300}>
              <Paper>
                <DataGridDevExtreme data={data} />
              </Paper>
            </ResponsiveContainer>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Report;
