import React from "react";
import { Button, Container, SGVSearch } from "./style";

const Search = () => {
  return (
    <>
      <Container>
        <form>
          <div className="input-group">
            <label>
              <input type="text" placeholder="Поиск по названию товара" />
              <Button type="button">
                <SGVSearch />
              </Button>
            </label>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Search;
