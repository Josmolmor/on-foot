import { FC, useEffect, useState } from "react";
import Props from "./types";
import { Container, Filters, FilterSelect, ProductGallery } from "./styles";
import useSWR from "swr";
import Loading from "@/components/Loading";
import { useRouter } from "next/router";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: FC<Props> = ({ className }) => {
  const { query, replace } = useRouter();
  const [pageSelected, setPageSelected] = useState(0);
  const [brandSelected, setBrandSelected] = useState<string | undefined>(
    undefined
  );
  const [orderBy, setOrderBy] = useState<string>("");
  const { data, error, isValidating } = useSWR(
    `https://stockx.com/api/browse?productCategory=sneakers${
      brandSelected && brandSelected !== "" ? `&_tags=${brandSelected}` : ""
    }${
      orderBy && orderBy !== "" ? `&sort=${orderBy}&order=DESC` : ""
    }&currency=EUR${pageSelected !== 0 ? `&page=${pageSelected}` : ""}`,
    fetcher
  );
  const { Products, Pagination } = data ?? {};

  const [paginationLastPage, setPaginationLastPage] = useState(0);

  useEffect(() => {
    const paginationParams = new URLSearchParams(Pagination?.lastPage);
    setPaginationLastPage(Number(paginationParams.get("page")));
  }, [Products]);

  console.log(paginationLastPage);

  useEffect(() => setPageSelected(Number(query.page)), [query]);

  console.log(Products);

  return (
    <Container>
      <Filters>
        <FilterSelect
          label="Brand"
          onChange={(e) => {
            replace({
              search: "",
            });
            setBrandSelected(e.target.value);
          }}
        >
          <option value="">Sneakers</option>
          <option value="nike">Nike</option>
          <option value="adidas">Adidas</option>
          <option value="air jordan">Jordan</option>
          <option value="reebok">Reebok</option>
          <option value="new balance">New Balance</option>
          <option value="other brands">Other brands</option>
          <option value="luxury brands">Luxury brands</option>
          <option value="collections-filter">Collections</option>
        </FilterSelect>
        <FilterSelect
          label="Sort by"
          onChange={(e) => setOrderBy(e.target.value)}
        >
          <option value="">Featured</option>
          <option value="most-active">Most popular</option>
          <option value="release_date">Release date</option>
        </FilterSelect>
      </Filters>
      {isValidating ? (
        <Loading />
      ) : (
        <ProductGallery
          className={className}
          products={Products}
          pagination={paginationLastPage}
        />
      )}
      {error && <h2>An error occurred</h2>}
    </Container>
  );
};

export default Home;
