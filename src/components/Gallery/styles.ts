import styled from "styled-components";
import Pagination from "@/components/Pagination";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11.875rem, 1fr));
  grid-gap: 2rem;
`;

export const ProductPagination = styled(Pagination)``;
