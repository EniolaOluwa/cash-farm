import { Box } from "@chakra-ui/react";
import Nav from "../components/Nav";
import MobileFilter from "../components/MobileFilter";
import InvestmentItem from "../components/InvestmentItem";

const investments = [
  {
    id: 1,
    star: "4.8",
    interest: "30%",
    duration: "6 Months",
    minimum: "1.7 Million",
    company: "Balayo Global Ventures",
    investment: "Balayo Autos",
    company_logo_url: null,
    bookmarked: false,
  },
  {
    id: 2,
    star: "4.5",
    interest: "30%",
    duration: "6 Months",
    minimum: "500K",
    company: "Balayo Global Ventures",
    investment: "Balayo Real Estates",
    company_logo_url: null,
    bookmarked: false,
  },
  {
    id: 3,
    star: "3.5",
    interest: "40%",
    duration: "Quater",
    minimum: "100K",
    company: "Balayo Global Ventures",
    investment: "Balayo Finance",
    company_logo_url: null,
    bookmarked: true,
  },
  {
    id: 4,
    star: "3.5",
    interest: "40%",
    duration: "Quater",
    minimum: "100K",
    company: "Balayo Global Ventures",
    investment: "Balayo Finance",
    company_logo_url: null,
    bookmarked: true,
  },
];

export default function Home() {
  return (
    <Box>
      <Nav />
      <MobileFilter />
      <Box>
        {investments.map((investment) => (
          <InvestmentItem key={investment.id} investment={investment} />
        ))}
      </Box>
    </Box>
  );
}
