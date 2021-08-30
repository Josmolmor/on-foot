import styled from "styled-components";
import Select from "@/components/Select";
import Gallery from "@/components/Gallery";

export const Container = styled.div``;

export const Filters = styled.div`
  display: flex;
  > * + * {
    margin-left: 1rem;
  }
`;

export const FilterSelect = styled(Select)``;

export const ProductGallery = styled(Gallery)`
  margin-top: 1.5rem;
`;
