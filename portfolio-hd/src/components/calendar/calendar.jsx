import React from "react";
import GitHubCalendar from "react-github-calendar"; // https://grubersjoe.github.io/react-github-calendar/
import PageContainer from "../page-container/page-container";

export default function calendar() {
  return (
    <PageContainer>
      <GitHubCalendar
        username="HernandezDorian"
        colorScheme="dark"
        weekStart="1"
        labels={{
          totalCount: "{{count}} commits publiques l'année passée",
          legend: {
            less: "Peu",
            more: "Beaucoup",
          },
          months: [
            "Jan",
            "Fev",
            "Mar",
            "Avr",
            "Mai",
            "Jun",
            "Jul",
            "Aou",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        }}
      />
    </PageContainer>
  );
}
